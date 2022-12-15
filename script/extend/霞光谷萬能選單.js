
load("scripts/霞光共通.js");
/* global cm */
var status = -1;
var select = -1;
//符號區
/*var Logo = "     #fEffect/BasicEff/DoggoLogo/0#\r\n";
var arrow1 = "#fUI/UIWindow/Quest/icon8/0#";
var arrow = "#fUI/UIWindow.img/VegaSpell/EffectArrow/0#";
var 藍圈圈 = "#fUI/UIWindow/Quest/icon4#";
var 藍閃 = "#i4033428#";
var 音符 = "#fEffect/CharacterEff/1003249/1/0#";
var 星星 = "#fEffect/CharacterEff/1102232/2/0#";
var 紫星星 = "#fEffect/CharacterEff/1051296/1/0#";
var 七彩星星 = "#fEffect/CharacterEff/1082312/0/0#";
var 兔子 = "#fEffect/ItemEff/1003849/effect/default/1#";// "#fEffect/CharacterEff/1072337/0/0#";
var 紅閃 = "#fEffect/CharacterEff/1114000/3/0#";
var 黃星 = "#fEffect/CharacterEff/1051295/1/0#";

//var 黃花 = "#fEffect/ItemEff/1003496/effect/default/1#";
//var 黃花 = "#fEffect/ItemEff/1003633/effect/default/1#";
//var 黃花 = "#fEffect/ItemEff/1003632/effect/default/1#";

var 黃花 = "#fEffect/CharacterEff/1112926/0/0#";
var 藍花 = "#fEffect/CharacterEff/1112926/0/3#";
var 綠花 = "#fEffect/CharacterEff/1112926/0/4#";
var 楓點 = "#fEffect/CharacterEff/1112926/0/5#";
var GASH = "#fEffect/CharacterEff/1112926/0/6#";
var 鬧鐘 = "#fEffect/CharacterEff/1112926/0/7#";
var 小兔子 = "#fEffect/CharacterEff/1112960/3/1#";
var 箭頭下 = "#fUI/CharacterEff.img/Shaman/modeSelect/arrow/4/4#";*/
var 紫花 = "#fEffect/CharacterEff/1112926/0/1#";
var arrow2 = "#fUI/UIWindow/Quest/icon6/7#";
var 黑花 = "#fEffect/CharacterEff/1112926/0/2#";
//遊戲功能
var menuList = [
    ["地圖傳送", 9010000, 紫花, "地圖傳送"],
    ["#r贊助專區#k", 9010000, 紫花, "贊助專區"],
    ["獎勵中心", 9010000, 紫花, "領獎中心"],
    ["一鍵轉職", 9010000, 紫花, "一鍵轉職"],
    ["#r霞光每日#k", 9010000, 紫花, "霞光每日"],
    ["#r玩水活動#k", 9010000, 紫花, "霞光玩水節前夜祭"],
    ["樂豆商店", 9010000, 紫花, "樂豆商店"],
    ["楓點商店", 9010000, 紫花, "楓點商店"],
    ["物品兌換", 9010000, 紫花, "物品兌換"],
    ["貨幣兌換", 9010000, 紫花, "貨幣兌換"],
    ["一鍵任務", 9010000, 紫花, "一鍵任務"],
    ["租借裝備", 9010000, 紫花, "租借裝備"],
    ["美容美髮", 9010000, 紫花, "美容美髮"],
    ["點裝商城", 9010000, 紫花, "取得點裝"],
    ["自由轉職", 9010000, 紫花, "自由轉職"],
];

var enhanceList = [
    ["霞光勳章", 9010000, 紫花, "霞光勳章"],
    ["點裝潛能", 9010000, 紫花, "點裝潛能"],
    ["裝備升星", 9010000, 紫花, "輪迴幽暗升星"],
    ["裝備進化", 9010000, 紫花, "裝備進化"],
    ["創世強化", 9010000, 紫花, "創世強化"],
    ["技能硬幣", 9010000, 紫花, "硬幣技能學習"],
    ["漆黑解放", 9010000, 紫花, "漆黑解放"],
    ["武器鐵覘", 9010000, 紫花, "時裝武器鐵覘"],
    ["萌獸鐵覘", 9010000, 紫花, "萌獸鐵覘"],
]

var commandList = [
    ["查詢掉寶", 9010000, 紫花, "searchDrop"],
    ["此處掉寶", 9010000, 紫花, "checkDrop"],
    ["聯盟戰地", 9010000, 紫花, "聯盟戰地"],
    ["祕法銀行", 9010000, 紫花, "祕法銀行"],
    ["隨身倉庫", 9030100, 紫花, "隨身倉庫"],
]

var bossLogList = [
    //["凡雷恩","凡雷恩", 3, true, 3010188],
]

