var status = -1;
//這裡設定log的名稱，打指令 "!事前登入 玩家id log名稱" 登記
//例如 var log = "每日推文" 就輸入 "!事前登入 樂遊工作室 每日推文"
var log = "每日推文";
//這裡設定領取物品的限制等級
var level = 140;
//這裡放要補償的物品
//物品id、數量、期限天數(沒期限填-1)
var prize = [

	[5062020, 3, -1], 
	[5062017, 10, -1], 
];
var prizelist = Array();
//點數設定   [第一格GASH填1 楓葉點數填2,第二格填數量 不發填0]
var point = [2, 0];

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		for (var i = 0; i < prize.length; i++) {
			prizelist.push(prize[i][0]);
		}

		if (cm.getPlayerStat("LVL") < level) {
			cm.sendOk(level + "等以上才能領取" + log + "哦!");
			cm.safeDispose();
            return;
		}
		if (cm.getPlayer().getNamePrizeLog(log) <= 0) {
			cm.sendOk("您尚未被允許領取該獎勵！");
			cm.safeDispose();
            return;
		}
		if (cm.getPlayer().getCharacterSet(log + getToday()) >= 1) {
			cm.sendOk("您的帳號今天已經領取過" + log + "了喔！");
			cm.safeDispose();
		}
		var choice = "#d請問您是否要領取" + log + "? 您可領取的" + log + "為:#b\r\n";
		for (var i = 0; i < prize.length; i++)
			choice += "#i" + prize[i][0] + "##t" + prize[i][0] + "#" + prize[i][1] + "個" + (prize[i][2] > 0 ? ("  期限 #r#e" + prize[i][2] + "#n#b天") : "") + "\r\n\r\n";
		if (point[1] > 0) {
			choice += (point[0] == 1 ? "Gash點數 " : "楓葉點數 ") + point[1] + " 點\r\n";
		}		
		choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
		choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
		choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
		cm.sendYesNo(choice);

	} else if (status == 1) {

		for (var i = 0; i < prize.length; i++) {
			cm.gainItemPeriod(prize[i][0], prize[i][1], prize[i][2]);
		}
		if (point[1] > 0) {
			cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
		}			
		cm.getPlayer().setCharacterSet(log  + getToday(), cm.getPlayer().getCharacterSet(log  + getToday()) +1); //這邊是設定玩家帳號已領過記錄
        cm.deleteNamePrizeLog(log);
		cm.sendNext("#b" + log + "已發放，請前往背包查收"); //最後訊息 
		cm.dispose();


	} else if (status == 2) {

	} else {
		cm.dispose();
	}
}



function getToday(){
    return new Date().getFullYear() + "/" + ((new Date()).getMonth() + 1) + "/" + new Date().getDate();
}
