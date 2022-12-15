

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.client.inventory);
load("scripts/霞光共通.js");

var potentialList = [
    {
        id: 40603,
        weight: 1,
        name: "攻擊Boss怪物時傷害：+40%"
    },
    {
        id: 40056,
        weight: 1,
        name: "爆擊傷害: +8%"
    },
    {
        id: 60002,
        weight: 1,
        name: "全屬性 : +20%"
    },
    {
        id: 40086,
        weight: 3,
        name: "全屬性 : +10%"
    },
    {
        id: 40041,
        weight: 3,
        name: "STR : +13%"
    },
    {
        id: 40042,
        weight: 3,
        name: "DEX : +13%"
    },
    {
        id: 40043,
        weight: 3,
        name: "INT : +13%"
    },
    {
        id: 40044,
        weight: 3,
        name: "LUK : +13%"
    },
    {
        id: 60028,
        weight: 5,
        name: "以角色為準，每10級STR： +4"
    },
    {
        id: 60029,
        weight: 5,
        name: "以角色為準，每10級DEX : +4"
    },
    {
        id: 60030,
        weight: 5,
        name: "以角色為準，每10級INT : +4"
    },
    {
        id: 60031,
        weight: 5,
        name: "以角色為準，每10級LUK : +4"
    },
    {
        id: 42091,
        weight: 10,
        name: "以角色為準，每10級STR： +2"
    },
    {
        id: 42092,
        weight: 10,
        name: "以角色為準，每10級DEX : +2"
    },
    {
        id: 42093,
        weight: 10,
        name: "以角色為準，每10級INT : +2"
    },
    {
        id: 42094,
        weight: 10,
        name: "以角色為準，每10級LUK : +2"
    },
];

var returnMaterial = [
    [4319916, 5]
]

var enhanceMaterial = [
    [4319916, 10],
    [4319902, 5000]
];

var decompositionCoin = 4319916;
var decompositionList = [
    [1162080, 1, 3],
    [1162081, 1, 3],
    [1162082, 1, 3],
    [1162083, 1, 3],
    [1132308, 1, 3],
    [1032316, 3, 5],
    [1012632, 3, 5],
    [1022278, 5, 10],
    [1122430, 5, 10],
    [1113306, 3, 8]
];

var totalWeight = 0;

var selectedOption;
var selectedEquip;
var selectedEquipId;

var haveItem;

var decompositionPos;
var selectedDecomposition;

