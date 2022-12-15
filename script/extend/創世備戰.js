/* global cm */

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var select = -1;
var accID;
var victimName;
var accId,accName,giftType,giftId,giftSel,giftNum,giftString;

var eventItem = 4033338;
var eventItemCount = 100;

var target = [
    [2631887,1],
    [2432009,1]
]



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
            var chrText=  "";
            var data = cm.getConnection().prepareStatement("SELECT * FROM characterSet join characters on characterSet.accountid = characters.accountid join accounts on characterSet.accountid = accounts.id where bossid = BINARY '創世備戰_總次數' and accounts.gm = 0  ORDER BY count Desc, characterSet.id asc,level Desc").executeQuery(); // 查詢數據
            if (data.next()) {
                serverBest = data.getInt("characterSet.count");
                chrText = data.getString("characters.name") + "(" + serverBest + ")";
            }
            else {
                chrText = "目前還沒有玩家參與";
            }
            var text = "#d#e歡迎來到創世備戰活動\r\n";
            text += "從4/7 18:00起全區怪物將掉落\r\n活動道具：#b"+maskItem(eventItem)+"\r\n#d收集"+eventItemCount+"個即可兌換活動禮物箱！\r\n";
            text += "#r目前最高完成次數：" +  chrText + "\r\n";
            text += "#r目前活動總完成次數：" +  cm.getPlayer().getCharacterSet("創世備戰_總次數") + "\r\n";
            text += maskListNode(1, "#b#n我要消耗"+eventItemCount+"個"+maskItem(eventItem)+"兌換活動獎勵\r\n");

            cm.sendNext(text);
            break;
        case 1:
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
                for(var i=0;i<target.length;i++){
                    cm.gainItem(target[i][0], target[i][1]);
                }
                cm.gainItem(eventItem, -1 * eventItemCount);
                FileoutputUtil.logToFile("logs/創世備戰.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() +"\r\n");
                cm.getPlayer().setCharacterSet("創世備戰_總次數", cm.getPlayer().getCharacterSet("創世備戰_總次數") + 1);
                cm.sendOk("#d#e兌換成功。"); 
                status = -1;
            }
    }
}
