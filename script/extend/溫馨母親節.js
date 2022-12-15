/* global cm */

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var select = -1;
var accID;
var victimName;
var accId,accName,giftType,giftId,giftSel,giftNum,giftString;

var eventItem = 4000348;
var eventItemCount = 1000;

var upperBound = -1;
var lowerBound = -1;
var chrText=  "";
var luckyText=  "";
var serverLuckyBest = 1e9;
var target = [
    [2430896,1],
    [2431867,1]
]



function start() {
     
    var data = cm.getConnection().prepareStatement("SELECT characters.name, count FROM characterSet "+
    "join accounts on characterSet.accountid = accounts.id "+
    "join characters on characterSet.accountid = characters.accountid "+
    "where bossid = BINARY '母親節_總次數' and accounts.gm = 0  "+
    "group by characters.accountid "+
    "ORDER BY count Desc, characterSet.id asc,level Desc;").executeQuery(); // 查詢數據
    var i=1;
    while (data.next() && i<= 3) {
        var serverBest = data.getInt("characterSet.count");
        chrText += "第"+i+"名: " + data.getString("characters.name") + "(" + serverBest + ")\r\n";
        i++;
    }
    if(chrText == "") {
        chrText = "目前還沒有玩家參與\r\n";
    }
    var data2 = cm.getConnection().prepareStatement("SELECT characters.name, count FROM characterSet "+
    "join accounts on characterSet.accountid = accounts.id "+
    "join characters on characterSet.accountid = characters.accountid "+
    "where bossid = BINARY '母親節_最少嘗試次數' and accounts.gm = 0  "+
    "group by characters.accountid "+
    "ORDER BY count asc, characterSet.id asc,level Desc;").executeQuery(); // 查詢數據
    var j=1;
    while (data2.next() && j<= 3) {
        serverLuckyBest = data2.getInt("characterSet.count");
        luckyText += "第"+j+"名: " + data2.getString("characters.name") + "(" + serverLuckyBest + ")\r\n";
        j++;
    }
    if(luckyText == "") {
        luckyText = "目前還沒有玩家參與\r\n";
    }
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
            if(cm.getPlayer().getCharacterSet("母親節_密碼") == 0){
                cm.getPlayer().setCharacterSet("母親節_密碼", Math.floor(Math.random() * 999) + 1);
                cm.getPlayer().setCharacterSet("母親節_上限", 1000);
                cm.getPlayer().setCharacterSet("母親節_下限", 1);
            }
            var text = "#d#e歡迎來到母親節活動\r\n";
            text += "從4/7 18:00起全區怪物將掉落\r\n活動道具：#b"+maskItem(eventItem)+"\r\n#d請在1~1000中猜出數字以贏得獎品！\r\n";
            text += "#b目前伺服器最高完成次數：\r\n" +  chrText;
            text += "#b目前伺服器單次嘗試最少：\r\n" +  luckyText;
            text += "#r目前活動總完成次數：" +  cm.getPlayer().getCharacterSet("母親節_總次數") + "\r\n";
            text += "#r目前活動嘗試次數最少：" +  cm.getPlayer().getCharacterSet("母親節_最少嘗試次數") + "\r\n";
            upperBound = cm.getPlayer().getCharacterSet("母親節_上限");
            lowerBound = cm.getPlayer().getCharacterSet("母親節_下限");
            text += "#r目前猜測範圍：" + lowerBound + "～" + upperBound + "\r\n";
            text += maskListNode(1, "#b#n我要猜活動\r\n");

            cm.sendNext(text);
            break;
        case 1:
            cm.sendGetNumber("#d#e請輸入您想要猜的數字（介在"+lowerBound+"和"+upperBound+"間）：", lowerBound, lowerBound, upperBound);
            break;
        case 2:
            eventItemCount = selection;
            if(!cm.haveItem(eventItem, eventItemCount)){
                cm.sendOk("你沒有足夠的" + maskItem(eventItem) + "。"); 
                cm.dispose();
                return;
            }
            else if(cm.getSpace(2) < 2){
                cm.sendOk("請空出兩格消耗欄。"); 
                cm.dispose();
                return;
            }
            else{
                cm.gainItem(eventItem, -1 * eventItemCount);
                var pass = cm.getPlayer().getCharacterSet("母親節_密碼");
                var sucTime = cm.getPlayer().getCharacterSet("母親節_嘗試次數") + 1;
                if(eventItemCount != pass){
                    text = "#d#e您沒有猜中！目前猜了"+sucTime+"次，範圍為：\r\n";
                    var middle = ((upperBound - lowerBound) / 2) + lowerBound;
                    if(eventItemCount > pass){
                        text += "#r上限：" + upperBound + " → " + eventItemCount + "\r\n";
                        text += "#b下限：" + lowerBound + "\r\n";
                        cm.getPlayer().setCharacterSet("母親節_上限", eventItemCount);
                        cm.getPlayer().setCharacterSet("母親節_嘗試次數", sucTime);
                    }
                    else{
                        text += "#b上限：" + upperBound + "\r\n";
                        text += "#r下限：" + lowerBound + " → " + eventItemCount + "\r\n";
                        cm.getPlayer().setCharacterSet("母親節_下限", eventItemCount);
                        cm.getPlayer().setCharacterSet("母親節_嘗試次數", sucTime);
                    }
                    cm.sendOk(text); 
                    status = -1;
                    break;
                }
                else{
                    for(var i=0;i<target.length;i++){
                        cm.gainItem(target[i][0], target[i][1]);
                    }
                    FileoutputUtil.logToFile("logs/溫馨母親節.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() +" 次數:" + sucTime +"\r\n");
                    cm.getPlayer().setCharacterSet("母親節_總次數", cm.getPlayer().getCharacterSet("母親節_總次數") + 1);
                    cm.getPlayer().setCharacterSet("母親節_嘗試次數", 0);
                    cm.getPlayer().setCharacterSet("母親節_密碼", 0);
                    if(cm.getPlayer().getCharacterSet("母親節_最少嘗試次數") == 0 || sucTime < cm.getPlayer().getCharacterSet("母親節_最少嘗試次數")){
                        cm.getPlayer().setCharacterSet("母親節_最少嘗試次數", sucTime);
                    }
                    if(sucTime < serverLuckyBest && !cm.getPlayer().isAdmin()){
                        cm.worldSpouseMessage(41, "[系統廣播]: 恭喜玩家["+ cm.getPlayer().getName()+"]刷新了母親節活動最佳紀錄，他的紀錄是：" + sucTime);
                    }
                    cm.sendOk("#d#e恭喜您猜中了，密碼是"+ pass + "，共花費"+ sucTime +"次成功。"); 
                }
                status = -1;
            }
            break;
    }
}