var testList = [
    ["測試功能", 9010000, 紫花, "MAXskill"],
    ["測試領獎", 9010000, 紫花, "領獎中心測試"],
    ["樂豆測試", 9010000, 紫花, "樂豆商店測試"],
    ["楓點測試", 9010000, 紫花, "楓點商店測試"],
    ["禮物測試", 9010000, 紫花, "送禮物測試"],
    ["解除卡登", 9010000, 紫花, "解卡登"],
    ["改屬測試", 9010000, 紫花, "裝備改屬"],
    ["點裝改屬", 9010000, 紫花, "時裝改屬"],
    ["轉潛測試", 9010000, 紫花, "複製裝備潛能"],
    ["推文登錄", 9010000, 紫花, "發推文測試"],
    ["美容美髮", 9010000, 紫花, "美容美髮測試"],
    ["噩夢地牢", 9010000, 紫花, "霞光噩夢地牢入場"],
    ["每日測試", 9010000, 紫花, "霞光每日測試"],
];
var cleanBag = ["裝備欄", "消耗欄", "裝飾欄", "其他欄", "特殊欄"];

function start() {
    var minimal = getMinimal(cm.getBossLog("MinimalFunction"));
    //簡約介面
    var type = 18;
    var info = [
        ["　　     目前線上人數 " + arrow2 + " #r", parseInt(Math.floor(cm.getTotalOnlinePlayerCount()) * 1.8), "  #k人\r\n"],
        ["　　     目前上線時間 " + arrow2 + " #r", cm.getOnlineTime(), "  #k分\r\n"],
        ["　　     贊助金額總計 " + arrow2 + " #r", cm.getHyPay(1), "  #k元\r\n"],
        ["　　     擁有紅利點數 " + arrow2 + " #r", cm.getHyPay(3), "  #k點\r\n"],
        ["　　     擁有樂豆點數 " + arrow2 + " #r", cm.getPlayer().getCSPoints(1), "  #k點\r\n"],
        ["　　     擁有楓葉點數 " + arrow2 + " #r", cm.getPlayer().getCSPoints(2), "  #k點\r\n"],
        ["　　   累積已消費樂豆 " + arrow2 + " #r", cm.getPlayer().getMvpPayAmount(), "  #k點\r\n"],
    ];


    var msg = "";//Logo;
    if (!minimal) {
        for (var i = 0; i < info.length; i++) {
            msg += info[i][0];
            msg += FormatString(" ", 8, info[i][1].toString());
            msg += info[i][2];
        }
    }
    /*
    if(cm.getPlayer().isAdmin()){
        cm.print( Math.ceil(cm.getPlayer().getStat().getTotalDropBuff(0) / 100 * cm.getPlayer().getAllDropRate(cm.getMap(), null, false) * 100)/100 )
    }
    */
    if(cm.getPlayer().isAdmin() && testList.length > 0){
        var yyyy =0;
        msg += "\r\n";
        msg += "         " + 紫花 + "   " + 紫花 + "   " + 紫花 + " #r測試功能#k " + 紫花 + "   " + 紫花 + "   " + 紫花 + "        ";
        msg += "\r\n ";
        for (var ii = 0; ii < testList.length; ii++) {
            var z = ii + 100000;
            yyyy++;
            msg += "#b#L" + z + "#" + testList[ii][2] + testList[ii][0] + "#l   ";
            if (yyyy % 3 == 0) {
                msg += "\r\n\r\n ";
            } else {
                msg += " ";
            }
        }
        msg += "\r\n\r\n ";
    }
    msg += "\r\n";
    msg += "         " + 紫花 + "   " + 紫花 + "   " + 紫花 + " #r遊戲功能#k " + 紫花 + "   " + 紫花 + "   " + 紫花 + "        ";
    msg += "\r\n ";
    var yy = 0;
    for (var ii = 0; ii < menuList.length; ii++) {
        var z = ii + 10000;
        yy++;
        msg += "#b#L" + z + "#" + menuList[ii][2] + menuList[ii][0] + "#l   ";
        if (yy % 3 == 0) {
            msg += "\r\n\r\n ";
        } else {
            msg += " ";
        }
    }

    msg += "\r\n\r\n\r\n";
    msg += "         " + 紫花 + "   " + 紫花 + "   " + 紫花 + " #r裝備強化#k " + 紫花 + "   " + 紫花 + "   " + 紫花 + "        ";
    msg += "\r\n ";
    var yyyyy = 0;
    for (var ii = 0; ii < enhanceList.length; ii++) {
        var z = ii + 1000;
        yyyyy++;
        msg += "#b#L" + z + "#" + enhanceList[ii][2] + enhanceList[ii][0] + "#l   ";
        if (yyyyy % 3 == 0) {
            msg += "\r\n\r\n ";
        } else {
            msg += " ";
        }
    }

    msg += "\r\n\r\n\r\n";
    msg += "         " + 紫花 + "   " + 紫花 + "   " + 紫花 + " #r便利功能#k " + 紫花 + "   " + 紫花 + "   " + 紫花 + "        ";
    msg += "\r\n ";
    var yyy = 0;
    for (var ii = 0; ii < commandList.length; ii++) {
        var z = ii;
        yyy++;
        msg += "#b#L" + z + "#" + commandList[ii][2] + commandList[ii][0] + "#l   ";
        if (yyy % 3 == 0) {
            msg += "\r\n\r\n ";
        } else {
            msg += " ";
        }
    }
    /*var yyy = 0;
    msg += "\r\n\r\n";
    msg += "           " + 黑花 + "   " + 黑花 + "   " + 黑花 + " #rBoss次數#k " + 黑花 + "   " + 黑花 + "   " + 黑花 + "        ";
    msg += "\r\n ";
    yyy=0;
    for (var i = 0; i < bossLogList.length; i++) {
        yyy++;
        var z = i;
        if(bossLogList[i][3] == true && cm.haveItem(5429902, 1)){
            bossLogList[i][2] *= 2;
        }
        msg += "#r#i" + bossLogList[i][4] + "#" + bossLogList[i][0] +  "：" + cm.getPlayer().getBossLog(bossLogList[i][1]) + "/" + bossLogList[i][2] + "次";
        if (yyy % 2 == 0) {
            msg += "\r\n\r\n ";
        } else {
            msg += " ";
        }
    }*/

    cm.sendSimple(msg);
}

