/* global cm */

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var playerName;


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
            var text = "#d#e請輸入要發的玩家ID\r\n";
            cm.sendGetText(text);
            break;
        case 1:
            playerName = cm.getText();
            cm.sendGetText("請輸入要登錄的獎勵名稱");
            break;
        case 2:
            var rewardName =  cm.getText();
            var cn = cm.getConnection().prepareStatement("INSERT INTO namePrizeLog(name,bossid,time) values ('"+playerName+"','"+rewardName+"', now())");
            cn.executeUpdate();
            cn.close();
            cm.sendOk("玩家" +playerName+ "的獎勵[" + rewardName + "]登錄已完成");
            status = -1;
            break;
    }

}
