var status = -1;
var select = -1;

function start() {
	if ( cm.getPlayerStat("GM") == 0 ||  cm.getPlayerStat("ADMIN") == 0){
    	//cm.dispose();
		//return;
	}
	cm.sendSimple("今天真是屠龍的好日子啊！\r\n有哪些#b楓葉聯盟#k業務需要幫忙嗎？\r\n\r\n#L0##b<確認我的楓葉聯盟情報。>#l\r\n#L1##b<提升楓葉聯盟等級。>#l\r\n#L2##b<聽取楓葉聯盟的說明。>#k#l\r\n#L3##b<一週獲得硬幣排行>#k#l");
}
function action(mode, type, selection) {
	
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    	
	var i = -1;
	
	if (select === -1) {
        select = selection;
    }
	
	switch (select){
		case 0:
			select_0Func(mode, type, selection);
			break;
		case 1:
			select_1Func(mode, type, selection);
			break;
		case 2:
			cm.dispose();
			cm.openNpc(cm.getNpc(), "RunScript_19");
			break;
		case 3:
			select_3Func(mode, type, selection);
			break;
		default:
			cm.dispose();
			break;
	}
}
var status_1 = -1;
function select_0Func(mode, type, selection) {
    if (mode == 1) {
        status_1++;
    } else {
        status_1--;
    }

    var i = -1;
    if (status_1 == i++) {
        cm.dispose();
    } else if (status_1 == i++) {
        var rank = cm.getMapleUnionRank();
        if (rank == null) {
            cm.sendOk("發生未知錯誤");
            cm.dispose();
            return;
        }
        cm.sendNext("我來提供勇士您的#e楓之谷聯盟#n資訊好嗎？\r\n\r\n#e楓之谷聯盟階級： #n#b#e<" + rank + ">#n#k\r\n#e聯盟等級： #n#b#e<" + cm.getMapleUnionLevel() + ">#n#k\r\n#e持有聯盟角色： #n#b#e<" + cm.getPlayer().getMapleUnion().getAllUnions().size() + ">#n#k\r\n#e攻擊隊員：#n#b#e<" + cm.getPlayer().getMapleUnion().getFightingUnions().size() + " / " + rank.getAttackerCount() + "名>#n#k");
    } else {
        cm.dispose();
    }
}

var needCoin = [
    [101, 0],
    [102, 0],
    [103, 0],
    [104, 0],
    [105, 0],
    [201, 0],
    [202, 0],
    [203, 0],
    [204, 0],
    [205, 0],
    [301, 0],
    [302, 0],
    [303, 0],
    [304, 0],
    [305, 0],
    [401, 0],
    [402, 0],
    [403, 0],
    [404, 0],
    [405, 0]
];

function select_1Func(mode, type, selection) {
    if (mode == 1) {
        status_1++;
    } else {
        cm.dispose();
        return;
    }

    var i = -1;
    if (status_1 == i++) {
        cm.dispose();
    } else if (status_1 == i++) {
        var currentRank = cm.getMapleUnionRank();
        var nextRank = cm.getNextMapleUnionRank();
        var nextStatus = nextRank.getRank() * 100 + nextRank.getSubRank();
        var nextNeedCoin = 0;
        for each (n in needCoin) {
            if (n[0] == nextStatus) {
                nextNeedCoin = n[1];
                break;
            }
        }
        if (currentRank == null || nextNeedCoin < 0) {
            cm.sendOk("發生未知錯誤");
            cm.dispose();
            return;
        } else if (nextRank == null) {
            cm.sendOk("聯盟等級已經升級到最高");
            cm.dispose();
            return;
        }
        cm.sendYesNo("#e你想要使楓之谷#n聯盟升級 嗎？\r\n\r\n#e目前等級：#n#b#e<" + currentRank + ">#n#k\r\n#e下個等級：#n#b#e<" + nextRank + ">#n#k\r\n#e升級時可投入的攻擊隊員增加:#n #b#e<" + currentRank.getAttackerCount() + "→" + nextRank.getAttackerCount() + " 名>#n#k\r\n\r\n要升級的話必須達成以下條件。\r\n\r\n#e<聯盟等級> #r#e" + nextRank.getLevel() + " 以上#n#k #n\r\n#e<發送硬幣> #b#e#t4310229# " + nextNeedCoin + "個#n#k\r\n\r\n現在要#e升級#n楓葉聯盟嗎？");
    } else if (status_1 == i++) {
        var currentLevel = cm.getMapleUnionLevel();
        var nextRank = cm.getNextMapleUnionRank();
        if (nextRank == null) {
            cm.sendOk("發生未知錯誤");
            cm.dispose();
            return;
        }
        var nextStatus = nextRank.getRank() * 100 + nextRank.getSubRank();
        var nextNeedCoin = 0;
        for each (n in needCoin) {
            if (n[0] == nextStatus) {
                nextNeedCoin = n[1];
                break;
            }
        }
        if (nextNeedCoin < 0) {
            cm.sendOk("發生未知錯誤");
            cm.dispose();
            return;
        }
        if (currentLevel < nextRank.getLevel()) {
            cm.sendOk("目前#r聯盟等級不足#k呢！\r\n想要升級的話#r需要更高的聯盟等級#k~\r\n\r\n#e目前聯盟等級：#n#r" + currentLevel + "#k\r\n#e必備聯盟等級:#n#b" + nextRank.getLevel() + "#k");
        } else {
            cm.gainWorldShareQuestPoint(500629, -nextNeedCoin);
            //cm.updateWorldShareInfo(18771, "cRank", "202");
            cm.updateWorldShareInfo(18771, "rank", nextStatus);
            cm.getPlayer().getMapleUnion().setState(nextStatus);
            cm.getPlayer().getMapleUnion().update();
            cm.sendNext("啪啪啪！\r\n#e楓之谷聯盟等級#n上升了！現在可以和更多的攻擊隊員一起快速成長！\r\n\r\n#e新等級：#n#b#e<" + nextRank + ">#n#k\r\n#e可投入的攻擊隊員:#n #b#e" + nextRank.getAttackerCount() + "#n#k\r\n\r\n那就一直成長到下個等級吧！");
        }
    } else {
        cm.dispose();
    }
}

function select_3Func(mode, type, selection) {
    if (mode == 1) {
        status_1++;
    } else {
        status_1--;
    }

    var i = -1;
    if (status_1 == i++) {
        cm.dispose();
    } else if (status_1 == i++) {
        cm.sendOk("您還沒有已登錄的每週硬幣獲得排名耶？\r\n透過聯盟團戰獲得硬幣後即可確認排名。");
    } else {
        cm.dispose();
    }
}