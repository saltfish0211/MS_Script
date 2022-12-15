/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
load('nashorn:mozilla_compat.js');
load("scripts/霞光共通.js");
importPackage(java.lang);

var status = 0;
var selected;
var statsSel;
var selectedItem;
var selectedItemSlot;
var selectedSkin;
var selectedSkinSlot;
var msPointCost = 1000;

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
        //avail += maskListNode(1, "進行裝備鐵砧");
        avail += maskListNode(2, "進行時裝鐵砧");
        cm.sendSimple("#e#d歡迎來到萬能鐵砧功能，您可以在這裡進行套服、上下衣與武器的鐵砧功能，每個操作都需要"+msPointCost+"楓點，且#r使用過後作為素材的道具會徹底消失#d。\r\n#n#b" + avail);

    } else if (status == 1) {
        if(cm.getPlayer().getCSPoints(2) < msPointCost){
            cm.sendOk("您的楓點不足"+msPointCost);
            cm.dispose();
            return;
        }
        selectedType = selection;
        var avail = "";
        if(selectedType == 1){
            for (var i = 0; i < 150; i++) {
                if (cm.getEquipBySlot(i) != null && isValid(cm.getEquipBySlot(i).getItemId())) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getEquipBySlot(i).getItemId() + "##l\r\n";
                }
            }
        }
        else if(selectedType == 2){
            for (var i = 0; i < 150; i++) {
                if (cm.getDecorationBySlot(i) != null && isValid(cm.getDecorationBySlot(i).getItemId())) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getDecorationBySlot(i).getItemId() + "##l\r\n";
                }
            }
        }
        cm.sendSimple("#d#e請選擇想要作為素質基底的裝備（此裝備不會消失）：\r\n#n#b" + avail);
    } else if (status == 2) {
        var avail = "";
        selectedItemSlot = selection;
        if(selectedType == 1){
            selectedItem = cm.getEquipBySlot(selection);
            for (var i = 0; i < 150; i++) {
                if (i != selectedItemSlot && cm.getEquipBySlot(i) != null && getItemType(selectedItem.getItemId()) == getItemType(cm.getEquipBySlot(i).getItemId())) {
                    avail +=maskListNode(i, maskItem(cm.getEquipBySlot(i).getItemId()));
                }
            }
        }
        else if(selectedType == 2){
            selectedItem = cm.getDecorationBySlot(selection);
            for (var i = 0; i < 150; i++) {
                if (i != selectedItemSlot && cm.getDecorationBySlot(i) != null && getItemType(selectedItem.getItemId()) == getItemType(cm.getDecorationBySlot(i).getItemId())) {
                    avail +=maskListNode(i, maskItem(cm.getDecorationBySlot(i).getItemId()));
                }
            }
        }
        if(avail == ""){
            cm.sendOk("您沒有同類型的裝備道具");
            cm.dispose();
            return;
        }
        cm.sendSimple("#d#e您選擇了"+ maskItem(selectedItem.getItemId()) +"作為素質基底，接下來請選擇外觀裝備（此裝備#r會#d消失）：\r\n#n#b" + avail);
    } else if (status == 3) {
        selectedSkinSlot = selection;
        if(selectedType == 1){
            selectedSkin = cm.getEquipBySlot(selection);
        }
        else if(selectedType == 2){
            selectedSkin = cm.getDecorationBySlot(selection);
        }
        if(getItemType(selectedItem.getItemId()) != getItemType(selectedSkin.getItemId())){
            cm.sendOk("您兩次選擇的裝備類別不相同");
            cm.dispose();
            return;
        }
        if(!isValid(selectedItem.getItemId())){
            cm.sendOk("不支援武器、上下衣、套服以外的裝備");
            cm.dispose();
            return;
        }
        cm.sendYesNo("你想要將" + maskItem(selectedItem.getItemId()) + "的外觀 調整為 " +  maskItem(selectedSkin.getItemId()) + " 嗎？\r\n#r#e使用過後作為外觀的道具"+maskItem(selectedSkin.getItemId())+"會徹底消失，確定要這樣做嗎？");
    } else if (status == 4) {
        cm.getPlayer().modifyCSPoints(2,-1 * msPointCost);

        var toDrop = selectedSkin.copy();
        toDrop.setStr(selectedItem.getStr());
        toDrop.setDex(selectedItem.getDex());
        toDrop.setLuk(selectedItem.getLuk());
        toDrop.setInt(selectedItem.getInt());
        toDrop.setHp(selectedItem.getHp());
        toDrop.setMp(selectedItem.getMp());
        toDrop.setPad(selectedItem.getPad());
        toDrop.setMad(selectedItem.getMad());
        toDrop.setPotential1(selectedItem.getPotential1());
        toDrop.setPotential2(selectedItem.getPotential2());
        toDrop.setPotential3(selectedItem.getPotential3());
        if(selectedType == 1){
            cm.removeSlot(1, selectedItemSlot, 1);
            cm.removeSlot(1, selectedSkinSlot, 1);
        }
        else{
            cm.removeSlot(6, selectedItemSlot, 1);
            cm.removeSlot(6, selectedSkinSlot, 1);
        }
        cm.addFromDrop(cm.getC(), toDrop, false)
        cm.sendOk("你的裝備外觀已經成功調整。");
        cm.dispose();
        return;
    }
}

function getItemType(itemId){
    return Math.floor(itemId / 10000);
}
function isValid(itemid){
    return getItemType(itemid) == 170 || getItemType(itemid) == 105 || getItemType(itemid) == 104 || getItemType(itemid) == 106;
}