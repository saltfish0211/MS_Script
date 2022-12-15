

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");

var coin = [4319931, 4319932, 4319933];
var equipId = [1202193, 1113220, 1114400];

var selectedCoin;
var selectedEquipId;
var currentEnhance;
var enhanceAmount = [1,1,2,6,10];
var selectedEquip;

function start() {
    status = -1;
    action(1, 0, 0);
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
            var text = Logo + "#b#e此為升星系統，您想要做什麼？\r\n";
            text += "#b#n請將需要強化的道具放在裝備欄第一格，避免選錯道具\r\n";
            text += maskListNode(1, "#d#e消耗" + maskItem(coin[0]) + "進行" + maskItem(equipId[0]) + "強化");
            text += "\r\n#b#n    " + maskItem(equipId[0]) + " 15、20、25星時增加生怪率、生怪時間間隔、地圖最大怪物數量\r\n";
            text += maskListNode(2, "#d#e消耗" + maskItem(coin[1]) + "進行" + maskItem(equipId[1]) + "強化");
            text += "\r\n#b#n    " + maskItem(equipId[1]) + " 15、20、25星時減少技能冷卻時間、增加抓怪範圍、抓怪數量\r\n";
            text += maskListNode(3, "#d#e消耗" + maskItem(coin[2]) + "進行" + maskItem(equipId[2]) + "強化");
            text += "\r\n#b#n    " + maskItem(equipId[2]) + " 15、20、25星時減少技能冷卻時間、增加最大燃燒階段\r\n";
            text += maskListNode(4, "#b#e查看裝備強化素質");
            cm.sendOk(text);
            break;
        case 1:
            switch (selection) {
                case 1:
                    selectedCoin = coin[0];
                    selectedEquipId = equipId[0];
                    selectedEquip = cm.getInventory(1).getItem(1);
                    break;
                case 2:
                    selectedCoin = coin[1];
                    selectedEquipId = equipId[1];
                    selectedEquip = cm.getInventory(6).getItem(1);
                    break;
                case 3:
                    selectedCoin = coin[2];
                    selectedEquipId = equipId[2];
                    selectedEquip = cm.getInventory(6).getItem(1);
                    break;
                case 4:
                    var intro = "#d#e" + maskItem(equipId[0]) + "強化數值：\r\n";
                    intro += "#b#n0星時： 最大怪物量+60%/單次生怪量+20%/生怪間隔+60%\r\n";
                    intro += "15星時： 最大怪物量+70%/單次生怪量+30%/生怪間隔+65%\r\n";
                    intro += "20星時： 最大怪物量+80%/單次生怪量+40%/生怪間隔+70%\r\n";
                    intro += "25星時： 最大怪物量+100%/單次生怪量+50%/生怪間隔+80%\r\n";
                    intro += "#d#e" + maskItem(equipId[1]) + "強化數值：\r\n";
                    intro += "#b#n0星時： 技能冷卻時間5秒/抓怪範圍100%/抓取15隻怪\r\n";
                    intro += "15星時： 技能冷卻時間4秒/抓怪範圍150%/抓取20隻怪\r\n";
                    intro += "20星時： 技能冷卻時間3秒/抓怪範圍300%/抓取25隻怪\r\n";
                    intro += "25星時： 技能冷卻時間2秒/抓怪範圍500%/抓取30隻怪\r\n";
                    intro += "#d#e" + maskItem(equipId[2]) + "強化數值：\r\n";
                    intro += "#b#n0星時： 燃燒階段10/冷卻30分鐘\r\n";
                    intro += "15星時： 燃燒階段15/冷卻20分鐘\r\n";
                    intro += "20星時： 燃燒階段20/冷卻15分鐘\r\n";
                    intro += "25星時： 燃燒階段30/冷卻10分鐘\r\n";
                    cm.sendOk(intro);
                    cm.dispose();
                    break;
            }
            if(selection!=4){
                var text = "";
                if (selectedEquip == null || selectedEquip.getItemId() != selectedEquipId) {
                    text = "您的裝備欄第一格並非" + maskItem(selectedEquipId);
                    cm.sendOk(text);
                    cm.dispose();
                    return;
                }
                
                currentEnhance = selectedEquip.getEnhance();
                if (selectedEquip.getEnhance() >= 25) {
                    text = "這個裝備已經無法再進行強化了。";
                    cm.sendOk(text);
                    cm.dispose();
                    return;
                }
                else if (!cm.haveItem(selectedCoin, enhanceAmount[Math.floor(currentEnhance/5)])) {
                    text = "#b#e您目前的" + maskItem(selectedEquipId) + "星力為: " + currentEnhance + "星\r\n強化需要" + enhanceAmount[Math.floor(currentEnhance/5)] + "個" + maskItem(selectedCoin) + "\r\n您沒有足夠的" + maskItem(selectedCoin);
                    cm.sendOk(text);
                    cm.dispose();
                    break;
                }
                else {
                    text = "#b#e您目前的" + maskItem(selectedEquipId) + "星力為: " + currentEnhance + "星\r\n強化需要" + enhanceAmount[Math.floor(currentEnhance/5)] + "個" + maskItem(selectedCoin) + "\r\n確定要繼續嗎？";
                    cm.sendYesNo(text);
                }
            }
            break;
        case 2:
            var toDrop = selectedEquip.copy();
            toDrop.setEnhance(selectedEquip.getEnhance() + 1);
            cm.gainItem(selectedCoin, -1 * enhanceAmount[Math.floor(currentEnhance/5)]);
            cm.gainItem(selectedEquipId, -1);
            cm.addFromDrop(cm.getC(), toDrop, false)
            var text = "#b#e強化成功，目前星數為："+ toDrop.getEnhance() +"星，請確認。\r\n";
            cm.sendNext(text);
            status = -1;
            FileoutputUtil.logToFile("logs/輪迴幽暗升星.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 目標裝備:" + cm.getItemName(selectedEquip.getItemId()) + " " + selectedEquip.getItemId() + "\r\n");
            break;
    }
}