/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var status = 0;

var selected;
var statsSel;

var fromEquip;
var targetEquip;
var fromSlot;
var targetSlot;

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
        var text = "#d#e歡迎來到時裝武器鐵覘系統\r\n";
        text += "我可以將您#r第一格#d的點裝武器變換為任何您想要變換的外型，但是#r成為外觀素材的武器會消失#d。\r\n";
        text += "#r使用完畢請換頻，新武器會在你選的外觀武器那格。\r\n";
        text += "#r使用完畢請換頻，新武器會在你選的外觀武器那格。\r\n";
        text += "#r使用完畢請換頻，新武器會在你選的外觀武器那格。#d\r\n";
        text += "請謹慎選擇操作，即使如此還是要繼續嗎？";

        cm.sendYesNo(text);

    } else if (status == 1) {
        
        if( cm.getDecorationBySlot(1) == null){
            cm.sendSimple("#d#e你的第一格沒有放點裝！");
            cm.dispose();
            return;
        }
        else if( Math.floor(cm.getDecorationBySlot(1).getItemId() / 10000) != 170){
            cm.sendSimple("#d#e你的第一格不是武器！");
            cm.dispose();
            return;
        }
        fromEquip = cm.getDecorationBySlot(1);
        var avail = "";
        for (var i = 2; i < 150; i++) {
            if (cm.getDecorationBySlot(i) != null && Math.floor(cm.getDecorationBySlot(i).getItemId() / 10000) == 170) {
                avail += "#L" + Math.abs(i) + "##t" + cm.getDecorationBySlot(i).getItemId() + "##l\r\n";
            }
        }
        cm.sendSimple("#d#e請選擇做為外觀的裝備（此裝備的#r外觀#d會被繼承！）\r\n#b" + avail);

    }  else if (status == 2) {
        targetEquip = cm.getDecorationBySlot(selection);
        targetSlot = selection;
        cm.sendYesNo("請問您是否要將" + maskItem(fromEquip.getItemId())+"的外觀變換為"+ maskItem(targetEquip.getItemId()) + "\r\n#b");

    }  else if (status == 3) {
        FileoutputUtil.logToFile("logs/時裝武器鐵覘.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + 
        " 原本武器:" + fromEquip.getItemId() + " ("+ fromEquip.getPotential1() + "," + fromEquip.getPotential2() + "," + fromEquip.getPotential3() + ") " +
        " 目標武器:" + targetEquip.getItemId() + " ("+ targetEquip.getPotential1() + "," + targetEquip.getPotential2() + "," + targetEquip.getPotential3() + ")\r\n");
        targetEquip.setExpiration(-1);
        targetEquip.setStr(fromEquip.getStr());
        targetEquip.setDex(fromEquip.getDex());
        targetEquip.setLuk(fromEquip.getLuk());
        targetEquip.setInt(fromEquip.getInt());
        targetEquip.setPad(fromEquip.getPad());
        targetEquip.setMad(fromEquip.getMad());
        targetEquip.setPotential1(fromEquip.getPotential1());
        targetEquip.setPotential2(fromEquip.getPotential2());
        targetEquip.setPotential3(fromEquip.getPotential3());
        targetEquip.setPotential4(fromEquip.getPotential4());
        targetEquip.setPotential5(fromEquip.getPotential5());
        targetEquip.setPotential6(fromEquip.getPotential6());
        targetEquip.initState(true);
        targetEquip.initState(false);
        cm.gainItem(fromEquip.getItemId(), -1);
        cm.sendOk("#d#e你的武器外觀已成功變換為#n#b" + maskItem(targetEquip.getItemId()) + "#r#e，請重新換頻以檢查效果#d。");
        status = -1;
    }
}
