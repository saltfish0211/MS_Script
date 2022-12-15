/* global cm */

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/config/CommonItemConfig.js");
load("scripts/霞光共通.js");
var status = -1;
var select = -1;
var currentSet = "端午忍耐_" + getToday();

var maps = [
    280020000,//火山的氣息第一階段～第二階段
    109040001,//障礙競走第一階段～第四階段
    992017000,//海底 17層
    992022000, //海底 22層
    992023000,//海底 23層
    992041000,//海底 41層
    910360100,//地鐵B2
    910130001,//忍耐的森林第二階段
    910530200,//沉睡森林第五階段～第七階段
    922000000,//玩具工廠 <第四區>
]
var mapNames = [
    "火山的氣息第一階段～第二階段",
    "障礙競走第一階段～第四階段",
    "海底 17層",
    "海底 22層",
    "海底 23層",
    "海底 41層",
    "地鐵B2",
    "忍耐的森林第二階段",
    "沉睡森林第五階段～第七階段",
    "玩具工廠 <第四區>"
]


var middleSpawnPoint = [
    [280020000, new java.awt.Point(5508,-215)],
    [109040002, new java.awt.Point(2368,-735)],
    [992017000, new java.awt.Point(456,-360)],
    [992022000, new java.awt.Point(1127,-654)],//待測
    [992023000, new java.awt.Point(1956,155)],//待測
    [992041000, new java.awt.Point(2048,-323)],
    [910360101, new java.awt.Point(-1184,923)],
    [910130001, new java.awt.Point(-170,-1702)],
    [910530200, new java.awt.Point(1350, -1905)],
    [922000000, new java.awt.Point(1500,-78)],
];

var mapSpawnPoint = [
    [280020001, new java.awt.Point(5884,-277)],
    [109040004, new java.awt.Point(1112,-1845)],
    [992017000, new java.awt.Point(1374,-240)],
    [992022000, new java.awt.Point(3081,-907)],//待測
    [992023000, new java.awt.Point(3413,155)],//待測
    [992041000, new java.awt.Point(584,-868)],
    [910360102, new java.awt.Point(0,923)],
    [910130001, new java.awt.Point(-340, -3502)],
    [910530202, new java.awt.Point(984, -3165)],
    [922000000, new java.awt.Point(4857,-138)],
];


/*var maps = [910530000, 910530100, 910530200, 910360000, 992012000, 910360100, 910130000, 910130001, 910130100];
var mapNames = ["沉睡森林第一階段～第二階段", "沉睡森林第三階段～第四階段", "沉睡森林第五階段～第七階段",
    "地鐵B1", "綠野仙蹤 海底第12層", "地鐵B2",
    "忍耐的森林第一階段", "忍耐的森林第二階段", "忍耐的森林第三階段"];*/
/*var mapSpawnPoint = [
    [910530001, new java.awt.Point(-17, -2685)],
    [910530101, new java.awt.Point(-345, -1755)],
    [910530202, new java.awt.Point(984, -3165)],
    [910360002, new java.awt.Point(110, 923)],
    [992012000, new java.awt.Point(3938, 270)],
    [910360102, new java.awt.Point(-36, 923)],
    [910130000, new java.awt.Point(156, -2962)],
    [910130001, new java.awt.Point(-340, -3502)],
    [910130100, new java.awt.Point(284, -2408)]
]

var middleSpawnPoint = [
    [910530001, new java.awt.Point(278, 135)],
    [910530101, new java.awt.Point(-345, -1755)],
    [910530202, new java.awt.Point(984, -3165)],
    [910360002, new java.awt.Point(110, 923)],
    [992012000, new java.awt.Point(3938, 270)],
    [910360102, new java.awt.Point(-36, 923)],
    [910130000, new java.awt.Point(156, -2962)],
    [910130001, new java.awt.Point(-340, -3502)],
    [910130100, new java.awt.Point(284, -2408)]
]*/

var rewards = [
    [常用道具.進化晶片選擇卷, 2],
    [常用道具.大師附加方塊, 5],
    [4319916, 2],
    [常用道具.V卷箱, 2],
    [常用道具.B卷箱, 1],
    [常用道具.榮耀卷箱, 1],
    [2633634, 10],
    [常用道具.大師附加方塊, 10],
    [常用道具.進化晶片選擇卷, 3],
    [4319916, 4], //漆黑解放硬幣
]
var rewardsHighest = [
    [常用道具.時裝自選潛能硬幣, 1],
    [常用道具.星力20強化卷, 2],
    [常用道具.B卷箱, 5],
    [常用道具.榮耀卷箱, 5],
    [常用道具.大師附加方塊, 30],
    [常用道具.星力20強化卷, 2],
    [常用道具.B卷箱, 5],
    [常用道具.榮耀卷箱, 5],
    [2633634, 150], //漆黑碎片
    [4319916, 20], //漆黑解放硬幣
];
var currentDay = 0;

