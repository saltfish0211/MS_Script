/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
load('nashorn:mozilla_compat.js');
importPackage(Packages.client.inventory);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.tools);
importPackage(java.lang);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var status = 0;

var selected;
var statsSel;

var fromCard;
var fromItem;
var targetItem;
var fromSlot;
var targetSlot;
var price = 200000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        var text = "#d#e歡迎來到萌獸鐵覘系統\r\n";
        text += "我可以將您#r第一格#d的萌獸變換為任何您想要變換的萌獸外型，但是#r成為外觀素材的萌獸會消失#d。\r\n";
        text += "#r使用完畢請換頻或吃掉外觀萌獸才會看到能力變化。\r\n";
        text += "#r使用完畢請換頻或吃掉外觀萌獸才會看到能力變化。\r\n";
        text += "#r使用完畢請換頻或吃掉外觀萌獸才會看到能力變化。#d\r\n";
        text += "請謹慎選擇操作，並且使用時#r需要收你20萬楓點#d，即使如此還是要繼續嗎？";

        cm.sendYesNo(text);

    } else if (status == 1) {
        if (cm.getPlayer().getCSPoints(2) < price) {
            cm.sendSimple("需要"+price+"楓點，您的楓點不夠。");
            cm.dispose()
            return;
        }
        fromItem = cm.getInventory(2).getItem(1);
        if(fromItem  == null || fromItem.getFamiliarCard() == null){
            cm.sendSimple("#d#e你的第一格沒有放道具或不是萌獸卡！");
            cm.dispose();
            return;
        }
        fromCard = fromItem.getFamiliarCard();
        var avail = "";
        for (var i = 2; i < 150; i++) {
            if (cm.getInventory(2).getItem(i) != null && ItemConstants.getFamiliarByItemID(cm.getInventory(2).getItem(i).getItemId()) > 0) {
                avail += "#L" + Math.abs(i) + "##t" + cm.getInventory(2).getItem(i).getItemId() + "##l\r\n";
            }
        }
        cm.sendSimple("#d#e請選擇做為外觀的萌獸卡（此萌獸卡的#r外觀#d會被繼承！）\r\n#b" + avail);

    }  else if (status == 2) {
        targetItem = cm.getInventory(2).getItem(selection);
        if(targetItem == null || targetItem.getFamiliarCard() == null){
            cm.sendSimple("#d#e設定道具異常請洽管理員");
            cm.dispose();
            return;
        }
        targetCard = targetItem.getFamiliarCard();
        targetSlot = selection;
        cm.sendYesNo("請問您是否要將" + maskItem(fromItem.getItemId())+"的外觀變換為"+ maskItem(targetItem.getItemId()) + "\r\n#b");

    }  else if (status == 3) {

        cm.getPlayer().modifyCSPoints(2, -1 * price);
        FileoutputUtil.logToFile("logs/萌獸鐵覘.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + 
        " 原本萌獸:" + fromItem.getItemId() + " ("+ fromCard.getOption1() + "," + fromCard.getOption2() + "," + fromCard.getOption3() + ") " +
        " 目標萌獸:" + targetItem.getItemId() + " ("+ targetCard.getOption1() + "," + targetCard.getOption2() + "," + targetCard.getOption3() + ")\r\n");
        targetCard.setOption1(fromCard.getOption1());
        targetCard.setOption2(fromCard.getOption2());
        targetCard.setOption3(fromCard.getOption3());
        targetCard.setLevel(fromCard.getLevel());
        targetCard.setGrade(fromCard.getGrade());
        cm.gainItem(fromItem.getItemId(), -1);
        targetItem.setFamiliarCard(targetCard);
        cm.sendOk("#d#e你的萌獸外觀已成功變換為#n#b" + maskItem(targetItem.getItemId()) + "#r#e，請重新換頻以檢查效果#d。");
        status = -1;
    }
}
