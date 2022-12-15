/* global cm */

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var select = -1;
var accID;
var victimName;
var accId,accName,giftType,giftId,giftSel,giftNum,giftString;

var eventItem = 4036069;
var eventItemCount = 520;

var valentineGift = [2430682,1,0];
var valentineGift2 = [2431479,1,0];



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
            var text = "#d#e歡迎來到白色情人節活動\r\n";
            text += "從3/11 18:00起全區怪物將掉落\r\n活動道具：#b"+maskItem(eventItem)+"\r\n#d收集"+eventItemCount+"個即可向你心儀的對象送出禮物！\r\n";
            text += "#r注意：每天僅限對同一位朋友送出三次禮物，太多禮物人家會困擾唷！\r\n";
            text += "#r目前活動總完成次數：" +  cm.getPlayer().getCharacterSet("情人節活動_總次數") + "\r\n";
            text += maskListNode(1, "#b#n我要消耗"+eventItemCount+"個"+maskItem(eventItem)+"送朋友禮物\r\n");

            cm.sendNext(text);
            break;
        case 1:
            if(!cm.haveItem(eventItem, eventItemCount)){
                cm.sendOk("你沒有足夠的" + maskItem(eventItem) + "。"); 
                cm.dispose();
                return;
            }
            cm.sendGetText("請輸入要贈送禮物的玩家ID");
            break;
        case 2:
            var data = cm.getConnection().prepareStatement("SELECT * FROM characters where name = BINARY '" + cm.getText() + "'").executeQuery(); // 查詢數據
            if (data.next()) {
                accID = data.getInt("accountid"); 
                victimName = data.getString("name"); 
                if(accID == cm.getPlayer().getAccountID()){
                    status = -1;
                    cm.sendOk("不可以寄給自己喔！"); 

                }
                else if(cm.getPlayer().getCharacterSet("情人節活動_" + getToday() + "_" + accID) >= 5){
                    status = -1;
                    cm.sendOk("每天僅限對同一位朋友送出五次禮物！"); 
                }
                else{

                    cm.sendYesNo("#d#e真的要寄給這位玩家嗎？寄出禮物後無法退還唷！\r\n#b名稱：" + victimName); 
                }
            }
            else{
                status = -1;
                cm.sendOk("沒有符合條件的玩家。"); 
            }
            break;
        case 3:
            if(!cm.haveItem(eventItem, eventItemCount)){
                cm.sendOk("你沒有足夠的" + maskItem(eventItem) + "。"); 
                cm.dispose();
                return;
            }
            else{
                cm.sendAccRewardPeriod( accID, valentineGift[2], valentineGift[0], valentineGift[1], cm.getPlayer().getName() + "送給您的情人節禮物，快打開看看有什麼吧！" );
                cm.sendAccRewardPeriod( accID, valentineGift2[2], valentineGift2[0], valentineGift2[1], cm.getPlayer().getName() + "送給您的情人節卡片，寫了什麼不重要。" );
                FileoutputUtil.logToFile("logs/情人節活動.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 贈送禮物ID:" + victimName + "\r\n");
                cm.getPlayer().setCharacterSet("情人節活動_" + getToday() + "_" + accID, cm.getPlayer().getCharacterSet("情人節活動_" + getToday() + "_" + accID) + 1)
                cm.getPlayer().setCharacterSet("情人節活動_總次數", cm.getPlayer().getCharacterSet("情人節活動_總次數") + 1)
                cm.gainItem(2431478,1)
                cm.gainItem(eventItem,-1 * eventItemCount)
                status = -1;
                cm.sendOk("#d#e已經將您的心意傳達給對方了哦。"); 
            }
    }
    


}

function 發送預設禮物(selection,mode) {
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        var str = "請輸入收件者的帳號名稱\r\n";
        cm.sendGetText( str );
        
    } else if (status === i++){
        accName = cm.getText();
        accID = getAccountIdFromName( accName );
        if ( accID < 0 ){
            cm.sendOk("#r找不到該帳號，請確認該帳號名稱正確#r");      
            cm.dispose();
            return;
        }
        var str = "";
        str += "帳號名稱:"+accName+"\r\n";
        str += "帳號ID  :"+accID+"\r\n";
        str += "請選擇欲發送的禮物\r\n";
        for(i=0;i<禮物.length;i++){
            str += "\r\n------------------------------------\r\n"
            str += "#L"+i+"#";
            switch (禮物[i][0]){
                case 3:
                    str += "楓幣";
                    break;
                case 4:
                    str += "楓點";
                    break;
                case 5:
                    str += "經驗";
                    break;
                default:
                    str += "物品:#i"+禮物[i][0]+":#";
                    break;
            }
            str += "\r\n數量:"+禮物[i][1]+"\r\n期限:"+禮物[i][2]+"\r\n文字:"+禮物[i][3]+"#l\r\n";
        }
        cm.sendSimple(str);
    } else if (status === i++){
        giftSel = selection;
        giftId = 禮物[giftSel][0];
        
        var str = "確認發送禮物\r\n";
        str += "帳號名稱:"+accName+"\r\n";
        switch (giftId){
            case 3:
                str += "楓幣\r\n";
                break;
            case 4:
                str += "楓點\r\n";
                break;
            case 5:
                str += "經驗\r\n";
                break;
            default:
                str += "#i"+禮物[giftSel][0]+":#\r\n";
                break;
        }
        str += "數量:"+禮物[giftSel][1]+"\r\n";
        str += "期限:"+禮物[giftSel][2]+"天\r\n";
        str += "文字:"+禮物[giftSel][3]+"\r\n";
        cm.sendYesNo(str);
        
    } else if (status === i++){
        cm.sendAccRewardPeriod( accID, 禮物[giftSel][2], 禮物[giftSel][0], 禮物[giftSel][1], 禮物[giftSel][3] );
        cm.sendOk("#b已發送");      
        cm.dispose();
        return;
    } 
}
function 自訂發送(selection,mode) {
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        var str = "請輸入收件者的帳號名稱\r\n";
        cm.sendGetText( str );
        
    } else if (status === i++){
        accName = cm.getText();
        accID = getAccountIdFromName( accName );
        if ( accID < 0 ){
            cm.sendOk("#r找不到該帳號，請確認該帳號名稱正確#r");      
            cm.dispose();
            return;
        }
        var str = "請輸入欲發送的道具ID\r\n";
        str += "3=楓幣,4=楓點,5=經驗\r\n";
        cm.sendGetNumber(str,3,3,99999999);        
    } else if (status === i++){
        giftId = selection;
        var str = "請輸入欲發送的數量\r\n";
        var str = "裝備一次只能給一個\r\n";
        cm.sendGetNumber(str,1,1,32767);
    } else if (status === i++){
        giftNum = selection;
        var str = "請輸入領取期限(天數)\r\n";
        str += "若不設時限限，則輸入0\r\n";
        cm.sendGetNumber(str,0,0,999);
    } else if (status === i++){
        giftDate = selection;
        var str = "請輸入禮物說明\r\n";
        cm.sendGetText(str);
    } else if (status === i++){
        giftString = cm.getText();
        cm.sendAccRewardPeriod( accID, giftDate, giftId, giftNum, giftString );
        cm.sendOk("#b已發送");      
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
