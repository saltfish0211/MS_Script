

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");

var coin = 4319911;
var equipId = 1143132;

var enhanceStringPrefix = "強化";
var enhanceStringSuffix = "次";
var enhanceString = ["I", "II", "III", "IV", "V"];

var selectedEquip;

function start() {
    status = -1;
    action(1, 0, 0);
}

var stats = [
    {
        name: "HP",
        value: [1000, 2000, 3000],
        weight: 30
    },
    {
        name: "MP",
        value: [1000, 2000, 3000],
        weight: 30
    },
    {
        name: "攻擊力",
        value: [20, 40, 60],
        weight: 30
    },
    {
        name: "魔力",
        value: [20, 40, 60],
        weight: 30
    },
    {
        name: "全屬性%", //allStat
        value: [3, 5, 7],
        weight: 20
    },
    {
        name: "BOSS傷害%", //allStat
        value: [20, 30, 40],
        weight: 10
    },
    {
        name: "無視防禦%", //allStat
        value: [20, 30, 40],
        weight: 10
    },
    {
        name: "總傷害%", //allStat
        value: [5, 10, 15],
        weight: 20
    }
]


function enhanceEquip(equip, stat) {
    switch (stat.stat.name) {
        case "HP":
            equip.setHp(equip.getHp() +stat.value);
            break;
        case "MP":
            equip.setMp(equip.getMp() +stat.value);
            break;
        case "攻擊力":
            equip.setPad(equip.getPad() +stat.value);
            break;
        case "魔力":
            equip.setMad(equip.getMad() +stat.value);
            break;
        case "全屬性%":
            equip.setAllStat(equip.getAllStat() +stat.value);
            break;
        case "BOSS傷害%":
            equip.setBossDamage(equip.getBossDamage() +stat.value);
            break;
        case "無視防禦%":
            equip.setIgnorePDR(equip.getIgnorePDR() +stat.value);
            break;
        case "總傷害%":
            equip.setTotalDamage(equip.getTotalDamage() +stat.value);
            break;
    }
    return equip;
}

function getRandomStat() {
    var table = [];
    for (var i =0;i<stats.length;i++) {
        for(var j=0;j<stats[i].weight;j++){
            table.push(stats[i]);
        }
    }
    var r = Math.floor(Math.random() * table.length);
    return {
        stat: table[r],
        value: randomChoice(table[r].value)
    };
}

function getNewEquip() {
    var toDrop = cm.getNewEquip(equipId); // 生成一個新勳章
    var statArr = [];
    while (statArr.length < 3) {
        var r = getRandomStat();
        var isDuplicate = false;
        for(var i =0;i<statArr.length;i++){
            if(statArr[i].stat.name == r.stat.name){
                cm.getPlayer().dropMessage(6,r.stat.name);
                isDuplicate = true;
            }
        }
        if(!isDuplicate){
            statArr.push(r);
        }
    }
    for (var i = 0; i < 3; i++) {
        toDrop = enhanceEquip(toDrop, statArr[i]);
    }
    return {
        equip: toDrop,
        stats: statArr
    };
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (status >= 4 || mode == 0) {
        cm.sendOk("等你想好的時候再來找我吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else if (mode == 0) {
        status = 0; //回上一頁的話會直接回到首頁
    }
    else {
        cm.dispose();
    }

    switch (status) {
        case 0:
            var text = Logo + "此為霞光徽章系統，您想要做什麼？\r\n";
            text += "\r\n#b#n    霞光徽章有三條隨機屬性，並且數值也會浮動，徽章可以進行最多五次強化，每次強化會在徽章上新增一條屬性。\r\n";
            text += maskListNode(2, "#d#e消耗" + maskItem(coin) + "進行霞光徽章強化");
            text += maskListNode(1, "#d#e消耗一個" + maskItem(coin) + "兌換一個新的霞光徽章");
            text += "\r\n#b#n    請將要強化的霞光徽章放在裝備欄位第一格，並謹慎地確認是否要強化該裝備。\r\n";
            cm.sendOk(text);
            break;
        case 1:
            switch (selection) {
                case 1:
                    if (!cm.haveItem(coin, 1)) {
                        text = "您沒有" + maskItem(coin);
                        cm.sendOk(text);
                        cm.dispose();
                        break;
                    }
                    else {
                        cm.gainItem(coin, -1);
                        var toDrop = getNewEquip();
                        cm.addFromDrop(cm.getC(), toDrop.equip, false)
                        var text = "#b#e恭喜您獲得一條新的" + maskItem(equipId) + "，請確認以下能力：\r\n";
                        for(var i=0;i<toDrop.stats.length;i++){
                            text += "#d" + toDrop.stats[i].stat.name + " +" + toDrop.stats[i].value + "\r\n";
                        }
                        cm.sendNext(text);
                        status = -1;
                    }
                    break;
                case 2:
                    selectedEquip = cm.getEquipBySlot(1);
                    var text = "";
                    if (!cm.haveItem(coin, 1)) {
                        text = "您沒有" + maskItem(coin);
                        cm.sendOk(text);
                        cm.dispose();
                        break;
                    }
                    if (selectedEquip == null || selectedEquip.getItemId() != equipId) {
                        text = "您的裝備欄第一格並非" + maskItem(equipId);
                        cm.sendOk(text);
                        cm.dispose();
                        return;
                    }
                    else if (parseEnhanceTime(selectedEquip) >= 5) {
                        text = "這個徽章已經無法再進行強化了。";
                        cm.sendOk(text);
                        cm.dispose();
                        return;
                    }
                    else {
                        var stat = getRandomStat();
                        var toDrop = selectedEquip.copy();
                        enhanceEquip(toDrop, stat);
                        setEnhanceTime(toDrop);
                        cm.gainItem(coin, -1);
                        cm.gainItem(equipId, -1);
                        cm.addFromDrop(cm.getC(), toDrop, false)
                        text = "#b#e強化第"+ parseEnhanceTime(toDrop)+"次成功，請確認以下能力：\r\n";
                        text += "#d" + stat.stat.name + " +" + stat.value + "\r\n";
                        cm.sendNext(text);
                        status = -1;
                    }
                    break;
            }
            break;
            //FileoutputUtil.logToFile("logs/自選時裝潛能.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 目標裝備:" + cm.getItemName(selectedEquip.getItemId()) + " " + selectedEquip.getItemId() + " 自選第" + selectPotential + "條潛能:" + targetPotential + "\r\n");
    }
}


function setEnhanceTime(equip) {
    var enhanceTime = parseEnhanceTime(equip);
    equip.setGMLog(enhanceStringPrefix + enhanceString[enhanceTime] + enhanceStringSuffix);
    equip.setOwner(enhanceStringPrefix + enhanceString[enhanceTime] + enhanceStringSuffix);
}

function parseEnhanceTime(equip) {
    equipCurrentEnhance = 0;
    for (var i = 0; i < 5; i++) {
        if (equip.getGMLog() == enhanceStringPrefix + enhanceString[i] + enhanceStringSuffix) {
            equipCurrentEnhance = i + 1; //突破次數
        }
    }
    return equipCurrentEnhance;
}