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
            var text = "#d#e請輸入要解卡的玩家ID#r（注意，此行為會導致該名玩家斷線！）\r\n";
            cm.sendGetText(text);
            break;
        case 1:
            playerName = cm.getText();
            var data = cm.getConnection().prepareStatement("SELECT * FROM characters where name = BINARY '" + cm.getText() + "'").executeQuery(); // 查詢數據
            if (data.next()) {
                accID = data.getInt("accountid"); 
                var cn = cm.getConnection().prepareStatement("UPDATE accounts SET loggedin = 0 where id = " + accID + ";");
                cn.executeUpdate();
                cn.close();
                cm.sendOk("玩家" +playerName+ "已經斷開連結");
                status = -1;
            }
            else{
                cm.sendOk("沒有符合條件的玩家。"); 
                cm.dispose();
                return;
            }
            break;
    }

}
