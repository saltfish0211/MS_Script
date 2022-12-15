/* global cm */

load('nashorn:mozilla_compat.js');
load("scripts/config/CommonItemConfig.js");
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var select = -1;
var selectedMode = 0;
var currentSet = "清明混卷大賽";
var toBuy = [
    [1102557, 500],
    [2049153, 400],
];
var toBuyToken = 4001126;
var toBuyPeriod = 7;

var selfBest = 0;
var serverBest = 0;

var selectedSlot;
var baseReward = [
    [常用道具.進化晶片, 5],
    [2633634, 50],
    [常用道具.閃炫方塊, 100],
    [常用道具.附加方塊, 100],
    [3018641, 1],
]

var availCount = 0;

function start() {
     
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.sendOk("你還沒做好心理準備嗎？決定好了之後，請你再來和我說話。");
        cm.dispose();
        return;
    } else {
        status++;
    }

    switch(status){
        case 0:
            var chrText = "";
            var selfBestText = "";
            var data = cm.getConnection().prepareStatement("SELECT * FROM characterSet join characters on characterSet.accountid = characters.accountid where bossid = BINARY '" + currentSet + "' ORDER BY count Desc, characterSet.id asc,level Desc").executeQuery(); // 查詢數據
            if (data.next()) {
                serverBest = data.getInt("characterSet.count");
                chrText = data.getString("characters.name") + "(" + serverBest + ")";
            }
            else {
                chrText = "目前還沒有玩家參與";
            }
            selfBest = cm.getPlayer().getCharacterSet(currentSet);
            if (selfBest > 0) {
                selfBestText = selfBest;
            }
            else {
                selfBestText = "您還沒有參與過本活動";
            }
            var text = "#d#e歡迎來到混卷大賽\r\n";
            text += "活動期間內可以在此頁面以"+ maskItem(toBuyToken) +"兌換活動道具"+ maskItem(1102557)+"、以及期間制的"+ maskItem(2049153)+"\r\n";
            text += "使用"+ maskItem(2049153)+"強化"+ maskItem(1102557)+"後，力、敏、智、幸四屬性加總超過110的裝備可以進行繳回即可獲得獎勵\r\n";
            text += "#r※繳回的"+ maskItem(1102557)+"需為0星、且沒有使用過黃金鐵鎚與白金槌子。\r\n";
            text += "#b目前活動最高紀錄："+chrText+"\r\n";
            text += "#b目前你的最高紀錄："+selfBestText+"\r\n";
            text += maskListNode(1, "#b#n我要繳回符合資格的"+maskItem(1102557)+"\r\n");
            text += maskListNode(2, "#b#n我要兌換活動道具\r\n");

            cm.sendNext(text);
            break;
        case 1:
            if(new Date().getDate() > 5){
                cm.sendOk("活動已經結束了喔。")
                cm.dispose();
                return;
            }
            selectedMode = selection;
            switch(selectedMode){
                case 1:
                    var avail = "";
                    for (var i = 0; i < 150; i++) {
                        var eqp = cm.getEquipBySlot(i);
                        if (eqp != null && eqp.getItemId() == 1102557 && getTotalCount(eqp) >= 110) {
                            avail += maskListNode(i, maskItem(1102557) + " : 總數值:" + getTotalCount(eqp));
                        }
                    }
                    if(avail != ""){
                        cm.sendNext("請選擇您要繳回的"+ maskItem(1102557)+"：\r\n" + avail);
                    }
                    else{
                        cm.sendOk("您沒有可以繳回的"+ maskItem(1102557)+"。")
                        cm.dispose();
                        return;
                    }
                    break;
                case 2:
                    var text = "#d#e您要兌換什麼？\r\n";
                    for(var i=0;i<toBuy.length;i++){
                        text += maskListNode(i, "#b#n" + maskItem(toBuy[i][0]) + " : " + maskItem(toBuyToken) + "x" + toBuy[i][1]);
                    }
                    cm.sendNext(text);
                    break;
            }
            break;
        case 2:
            switch(selectedMode){
                case 1:
                    selectedSlot = selection;
                    var newRecord = getTotalCount(cm.getEquipBySlot(selectedSlot));
                    if(cm.getSpace(2) <= 4 || cm.getSpace(4) <= 4 || cm.getSpace(5) <= 4){
                        cm.sendOk("請將消耗、其他、特殊欄位各空出四格後再嘗試");
                        cm.dispose();
                        return;
                    }
                    if(newRecord < 110){
                        cm.sendOk("不合法的道具素質。")
                        cm.dispose();
                        return;
                    }
                    else{
                        cm.removeSlot(1, selectedSlot, 1);
                        if(cm.getPlayer().getCharacterSet(currentSet) == 0){
                            for(var i=0;i<baseReward.length;i++){
                                cm.gainItem(baseReward[i][0], baseReward[i][1]);
                            }
                        }
                        if(newRecord > selfBest){
                            cm.getPlayer().setCharacterSet(currentSet, newRecord);
                        }
                        var recordText = newRecord > serverBest ? ("您刷新了伺服器最佳紀錄（"+ newRecord+"）") :  newRecord > selfBest ? ("您刷新了個人最佳紀錄（"+ newRecord+"）") : "";
                        if(newRecord > serverBest){
                            cm.worldSpouseMessage(41, "[系統廣播]: 恭喜玩家["+ cm.getPlayer().getName()+"]刷新了混卷大賽最佳紀錄，他的紀錄是：" + newRecord);
                        }
                        cm.sendOk("#d#e繳交完成。" + recordText);
                        cm.dispose();
                        return;
                    }
                    break;
                case 2:
                    selectedSlot = selection;
                    var text = "#b#e請輸入要購買的數量";
                    availCount = Math.min(100, cm.getPlayer().getItemQuantity(toBuyToken) / toBuy[selectedSlot][1]);
                    cm.sendGetNumber(text, 1, 1, availCount);
                    break;
            }
            break;
        case 3:
            switch(selectedMode){
                case 1:
                    cm.dispose();
                    return;
                    break;
                case 2:
                    var cnt = selection;
                    if(cm.getPlayer().getItemQuantity(toBuyToken) < toBuy[selectedSlot][1] * cnt){
                        cm.sendOk("道具不足，請確認是否正確。")
                        cm.dispose();
                        return;
                    }
                    else if(!cm.canHold(toBuy[selectedSlot][0], cnt)){
                        cm.sendOk("請確認背包是否充足");
                        cm.dispose();
                        return;
                    }
                    else{
                        cm.gainItem(toBuyToken, -1 * toBuy[selectedSlot][1] * cnt);
                        cm.gainItemPeriod(toBuy[selectedSlot][0], cnt, 7);
                        cm.sendOk("購買完成，請確認道具欄。")
                        cm.dispose();
                        return;
                    }
                    break;
            }
            break;
    }
    


}

function getTotalCount(equip){
    if(equip.getEnhance() > 0 || equip.getViciousHammer() > 0 || equip.getPlatinumHammer() > 0){
        return -1;
    }
    return equip.getStr() + equip.getInt() + equip.getDex() + equip.getLuk();
}