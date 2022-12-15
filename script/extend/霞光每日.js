

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
//load("scripts/config/DailyMissionConfig.js");
var dailyMission = [
    {
        name: "霞光之塔",
        description: "在時限內盡可能的挑戰更高層，獲得裝備合成材料吧",
        eventName: "StarTower",
        PQLog: "StarTower",
        actionType: "event",
        limit: 1,
        minEnter: 1,
        maxEnter: 1,
        reward: "楓幣 水滴石"
    },
    {
        name: "經驗綿羊牧場",
        description: "在時限內盡可能狩獵更多綿羊，獲得經驗值吧",
        eventName: "經驗綿羊牧場",
        PQLog: "經驗綿羊牧場",
        actionType: "event",
        limit: 0,
        requiredItem: [4319914, 4319915],
        limitMinLevel: 200,
        minEnter: 1,
        maxEnter: 6,
        reward: "經驗值"
    },
    {
        name: "每日尋寶",
        description: "幫里諾赫找到他的寶箱",
        eventName: 2084001,
        PQLog: "尋寶任務",
        actionType: "npc",
        limit: 5,
        minEnter: 1,
        maxEnter: 1,
        reward: "潘朵拉、豎琴"
    },
    {
        name: "拯救精靈",
        description: "邊避開猛毒追擊者，邊拯救地圖上的小石靈、帶到地圖中間吧！",
        eventName: "精靈救援者",
        actionType: "event",
        PQLog: "spiritSavior",
        limit: 3,
        minEnter: 1,
        maxEnter: 1,
        reward: "祕法符文"
    },
    {
        name: "怪物公園",
        description: "全新設計的怪物公園，輕鬆提升等級就在這裡",
        eventName: 951000000,
        actionType: "map",
        PQLog: "怪物公園",
        limit: 2,
        minEnter: 1,
        maxEnter: 1,
        reward: "怪物公園箱子"
    },
    {
        name: "第一次同行",
        description: "和同伴一起挑戰組隊任務 - 超級綠水靈吧",
        eventName: 9020000,
        actionType: "npc",
        PQLog: "第一次同行",
        limit: 2,
        minEnter: 3,
        maxEnter: 6,
        reward: "Happy Day箱子"   //獎勵npc: 9020001
    },
    {
        name: "時空的裂縫",
        description: "和同伴一起挑戰組隊任務 - 101時空的裂縫吧",
        eventName: 2040034,
        actionType: "npc",
        PQLog: "時空的裂縫",
        limit: 2,
        minEnter: 3,
        maxEnter: 6,
        reward: "Happy Day箱子" //獎勵npc: 2040035
    },
    {
        name: "金勾海賊王作戰",
        description: "和同伴一起挑戰組隊任務 - 金勾海賊王作戰吧",
        eventName: 2094000,
        actionType: "npc",
        PQLog: "金勾海賊",
        limit: 2,
        minEnter: 3,
        maxEnter: 6,
        reward: "Happy Day箱子" //獎勵npc: 2094001
    },
    /*
    {
        name: "羅密歐與茱麗葉",
        description: "和同伴一起挑戰組隊任務 - 羅密歐與茱麗葉吧",
        eventName: 2112004,
        actionType: "npc",
        PQLog: "羅密歐與茱麗葉",
        limit: 2,
        minEnter: 1,
        maxEnter: 1,
        reward: "經驗值" //獎勵npc: 2040044
    },
    {
        name: "逃脫",
        description: "和同伴一起挑戰組隊任務 - 逃脫吧",
        eventName: 9020005,
        actionType: "npc",
        PQLog: "逃脫",
        limit: 2,
        minEnter: 1,
        maxEnter: 1,
        reward: "經驗值" //獎勵npc: 2040044
    },*/
]

var mission;
var isGMSkipVerify = false;
var isPlayerSkipVerify = false;

