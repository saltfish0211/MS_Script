/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = 0;
var slot = new Array();
var stats = new Array(
    "力量", "敏捷", "運氣", "智力", "HP",
    "MP", "攻擊力", "魔法攻擊力", "防禦力", "魔法防禦力",
    "命中值", "迴避值", "靈敏度", "移動速度", "跳躍力",
    "可使用卷軸次數", "金錘子", "白金槌", "已使用卷軸次數", "強化等級",
    "潛能屬性 1", "潛能屬性 2", "潛能屬性 3", "潛能屬性 4", "潛能屬性 5", "潛能屬性 6",
    "無視防禦", "總傷害", "Boss傷害", "全屬性%", "ARC", "AUT", "鐵覘外觀"); //26
var selected;
var statsSel;
var selectedItem;

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

        var avail = "";
        for (var i = 0; i < 150; i++) {
            if (cm.getEquipBySlot(i) != null) {
                avail += "#L" + Math.abs(i) + "##t" + cm.getEquipBySlot(i).getItemId() + "##l\r\n";
            }
            slot.push(i);
        }
        cm.sendSimple("你想要修改哪一個裝備?\r\n#rTip:裝備改屬 先改屬性再改星力 否則星力計算會出錯！\r\n#b" + avail);

    } else if (status == 1) {
        selectedItem = cm.getEquipBySlot(selection);
        var text = "";
        for (var i = 0; i < stats.length; i++) {
            text += "#L" + i + "#" + stats[i] + "#l\r\n";
        }
        cm.sendSimple("你已經決定修改你的 #b#t" + selectedItem.getItemId() + "##k.\r\n你想修改哪個?\r\n#b" + text);
    } else if (status == 2) {
        statsSel = selection;
        cm.sendGetNumber("你想要調整 #b#t" + selectedItem.getItemId() + "##k's " + stats[statsSel] + " 嗎?", 0, 0, statsSel != 32 ? 60004 : 9999999);
    } else if (status == 3) {
        switch (statsSel) {
            case 0:
                selectedItem.setStr(selection);
                break;
            case 1:
                selectedItem.setDex(selection);
                break;
            case 2:
                selectedItem.setLuk(selection);
                break;
            case 3:
                selectedItem.setInt(selection);
                break;
            case 4:
                selectedItem.setHp(selection);
                break;
            case 5:
                selectedItem.setMp(selection);
                break;
            case 6:
                selectedItem.setPad(selection);
                break;
            case 7:
                selectedItem.setMad(selection);
                break;
            case 8:
                selectedItem.setPdd(selection);
                break;
            case 9:
                selectedItem.setMdd(selection);
                break;
            case 10:
                selectedItem.setAcc(selection);
                break;
            case 11:
                selectedItem.setAvoid(selection);
                break;
            case 12:
                selectedItem.setHands(selection);
                break;
            case 13:
                selectedItem.setSpeed(selection);
                break;
            case 14:
                selectedItem.setJump(selection);
                break;
            case 15:
                selectedItem.setRestUpgradeCount(selection);
                break;
            case 16:
                selectedItem.setViciousHammer(selection);
                break;
            case 17:
                selectedItem.setPlatinumHammer(selection);
                break;
            case 18:
                selectedItem.setCurrentUpgradeCount(selection);
                break;
            case 19:
                selectedItem.setStarForceLevel(selection);
                break;
            case 20:
                selectedItem.setPotential1(selection);
                selectedItem.initState(false);
                break;
            case 21:
                selectedItem.setPotential2(selection);
                selectedItem.initState(false);
                break;
            case 22:
                selectedItem.setPotential3(selection);
                selectedItem.initState(false);
                break;
            case 23:
                selectedItem.setPotential4(selection);
                selectedItem.initState(true);
                break;
            case 24:
                selectedItem.setPotential5(selection);
                selectedItem.initState(true);
                break;
            case 25:
                selectedItem.setPotential6(selection);
                selectedItem.initState(true);
                break;
            case 26:
                selectedItem.setIgnorePDR(selection);
                break;
            case 27:
                selectedItem.setTotalDamage(selection);
                break;
            case 28:
                selectedItem.setBossDamage(selection);
                break;
            case 29:
                selectedItem.setAllStat(selection);
                break;
            case 30:
                selectedItem.setARC(selection);
                break;
            case 31:
                selectedItem.setAUT(selection);
                break;
            case 32:
                selectedItem.setItemSkin(selection);
                break;
        }
        cm.sendOk("你的 #b#t" + selectedItem.getItemId() + "##k's " + stats[statsSel] + " 調整為 " + selection + ".");
        status = -1;
    }
}