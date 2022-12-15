/* global cm */
var status = -1;
var rn = "\r\n";
var c = "#fEffect/CharacterEff/1112905/0/0#";//籃心
var tz = "#fEffect/CharacterEff/1112949/0/0#";
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fEffect/CharacterEff/1112949/0/0#";//"+z+"//美化
var zz = "#fUI/UIPVP.img/ChampionMark/4#";//
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小紅心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圓
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化會員
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fUI/Gateway.img/WorldSelect/icon/1#";//音符fEffect/ItemEff/1112811/0/0
var ts = "#fUI/ChatBalloon.img/pet/16/ne#";//小黃雞
var feng = "#v4032733#";
var kkk = "#fMap/MapHelper.img/weather/thankyou/3#";
var mvp = "#fUI/UIWindow4/enchantUI/tab_hyper/layer:MVP#";
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //愛心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //愛心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //磚石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //磚石藍
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz1 = "#fEffect/CharacterEff/1082565/2/0#";  //兔子藍
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var tz2 = "#fEffect/CharacterEff/1082565/0/0#";  //兔子灰色
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //紅點
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //藍點
var tz51 = "#fEffect/CharacterEff/1082588/1/0#";  //綠點
var tz6 = "#fEffect/CharacterEff/1112900/2/1#";  //音符藍
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符紅
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符綠
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符綠!
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //藍心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //紅心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黃星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //藍星
var tz20 = "#fEffect/CharacterEff/1112926/0/0#";  //紅星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花樣音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花樣音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花樣音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花樣音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花樣音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //紅星花
var yun = "#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////紅沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警燈
var wn2 = "#fUI/UIWindowTW.img/TimeCapsule/BtClose/disabled/0#";  //叉叉
var wn3 = "#fUI/Basic.img/ComboBox/disabled/1#";  //白條
var wn4 = "#fUI/Basic.img/ComboBox3/mouseOver/1#";  //黃條
var wn5 = "#fUI/Basic.img/Cursor/17/16#";  //黃色圈
var wn6 = "#fUI/Basic.img/Cursor/34/0#";  //圈
var wn7 = "#fUI/Basic.img/Cursor/43/3#";  //藍圈
var wn8 = "#fUI/CashShop.img/CSBargainSale/BtLeft/normal/0#";  //黃色左
var wn9 = "#fUI/CashShop.img/CSBargainSale/BtRight/normal/0#";  //黃色右
var wn10 = "#fUI/CashShop.img/CSBeauty/tip/hair#";  //髮型提示
var wn11 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/0#";  //黑
var wn12 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/1#";  //紅
var wn13 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/2#";  //橙
var wn14 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/3#";  //黃
var wn15 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/4#";  //綠
var wn16 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/5#";  //親
var wn17 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/6#";  //紫
var wn18 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/7#";  //褐
var wn19 = "#fUI/CashShop.img/CSEffect/event/0#";  //活動圖標
var wn20 = "#fUI/CashShop.img/CSEffect/hot/0#";  //人氣圖標
var wn21 = "#fUI/CashShop.img/CSEffect/mileage/0#";  //積分圖標
var wn22 = "#fUI/CashShop.img/CSEffect/new/0#";  //新品圖標
var wn23 = "#fUI/CashShop.img/CSEffect/sale/0#";  //折扣圖標
var wn24 = "#fUI/CashShop.img/CSEffect/time/0#";  //限量圖標
var wp1 = "#fUI/CashShop.img/CSEffect/number/0#";  //數字 後面改數字0-9
var wp2 = "#fUI/CashShop.img/CSIcon/0#";  //男圖標 0男-1女
var wp3 = "#fUI/CashShop.img/CSStatus/BtCharge/mouseOver/0#";  //儲值圖標
var wp4 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/0#";  //武器開頭
var wp5 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/1#";  //帽子
var wp6 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/2#";  //披風
var wp7 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/3#";  //長袍
var wp8 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/4#";  //上衣
var wp9 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/5#";  //褲子
var wp10 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/6#";  //鞋子
var wp11 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/7#";  //手套
var wp12 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/8#";  //飾品
var wp13 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/9#";  //眼飾
var wp14 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/10#";  //效果結尾
var wp15 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/0#";  //斜線美化
var wp16 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/1#";  //斜線美化
var wp17 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/2#";  //斜線美化
var wp18 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/3#";  //斜線美化
var wp19 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/4#";  //斜線美化
var wp20 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/5#";  //斜線美化
var wi1 = "#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#";  //星星圖標
var wi2 = "#fUI/SoulUI.img/DungeonMap/icon/soulFragment/0#";  //菱形圖標
var wi3 = "#fUI/SoulUI.img/DungeonMap/icon/soulTrap/0#";  //骷髏圖標
var wi4 = "#fUI/SoulUI.img/DungeonMap/icon/warpGate/0#";  //圓點圖標
var wi5 = "#fUI/SoulUI.img/DungeonParty/backgrnd2#";  //毛莫
var wi6 = "#fUI/StarCityUI.img/Board_Friend/list/0/5/selected#";  //剪刀石頭布
var wi7 = "#fUI/StarCityUI.img/Board_GameRank/tab/enabled/0#";  //遊戲排行
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黃色條
var wi9 = "#fUI/StarCityUI.img/Board_GameRank/user/shining#";  //紫色條
var wi11 = "#fUI/UIPVP.img/ChampionMark/4#";  //徽章黃色
var wi12 = "#fUI/UIPVP.img/DmgEffect/DmgRed/excellentCritical#";  //特別危險藍
var wi13 = "#fUI/UIPVP.img/DmgEffect/DmgBlue/excellentCritical#";  //特別危險綠
var wi14 = "#fUI/UIPVP.img/MiniMapIcon/star#";  //黃星星
var wi15 = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#";  //藍星星
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////紅色圓
var wn60 = "#fMob/0100101.img/die1/1#";  //蝸牛
var bzd = "#fEffect/CharacterEff.img/1051366/1/0#"; //
var bzd1 = "#fEffect/CharacterEff.img/1051366/2/0#"; //
var ttt7 = "#fMap/MapHelper.img/weather/2011Xmas/6#";//
var 馬 = "#fEffect/CharacterEff.img/1050312/2/0#";
var 兔子 = "#fEffect/CharacterEff.img/1112960/0/1#";
var 黃空星 = "#fEffect/CharacterEff.img/1112924/0/1#";
var 藍星閃 = "#fEffect/CharacterEff.img/1003393/0/0#";
var 音1 = "#fEffect/CharacterEff.img/1112900/1/0#";
var 音2 = "#fEffect/CharacterEff.img/1112900/2/0#";
var 音3 = "#fEffect/CharacterEff.img/1112900/3/0#";
var 音4 = "#fEffect/CharacterEff.img/1112900/4/0#";
var 音5 = "#fEffect/CharacterEff.img/1112900/0/0#";
var 大音1 = "#fEffect/CharacterEff.img/1112949/2/0#";
var 大音2 = "#fEffect/CharacterEff.img/1112949/0/0#";
var 大音3 = "#fEffect/CharacterEff.img/1112949/4/0#";
var 紅馬蹄 = "#fEffect/CharacterEff.img/1051384/1/0#";
var 綠點 = "#fEffect/CharacterEff.img/1082588/2/0#";
var 牌左 = "#fEffect/CharacterEff.img/forceAtom/1/atom/1/parentAtom/1#";
var 牌右 = "#fEffect/CharacterEff.img/forceAtom/1/atom/1/parentAtom/3#";

