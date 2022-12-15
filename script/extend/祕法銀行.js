//Mina_MS
var status = -1;
var 特效 = "#fEffect/CharacterEff/1082312/2/0#";
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
importPackage(Packages.constants);
load("scripts/霞光共通.js");
load("scripts/config/RewardConfig.js");

var arcItemStartId = 1712001;
var autItemStartId = 1713000;
var withdrawCost = 0.2;
var msPointCost = 3000;
var isWithdraw = false;
var totalExp = 0;
var selectedArc = null;
var selectedPosition = 0;


var withDrawMax = 0;
var withdrawSelection = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if ((status >= 2 && isWithdraw == false && mode != 1) || (status >= 3 && isWithdraw && mode != 1) || mode == 0) {
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
            var text = "#d#e歡迎使用祕法銀行系統\r\n";
            text += "我可以將你的祕法符文存到銀行裡面，讓你提領給別隻角色。\r\n但是存入祕法符文會有#r20%#d的損失，並且需要收你#r"+msPointCost+"#d楓點！\r\n";
            text += "若要存入祕法符文請將欲存入的祕法符文裝備在自己身上！\r\n";
            text += maskListNode(0, "我要存入祕法符文");
            text += maskListNode(1, "我要領出祕法符文");
            text += maskListNode(2, "我要存入真實符文");
            text += maskListNode(3, "我要領出真實符文");
            
            cm.sendNext(text);
            break;
        case 1:
            isWithdraw = selection == 1 || selection == 3;
            switch(selection){
                case 0:
                    var haveArc = false;
                    text = "#d#e請選擇需要存入的祕法符文\r\n";
                    for (var i = -1605; i <= 1600; i++) {
                        var equipped = cm.getPlayer().getInventory(-1).getItem(i);
                        if (equipped != null && isArc(equipped.getItemId()) &&  equipped.getARCLevel() >= 1 && equipped.getARCLevel() <= 20) {
                                text += maskListNode(i * -1, maskItem(equipped.getItemId()) + " 等級:" + equipped.getARCLevel() + " 成長度:" + equipped.getArcExp() + "\r\n");
                            haveArc = true;
                        }
                    }
                    if(!haveArc){
                        cm.sendOk("您沒有裝備任何祕法符文");
                        cm.dispose();
                    }
                    else if(cm.getPlayer().getCSPoints(2) < msPointCost){
                        cm.sendOk("您的楓點不足"+msPointCost);
                        cm.dispose();
                    }
                    else{
                        cm.sendNext(text);
                    }
                    break;
                case 1:
                    text = "#d#e請選擇想要提領的ARC\r\n";
                    for (var i = arcItemStartId; i < arcItemStartId + 6; i++) {
                        var currentExp = cm.getCharacterSet("祕法銀行"+i);
                        if(currentExp > 0){
                            text += maskListNode( i ,maskItem(i) + " 成長度:" + currentExp + "\r\n");
                        }
                        else{
                            text += "#k" + maskItem(i) + " 成長度:" + currentExp + "#d\r\n";
                        }
                    }
                    cm.sendNext(text);
                    break;
                case 2:
                    var haveAut = false;
                    text = "#d#e請選擇需要存入的真實符文\r\n";
                    for (var i = -1705; i <= 1700; i++) {
                        var equipped = cm.getPlayer().getInventory(-1).getItem(i);
                        if (equipped != null && isAut(equipped.getItemId()) &&  equipped.getAUTLevel() >= 1 && equipped.getAUTLevel() < 10) {
                                text += maskListNode(i * -1, maskItem(equipped.getItemId()) + " 等級:" + equipped.getAUTLevel() + " 成長度:" + equipped.getAUTExp() + "\r\n");
                            haveArc = true;
                        }
                    }
                    if(!haveArc){
                        cm.sendOk("您沒有裝備任何真實符文");
                        cm.dispose();
                    }
                    else if(cm.getPlayer().getCSPoints(2) < msPointCost){
                        cm.sendOk("您的楓點不足"+msPointCost);
                        cm.dispose();
                    }
                    else{
                        cm.sendNext(text);
                    }
                    break;
                case 3:
                    text = "#d#e請選擇想要提領的AUT\r\n";
                    for (var i = autItemStartId; i < autItemStartId + 2; i++) {
                        var currentExp = cm.getCharacterSet("祕法銀行"+i);
                        if(currentExp > 0){
                            text += maskListNode( i ,maskItem(i) + " 成長度:" + currentExp + "\r\n");
                        }
                        else{
                            text += "#k" + maskItem(i) + " 成長度:" + currentExp + "#d\r\n";
                        }
                    }
                    cm.sendNext(text);
                    break;
            }
            break;
        case 2:
            if(isWithdraw){
                withdrawSelection = selection;
                withDrawMax = cm.getCharacterSet("祕法銀行"+withdrawSelection);
                text = "#d#e需要提領多少？您最多可以提領"+withDrawMax+"點經驗值。\r\n";
                cm.sendGetNumber(text, 1, 1, withDrawMax);
            }
            else{
                selectedPosition = selection * -1;
                selectedArc = cm.getPlayer().getInventory(-1).getItem(selectedPosition);
                totalExp = Math.ceil(getTotalExp(selectedArc) * (1 - withdrawCost));
                var text = "#d#e您確定要將等級" + selectedArc.getARCLevel() + "的"+maskItem(selectedArc.getItemId()) + "全部存入嗎？總共可以獲得"+ totalExp +"點成長度\r\n";
                text += "#r不同種類的祕法符文成長度無法交換，確定要這樣做嗎？"
                cm.sendYesNo(text);
            }
            break;
        case 3:
            if(isWithdraw){
                if(selection > withDrawMax){
                    var text = "#d#e您的經驗值不足。";
                    cm.sendOk(text);
                    cm.dispose();
                }
                else if(!cm.canHold(withdrawSelection, selection)){
                    var text = "#d#e您的空間不足。";
                    cm.sendOk(text);
                    cm.dispose();
                }
                else{
                    for(var i=0;i<selection;i++){

                        cm.gainItem(withdrawSelection, 1);
                    }
                    cm.setCharacterSet("祕法銀行"+withdrawSelection, cm.getCharacterSet("祕法銀行"+withdrawSelection) - selection);
                    var text = "#d#e提領成功，請確認背包。";
                    cm.sendOk(text);
                    cm.dispose();
                }
            }
            else{
                cm.removeSlot(-1, selectedPosition, 1);
                cm.getPlayer().modifyCSPoints(2,-1 * msPointCost);
                cm.setCharacterSet("祕法銀行"+selectedArc.getItemId(), cm.getCharacterSet("祕法銀行"+selectedArc.getItemId()) + totalExp);
                var text = "#d#e存入ARC完成，共獲得"+totalExp+"點經驗值。";
                cm.sendOk(text);
                cm.dispose();
            }
            break;
    }
}

function isArc(itemid){
    return itemid >= arcItemStartId && itemid <= arcItemStartId + 5;
}

function isAut(itemid){
    return itemid >= autItemStartId && itemid <= autItemStartId + 2;
}
function getTotalExp(item){
    var preExp = 0;
    if(item.getItemId() >= autItemStartId){
        for(var i = 1;i<item.getAUTLevel();i++){
            preExp += ItemConstants.getAutExpNeededForLevel(i, item.getItemId() % 10);
        }
        return preExp + item.getAUTExp();
    }
    else{
        for(var i = 1;i<item.getARCLevel();i++){
            preExp += ItemConstants.getArcExpNeededForLevel(i, item.getItemId() % 10);
        }
        return preExp + item.getArcExp();
    }
}