function start() {
    ct = new Date();
    var oneJan = new Date(ct.getFullYear(),4,28);
    if(ct < oneJan){
        cm.sendOk("目前活動還沒開始！");
        cm.dispose();
        return;
    }
    else{
        currentDay = Math.max(0,Math.min(9, Math.floor((ct - oneJan) / (24 * 60 * 60 * 1000))));
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.sendOk("你還沒做好心理準備嗎？決定好了之後，請你再來和我說話。");
        cm.dispose();
        return;
    } else {
        status++;
    }

    switch (status) {
        case 0:
            var chrText = "";
            var selfBestTimeText = "";
            var data = cm.getConnection().prepareStatement("SELECT * FROM characterSet join characters on characterSet.accountid = characters.accountid where bossid = BINARY '" + currentSet + "' ORDER BY count ASC, characterSet.id ASC,level Desc").executeQuery(); // 查詢數據
            if (data.next()) {
                var bestTime = data.getInt("characterSet.count");
                var bestTimeText = bestTime >= 60 ? (Math.floor(bestTime / 60) + "分" + (bestTime % 60) + "秒") : bestTime + "秒";
                chrText = data.getString("characters.name") + "(" + bestTimeText + ")";
            }
            else {
                chrText = "目前還沒有玩家參與";
            }
            var selfBestTime = cm.getPlayer().getCharacterSet(currentSet);
            if (selfBestTime > 0) {
                selfBestTimeText = selfBestTime >= 60 ? (Math.floor(selfBestTime / 60) + "分" + (selfBestTime % 60) + "秒") : selfBestTime + "秒";
            }
            else {
                selfBestTimeText = "您還沒有參與過本日活動";
            }
            var text = "#d#e歡迎來到端午忍耐任務活動\r\n";
            text += "從5/26 18:00起每天都會有隨機的忍耐地圖，可以無限制入場，完成第一次可以獲得基礎活動獎勵，每日最快者還可獲得更稀有獎品！\r\n";
            text += "#d今日忍耐地圖：#b" + mapNames[currentDay] + "\r\n";
            text += "#b本日參與獎品：" + maskItem(rewards[currentDay][0]) + "x" + rewards[currentDay][1] + "\r\n";
            text += "#b第一名獎勵：" + maskItem(rewardsHighest[currentDay][0]) + "x" + rewardsHighest[currentDay][1] + "\r\n";
            text += "#r目前伺服器最佳紀錄：" + chrText + "\r\n";
            text += "#b目前您的最佳紀錄：" + selfBestTimeText + "\r\n";
            text += maskListNode(1, "#b#n我要入場\r\n");
            text += maskListNode(2, "#b#n我是昨天的第一名，想要領取冠軍獎勵！\r\n");

            cm.sendNext(text);
            break;
        case 1:
            if (selection == 1) {
                var endDate = new Date(ct.getFullYear(),5,7);
                if(new Date() > endDate){
                    cm.sendOk("活動已經結束了。");
                    cm.dispose();
                    break;
                }
                else{
                    cm.setCharacterSet("端午忍耐入場時間", Math.floor(Date.now() / 1000));
                    cm.setCharacterSet("端午忍耐地圖", mapSpawnPoint[currentDay][0]);
                    cm.setCharacterSet("端午忍耐地圖-中間站", middleSpawnPoint[currentDay][0]);
                    cm.warp(maps[currentDay])
                    cm.removeNpc(maps[currentDay], 1052008);
                    cm.spawnNpcForPlayer(mapSpawnPoint[currentDay][0], 9101003, mapSpawnPoint[currentDay][1]);
                    cm.spawnNpcForPlayer(middleSpawnPoint[currentDay][0], 9101003, middleSpawnPoint[currentDay][1]);
                }
            }
            else if(selection == 2){
                var pastDate = new Date();
                pastDate.setDate(pastDate.getDate() - 1);
                var pastSet = "端午忍耐_" + pastDate.getFullYear() + "/" + ((pastDate).getMonth() + 1) + "/" + (pastDate.getDate());
                var canTake = false;
                var data = cm.getConnection().prepareStatement("SELECT * FROM characterSet join characters on characterSet.accountid = characters.accountid where bossid = BINARY '" + pastSet + "' ORDER BY count ASC, characterSet.id ASC,level Desc").executeQuery(); // 查詢數據
                if (data.next()) {
                    var bestID = data.getInt("characterSet.accountid");
                    if(bestID != 0 && bestID == cm.getPlayer().getAccountID()){
                        canTake = true;
                    }
                }
                if(canTake && cm.getCharacterSet("第一名獎勵_" + pastSet) == 0){
                    cm.setCharacterSet("第一名獎勵_" + pastSet, 1);
                    cm.sendOk("已經發給你獎勵囉！");
                    cm.gainItem(rewardsHighest[currentDay-1][0], rewardsHighest[currentDay-1][1]);
                    cm.worldSpouseMessage(40, "『端午忍耐』 : 恭喜 " + cm.getPlayer().getName() + " 成為了昨日的忍耐之王，領取豐厚獎勵！");
                    cm.dispose();
                    return;
                }   
                else{
                    cm.sendOk("抱歉你不是第一名或已經領過獎勵了。");
                    cm.dispose();
                    return;
                }
            }
            else {
                cm.sendOk("你還沒做好心理準備嗎？決定好了之後，請你再來和我說話。");
                cm.dispose();
                return;
            }
            break;
        case 2:
            break;
        case 3:
            break;
    }
}