function start() {
	action(1, 0, 0);
}

var price = 5000;
var selectionNode = 0;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 2 || status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	var text = "";
	if (status == 0) {
		//text += ""+c+"#k#e#L1#\t新手-[來了解回家卷軸吧]" + rn;
		/*if(cm.getLevel() <= 199){
			cm.sendSimple("這是200等以後才能使用的功能。");
			cm.dispose()
			return;
		}*/
		text += "#d#e                【免費任務區】" + rn;
		text += "" + c + "#b#e#L1# 一鍵完成ARC前置任務 『全新的力量，神秘力量』#l" + rn;
		text += "" + c + "#b#e#L2# 一鍵完成ARC主線任務 『消逝的旅途』l" + rn;
		text += "" + c + "#L21# 一鍵完成戰地任務 『打敗迷你龍』#l" + rn;
		text += "" + c + "#L22# 一鍵完成戰地任務 『打敗黃金翼龍』#l" + rn;
		text += "" + c + "#L23# 一鍵完成口袋任務 『獻給有魅力之人的禮物』#l" + rn;
		text += "" + c + "#L24# 一鍵完成飛寵任務 『飛向天空！』#l" + rn;
		text += "" + c + "#L25# 一鍵完成萌獸任務 『萌獸的出現！』#l" + rn;
		text += "" + c + "#L26# 一鍵完成萌獸任務 『前往耶雷弗』#l" + rn;
		text += "" + c + "#L27# 一鍵完成萌獸任務 『群雄聚集』#l" +  rn + rn;
		text += "#r#e跳過下面的任務內容時需要扣除5000楓點。\r\n"
		text += "#r#eARC主線任務 『阿爾卡娜』可開啟ARC第4~6格\r\n\r\n"
		text += "" + c + "#b#e#L4# 一鍵完成ARC主線任務 『啾啾艾爾蘭』#l" + rn;
		text += "" + c + "#L9# 一鍵完成ARC主線任務 『拉契爾恩』#l" + rn;
		text += "" + c + "#L5# 一鍵完成ARC主線任務 『阿爾卡娜』#l" + rn;
		text += "" + c + "#L6# 一鍵完成ARC主線任務 『艾斯佩拉』#l" + rn;
		text += "" + c + "#L8# 一鍵完成ARC主線任務 『魔菈斯』#l" + rn;
		text += "" + c + "#L10# 一鍵完成AUT主線任務 『飯店』#l" + rn;
		text += "" + c + "#L11# 一鍵完成全部任務 『泰涅布利斯』" + rn;
		text += "" + c + "#L12# 一鍵完成全部任務 『賽拉斯』" + rn;
		text += "" + c + "#L3# 一鍵完成全部任務 『反轉城市』#l" + rn;
		text += "" + c + "#L7# 一鍵完成全部任務 『嚼嚼艾爾蘭』#l" + rn;
		cm.sendSimple(text);
	}
	else if (status == 1) {
		selectionNode = selection;
		if (selection <= 20) {
			if (selection <= 2) {
				cm.sendYesNo("主線跳過就沒辦法重新復原，雖然是免費，但還是確定要跳過嗎？");
			}
			else {
				if (cm.getPlayer().getCSPoints(2) < price) {
					cm.sendSimple("跳過主線需要5000楓點，您的楓點不夠。");
					cm.dispose()
					return;
				}
				cm.sendYesNo("主線跳過就沒辦法重新復原，而且我要收你5000楓點，確定要跳過嗎？");
			}
		}
		else {
			cm.sendYesNo("特殊任務跳過就沒辦法重新復原，確定要跳過嗎？");
		}
	}
	else if (status == 2) {
		switch (selectionNode) {
			case 0:
				if (cm.getLevel() <= 199) {
					text = "#r - [阿爾卡娜]恢復和諧的森林 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("恢復和諧的森林") == 0) {
					cm.forceCompleteQuest(34478);	//數字填上任務編號
					cm.setPQLog("恢復和諧的森林");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 26:
				if (cm.getLevel() <= 10) {
					text = "#r - 前往耶雷弗 >> #k\r\n\r\n10級以下的不能完成任務。";
				} else if (cm.getLevel() >= 10 && cm.getPQLog("前往耶雷弗") == 0) {
					cm.forceCompleteQuest(57185);	//數字填上任務編號
					cm.setPQLog("前往耶雷弗");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 27:
				if (cm.getLevel() <= 10) {
					text = "#r - 群雄聚集 >> #k\r\n\r\n10級以下的不能完成任務。";
				} else if (cm.getLevel() >= 10 && cm.getPQLog("群雄聚集") == 0) {
					cm.forceCompleteQuest(57452);	//數字填上任務編號
					cm.setPQLog("群雄聚集");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 1:
				if (cm.getLevel() <= 199) {
					text = "#r - [消逝的旅途]失去記憶的神官卡歐 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("神秘力量") == 0) {
					cm.forceCompleteQuest(1466);	//數字填上任務編號
					cm.setPQLog("神秘力量");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				/*
				if (cm.getLevel() <= 9) {
					text ="#r - [教學] 來了解回家卷軸吧 >> #k\r\n\r\n10級以下的不能完成任務。";
				} else if(cm.getLevel() >= 10 && cm.getPQLog("來了解回家卷軸吧") == 0) {
					cm.forceCompleteQuest(16880);	//數字填上任務編號
					cm.setPQLog("恢來了解回家卷軸吧");
					text ="完成";
				} else {
					text ="您已完成過此任務。";
				}*/
				break;
			case 2:
				if (cm.getLevel() <= 199) {
					text = "#r - [消逝的旅途]失去記憶的神官卡歐 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("失去記憶的神官卡歐") == 0) {
					cm.forceCompleteQuest(34100);	//數字填上任務編號
					cm.forceCompleteQuest(34101);	//數字填上任務編號
					cm.forceCompleteQuest(34102);	//數字填上任務編號
					cm.forceCompleteQuest(34103);	//數字填上任務編號
					cm.forceCompleteQuest(34104);	//數字填上任務編號
					cm.forceCompleteQuest(34105);	//數字填上任務編號
					cm.forceCompleteQuest(34106);	//數字填上任務編號
					cm.forceCompleteQuest(34107);	//數字填上任務編號
					cm.forceCompleteQuest(34108);	//數字填上任務編號
					cm.forceCompleteQuest(34109);	//數字填上任務編號
					cm.forceCompleteQuest(34110);	//數字填上任務編號
					cm.forceCompleteQuest(34111);	//數字填上任務編號
					cm.forceCompleteQuest(34112);	//數字填上任務編號
					cm.forceCompleteQuest(34113);	//數字填上任務編號
					cm.forceCompleteQuest(34114);	//數字填上任務編號
					cm.forceCompleteQuest(34115);	//數字填上任務編號
					cm.forceCompleteQuest(34116);	//數字填上任務編號
					cm.forceCompleteQuest(34117);	//數字填上任務編號
					cm.forceCompleteQuest(34118);	//數字填上任務編號
					cm.forceCompleteQuest(34119);	//數字填上任務編號
					cm.forceCompleteQuest(34120);	//數字填上任務編號
					cm.setPQLog("失去記憶的神官卡歐");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 3:
				if (cm.getLevel() <= 199) {
					text = "#r - [反轉城市]順著河水流下來的物品 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("順著河水流下來的物品") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(37601);	//數字填上任務編號
					cm.forceCompleteQuest(37602);	//數字填上任務編號
					cm.forceCompleteQuest(37603);	//數字填上任務編號
					cm.forceCompleteQuest(37604);	//數字填上任務編號
					cm.forceCompleteQuest(37605);	//數字填上任務編號
					cm.forceCompleteQuest(37606);	//數字填上任務編號
					cm.forceCompleteQuest(37607);	//數字填上任務編號
					cm.forceCompleteQuest(37608);	//數字填上任務編號
					cm.forceCompleteQuest(37609);	//數字填上任務編號
					cm.forceCompleteQuest(37610);	//數字填上任務編號
					cm.forceCompleteQuest(37611);	//數字填上任務編號
					cm.forceCompleteQuest(37612);	//數字填上任務編號
					cm.forceCompleteQuest(37613);	//數字填上任務編號
					cm.forceCompleteQuest(37614);	//數字填上任務編號
					cm.forceCompleteQuest(37615);	//數字填上任務編號
					cm.forceCompleteQuest(37616);	//數字填上任務編號
					cm.forceCompleteQuest(37617);	//數字填上任務編號
					cm.forceCompleteQuest(37618);	//數字填上任務編號
					cm.forceCompleteQuest(37619);	//數字填上任務編號
					cm.forceCompleteQuest(37620);	//數字填上任務編號
					cm.setPQLog("順著河水流下來的物品");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 4:
				if (cm.getLevel() <= 199) {
					text = "#r - [啾啾艾爾蘭]阻隔的奧術之河 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("阻隔的奧術之河") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(34200);	//數字填上任務編號
					cm.forceCompleteQuest(34201);	//數字填上任務編號
					cm.forceCompleteQuest(34202);	//數字填上任務編號
					cm.forceCompleteQuest(34203);	//數字填上任務編號
					cm.forceCompleteQuest(34204);	//數字填上任務編號
					cm.forceCompleteQuest(34205);	//數字填上任務編號
					cm.forceCompleteQuest(34206);	//數字填上任務編號
					cm.forceCompleteQuest(34207);	//數字填上任務編號
					cm.forceCompleteQuest(34208);	//數字填上任務編號
					cm.forceCompleteQuest(34209);	//數字填上任務編號
					cm.forceCompleteQuest(34210);	//數字填上任務編號
					cm.forceCompleteQuest(34211);	//數字填上任務編號
					cm.forceCompleteQuest(34212);	//數字填上任務編號
					cm.forceCompleteQuest(34213);	//數字填上任務編號
					cm.forceCompleteQuest(34214);	//數字填上任務編號
					cm.forceCompleteQuest(34215);	//數字填上任務編號
					cm.forceCompleteQuest(34216);	//數字填上任務編號
					cm.forceCompleteQuest(34217);	//數字填上任務編號
					cm.forceCompleteQuest(34218);	//數字填上任務編號
					cm.setPQLog("阻隔的奧術之河");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 5:
				if (cm.getLevel() <= 199) {
					text = "#r - [阿爾卡娜]再見，惡夢的都市 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("再見，惡夢的都市") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(34450);	//數字填上任務編號
					cm.forceCompleteQuest(34451);	//數字填上任務編號
					cm.forceCompleteQuest(34452);	//數字填上任務編號
					cm.forceCompleteQuest(34453);	//數字填上任務編號
					cm.forceCompleteQuest(34454);	//數字填上任務編號
					cm.forceCompleteQuest(34455);	//數字填上任務編號
					cm.forceCompleteQuest(34456);	//數字填上任務編號
					cm.forceCompleteQuest(34457);	//數字填上任務編號
					cm.forceCompleteQuest(34458);	//數字填上任務編號
					cm.forceCompleteQuest(34459);	//數字填上任務編號
					cm.forceCompleteQuest(34460);	//數字填上任務編號
					cm.forceCompleteQuest(34461);	//數字填上任務編號
					cm.forceCompleteQuest(34462);	//數字填上任務編號
					cm.forceCompleteQuest(34463);	//數字填上任務編號
					cm.forceCompleteQuest(34464);	//數字填上任務編號
					cm.forceCompleteQuest(34465);	//數字填上任務編號
					cm.forceCompleteQuest(34466);	//數字填上任務編號
					cm.forceCompleteQuest(34467);	//數字填上任務編號
					cm.forceCompleteQuest(34468);	//數字填上任務編號
					cm.forceCompleteQuest(34469);	//數字填上任務編號
					cm.forceCompleteQuest(34470);	//數字填上任務編號
					cm.forceCompleteQuest(34471);	//數字填上任務編號
					cm.forceCompleteQuest(34472);	//數字填上任務編號
					cm.forceCompleteQuest(34473);	//數字填上任務編號
					cm.forceCompleteQuest(34474);	//數字填上任務編號
					cm.forceCompleteQuest(34475);	//數字填上任務編號
					cm.forceCompleteQuest(34476);	//數字填上任務編號
					cm.forceCompleteQuest(34477);	//數字填上任務編號
					cm.forceCompleteQuest(34478);	//數字填上任務編號
					cm.setPQLog("再見，惡夢的都市");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 6:
				if (cm.getLevel() <= 199) {
					text = "#r - [艾斯佩拉] 陌生人們 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("陌生人們") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(34561);	//數字填上任務編號
					cm.forceCompleteQuest(34562);	//數字填上任務編號
					cm.forceCompleteQuest(34563);	//數字填上任務編號
					cm.forceCompleteQuest(34564);	//數字填上任務編號
					cm.forceCompleteQuest(34565);	//數字填上任務編號
					cm.forceCompleteQuest(34566);	//數字填上任務編號
					cm.forceCompleteQuest(34567);	//數字填上任務編號
					cm.forceCompleteQuest(34568);	//數字填上任務編號
					cm.forceCompleteQuest(34569);	//數字填上任務編號
					cm.forceCompleteQuest(34570);	//數字填上任務編號
					cm.forceCompleteQuest(34571);	//數字填上任務編號
					cm.forceCompleteQuest(34572);	//數字填上任務編號
					cm.forceCompleteQuest(34573);	//數字填上任務編號
					cm.forceCompleteQuest(34574);	//數字填上任務編號
					cm.forceCompleteQuest(34575);	//數字填上任務編號
					cm.forceCompleteQuest(34576);	//數字填上任務編號
					cm.forceCompleteQuest(34577);	//數字填上任務編號
					cm.forceCompleteQuest(34578);	//數字填上任務編號
					cm.forceCompleteQuest(34579);	//數字填上任務編號
					cm.forceCompleteQuest(34580);	//數字填上任務編號
					cm.forceCompleteQuest(34581);	//數字填上任務編號
					cm.forceCompleteQuest(34582);	//數字填上任務編號
					cm.forceCompleteQuest(34583);	//數字填上任務編號
					cm.forceCompleteQuest(34584);	//數字填上任務編號
					cm.forceCompleteQuest(34585);	//數字填上任務編號
					cm.forceCompleteQuest(34586);	//數字填上任務編號
					cm.setPQLog("陌生人們");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 7:
				if (cm.getLevel() <= 199) {
					text = "#r - [嚼嚼]來自啾啾村的口信 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("來自啾啾村的口信") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(37701);	//數字填上任務編號
					cm.forceCompleteQuest(37702);	//數字填上任務編號
					cm.forceCompleteQuest(37703);	//數字填上任務編號
					cm.forceCompleteQuest(37704);	//數字填上任務編號
					cm.forceCompleteQuest(37705);	//數字填上任務編號
					cm.forceCompleteQuest(37706);	//數字填上任務編號
					cm.forceCompleteQuest(37707);	//數字填上任務編號
					cm.forceCompleteQuest(37708);	//數字填上任務編號
					cm.forceCompleteQuest(37709);	//數字填上任務編號
					cm.forceCompleteQuest(37710);	//數字填上任務編號
					cm.forceCompleteQuest(37711);	//數字填上任務編號
					cm.forceCompleteQuest(37712);	//數字填上任務編號
					cm.forceCompleteQuest(37713);	//數字填上任務編號
					cm.forceCompleteQuest(37714);	//數字填上任務編號
					cm.forceCompleteQuest(37715);	//數字填上任務編號
					cm.forceCompleteQuest(37716);	//數字填上任務編號
					cm.forceCompleteQuest(37717);	//數字填上任務編號
					cm.forceCompleteQuest(37718);	//數字填上任務編號
					cm.forceCompleteQuest(37719);	//數字填上任務編號
					cm.forceCompleteQuest(37720);	//數字填上任務編號
					cm.forceCompleteQuest(37721);	//數字填上任務編號
					cm.forceCompleteQuest(37722);	//數字填上任務編號
					cm.forceCompleteQuest(37723);	//數字填上任務編號
					cm.forceCompleteQuest(37724);	//數字填上任務編號
					cm.forceCompleteQuest(37725);	//數字填上任務編號
					cm.forceCompleteQuest(37726);	//數字填上任務編號
					cm.setPQLog("來自啾啾村的口信");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 8:
				if (cm.getLevel() <= 199) {
					text = "#r - [魔菈斯] 飛魚所傳達的話 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("飛魚所傳達的話") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(34230);	//數字填上任務編號
					cm.forceCompleteQuest(34231);	//數字填上任務編號
					cm.forceCompleteQuest(34232);	//數字填上任務編號
					cm.forceCompleteQuest(34233);	//數字填上任務編號
					cm.forceCompleteQuest(34234);	//數字填上任務編號
					cm.forceCompleteQuest(34235);	//數字填上任務編號
					cm.forceCompleteQuest(34236);	//數字填上任務編號
					cm.forceCompleteQuest(34237);	//數字填上任務編號
					cm.forceCompleteQuest(34238);	//數字填上任務編號
					cm.forceCompleteQuest(34239);	//數字填上任務編號
					cm.forceCompleteQuest(34240);	//數字填上任務編號
					cm.forceCompleteQuest(34241);	//數字填上任務編號
					cm.forceCompleteQuest(34242);	//數字填上任務編號
					cm.forceCompleteQuest(34243);	//數字填上任務編號
					cm.forceCompleteQuest(34244);	//數字填上任務編號
					cm.forceCompleteQuest(34246);	//數字填上任務編號
					cm.forceCompleteQuest(34249);	//數字填上任務編號
					cm.forceCompleteQuest(34250);	//數字填上任務編號
					cm.forceCompleteQuest(34251);	//數字填上任務編號
					cm.forceCompleteQuest(34252);	//數字填上任務編號
					cm.forceCompleteQuest(34253);	//數字填上任務編號
					cm.forceCompleteQuest(34254);	//數字填上任務編號
					cm.forceCompleteQuest(34255);	//數字填上任務編號
					cm.forceCompleteQuest(34256);	//數字填上任務編號
					cm.forceCompleteQuest(34257);	//數字填上任務編號
					cm.forceCompleteQuest(34258);	//數字填上任務編號
					cm.forceCompleteQuest(34259);	//數字填上任務編號
					cm.forceCompleteQuest(34260);	//數字填上任務編號
					cm.forceCompleteQuest(34261);	//數字填上任務編號
					cm.forceCompleteQuest(34262);	//數字填上任務編號
					cm.forceCompleteQuest(34263);	//數字填上任務編號
					cm.forceCompleteQuest(34264);	//數字填上任務編號
					cm.forceCompleteQuest(34265);	//數字填上任務編號
					cm.forceCompleteQuest(34266);	//數字填上任務編號
					cm.forceCompleteQuest(34267);	//數字填上任務編號
					cm.forceCompleteQuest(34268);	//數字填上任務編號
					cm.forceCompleteQuest(34269);	//數字填上任務編號
					cm.forceCompleteQuest(34272);	//數字填上任務編號
					cm.setPQLog("飛魚所傳達的話");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 9:
				if (cm.getLevel() <= 199) {
					text = "#r - [夢都]來自拉契爾恩的惡夢 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("來自拉契爾恩的惡夢") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(34300);
					cm.forceCompleteQuest(34301);
					cm.forceCompleteQuest(34302);
					cm.forceCompleteQuest(34303);
					cm.forceCompleteQuest(34304);
					cm.forceCompleteQuest(34305);
					cm.forceCompleteQuest(34306);
					cm.forceCompleteQuest(34307);
					cm.forceCompleteQuest(34308);
					cm.forceCompleteQuest(34309);
					cm.forceCompleteQuest(34310);
					cm.forceCompleteQuest(34311);
					cm.forceCompleteQuest(34312);
					cm.forceCompleteQuest(34313);
					cm.forceCompleteQuest(34314);
					cm.forceCompleteQuest(34315);
					cm.forceCompleteQuest(34316);
					cm.forceCompleteQuest(34317);
					cm.forceCompleteQuest(34318);
					cm.forceCompleteQuest(34319);
					cm.forceCompleteQuest(34320);
					cm.forceCompleteQuest(34321);
					cm.forceCompleteQuest(34322);
					cm.forceCompleteQuest(34323);
					cm.forceCompleteQuest(34324);
					cm.forceCompleteQuest(34325);
					cm.forceCompleteQuest(34326);
					cm.forceCompleteQuest(34327);
					cm.forceCompleteQuest(34328);
					cm.forceCompleteQuest(34329);
					cm.forceCompleteQuest(34330);
					cm.forceCompleteQuest(34331);
					cm.forceCompleteQuest(34332);
					cm.forceCompleteQuest(34333);
					cm.forceCompleteQuest(34334);
					cm.forceCompleteQuest(34336);
					cm.setPQLog("來自拉契爾恩的惡夢");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 11:
				if (cm.getLevel() <= 199) {
					text = "#r - [月之橋] 為了拯救世界 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("月之橋2") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(35600);
					cm.forceCompleteQuest(35601);
					cm.forceCompleteQuest(35602);
					cm.forceCompleteQuest(35603);
					cm.forceCompleteQuest(35604);
					cm.forceCompleteQuest(35605);
					cm.forceCompleteQuest(35606);
					cm.forceCompleteQuest(35607);
					cm.forceCompleteQuest(35608);
					cm.forceCompleteQuest(35609);
					cm.forceCompleteQuest(35610);
					cm.forceCompleteQuest(35611);
					cm.forceCompleteQuest(35612);
					cm.forceCompleteQuest(35613);
					cm.forceCompleteQuest(35614);
					cm.forceCompleteQuest(35615);
					cm.forceCompleteQuest(35616);
					cm.forceCompleteQuest(35617);
					cm.forceCompleteQuest(35618);
					cm.forceCompleteQuest(35619);
					cm.forceCompleteQuest(35620);
					cm.forceCompleteQuest(35621);
					cm.forceCompleteQuest(35622);
					cm.forceCompleteQuest(35623);
					cm.forceCompleteQuest(35624);
					cm.forceCompleteQuest(35625);
					cm.forceCompleteQuest(35626);
					cm.forceCompleteQuest(35627);
					cm.forceCompleteQuest(35628);
					cm.forceCompleteQuest(35629);
					cm.forceCompleteQuest(35630);
					cm.forceCompleteQuest(35631);
					cm.forceCompleteQuest(35632);
					cm.forceCompleteQuest(35700);
					cm.forceCompleteQuest(35701);
					cm.forceCompleteQuest(35702);
					cm.forceCompleteQuest(35703);
					cm.forceCompleteQuest(35704);
					cm.forceCompleteQuest(35705);
					cm.forceCompleteQuest(35706);
					cm.forceCompleteQuest(35707);
					cm.forceCompleteQuest(35708);
					cm.forceCompleteQuest(35709);
					cm.forceCompleteQuest(35710);
					cm.forceCompleteQuest(35711);
					cm.forceCompleteQuest(35712);
					cm.forceCompleteQuest(35713);
					cm.forceCompleteQuest(35714);
					cm.forceCompleteQuest(35715);
					cm.forceCompleteQuest(35716);
					cm.forceCompleteQuest(35717);
					cm.forceCompleteQuest(35718);
					cm.forceCompleteQuest(35719);
					cm.forceCompleteQuest(35720);
					cm.forceCompleteQuest(35721);
					cm.forceCompleteQuest(35722);
					cm.forceCompleteQuest(35723);
					cm.forceCompleteQuest(35724);
					cm.forceCompleteQuest(35725);
					cm.forceCompleteQuest(35726);
					cm.forceCompleteQuest(35727);
					cm.forceCompleteQuest(35728);
					cm.forceCompleteQuest(35729);
					cm.forceCompleteQuest(35730);
					cm.forceCompleteQuest(35731);
					cm.forceCompleteQuest(35740);
					cm.forceCompleteQuest(35753);
					cm.forceCompleteQuest(35754);
					cm.forceCompleteQuest(35756);
					cm.forceCompleteQuest(35800);
					cm.forceCompleteQuest(35801);
					cm.forceCompleteQuest(35802);
					cm.forceCompleteQuest(35803);
					cm.forceCompleteQuest(35804);
					cm.forceCompleteQuest(35805);
					cm.forceCompleteQuest(35806);
					cm.forceCompleteQuest(35807);
					cm.forceCompleteQuest(35808);
					cm.forceCompleteQuest(35809);
					cm.forceCompleteQuest(35810);
					cm.forceCompleteQuest(35811);
					cm.forceCompleteQuest(35812);
					cm.forceCompleteQuest(35813);
					cm.forceCompleteQuest(35814);
					cm.forceCompleteQuest(35815);
					cm.forceCompleteQuest(35816);
					cm.forceCompleteQuest(35817);

					cm.setPQLog("月之橋2");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 10:
				if (cm.getLevel() <= 199) {
					text = "#r - [飯店]來自飯店的任務 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("飯店系列任務") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(38101);
					cm.forceCompleteQuest(38102);
					cm.forceCompleteQuest(38103);
					cm.forceCompleteQuest(38104);
					cm.forceCompleteQuest(38105);
					cm.forceCompleteQuest(38106);
					cm.forceCompleteQuest(38107);
					cm.forceCompleteQuest(38108);
					cm.forceCompleteQuest(38109);
					cm.forceCompleteQuest(38110);
					cm.forceCompleteQuest(38111);
					cm.forceCompleteQuest(38112);
					cm.forceCompleteQuest(38113);
					cm.forceCompleteQuest(38114);
					cm.forceCompleteQuest(38115);
					cm.forceCompleteQuest(38116);
					cm.forceCompleteQuest(38117);
					cm.forceCompleteQuest(38118);
					cm.forceCompleteQuest(38119);
					cm.forceCompleteQuest(38120);
					cm.forceCompleteQuest(38122);
					cm.forceCompleteQuest(1484);
					cm.setPQLog("飯店系列任務");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 12:
				if (cm.getLevel() <= 199) {
					text = "#r - [賽拉斯]修理無線電的方法。 >> #k\r\n\r\n200級以下的不能完成任務。";
				} else if (cm.getLevel() >= 200 && cm.getPQLog("賽拉斯系列任務") == 0) {
					cm.getPlayer().modifyCSPoints(2, -1 * price);
					cm.forceCompleteQuest(37901);
					cm.forceCompleteQuest(37902);
					cm.forceCompleteQuest(37903);
					cm.forceCompleteQuest(37904);
					cm.forceCompleteQuest(37905);
					cm.forceCompleteQuest(37906);
					cm.forceCompleteQuest(37907);
					cm.forceCompleteQuest(37908);
					cm.forceCompleteQuest(37909);
					cm.forceCompleteQuest(37910);
					cm.forceCompleteQuest(37911);
					cm.forceCompleteQuest(37912);
					cm.forceCompleteQuest(37913);
					cm.forceCompleteQuest(37914);
					cm.forceCompleteQuest(37915);
					cm.forceCompleteQuest(37916);
					cm.forceCompleteQuest(37917);
					cm.forceCompleteQuest(37918);
					cm.forceCompleteQuest(37919);
					cm.forceCompleteQuest(37920);
					cm.forceCompleteQuest(37921);
					
					cm.setPQLog("賽拉斯系列任務");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 21:
				if (cm.getLevel() <= 59) {
					text = "#r - [楓之谷聯盟戰地] 打敗迷你龍 >> #k\r\n\r\n59級以下的不能完成任務。";
				} else if (cm.getLevel() >= 60 && cm.getPQLog("打敗迷你龍") == 0) {
					cm.forceCompleteQuest(16011);	//數字填上任務編號
					cm.setPQLog("打敗迷你龍");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 22:
				if (cm.getLevel() <= 59) {
					text = "#r - [楓之谷聯盟戰地] 打敗黃金翼龍 >> #k\r\n\r\n59級以下的不能完成任務。";
				} else if (cm.getLevel() >= 60 && cm.getPQLog("打敗黃金翼龍") == 0) {
					cm.forceCompleteQuest(16012);	//數字填上任務編號
					cm.setPQLog("打敗黃金翼龍");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 23:
				if (cm.getLevel() <= 10) {
					text = "#r - 獻給有魅力之人的禮物 >> #k\r\n\r\n10級以下的不能完成任務。";
				} else if (cm.getPQLog("獻給有魅力之人的禮物") == 0) {
					cm.forceCompleteQuest(6500);	//數字填上任務編號
					cm.setPQLog("楓之谷聯盟戰地介紹");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 24:
				if (cm.getLevel() <= 10) {
					text = "#r - 飛向天空！ >> #k\r\n\r\n10級以下的不能完成任務。";
				} else if (cm.getPQLog("飛向天空") == 0) {
					cm.teachSkill(80001089, 1, 1);
					cm.forceCompleteQuest(50722);	//數字填上任務編號
					cm.setPQLog("飛向天空");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
			case 25:
				if (cm.getLevel() <= 10) {
					text = "#r - 萌獸的出現 >> #k\r\n\r\n10級以下的不能完成任務。";
				} else if (cm.getPQLog("萌獸的出現") == 0) {
					cm.forceCompleteQuest(55433);	//數字填上任務編號
					cm.forceCompleteQuest(55434);	//數字填上任務編號
					cm.forceCompleteQuest(55435);	//數字填上任務編號
					cm.setPQLog("萌獸的出現");
					text = "完成";
				} else {
					text = "您已完成過此任務。";
				}
				break;
		}
		cm.sendOk(text);
		cm.dispose();
	}
}