var isWarp = false;
//使用指令登記玩家是否可以領取 (linebot也支援此指令)
//指令如下:
//!事前獎勵 名稱 獎勵名稱(下面ㄉlog)  


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (status >= 2 || mode == 0) {
        cm.sendOk("等你想好的時候再來找我吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else if (mode == 0) {
        status--;
    }
    else {
        cm.dispose();
    }

    if (status == 0) {
    
        if (cm.getMapId() != 100000000 ) { // 判斷組隊隊長
            isWarp = true;
            cm.sendYesNo("請在弓箭手村和我對話，確定要移動嗎？")
        }
        else{
            var text = Logo + "此為每日任務系統，請選擇想領取的獎勵。\r\n";
            if (isGMSkipVerify) {
                text += alertText("GM忽視接取次數模式已開啟\r\n");
            }
            if (isPlayerSkipVerify) {
                text += alertText("玩家忽視接取次數模式已開啟\r\n");
            }
            for (var i = 0; i < dailyMission.length; i++) {
                if(!dailyMission[i].isNotOpen || cm.getPlayer().isAdmin()){
                    text += maskListNode(i, maskMissionTitle(dailyMission[i], true) + "\r\n");
                    text += maskMissionRequirement(dailyMission[i])
                }
            }
            cm.sendNext(text);
        }
    }
    else if (status == 1){
        if(isWarp){
            cm.dispose()
            cm.warp(100000000);
            return;
        }
        else{
            mission = dailyMission[selection];
            var haveDone = cm.getPlayer().getCharacterSet(mission.PQLog + getToday());
            var haveDoneColor =  (haveDone > mission.limit ? "#r" : "#g")
            text = "";
            text += "#d#e\r\n每日任務 - "+ mission.name + "\r\n"
            text += "任務描述: #b\r\n" + mission.description + "#d\r\n";
            if(mission.requiredItem != null){
                var vail = "";
                for(var i=0;i<mission.requiredItem.length;i++){
                    if(i > 0){
                        vail += "#d、\r\n";
                    }
                    vail+= "#b" + maskItem(mission.requiredItem[i]);
                }
                text += "入場次數替代道具: \r\n#b" + vail + "#d\r\n";
            }
            if(mission.limit > 0){
                text += "每日可進行: #b" + mission.limit + "#d次  目前已進行: " + haveDoneColor + haveDone + "#d次\r\n";
            }
            text += "最小入場: #b" + mission.minEnter + "#d人    最大入場: #b" + mission.maxEnter + "#d人\r\n"
            text += "入場獎勵: #b" + mission.reward + "#d\r\n";
            text += "確定要進入嗎？"
            cm.sendYesNo(text);
        }
    }
    else if (status == 2) {
        if(mission.actionType!="map"){
            var cantEnterMemberText = checkAllCharacterSetDaily(mission.PQLog + getToday(), mission.limit, mission.requiredItem);
            if (cm.getParty() == null) { //判斷組隊
                cm.sendSimple("請創立一個組隊再來吧。");
                cm.dispose()
                return;
            } 
            else if (!cm.isLeader()) { // 判斷組隊隊長
                cm.sendOk("請讓你們的組隊長和我對話。");
                cm.dispose()
                return;
            } else if (cm.getParty().getMembers().size() < mission.minEnter || cm.getParty().getMembers().size() > mission.maxEnter ){
                cm.sendOk("隊伍人數不符合挑戰限制"); 
                cm.dispose()
                return;
            } else if ( cantEnterMemberText != null ) {
                cm.sendOk("你的隊員#r#e \"" +  cantEnterMemberText + "\" #k#n次數已經達到上限或是沒有需要的入場卷。");
                cm.dispose()
                return;
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的組隊部分成員不在當前地圖,請召集他們過來後在嘗試。"); //判斷組隊成員是否在一張地圖..
                cm.dispose()
                return;
            } 
        }
        switch (mission.actionType) {
            case "event":
                var em = cm.getEventManager(mission.eventName);
                if (em == null) {
                    cm.sendSimple("副本暫未開啟，敬請期待。");
                    cm.dispose()
                    return;
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        if(gainMembersCharacterLogDaily(mission.PQLog + getToday(), 1, mission.requiredItem, mission.limit)){
                            cm.dispose();
                            em.startInstance(cm.getParty(), cm.getMap());   
                        }
                        else{
                            cm.sendOk("發生未知錯誤。");
                            cm.dispose()
                        }
                        return;
                    } else {
                        cm.sendOk("已經有隊伍在進行了,請換其他頻道嘗試。");
                        cm.dispose()
                    }
                }
                break;
            case "npc":
                cm.dispose();
                cm.openNpc(mission.eventName);
                break;
            case "map":
                cm.dispose();
                cm.warp(mission.eventName);
                break;
            default:
                break;
        }
    }
    else if (status == 2){
    }
}