var status = -1;
var command = "";
var commandPara = {};

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (select === -1) {
            select = selection;
        }
        if (selection == -1) {
            cm.dispose();
            return;
        }
        if (select >= 100000){
            if(cm.getPlayer().isAdmin()){
                if(testList[select - 100000][1] == 9010000){
                    cm.dispose();
                    cm.openNpc(9010000, testList[select - 100000][3]);
                }
                else{
                    cm.dispose();
                    cm.openNpc(testList[select - 100000][1]);
                }
            }
            else{
                cm.dispose();
                return;
            }
        }
        else if (select >= 10000) { //指令功能
            if(menuList[select - 10000][1] == 9010000){
                cm.dispose();
                cm.openNpc(9010000, menuList[select - 10000][3]);
            }
            else{
                cm.dispose();
                cm.openNpc(menuList[select - 10000][1]);
            }
        }
        else if (select >= 1000) { //指令功能
            if(enhanceList[select - 1000][1] == 9010000){
                cm.dispose();
                cm.openNpc(9010000, enhanceList[select - 1000][3]);
            }
            else{
                cm.dispose();
                cm.openNpc(enhanceList[select - 1000][1]);
            }
        }
        else if (select < 1000) { //指令功能
            if(commandList[select][1] == 9010000){
                cm.dispose();
                cm.openNpc(9010000, commandList[select][3]);
            }
            else{
                if(commandList[select][1] == "shop"){
                                
                    cm.dispose();
                    cm.openShop(1011100);
                }
                else{
                    cm.dispose();
                    cm.openNpc(commandList[select][1]);
                }
            }
        }
        else {
            if(menuList[select - 10000][1] == 9010000){
                cm.dispose();
                cm.openNpc(9010000, menuList[select - 10000][3]);
            }
            else{
                cm.dispose();
                cm.openNpc(menuList[select - 10000][1]);
            }
        }
    }
}

function openNpc(npcid) {
    openNpc(npcid, null);
}

function openNpc(npcid, script) {
    var mapid = cm.getMapId();
    cm.dispose();
    if (cm.getPlayerStat("LVL") < 10) {
        cm.sendOk("你的等級不能小於10等.");
    } else if (
        cm.hasSquadByMap() ||
        cm.hasEventInstance() ||
        cm.hasEMByMap() ||
        mapid >= 990000000 ||
        (mapid >= 680000210 && mapid <= 680000502) ||
        (mapid / 1000 === 980000 && mapid !== 980000000) ||
        mapid / 100 === 1030008 ||
        mapid / 100 === 922010 ||
        mapid / 10 === 13003000) {
        cm.sendOk("你不能在這裡使用這個功能.");
    } else {
        if (script == null) {
            cm.openNpc(npcid);
        } else {
            cm.openNpc(npcid, script);
        }
    }
}

function FormatString(fill, length, content) {
    var str = content;
    var time = length - content.length;
    while (time > 0) {
        str += fill;
        time--;
    }
    return str;
}
function getMinimal(bosslog) {
    if ((bosslog & 1) === 0) {
        return false;
    } else {
        return true;
    }
}