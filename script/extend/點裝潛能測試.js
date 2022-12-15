

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var Logo = "";//     #fEffect/BasicEff/DoggoLogo/0#\r\n";
var potentialMode = 0;

var choiceCoin = 4319921;
var highCoin = 4319922;
var lowCoin = 4319923;


var allPotential = {
    0: "無潛能"
};

var potentialList = {
    superRare: [
        {
            id: 40051,
            name: "物理攻擊力+6%"
        },
        {
            id: 40052,
            name: "魔法攻擊力+6%"
        },
        {
            id: 60020,
            name: "爆擊傷害: +5%"
        },
        {
            id: 60060,
            name: "STR : +9%"
        },
        {
            id: 60061,
            name: "DEX : +9%"
        },
        {
            id: 60062,
            name: "INT : +9%"
        },
        {
            id: 60063,
            name: "LUK : +9%"
        },
        {
            id: 30081,
            name: "全屬性+4"
        },
        {
            id: 22051,
            name: "物理攻擊力+2%"
        },
        {
            id: 12052,
            name: "魔法攻擊力+1%"
        },
        {
            id: 40043,
            name: "INT : +6%"
        },
    ],
    low: [
        {
            id: 40041,
            name: "STR : +6%"
        },
        {
            id: 40042,
            name: "DEX : +6%"
        },
        {
            id: 40043,
            name: "INT : +6%"
        },
        {
            id: 40044,
            name: "LUK : +6%"
        },
        {
            id: 40056,
            name: "爆擊傷害+2%"
        },
        {
            id: 32051,
            name: "物理攻擊力+3%"
        },
        {
            id: 32052,
            name: "魔法攻擊力+3%"
        },
        {
            id: 40086,
            name: "全屬性+3%"
        },
        {
            id: 40116,
            name: "狀態異常耐性+5"
        },
        {
            id: 40501,
            name: "所有技能的 MP消耗 : -5%"
        },
        {
            id: 40502,
            name: "所有技能的 MP消耗 : -10%"
        },
        {
            id: 41005,
            name: "可以使用《實用的戰鬥命令》技能"
        },
        {
            id: 41006,
            name: "可以使用《實用的進階祝福》技能"
        },
        {
            id: 41007,
            name: "可以使用《實用的最終極速》技能"
        }
    ],
    normal: [
        {
            id: 42001,
            name: "STR : +8"
        },
        {
            id: 42002,
            name: "DEX : +8"
        },
        {
            id: 42003,
            name: "INT : +8"
        },
        {
            id: 42004,
            name: "LUK : +8"
        },
        {
            id: 42041,
            name: "STR : +3%"
        },
        {
            id: 42042,
            name: "DEX : +3%"
        },
        {
            id: 42043,
            name: "INT : +3%"
        },
        {
            id: 42044,
            name: "LUK : +3%"
        },
        {
            id: 30086,
            name: "全屬性+2%"
        },
        {
            id: 22051,
            name: "物理攻擊力+2%"
        },
        {
            id: 22052,
            name: "魔法攻擊力+2%"
        },
        {
            id: 40081,
            name: "全屬性+4"
        },
        {
            id: 40053,
            name: "防禦力: +6%"
        },
        {
            id: 40014,
            name: "防禦力: +25"
        }
    ],
    high: [
        {
            id: 32001,
            name: "STR : +6"
        },
        {
            id: 32002,
            name: "DEX : +6"
        },
        {
            id: 32003,
            name: "INT : +6"
        },
        {
            id: 32004,
            name: "LUK : +6"
        },
        {
            id: 32001,
            name: "STR : +6"
        },
        {
            id: 32002,
            name: "DEX : +6"
        },
        {
            id: 32003,
            name: "INT : +6"
        },
        {
            id: 32004,
            name: "LUK : +6"
        },
        {
            id: 32001,
            name: "STR : +6"
        },
        {
            id: 32002,
            name: "DEX : +6"
        },
        {
            id: 32003,
            name: "INT : +6"
        },
        {
            id: 32004,
            name: "LUK : +6"
        },
        {
            id: 32041,
            name: "STR : +2%"
        },
        {
            id: 32042,
            name: "DEX : +2%"
        },
        {
            id: 32043,
            name: "INT : +2%"
        },
        {
            id: 32044,
            name: "LUK : +2%"
        },
        {
            id: 20086,
            name: "全屬性+1%"
        },
        {
            id: 12051,
            name: "物理攻擊力+1%"
        },
        {
            id: 12052,
            name: "魔法攻擊力+1%"
        },
        {
            id: 30081,
            name: "全屬性+4"
        },
        {
            id: 60028,
            name: "以角色為準，每10級STR： +4"
        },
        {
            id: 60029,
            name: "以角色為準，每10級DEX : +4"
        },
        {
            id: 60030,
            name: "以角色為準，每10級INT : +4"
        },
        {
            id: 60031,
            name: "以角色為準，每10級LUK : +4"
        },
        {
            id: 60028,
            name: "以角色為準，每10級STR： +4"
        },
        {
            id: 60029,
            name: "以角色為準，每10級DEX : +4"
        },
        {
            id: 60030,
            name: "以角色為準，每10級INT : +4"
        },
        {
            id: 60031,
            name: "以角色為準，每10級LUK : +4"
        },
        {
            id: 60028,
            name: "以角色為準，每10級STR： +4"
        },
        {
            id: 60029,
            name: "以角色為準，每10級DEX : +4"
        },
        {
            id: 60030,
            name: "以角色為準，每10級INT : +4"
        },
        {
            id: 60031,
            name: "以角色為準，每10級LUK : +4"
        },
        {
            id: 30053,
            name: "防禦力: +3%"
        },
        {
            id: 30014,
            name: "防禦力: +20"
        }
    ]
}