function start() {
    status = -1;
    for(var i=0;i<potentialList.length;i++){
        totalWeight += potentialList[i].weight;
    }
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
            var text = Logo + "#d#e此為漆黑解放系統，您想要做什麼？\r\n";
            text += maskListNode(1, "#d#e#i" + 1162080  + ":#【口袋解放】#b#n解放受詛咒的魔導書的潛能");
            text += maskListNode(2, "#d#e#i" + 1162080  + ":#【口袋回真】#b#n清除受詛咒的魔導書上的潛能");
            text += maskListNode(9, "#d#e#i" + 4319916 + ":#【分解漆黑】#b#n分解多餘的漆黑飾品");
            cm.sendOk(text);
            break;
        case 1:
            var text = "";
            selectedOption = selection;
            switch(selectedOption){
                case 1:{
                    selectedEquip = cm.getInventory(1).getItem(1);
                    selectedEquipId = selectedEquip == null ? "" : selectedEquip.getItemId();
                    if(selectedEquipId < 1162080 || selectedEquipId > 1162083){
                        text = "您的裝備欄第一格並非受詛咒的魔導書！";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else if(selectedEquip.getPotential6() > 0){
                        text = "#d#e您的受詛咒的魔導書已經無法再解放！\r\n請使用#r【口袋回真】#d功能將現有的潛能清除後再試。";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else{
                        text = "#d#e消耗以下道具，我可以在你的" + maskItem(selectedEquipId) + "上隨機賦予一條潛能屬性，最多可以賦予六條，舊的潛能不會被覆蓋\r\n#n";
                        haveItem = true;
                        for (var i = 0; i < enhanceMaterial.length; i++) {
                            if (!cm.haveItem(enhanceMaterial[i][0], enhanceMaterial[i][1])) {
                                text += "#r" + maskItem(enhanceMaterial[i][0]) + "x" + enhanceMaterial[i][1] + "\r\n";
                                haveItem = false;
                            }
                            else {
                                text += "#b" + maskItem(enhanceMaterial[i][0]) + "x" + enhanceMaterial[i][1] + "\r\n";
                            }
                        }
                        cm.sendYesNo(text);
                    }
                    break;
                }
                case 2:{
                    selectedEquip = cm.getInventory(1).getItem(1);
                    selectedEquipId = selectedEquip == null ? "" : selectedEquip.getItemId();
                    if(selectedEquipId < 1162080 || selectedEquipId > 1162083){
                        text = "您的裝備欄第一格並非受詛咒的魔導書！";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else if(selectedEquip.getPotential1() == 0){
                        text = "#d#e您的受詛咒的魔導書沒有潛能。";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else{
                        text = "#d#e消耗以下道具，我可以將你的" + maskItem(selectedEquipId) + "的潛能全部清空，確定要繼續嗎？\r\n";
                        haveItem = true;
                        for (var i = 0; i < returnMaterial.length; i++) {
                            if (!cm.haveItem(returnMaterial[i][0], returnMaterial[i][1])) {
                                text += "#r" + maskItem(returnMaterial[i][0]) + "x" + returnMaterial[i][1] + "\r\n";
                                haveItem = false;
                            }
                            else {
                                text += "#b" + maskItem(returnMaterial[i][0]) + "x" + returnMaterial[i][1] + "\r\n";
                            }
                        }
                        cm.sendYesNo(text);
                    }
                    break;
                }
                case 9:{
                    haveItem = false;
                    var text = "#d#e請謹慎選擇要分解的漆黑飾品：\r\n#b";
                    for (var i = 1; i < 150; i++) {
                        var item = cm.getInventory(1).getItem(i);
                        if (item != null) {
                            var itemId = item.getItemId();
                            var isBlack = false;
                            for(var j=0;j<decompositionList.length;j++){
                                if(itemId == decompositionList[j][0]){
                                    isBlack = true;
                                }
                            }
                            if(isBlack){
                                haveItem= true;
                                text += "#L" + i + "# 格數:"+ i + " " + maskItem(itemId) + "#l\r\n";
                            }
                        }
                    }
                    if(!haveItem){
                        text = "您的裝備欄沒有任何漆黑飾品。";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else{
                        cm.sendOk(text);
                    }
                    break;
                }
            }
            break;
        case 2:
            switch(selectedOption){
                case 1:
                    if (!haveItem) {
                        cm.sendOk("您的素材不足");
                        cm.dispose();
                        return;
                    }
                    else {
                        var toDrop = selectedEquip.copy();
                        var pot = givePotenital(toDrop);
                        if(pot != null){
                            for (var i = 0; i < enhanceMaterial.length; i++) {
                                cm.gainItem(enhanceMaterial[i][0], -1 * enhanceMaterial[i][1]);
                            }
                            cm.gainItem(selectedEquipId, -1);
                            cm.addFromDrop(cm.getC(), toDrop, false);
                            FileoutputUtil.logToFile("logs/漆黑解放.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 賦予ID:" + selectedEquipId + " 賦予潛能:" + pot.name +"\r\n");
                            cm.sendOk("#d#e您的" + maskItem(selectedEquipId) + "潛能賦予成功：\r\n#b#n" + pot.name);
                            status = -1;
                            return;
                        }
                        else{
                            cm.sendOk("#d#e潛能賦予失敗，請洽管理員。");
                            cm.dispose();
                            return;
                        }
                    }
                    break;
                case 2:
                    if (!haveItem) {
                        cm.sendOk("您的素材不足");
                        cm.dispose();
                        return;
                    }
                    else{
                        var toDrop = selectedEquip.copy();
                        toDrop.setPotential1(0);
                        toDrop.setPotential2(0);
                        toDrop.setPotential3(0);
                        toDrop.setPotential4(0);
                        toDrop.setPotential5(0);
                        toDrop.setPotential6(0);
                        toDrop.initState(true);
                        toDrop.initState(false);
                        for (var i = 0; i < returnMaterial.length; i++) {
                            cm.gainItem(returnMaterial[i][0], -1 * returnMaterial[i][1]);
                        }
                        cm.gainItem(selectedEquipId, -1);
                        cm.addFromDrop(cm.getC(), toDrop, false);
                        cm.sendOk("#d#e您的" + maskItem(selectedEquipId) + "潛能清除成功");
                        cm.dispose();
                        return;
                    }
                    break;
                case 9:{
                    var text = "";
                    decompositionPos = selection;
                    var item = cm.getInventory(1).getItem(selection);
                    var itemId = item.getItemId();
                    var isBlack = false;
                    for(var j=0;j<decompositionList.length;j++){
                        if(itemId == decompositionList[j][0]){
                            isBlack = true;
                            selectedDecomposition = decompositionList[j];
                        }
                    }
                    if(!isBlack){
                        text = "您選擇的裝備並非漆黑裝備！";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else if(!cm.canHold(decompositionCoin, 10)){
                        text = "請確認背包空間是否充足";
                        cm.sendOk(text);
                        cm.dispose();
                    }
                    else{
                        text = "#d#e您是否確定要分解位於第" + decompositionPos + "格的" + maskItem(itemId) + "？您將可獲得以下道具：\r\n";
                        text += "#b#n" + maskItem(decompositionCoin) + "x" + selectedDecomposition[1] + "~" + selectedDecomposition[2];
                        cm.sendYesNo(text);
                    }
                    break;
                }
            }
            break;
        case 3:
            switch(selectedOption){
                case 9:{
                    var itemCount = Math.max(selectedDecomposition[1], 
                        Math.min(selectedDecomposition[2], 
                            Math.floor(Math.random() * (selectedDecomposition[2] - selectedDecomposition[1] + 1)) + selectedDecomposition[1]  ));
                    text = "分解成功，獲得了"+ itemCount+"個"+maskItem(decompositionCoin);
                    cm.gainItem(decompositionCoin, itemCount);      
                    MapleInventoryManipulator.removeFromSlot(cm.getPlayer().getClient(), MapleInventoryType.EQUIP, decompositionPos, 1, true);
                    FileoutputUtil.logToFile("logs/漆黑分解.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 分解ID:" + selectedDecomposition[0] + " 分解格數:" + decompositionPos +" 分解數量" + itemCount +"\r\n");
                    cm.sendOk(text);
                    status = -1;
                }
            }
            break;
    }
}

function givePotenital(equip){
    var pot = getRandomPotential();
    if(equip.getPotential1() == 0){
        equip.setPotential1(pot.id);
        equip.initState(false);
        return pot;
    }
    if(equip.getPotential2() == 0){
        equip.setPotential2(pot.id);
        equip.initState(false);
        return pot;
    }
    if(equip.getPotential3() == 0){
        equip.setPotential3(pot.id);
        equip.initState(false);
        return pot;
    }
    if(equip.getPotential4() == 0){
        equip.setPotential4(pot.id);
        equip.initState(true);
        return pot;
    }
    if(equip.getPotential5() == 0){
        equip.setPotential5(pot.id);
        equip.initState(true);
        return pot;
    }
    if(equip.getPotential6() == 0){
        equip.setPotential6(pot.id);
        equip.initState(true);
        return pot;
    }
    return null;
}

function getRandomPotential(){

    var randomSeed = Math.max(0, Math.min(totalWeight, Math.floor(Math.random() * totalWeight)));
    for(var i=0;i<potentialList.length;i++){
        randomSeed -= potentialList[i].weight;
        if(randomSeed <= 0){
            return potentialList[i];
        }
    }

    return potentialList[potentialList.length - 1];
}