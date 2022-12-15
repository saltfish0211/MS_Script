

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/RewardConfigTest.js");


var isGMSkipVerify = false;
var gmVerifyResult = !isGMSkipVerify || !cm.getPlayer().isAdmin();
var isPlayerSkipVerify = true;
var selectionNode, needVerify;
//使用指令登記玩家是否可以領取 (linebot也支援此指令)
//指令如下:
//!事前獎勵 名稱 獎勵名稱(下面ㄉlog)  

var approveReward = [];
var deniedReward = [];

var selectedReward = null;
var rewardMode = 0; // 1是正常領取模式，2是全部領取模式

function start() {
    status = -1;
    approveReward = [];
    deniedReward = [];
    for (var i = 0; i < rewardArray.length; i++) {
        var reward = rewardArray[i];
        if(reward == null){
            continue;
        }
        var rewardResult = isAllowReward(reward);
        //cm.getPlayer().dropMessage(6, "rewardName:"+ rewardResult.reward.name + " canTake: " + rewardResult.canTake)
        if (rewardResult.canTake) {
            approveReward.push(rewardResult);
        }
        else {
            deniedReward.push(rewardResult);
        }
    }
    action(1, 0, 0);
    
}


function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        status = 0;
    }
    else if (mode == 1)
        status++;
    else if (mode == 0) {
        status--;
    }
    else {
        cm.dispose();
    }

    if (status == 0) {
        var text = Logo + "此為獎勵系統，請選擇想領取的獎勵。\r\n";
        if (isGMSkipVerify) {
            text += alertText("GM忽視領取條件模式已開啟\r\n");
        }
        if (isPlayerSkipVerify) {
            text += alertText("玩家忽視領取條件模式已開啟\r\n");
        }
        text += maskListNode(10000, "#e#r領取全部#k#n");
        for (var i = 0; i < approveReward.length; i++) {
            text += maskListNode(i, maskRewardTitle(approveReward[i], true));
            text += maskRewardRequirement(approveReward[i])
        }
        text += maskListNode(20000, "#e#b觀看不能領取的獎勵#k#n");
        cm.sendNext(text);
    }
    else if (status == 1) {
        switch (selection) {
            case 10000:
                rewardMode = 2; //全部領取模式
                text = "#r#e確定要領取這麼多獎勵嗎？如果中途背包不夠了會自己停下來。\r\n#b";
                for (var i = 0; i < approveReward.length; i++) {
                    text += maskRewardTitle(approveReward[i], true) + "\r\n";
                }
                
                cm.sendYesNo(text);
                break;
            case 20000:
                rewardMode = 3; //觀看不能領取的獎勵
                text = "以下是不能領取的獎勵，可以確認相關的領取條件。\r\n";
                for (var i = 0; i < deniedReward.length; i++) {
                    text += maskListNode(i, maskRewardTitle(deniedReward[i], false));
                    text += maskRewardRequirement(deniedReward[i])
                }
                cm.sendNext(text);
                break;
            default:
                rewardMode = 1; //正常領取模式
                selectedReward = approveReward[selection];
                var text = "#b#e確定要領取獎勵嗎？\r\n" + alertText("此區獎勵每個帳號限領一次，領錯不得以任何理由要求補發。") + "\r\n" + alertText("請確認包包還有空間，被吃不補償。") + "\r\n";
                for (var i = 0; i < selectedReward.reward.items.length; i++) {
                    var item = selectedReward.reward.items[i];
                    text += maskItem(item.id) + "x" + item.count + "\r\n";
                    text += maskItemDescription(item);
                }
                cm.sendYesNo(text);
                break;
        }
    }
    else if (status == 2){
        switch(rewardMode){
            case 1:
                var text = "#r#e" + doItemReward(selectedReward.reward).text;
                FileoutputUtil.logToFile("logs/獎勵系統.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 領取獎勵:" + selectedReward.reward.name + "\r\n");
                cm.sendOk(text);
                cm.dispose();
                break;
            case 2:
                var text = "#r#e";
                for (var i = 0; i < approveReward.length; i++) {
                    var result = doItemReward(approveReward[i].reward);
                    text += result.text;
                    FileoutputUtil.logToFile("logs/獎勵系統.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 領取獎勵:" + approveReward[i].reward.name + "\r\n");
                    if(!result.success){
                        break;
                    }
                }
                cm.sendOk(text);
                cm.dispose();
                break;
            case 3:
                selectedReward = deniedReward[selection];
                var text = "#b#e不可領取的獎勵，可確認獎勵內容#k\r\n";
                for (var i = 0; i < selectedReward.reward.items.length; i++) {
                    var item = selectedReward.reward.items[i];
                    text += maskItem(item.id) + "x" + item.count + "\r\n";
                    text += maskItemDescription(item);
                }
                cm.sendOk(text);
                cm.dispose();
                break;
            default:
                cm.sendOk("#b#e領取錯誤請洽GM");
                cm.dispose();
        }
    }
}