//============================


function maskMissionTitle(mission, isHighlight) {
    var text = "";
    if(isHighlight){
        text += "#d#e";
    }
    else{
        text += "#e";
    }
    var haveDone = cm.getPlayer().getCharacterSet(mission.PQLog + getToday());
    var haveDoneColor =  (haveDone >= mission.limit ? "#e#r" : "#e#g")
    if(mission.limit == 0 && mission.requiredItem != null){
        text+= "[無限制]" + mission.name + "(需要道具進場)#k#n";
    }
    else if(isHighlight){
        text+= "[每日" + mission.limit + "次]" + mission.name + "("+ haveDoneColor + haveDone + "#n#d/" + mission.limit +")#k#n";
    }
    else{
        text+= "[每日" + mission.limit + "次]" + mission.name + "("+ haveDoneColor + haveDone + "#n#e/" + mission.limit +")#k#n";
    }
    return text;
}
function maskMissionRequirement(mission) {
    var text = "";
    text += "#b    獎勵: " + mission.reward + "#k\r\n";
    return text;
}

function checkAllCharacterSetDaily(log ,time, reqItem){
    var cantEnterMemberText = null;
    if(cm.getPlayer().getParty() == null){
        return null;
    }
    var party = cm.getPlayer().getParty().getMemberList();
    for (var i =0;i< party.length; i++) {
        var partyCharacter = party[i];
        var player = partyCharacter.getChr();
        if (player == null) {
            continue;
        }
        var haveItem = false;
        if(reqItem != null){
            for(var j=0;j<reqItem.length;j++){
                if(player.haveItem(reqItem[j], 1)){
                    haveItem = true;
                }
            }
        }
        if(player.getCharacterSet(log) >= time && !haveItem){
            if(cantEnterMemberText == null){
                cantEnterMemberText = player.getName();
                //player.dropMessage(6, "超出進場限制:" + cantEnterMemberText)
            }
            else{
                cantEnterMemberText += "," + player.getName();
                //player.dropMessage(6, "超出進場限制:" + cantEnterMemberText)
            }
        }
    }

    return cantEnterMemberText;
}

function gainMembersCharacterLogDaily(log ,time, reqItem, limit){
    if(cm.getPlayer().getParty() == null){
        return 0;
    }
    var party = cm.getPlayer().getParty().getMemberList();
    for (var i =0;i< party.length; i++) {
        var partyCharacter = party[i];
        var player = partyCharacter.getChr();
        if (player == null) {
            continue;
        }
        var oldLog = player.getCharacterSet(log);
        if(oldLog >= limit && reqItem != null){
            var haveItem = false;
            for(var j=0;j<reqItem.length;j++){
                if(!haveItem && player.haveItem(reqItem[j], 1)){
                    player.removeItem(reqItem[j], 1);
                    haveItem = true;
                }
            }
            if(!haveItem){
                return false;
            }
        }
        player.setCharacterSet(log, oldLog + time);
    }
    return true;
}