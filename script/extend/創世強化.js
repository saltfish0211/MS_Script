

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
importPackage(Packages.client.inventory);
load("scripts/霞光共通.js");

var equips = [
    [1212128, 1212129],
    [1213021, 1213022],
    [1222121, 1222122],
    [1232121, 1232122],
    [1242138, 1242139],
    [1262050, 1262051],
    [1272039, 1272040],
    [1282039, 1282040],
    [1292021, 1292022],
    [1302354, 1302355],
    [1312212, 1312213],
    [1322263, 1322264],
    [1332288, 1332289],
    [1362148, 1362149],
    [1372236, 1372237],
    [1382273, 1382274],
    [1402267, 1402268],
    [1412188, 1412189],
    [1422196, 1422197],
    [1432226, 1432227],
    [1442284, 1442285],
    [1452265, 1452266],
    [1462251, 1462252],
    [1472274, 1472275],
    [1482231, 1482232],
    [1492244, 1492245],
    [1522151, 1522152],
    [1532156, 1532157],
    [1582043, 1582044],
    [1592021, 1592022],
    [1214021, 1214022],
    [1252105, 1252106],
    [1542127, 1542128],
    [1552129, 1552130],
    [1403021, 1403022],
];

var reqItem = [
    [
        [4001893, 1],
        [4036458, 1],
        [4319903, 10000],
        [2591008, 1],
        [2472001, 300],
    ], //解封創世需求材料

    [
        [4001893, 5],
        [4319931, 20],
        [4319932, 20],
        [4319933, 20]
    ], //學習技能需求材料
    [
        [4001893, 10],
        [4319931, 10],
        [4319903, 15000]
    ], //升星材料
    [
        [4036458, 1],
        [4001893, 3],
        [4319902, 1000],
        [4319903, 5000]
    ], //附魔
    [
        [4001893, 1],
        [4036458, 1],
        [4319903, 5000],
    ], //回真
    [
        [4001890, 3],
        [4001893, 5],
        [4036458, 5],
        [4319931, 20],
        [4319932, 20],
        [4319933, 20],
        [4319903, 20000],
    ], //轉換

]

