

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var redeemList = [
    {
        type: 1,
        cost: 1,
        item: 4319901
    },
    {
        type: 2,
        cost: 10,
        item: 4319902
    },
    {
        type: 3,
        cost: 5000000,
        item: 4319903
    },
    {
        type: 4,
        cost: 10000,
        item: 4319904
    },
]
var selectedRedeem = null;
var selectionNode = 0;
var selectionCount = 0;
var typeText = "";
var typeTextArray = ["樂豆點", "楓點", "楓幣"];
var typeAmount = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 4 && mode == 0) {
            cm.sendOk("什麼？");
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
            var text = "請選擇您要兌換的貨幣\r\n";
            for (var i = 0; i < redeemList.length; i++) {
                var item = redeemList[i];
                switch (item.type) {
                    case 1:
                        typeText = "樂豆點";
                        typeAmount = cm.getPlayer().getCSPoints(1);
                        break;
                    case 2:
                    case 4:
                        typeText = "楓點";
                        typeAmount = cm.getPlayer().getCSPoints(2);
                        break;
                    case 3:
                        typeText = "楓幣";
                        typeAmount = cm.getMeso();
                        break;
                }
                if (!item.cantTrade) {
                    text += maskListNode(10 + item.type, "用" + maskCount(item.cost) + typeText + "兌換" + maskItem(item.item));
                }
                if (!item.cantTradeBack) {
                    text += maskListNode(20 + item.type, "用" + maskItem(item.item) + "兌換" + maskCount(item.cost) + typeText);
                }
            }
            cm.sendNext(text);
        }
        else if (status == 1) {
            selectionNode = selection;
            var text = "請輸入要兌換的數量";
            cm.sendGetNumber(text, 1, 1, 9999);
        }
        else if (status == 2) {
            selectionCount = selection;
            switch (selectionNode % 10) {
                case 1:
                    typeText = "樂豆點";
                    typeAmount = cm.getPlayer().getCSPoints(1);
                    break;
                case 2:
                    case 4:
                    typeText = "楓點";
                    typeAmount = cm.getPlayer().getCSPoints(2);
                    break;
                case 3:
                    typeText = "楓幣";
                    typeAmount = cm.getMeso();
                    break;
            }
            if (selectionNode < 20) {
                if (typeAmount < redeemList[selectionNode % 10 - 1].cost * selectionCount) {
                    cm.sendOk("您的" + typeText + "不足")
                    cm.dispose();
                }
                else if (!cm.canHold(redeemList[selectionNode % 10 - 1].item, selectionCount)) {
                    cm.sendOk("您的背包空間不足喔。")
                    cm.dispose();
                }
                else {
                    switch (selectionNode) {
                        case 11:
                            cm.getPlayer().modifyCSPoints(1,-1 * redeemList[selectionNode % 10 - 1].cost * selectionCount, true, false);
                            cm.gainItem(redeemList[selectionNode % 10 - 1].item, selectionCount);
                            break;
                        case 14:
                        case 12:
                            cm.getPlayer().modifyCSPoints(2,-1 * redeemList[selectionNode % 10 - 1].cost * selectionCount);
                            cm.gainItem(redeemList[selectionNode % 10 - 1].item, selectionCount);
                            break;
                        case 13:
                            cm.gainMeso(-1 * redeemList[selectionNode % 10 - 1].cost * selectionCount);
                            cm.gainItem(redeemList[selectionNode % 10 - 1].item, selectionCount);
                            break;
                    }
                    FileoutputUtil.logToFile("logs/貨幣換回.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 消耗道具:" + redeemList[selectionNode % 10 - 1].item + " 數量: " + selectionCount + "\r\n");
                    cm.sendOk("兌換成功");
                    cm.dispose()
                    return;
                }
            }
            else {
                if (!cm.haveItem(redeemList[selectionNode % 10 - 1].item, selectionCount)) {
                    cm.sendOk("您的" + maskItem(redeemList[selectionNode % 10 - 1].item) + "不足")
                    cm.dispose();
                    return;
                }
                else if (selectionNode == 23 && cm.getMeso() + (redeemList[selectionNode % 10 - 1].cost * selectionCount) > 99999999999) { //10兆
                    cm.sendOk("兌換後會超出楓幣限額")
                    cm.dispose();
                    return;
                }
                else {
                    switch (selectionNode) {
                        case 21:
                            cm.getPlayer().modifyCSPoints(1,redeemList[selectionNode % 10 - 1].cost * selectionCount, true, false);
                            cm.gainItem(redeemList[selectionNode % 10 - 1].item, -1 * selectionCount);
                            break;
                        case 22:
                        case 24:
                            cm.getPlayer().modifyCSPoints(2,redeemList[selectionNode % 10 - 1].cost * selectionCount);
                            cm.gainItem(redeemList[selectionNode % 10 - 1].item, -1 * selectionCount);
                            break;
                        case 23:
                            cm.gainMeso(redeemList[selectionNode % 10 - 1].cost * selectionCount);
                            cm.gainItem(redeemList[selectionNode % 10 - 1].item, -1 * selectionCount);
                            break;
                    }
                    FileoutputUtil.logToFile("logs/貨幣兌換.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 合成道具:" + redeemList[selectionNode % 10 - 1].item + " 數量: " + selectionCount + "\r\n");
                    cm.sendOk("兌換成功");
                    cm.dispose()
                    return;
                }
            }
        }
    }
}