//============================

function maskItemDescription(item){
    var text = "";
    if(item.isCustomEquip){
        text+= "#b裝備素質：";
        if(item.star != null){
            text+= " 星力:" + item.star + "星";
        }
    }
    if(item.customNote != null){
        text+= " #b" + item.customNote;
    }
    if(item.period != null){
        text += " 期限: " + item.period + "天";
    }
    text+= "#k#n\r\n";
    return text;
}

function maskRewardTitle(reward, isHighlight) {
    var rewardItem = reward.reward;
    var text = "";
    if(isHighlight){
        text += "#d#e";
    }
    else{
        text += "#e";
    }
    text+= "[" + rewardItem.category + "]" + rewardItem.name + "#k#n";
    return text;
}
function maskRewardRequirement(reward) {
    var rewardItem = reward.reward;
    var text = "\r\n#k    限制: ";
    if (rewardItem.isDaily) {
        if(reward.isAlreadyGet){
            text += "#r";
        }
        text += "每日重置#k ";
    }
    else {
        if(reward.isAlreadyGet){
            text += "#r";
        }
        text += "限領一次#k ";
    }
    if (rewardItem.requiredDonate != null) {
        if(reward.isNotEnoughDonate){
            text += "#r";
        }
        text += "需要累積"+rewardItem.requiredDonate+"贊助#k ";
    }
    if (rewardItem.needVerify) {
        if(reward.isNotVerify){
            text += "#r";
        }
        text += "需要審核#k ";
    }
    if (rewardItem.requiredTime != null) {
        if(reward.isNotRequireTime){
            text += "#r";
        }
        text += "需要在線:" + rewardItem.requiredTime + "分#k ";
    }
    if (rewardItem.requiredLevel != null) {
        if(reward.isNotRequireLevel){
            text += "#r";
        }
        text += "需要等級:" + rewardItem.requiredLevel + "#k ";
    }
    if (rewardItem.requirements != null) {
        if(reward.isNotRequireItem){
            text += "#r";
        }
        text += "需要道具:" + maskItem(rewardItem.requirements[0].id) + "#k ";
    }
    text += "#k\r\n";
    return text;
}


