/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var status = 0;
var slot = new Array();

var toChangePotential = [
    2090, 40, 44, 62, 2040, 2046
] //萬位數稀有度，尾數+1~4為屬性值


var selected;
var statsSel;

var fromEquip;
var targetEquip;
var fromPotential;
var targetPotential;

var abilityTag = ["力量","敏捷","智力","幸運"];

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
        fromEquip = cm.getEquipBySlot(selection);
        var avail = "";
        for (var i = 0; i < 150; i++) {
            if (cm.getEquipBySlot(i) != null) {
                avail += "#L" + Math.abs(i) + "##t" + cm.getEquipBySlot(i).getItemId() + "##l\r\n";
            }
            slot.push(i);
        }
        cm.sendSimple("你想要複製到哪個裝備？\r\n#b" + avail);

    }  else if (status == 2) {
        targetEquip = cm.getEquipBySlot(selection);
        var avail = "";
        for (var i = 0; i < 4; i++) {
            avail += "#L" + Math.abs(i+1) + "#" + abilityTag[i] + "#l\r\n";
        }
        cm.sendSimple("請選擇原始裝備潛能參數\r\n#b" + avail);

    }  else if (status == 3) {
        fromPotential = selection;
        var avail = "";
        for (var i = 0; i < 4; i++) {
            avail += "#L" + Math.abs(i+1) + "#" + abilityTag[i] + "#l\r\n";
        }
        cm.sendSimple("請選擇目標裝備潛能參數\r\n#b" + avail);

    } else if (status == 4) {
        targetPotential = selection;
        targetEquip.setExpiration(-1);
        targetEquip.setPotential1(getFixedPotential(fromEquip.getPotential1()));
        targetEquip.setPotential2(getFixedPotential(fromEquip.getPotential2()));
        targetEquip.setPotential3(getFixedPotential(fromEquip.getPotential3()));
        targetEquip.setPotential4(getFixedPotential(fromEquip.getPotential4()));
        targetEquip.setPotential5(getFixedPotential(fromEquip.getPotential5()));
        targetEquip.setPotential6(getFixedPotential(fromEquip.getPotential6()));
        targetEquip.setStarForceLevel(fromEquip.getStarForceLevel());
        if(targetEquip.getPlatinumHammer() == 0){
            targetEquip.setViciousHammer(fromEquip.getViciousHammer());
            targetEquip.setPlatinumHammer(fromEquip.getPlatinumHammer());
            targetEquip.setRestUpgradeCount(targetEquip.getRestUpgradeCount() + fromEquip.getPlatinumHammer() + fromEquip.getViciousHammer());
        }
        targetEquip.initState(true);
        targetEquip.initState(false);
        cm.sendOk("你的 #b#t" + targetEquip.getItemId()+ "#複製潛能成功。");
        status = -1;
    }
}

function getFixedPotential(potential){
    var potCode = potential%10000 - fromPotential;
    if(targetPotential == 2 && potential == 40048){
        return 40047;
    } 
    if(targetPotential == 3 && potential%10000 == 51){
        return potential + 1;
    } 
    else if(targetPotential != 3 && potential%10000 == 52){
        return potential - 1;
    } //處理物魔攻

    for(var i=0;i<toChangePotential.length;i++){
        if(potCode == toChangePotential[i]){
            cm.getPlayer().dropMessage(6, "原始潛能:"+potential+" 潛能代碼:" + (potential - fromPotential + targetPotential));
            return potential - fromPotential + targetPotential;
        }
    }
    return potential;
}