/* global cm */

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var select = -1;
var accID;
var accId,accName,giftType,giftId,giftSel,giftNum,giftString;

var eventItem = 4036069;
var eventItemCount = 520;

var valentineGift = [
    [4001168, 200,0],
    [2633634, 5, 0],
    [5062500, 20, 0],
    [4001893, 1, 0],
    [4031394, 1, 0],
];

var accIDs = [
    36,
];


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
            var text = "#d#eGM送禮系統，請不要隨便使用，禮物請從腳本設定\r\n目前禮物：\r\n#b";
            for(var j=0; j<valentineGift.length;j++){
                    
               text+= maskItem(valentineGift[j][0]) + "x" + valentineGift[j][1] + "\r\n";
            }
            text += "\r\n\r\n";
            text += maskListNode(1, "#b#n我要送禮物\r\n");
            text += maskListNode(2, "#b#n從獎勵名單內批次送禮物\r\n");

            cm.sendNext(text);
            break;
        case 1:
            switch(selection){
                case 1:
                    cm.sendGetText("請輸入要贈送禮物的玩家ID");
                    break;
                case 2:
                    for(var i=0;i<accIDs.length;i++){
                        for(var j=0; j<valentineGift.length;j++){
                            cm.sendAccRewardPeriod( accIDs[i], 0, valentineGift[j][0], valentineGift[j][1], cm.getPlayer().getName() + "送給您的活動紀念禮物！" );
                        }
                    }
                    cm.sendOk("送禮完成。"); 
                    cm.dispose();
                    return;
            }
            break;
        case 2:
            var data = cm.getConnection().prepareStatement("SELECT * FROM characters where name = BINARY '" + cm.getText() + "'").executeQuery(); // 查詢數據
            if (data.next()) {
                accID = data.getInt("accountid"); 
               cm.sendYesNo("#d#e真的要寄給這位玩家嗎？寄出禮物後無法退還唷！\r\n#b名稱：" + data.getString("name")); 
            }
            else{
                cm.sendOk("沒有符合條件的玩家。"); 
                cm.dispose();
                return;
            }
            break;
        case 3:
            for(var j=0; j<valentineGift.length;j++){
                cm.sendAccRewardPeriod( accID, 0, valentineGift[j][0], valentineGift[j][1], cm.getPlayer().getName() + "送給您的活動紀念禮物！" );
            }
            cm.sendOk("送禮完成。"); 
            cm.dispose();
            return;
    }
    


}

function getAccountIdFromName( name ){
    var conn = cm.getConnection();
    var sql = 'select `id` from `accounts` where `name`=\"'+name+'\";';
    var pstmt = conn.prepareStatement(sql);
    var list = pstmt.executeQuery();
    if (!list.next()) {
        return -1;
    }
    var text = list.getString("id");
    list.close();
    pstmt.close();
    conn.close();
    
    return text;
}
