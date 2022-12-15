

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
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


var baseCoinId = 4319941;

var selectedCoin;
var selectedEquip;
var selectedSlot;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (status >= 2 && mode == 0) {
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
            var text = Logo + "#b#e此為裝備進化系統，您想要做什麼？\r\n";
            text += "#b#n如果你持有進化晶片的話我可以替你進行裝備強化，賦予裝備額外效果。\r\n#r此效果無法使用在圖騰道具上。\r\n#e此效果會因為回真卷軸效果被初始化，回真後不補素材。\r\n";
            text += maskListNode(1, "#d#e我要進行裝備進化");
            cm.sendOk(text);
            break;
        case 1:
            var avail = "";
            for (var i = 0; i < 150; i++) {
                if (cm.getEquipBySlot(i) != null) {
                    if(Math.floor(cm.getEquipBySlot(i).getItemId() / 10000) != 120){
                        avail += "#b#L" + Math.abs(i) + "##t" + cm.getEquipBySlot(i).getItemId() + "##l\r\n";
                    }
                }
            }
            cm.sendSimple("#d#e請從您的背包選擇您想要進化的裝備：\r\n#b" + avail);
            break;
        case 2:
            selectedSlot = selection;
            selectedEquip = cm.getEquipBySlot(selection);
            if(selectedEquip.getBossDamage() + selectedEquip.getAllStat() + selectedEquip.getIgnorePDR() + selectedEquip.getTotalDamage() >= 50){
                cm.sendOk("#b#e此裝備已經無法再進行進化，#r裝備的四項進化素質合計需小於50。");
                cm.dispose();
                return;
            }
            if(Math.floor(selectedEquip.getItemId() / 10000) == 171){
                cm.sendOk("#b#e祕法符文無法進行裝備進化。");
                cm.dispose();
                return;
            }
            if(Math.floor(selectedEquip.getItemId() / 10000) == 172){
                cm.sendOk("#b#e真實符文無法進行裝備進化。");
                cm.dispose();
                return;
            }
            if(is封印創世(selectedEquip.getItemId()) || is創世(selectedEquip.getItemId())){
                cm.sendOk("#b#e創世裝備無法進行裝備進化。");
                cm.dispose();
                return;
            }
            var avail = "";
            for (var i = 0; i < 6; i++) {
                if(cm.haveItem( baseCoinId + i,1)){
                    avail += "#L" + (baseCoinId + i) + "#" + maskItem(baseCoinId + i) + "#l\r\n";
                }
            }
            if(avail != ""){
                cm.sendSimple("#d#e請選擇進化用的素材：\r\n#b" + avail);
            }
            else{
                cm.sendOk("你沒有任何進化晶片。");
                cm.dispose();
                return;
            }
            break;
        case 3:
            selectedCoin = selection;
            var toDrop = selectedEquip.copy();
            var text = "";
            switch(selectedCoin % 10){
                case 1:
                case 2:
                    text = evolveEquip(toDrop, Math.floor(Math.random() * 4 + 1))
                    break;
                case 3:
                    text = evolveEquip(toDrop, 1)
                    break;
                case 4:
                    text = evolveEquip(toDrop, 2)
                    break;
                case 5:
                    text = evolveEquip(toDrop, 3)
                    break;
                case 6:
                    text = evolveEquip(toDrop, 4)
                    break;
            }
            if(text != ""){
                cm.gainItem(selectedCoin, -1);
                cm.removeSlot(1, selectedSlot, 1);
                cm.addFromDrop(cm.getC(), toDrop, false)
                cm.sendNext("#d#e裝備進化成功，請確認裝備素質變化：\r\n" + text);
            }
            else{
                cm.sendNext("#d#e裝備進化失敗，請洽GM。");
            }
            status = -1;
            FileoutputUtil.logToFile("logs/裝備進化.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 目標裝備:" + cm.getItemName(selectedEquip.getItemId()) + " " + selectedEquip.getItemId() + " 進化物品:"+ selectedCoin+"\r\n");
            break;
    }
}

function evolveEquip(equip, mode){
    var text = "";
    mode = mode < 1 ? 1 : mode > 4 ? 4 : mode;
    isSuccess = false;
    for(var i=1;i<=4;i++){
        if(mode == i){
            isSuccess = true;
            switch(mode){
                case 1:
                    equip.setBossDamage(equip.getBossDamage() + 1);
                    text+= "#r#eBOSS傷害: " + (equip.getBossDamage() - 1) + "% > " + equip.getBossDamage() + "%\r\n";
                    break;
                case 2:
                    equip.setAllStat(equip.getAllStat() + 1);
                    text+= "#r#e全部屬性%數: " + (equip.getAllStat() - 1) + "% > " + equip.getAllStat() + "%\r\n";
                    break;
                case 3:
                    equip.setIgnorePDR( equip.getIgnorePDR() + 1);
                    text+= "#r#e無視防禦: " + (equip.getIgnorePDR() - 1) + "% > " + equip.getIgnorePDR() + "%\r\n";
                    break;
                case 4:
                    equip.setTotalDamage(equip.getTotalDamage() + 1);
                    text+= "#r#e總傷害: " + (equip.getTotalDamage() - 1) + "% > " + equip.getTotalDamage() + "%\r\n";
                    break;
            }
        }
        else{
            switch(i){
                case 1:
                    text+= "#b#eBOSS傷害: " + equip.getBossDamage() + "%\r\n";
                    break;
                case 2:
                    text+= "#b#e全部屬性%數: " + equip.getAllStat() + "%\r\n";
                    break;
                case 3:
                    text+= "#b#e無視防禦: " + equip.getIgnorePDR() + "%\r\n";
                    break;
                case 4:
                    text+= "#b#e總傷害: " + equip.getTotalDamage()  + "%\r\n";
                    break;
            }
        }
    }
    return isSuccess ? text : "";
}

function is封印創世(itemid){
    for(var i=0;i<equips.length;i++){
        if(itemid == equips[i][0]){
            return true;
        }
    }
    return false;
}

function is創世(itemid){
    for(var i=0;i<equips.length;i++){
        if(itemid == equips[i][1]){
            return true;
        }
    }
    return false;
}