var selectedOption;
var selectedEquipId;
var selectedEquip;
var selectedNewEquipId;
var haveItem;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }
    else {
        cm.sendOk("等你想好的時候再來找我吧。");
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var text = Logo + "#d#e此為創世強化系統，您想要做什麼？\r\n";
            text += "#b#n請將需要強化的道具放在裝備欄第一格，避免選錯道具\r\n";
            text += maskListNode(1, "#d#e#i" + 2439614 + ":#【解除封印】#b#n解除創世封印");
            text += maskListNode(5, "#d#e#i" + 2049615 + ":#【創世回真】#b#n把創世武器初始化");
            text += maskListNode(2, "#d#e#s" + 80002632 + ":#【學習技能】#b#n學習創世武器技能");
            text += maskListNode(3, "#d#e#i" + 4319931 + ":#【星力強化】#b#n星力階段強化");
            text += maskListNode(4, "#d#e#i" + 4001893 + ":#【創世附魔】#b#n增加能力值");
            text += maskListNode(6, "#d#e#i" + 2610000 + ":#【創世轉換】#b#n將創世武器變更為其他武器");
            cm.sendOk(text);
            break;
        case 1:
            selectedEquip = cm.getInventory(1).getItem(1);
            selectedEquipId = selectedEquip == null ? "" : selectedEquip.getItemId();
            selectedOption = selection;
            if (selectedEquip == null) {
                text = "您的裝備欄第一格沒有武器！";
                cm.sendOk(text);
                cm.dispose();
                return;
            }
            else if (selection == 1 && !is封印創世(selectedEquip.getItemId())) {
                text = "您的裝備欄第一格並非封印創世武器！";
                cm.sendOk(text);
                cm.dispose();
                return;
            }
            else if (selection != 1 && !is創世(selectedEquip.getItemId())) {
                text = "您的裝備欄第一格並非創世武器！";
                cm.sendOk(text);
                cm.dispose();
                return;
            }
            var text = "";
            switch (selection) {
                case 1:
                    text += "#d#e解封創世武器（18星、武公、滿白槌狀態）";
                    break;
                case 2:
                    text += "#d#e學習創世武器技能#s" + 80002632 + "#、#s" + 80002633 + "#";
                    break;
                case 3:
                    text += "#d#e將創世武器提升一星";
                    break;
                case 4:
                    text += "#d#e將創世武器附魔提升（1%B、總、無、+5全屬、+5攻擊，可使用200次）";
                    break;
                case 5:
                    text += "#d#e將創世武器回真（武公、滿白槌狀態，星力、潛能沿用，附魔數值會刪除）";
                    break;
                case 5:
                    text += "#d#e將創世武器變更為其他武器（武公、滿白槌狀態，星力、潛能沿用，附魔數值會刪除）";
                    break;
            }
            text += "需要以下材料，確定要繼續嗎？\r\n#n";
            haveItem = true;
            for (var i = 0; i < reqItem[selection - 1].length; i++) {
                if (!cm.haveItem(reqItem[selection - 1][i][0], reqItem[selection - 1][i][1])) {
                    text += "#r" + maskItem(reqItem[selection - 1][i][0]) + "x" + reqItem[selection - 1][i][1] + "\r\n";
                    haveItem = false;
                }
                else {
                    text += "#b" + maskItem(reqItem[selection - 1][i][0]) + "x" + reqItem[selection - 1][i][1] + "\r\n";
                }
            }
            if (selectedOption == 2 && cm.getPlayer().getCharacterSet("創世技能_" + cm.getPlayer().getId()) > 0) {
                text = "#d#e重新領取創世技能無須材料，確定要繼續嗎？";
            }
            cm.sendYesNo(text);
            break;
        case 2:
            if (selectedOption == 6) {
                var text = "#d#e請謹慎選擇想要轉換的創世武器：#b\r\n";
                for(var i=0;i<equips.length;i++){
                    text += maskListNode(i, maskItem(equips[i][1]));
                }
                cm.sendOk(text);
            }
            else {
                if (selectedOption == 2) {
                    if (cm.getPlayer().getSkillLevel(80002632) >= 1) {
                        var text = "#b#e您已經學會創世技能。\r\n";
                        cm.sendNext(text);
                        cm.dispose();
                        return;
                    }
                    else if (cm.getPlayer().getCharacterSet("創世技能_" + cm.getPlayer().getId()) > 0) {
                        cm.teachSkill(80002632, 1);
                        cm.teachSkill(80002633, 1);
                        var text = "#b#e學習技能成功。\r\n";
                        cm.sendNext(text);
                        status = -1;
                        break;
                    }
                }
                if (!haveItem) {
                    cm.sendOk("您的素材不足");
                    cm.dispose();
                    return;
                }
                else {
                    for (var i = 0; i < reqItem[selectedOption - 1].length; i++) {
                        cm.gainItem(reqItem[selectedOption - 1][i][0], -1 * reqItem[selectedOption - 1][i][1]);
                    }
                    switch (selectedOption) {
                        case 5:
                            var toDrop = cm.getNewEquip(selectedEquipId);
                            toDrop.setEnhance(selectedEquip.getEnhance());
                            toDrop.setViciousHammer(1);
                            toDrop.setPlatinumHammer(5);
                            toDrop.setRestUpgradeCount(toDrop.getRestUpgradeCount() + 6);
                            toDrop.setPotential1(selectedEquip.getPotential1());
                            toDrop.setPotential2(selectedEquip.getPotential2());
                            toDrop.setPotential3(selectedEquip.getPotential3());
                            toDrop.setPotential4(selectedEquip.getPotential4());
                            toDrop.setPotential5(selectedEquip.getPotential5());
                            toDrop.setPotential6(selectedEquip.getPotential6());
                            toDrop.setState(selectedEquip.getState(false), false); //設置新道具的潛能等級
                            toDrop.setState(selectedEquip.getState(true), true); //設置新道具的潛能等級
                            toDrop.setSoulSocketID(1);
                            toDrop.setSoulOptionID(9);
                            toDrop.setSoulOption(1);
                            toDrop.setSoulSkill(40011175);
                            /*toDrop.setBossDamage(selectedEquip.getBossDamage());
                            toDrop.setIgnorePDR(selectedEquip.getIgnorePDR());
                            toDrop.setTotalDamage(selectedEquip.getTotalDamage());
                            toDrop.setAllStat(selectedEquip.getAllStat());*/
                            toDrop.setNirvanaFlame(new NirvanaFlame(selectedEquip.getNirvanaFlame()));
                            toDrop.initState(true);
                            toDrop.initState(false);
                            cm.gainItem(selectedEquipId, -1);
                            cm.addFromDrop(cm.getC(), toDrop, false);
                            var text = "#b#e回真成功。\r\n";
                            cm.sendNext(text);
                            status = -1;
                            break;
                        case 1:
                            for (var i = 0; i < equips.length; i++) {
                                if (selectedEquipId == equips[i][0]) {
                                    var toDrop = cm.getNewEquip(equips[i][1]);
                                    toDrop.setEnhance(18);
                                    toDrop.setViciousHammer(1);
                                    toDrop.setPlatinumHammer(5);
                                    toDrop.setRestUpgradeCount(toDrop.getRestUpgradeCount() + 6);
                                    toDrop.setPotential1(20001);
                                    toDrop.setPotential2(20001);
                                    toDrop.setPotential3(20001);
                                    toDrop.setPotential4(22001);
                                    toDrop.setPotential5(22001);
                                    toDrop.setPotential6(22001);
                                    toDrop.setSoulSocketID(1);
                                    toDrop.setSoulOptionID(9);
                                    toDrop.setSoulOption(1);
                                    toDrop.setSoulSkill(40011175);
                                    toDrop.initState(true);
                                    toDrop.initState(false);
                                    cm.addFromDrop(cm.getC(), toDrop, false);
                                    cm.gainItem(selectedEquipId, -1);
                                    var text = "#b#e解除封印成功。\r\n";
                                    cm.worldSpouseMessage(41, "[系統廣播]: 恭喜玩家[" + cm.getPlayer().getName() + "]解除了創世武器的封印。");
                                    cm.sendNext(text);
                                    status = -1;
                                }
                            }
                            break;
                        case 2:
                            cm.getPlayer().setCharacterSet("創世技能_" + cm.getPlayer().getId(), 1);
                            cm.teachSkill(80002632, 1);
                            cm.teachSkill(80002633, 1);
                            var text = "#b#e學習技能成功。\r\n";
                            cm.sendNext(text);
                            status = -1;
                            break;
                        case 3:
                            if (selectedEquip.getEnhance() >= 25) {
                                var text = "#b#e此裝備已經無法再進行星力強化。\r\n";
                                cm.sendNext(text);
                                cm.dispose();
                                return;
                            }
                            var toDrop = selectedEquip.copy();
                            toDrop.setEnhance(toDrop.getEnhance() + 1);
                            cm.gainItem(selectedEquipId, -1);
                            cm.addFromDrop(cm.getC(), toDrop, false);
                            var text = "#b#e強化成功。\r\n";
                            cm.sendNext(text);
                            status = -1;
                            break;
                        case 4:
                            if (selectedEquip.getBossDamage() >= 230) {
                                var text = "#b#e此裝備已經無法再進行附魔強化。\r\n";
                                cm.sendNext(text);
                                cm.dispose();
                                return;
                            }
                            var toDrop = selectedEquip.copy();
                            toDrop.setIgnorePDR(toDrop.getIgnorePDR() + 1);
                            toDrop.setTotalDamage(toDrop.getTotalDamage() + 1);
                            toDrop.setBossDamage(toDrop.getBossDamage() + 1);
                            toDrop.setTotalDamage(toDrop.getTotalDamage() + 1);
                            toDrop.setPad(toDrop.getPad() + 5);
                            toDrop.setMad(toDrop.getMad() + 5);
                            toDrop.setStr(toDrop.getStr() + 5);
                            toDrop.setInt(toDrop.getInt() + 5);
                            toDrop.setDex(toDrop.getDex() + 5);
                            toDrop.setLuk(toDrop.getLuk() + 5);
                            cm.gainItem(selectedEquipId, -1);
                            cm.addFromDrop(cm.getC(), toDrop, false);
                            var text = "#b#e強化成功。\r\n";
                            cm.sendNext(text);
                            status = -1;
                            break;
                    }
                }
            }
            break;
        case 3:
            if (!haveItem) {
                cm.sendOk("您的素材不足");
                cm.dispose();
                return;
            }
            else if(selectedOption != 6){
                cm.dispose();
                return;
            }
            else{
                selectedNewEquipId = equips[selection][1];
                cm.sendYesNo("#d#e確定要將你的創世武器變換為#b"+ maskItem(selectedNewEquipId)+"#d嗎？");
            }
            break;
        case 4:
            if(selectedOption != 6){
                cm.dispose();
                return;
            }
            else{
                for (var i = 0; i < reqItem[selectedOption - 1].length; i++) {
                    cm.gainItem(reqItem[selectedOption - 1][i][0], -1 * reqItem[selectedOption - 1][i][1]);
                }
                var toDrop = cm.getNewEquip(selectedNewEquipId);
                toDrop.setEnhance(selectedEquip.getEnhance());
                toDrop.setViciousHammer(1);
                toDrop.setPlatinumHammer(5);
                toDrop.setRestUpgradeCount(toDrop.getRestUpgradeCount() + 6);
                toDrop.setPotential1(selectedEquip.getPotential1());
                toDrop.setPotential2(selectedEquip.getPotential2());
                toDrop.setPotential3(selectedEquip.getPotential3());
                toDrop.setPotential4(selectedEquip.getPotential4());
                toDrop.setPotential5(selectedEquip.getPotential5());
                toDrop.setPotential6(selectedEquip.getPotential6());
                toDrop.setState(selectedEquip.getState(false), false); //設置新道具的潛能等級
                toDrop.setState(selectedEquip.getState(true), true); //設置新道具的潛能等級
                toDrop.setSoulSocketID(1);
                toDrop.setSoulOptionID(9);
                toDrop.setSoulOption(1);
                toDrop.setSoulSkill(40011175);
                toDrop.setNirvanaFlame(new NirvanaFlame(selectedEquip.getNirvanaFlame()));
                toDrop.initState(true);
                toDrop.initState(false);
                cm.gainItem(selectedEquipId, -1);
                cm.addFromDrop(cm.getC(), toDrop, false);
                var text = "#b#e變換成功。\r\n";
                cm.sendNext(text);
                status = -1;
                break;
            }
            break;
    }
}


function is封印創世(itemid) {
    for (var i = 0; i < equips.length; i++) {
        if (itemid == equips[i][0]) {
            return true;
        }
    }
    return false;
}

function is創世(itemid) {
    for (var i = 0; i < equips.length; i++) {
        if (itemid == equips[i][1]) {
            return true;
        }
    }
    return false;
}