var selectedEquip;
var selectPotential;

function start() {
    status = -1;
    action(1, 0, 0);
}


function getPossiblePotential() {
    var rand = Math.random();
    var result;
    if (rand <= 0.005) {
        result = randomChoice(potentialList.superRare);
        return {
            id: result.id,
            name: result.name,
            rarity: "[神話]"
        }
    }
    else if (rand <= 0.03) {
        result = randomChoice(potentialList.low);
        return {
            id: result.id,
            name: result.name,
            rarity: "[傳說]"
        }
    }
    else if (rand <= 0.2) {
        result = randomChoice(potentialList.normal);
        return {
            id: result.id,
            name: result.name,
            rarity: "[罕見]"
        }
    }
    else {
        result = randomChoice(potentialList.high);
        return {
            id: result.id,
            name: result.name,
            rarity: "[稀有]"
        }
    }
}


function getRandomPotential() {
    var potential = getPossiblePotential();
    return potential;

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
            var text = Logo + "此為時裝潛能系統，您想要做什麼？\r\n";
            text += maskListNode(1, "#d#e消耗一個" + maskItem(highCoin) + "賦予三行時裝潛能");
            text += maskListNode(2, "#d#e消耗一個" + maskItem(lowCoin) + "\r\n    賦予兩行時裝潛能");
            text += "\r\n#b#n    使用後，第三條潛能會被清除，請注意\r\n";
            text += maskListNode(3, "#d#e消耗一個" + maskItem(choiceCoin) + "指定時裝潛能");
            text += "#b#n    指定後，另外兩條潛能不會變動\r\n";
            cm.sendNext(text);
            break;
        case 1:
            if (selection >= 0) {
                potentialMode = selection;
            }
            var text = "選擇您想要洗潛能的點裝\r\n"
                + alertText("請謹慎選擇，恕不因為洗過頭補償！\r\n");
            for (var i = 1; i <= 256; i++) {
                if (cm.getInventory(6).getItem(i) != null) {
                    var itemId = cm.getInventory(6).getItem(i).getItemId();
                    if (cm.isCash(itemId)) {
                        text += maskListNode(i, maskItem(itemId));
                    }
                }
            }
            cm.sendNext(text);
            break;
        case 2:
            selectedEquip = cm.getInventory(6).getItem(selection);
            switch (potentialMode) {
                case 3:
                    if (!cm.haveItem(choiceCoin, 1)) {
                        var text = "您的道具不足，請檢查背包";
                        cm.sendSimple(text);
                        cm.dispose();
                        return;
                    }
                    var text = "請問您要選擇變更哪一個潛能？\r\n";
                    text += maskListNode(1, "第一條: " + getPotentialName(selectedEquip.getPotential1()));
                    text += maskListNode(2, "第二條: " + getPotentialName(selectedEquip.getPotential2()));
                    text += maskListNode(3, "第三條: " + getPotentialName(selectedEquip.getPotential3()));
                    cm.sendNext(text);
                    break;
                case 1:
                    if (!cm.haveItem(highCoin, 1)) {
                        var text = "您的道具不足，請檢查背包";
                        cm.sendSimple(text);
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(highCoin, -1);
                    setEquipRandomPotential(selectedEquip, getRandomPotential(), getRandomPotential(), getRandomPotential())
                    break;
                case 2:
                    if (!cm.haveItem(lowCoin, 1)) {
                        var text = "您的道具不足，請檢查背包";
                        cm.sendSimple(text);
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(lowCoin, -1);
                    setEquipRandomPotential(selectedEquip, getRandomPotential(), getRandomPotential(), { id: 0, name: "無潛能" });
                    break;

            }
            break;
        case 3:
            selectPotential = selection;
            var text = "請問您想要將第" + selectPotential + "條潛能變更成哪一個潛能？\r\n";
            for (var i = 0; i < potentialList.superRare.length; i++) {
                text += maskListNode(potentialList.superRare[i].id, potentialList.superRare[i].name);
            }
            cm.sendNext(text);
            break;
        case 4:
            var targetPotential = selection;
            switch (selectPotential) {
                case 1:
                    selectedEquip.setPotential1(targetPotential);
                    break;
                case 2:
                    selectedEquip.setPotential2(targetPotential);
                    break;
                case 3:
                    selectedEquip.setPotential3(targetPotential);
                    break;
            }
            selectedEquip.initState(false);
            cm.gainItem(choiceCoin, -1);
            var text = "您的第" + selectPotential + "條潛能已經變更為" + getPotentialName(targetPotential) + "\r\n" + alertText("請記得換頻才能看到新的裝備效果！！");
            FileoutputUtil.logToFile("logs/自選時裝潛能.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 目標裝備:" + cm.getItemName(selectedEquip.getItemId()) + " " + selectedEquip.getItemId() + " 自選第" + selectPotential + "條潛能:" + targetPotential + "\r\n");
            cm.sendSimple(text);
            cm.dispose();
            break;
    }
}

function getPotentialName(potentialCode) {
    for (var i = 0; i < potentialList.superRare.length; i++) {
        if (potentialList.superRare[i].id == potentialCode) {
            return "[神話]" + potentialList.superRare[i].name;
        }
    }
    for (var i = 0; i < potentialList.high.length; i++) {
        if (potentialList.high[i].id == potentialCode) {
            return "[傳說]" + potentialList.high[i].name;
        }
    }
    for (var i = 0; i < potentialList.normal.length; i++) {
        if (potentialList.normal[i].id == potentialCode) {
            return "[罕見]" + potentialList.normal[i].name;
        }
    }
    for (var i = 0; i < potentialList.low.length; i++) {
        if (potentialList.low[i].id == potentialCode) {
            return "[稀有]" + potentialList.low[i].name;
        }
    }
    return "無潛能";
}

function colorByRarity(rarity) {
    switch (rarity) {
        case "[神話]":
            return "#r" + rarity;
        case "[傳說]":
            return "#g" + rarity;
        case "[罕見]":
            return "#d" + rarity;
        case "[稀有]":
            return "#b" + rarity;
    }
}

function setEquipRandomPotential(equip, pot1, pot2, pot3) {
    var text = "您的三條潛能分別變更為：\r\n";

    text += colorByRarity(pot1.rarity) + "#b" + pot1.name + "\r\n";
    text += colorByRarity(pot2.rarity) + "#b" + pot2.name + "\r\n";
    text += colorByRarity(pot3.rarity) + "#b" + pot3.name + "\r\n";
    equip.setPotential1(pot1.id); //裝備潛能1
    equip.setPotential2(pot2.id); //裝備潛能2
    equip.setPotential3(pot3.id); //裝備潛能3
    cm.getPlayer().dropMessage(6, "您的三條潛能分別變更為：");
    cm.getPlayer().dropMessage(6, "第一條潛能:" + pot1.rarity + pot1.name);
    cm.getPlayer().dropMessage(6, "第二條潛能:" + pot2.rarity + pot2.name);
    cm.getPlayer().dropMessage(6, "第三條潛能:" + pot3.rarity + pot3.name);
    equip.initState(false);
    FileoutputUtil.logToFile("logs/時裝潛能.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 目標裝備:" + cm.getItemName(equip.getItemId()) + " " + equip.getItemId() + " 三條潛能:" + pot1.id + "," + pot2.id + "," + pot3.id + "\r\n");
    text += alertText("請記得換頻才能看到新的裝備效果！！")
    status = -1;
    cm.sendNext(text);
}