function doItemReward(reward) {
    if(!checkIfCanHold(reward.items)){
        var text = "領取["+reward.name+"]獎勵失敗";
        if(rewardMode == 1){
            text += "，空間不足，後續領獎自動暫停。\r\n"
        }
        else{
            text += "。";
        }
        return {
            success: false,
            text: text
        };
    }
    if(reward.needVerify){
        cm.getPlayer().deleteNamePrizeLog(cm.getPlayer().getName(), reward.verifyID);
    }
    var id = reward.isDaily ? reward.id + getToday() : reward.id;
    cm.getPlayer().setCharacterSet(id, cm.getPlayer().getCharacterSet(id) + 1);
    if (reward.maplePoint != null) {
        cm.getPlayer().modifyCSPoint(2,reward.maplePoint);
    }
    for (var i = 0; i < reward.items.length; i++) {
        var item = reward.items[i];
        if (item.isCustomEquip == true) {
            var toDrop = cm.getNewEquip(item.id); // 生成一個Equip類       
            if (item.star != null) {
                toDrop.setStarForceLevel(item.star); //裝備星力
            }
            if (item.potential1 != null) {
                toDrop.setPotential1(item.potential1); //裝備潛能1
            }
            if (item.potential2 != null) {
                toDrop.setPotential2(item.potential2); //裝備潛能2
            }
            if (item.potential3 != null) {
                toDrop.setPotential3(item.potential3); //裝備潛能3
            }
            if (item.PAD != null) {
                toDrop.setPad(item.PAD); //裝備潛能3
            }
            if (item.MAD != null) {
                toDrop.setMad(item.MAD); //裝備潛能3
            }
            if (item.mvpItem != null){
                toDrop.setMvpEquip(item.mvpItem);
            }
            if (item.tuc != null){
                toDrop.setRestUpgradeCount(item.tuc);
            }
            if (item.ignorePDR != null){
                toDrop.setIgnorePDR(item.ignorePDR);
            }
            if (item.totalDamage != null){
                toDrop.setTotalDamage(item.totalDamage);
            }
            if (item.bossDamage != null){
                toDrop.setBossDamage(item.bossDamage);
            }
            if (item.allStatPercentage != null){
                toDrop.setAllStat(item.allStatPercentage);
            }
            if (item.allStat != null){
                toDrop.setStr(item.allStat);
                toDrop.setInt(item.allStat);
                toDrop.setDex(item.allStat);
                toDrop.setLuk(item.allStat);
            }
            if (item.period != null){
                toDrop.setExpiration(cm.getCurrentTime() + (item.period * 24 * 60 * 60 * 1000))
            }
            toDrop.initState(false);
            cm.addFromDrop(cm.getC(), toDrop, false)
        }
        else if (item.isPet == true) {
            cm.gainPetItem(item.id, 1);
        }
        else if (item.period != null) {
            cm.gainItemPeriod(item.id, item.count, item.period);
        }
        else {
            cm.gainItem(item.id, 1 * item.count);
        }
    }
    return {
        success: true,
        text: "領取["+reward.name+"]獎勵成功。\r\n"
    };
}
function isAllowReward(reward) {
    var canTake = true;
    var isNotVerify = false;
    var isNotRequireItem =false;
    var isAlreadyGet = false;
    var isNotRequireLevel = false;
    var isNotEnoughDonate = false;
    var message = "領取成功，祝您有愉快的一天。";
    if(!isPlayerSkipVerify){
        if (gmVerifyResult && reward.needVerify) {
            if (cm.getNamePrizeLog(reward.verifyID) <= 0) {
                canTake = false;
                message = "您沒有資格領取此獎勵，獎勵代碼：" + reward.verifyID + "，請洽管理員。";
                isNotVerify = true;
            }
        }
        var rewardIdText = reward.isDaily ? reward.id + getToday() : reward.id;
        if (gmVerifyResult && cm.getCharacterSet(rewardIdText) > 0) {
            canTake = false;
            message = "您已經領取過了。";
            isAlreadyGet = true;
        }
    }
    if (reward.requiredTime != null && cm.getOnlineTime() < reward.requiredTime) {
        canTake = false;
        message = "需要上線達到" + reward.requiredLevel + "分鐘才可以領取此獎勵。";
        isNotRequireTime = true;
    }
    if (reward.requirements != null && !rewardRequireItemCheck(reward)) {
        canTake = false;
        message = "請確認您有" + maskItem(reward.requirements[0].id) + "。";
        isNotRequireItem = true;
    }
    if (reward.requiredLevel != null && cm.getPlayer().getLevel() < reward.requiredLevel) {
        canTake = false;
        message = "需要達到" + reward.requiredLevel + "等才可以領取此獎勵。";
        isNotRequireLevel = true;
    }
    if (reward.requiredDonate != null && cm.getHyPay(1) < reward.requiredDonate) {
        canTake = false;
        message = "需要累積達到" + reward.requiredDonate + "贊助才可以領取此獎勵";
        isNotEnoughDonate = true;
    }


    return {
        canTake: canTake,
        message: message,
        reward: reward,
        isNotRequireLevel: isNotRequireLevel,
        isNotEnoughDonate: isNotEnoughDonate,
        isNotVerify: isNotVerify,
        isNotRequireItem: isNotRequireItem,
        isAlreadyGet: isAlreadyGet,
    }
}



//檢查身上是否有某個陣列的道具
function rewardRequireItemCheck(reward) {
    var node = true;
    for (var i = 0; i < reward.requirements.length; i++) {
        var item = reward.requirements[i];
        if (!cm.haveItem(item.id, item.count)) {
            node = false;
        }
    }
    return node;
}
