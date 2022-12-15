

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");

var seasonOfYear = 0;
var seasonPeriod = 3;
var selectionMode = 0;

var isWarp = false;
var seasonPreset = 42;
var currentJob = 0;
var currentJobRewardText = "";

var jobName =[
    "","劍士", "法師", "弓箭手", "盜賊","海盜"
];

var stageReward = [
    [3, 4319903, 1],
    [5, 4319903, 1],
    [8, 4319903, 1],
    [10, 4319903, 1],
    [15, 4319903, 1],
    [20, 4319903, 1],
    [25, 4319903, 1],
    [30, 4319903, 1]
];

function start() {
    status = -1;
    seasonOfYear = getSeasonOfYear();
    currentJob = getCurrentJob();
    if(currentJob < 1 || currentJob > 6){
        cm.sendOk("您的職業不正確，請聯絡管理員以解決問題，錯誤代碼：" + cm.getPlayer().getJob());
        cm.dispose();
        return;
    }
    else{
        action(1, 0, 0);
    }
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    if (status >= 2 || mode == 0) {
        cm.sendOk("等你想好的時候再來找我吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else if (mode == 0) {
        status--;
    }
    else {
        cm.dispose();
    }

    if (status == 0) {
    
        if (cm.getMapId() != 100000000 ) { // 判斷組隊隊長
            isWarp = true;
            cm.sendYesNo("請在弓箭手村和我對話，確定要移動嗎？")
        }
        else{
            var text = Logo + "#d#e             【噩夢地牢挑戰】\r\n";
            //text+= "賽季資訊：第"+ seasonOfYear +"賽季\r\n";
            
            text+= "賽季資訊：第"+ 0 +"賽季（測試賽季）\r\n";
            text+= "#r賽季日期："+getPeriodString(seasonOfYear)+"\r\n";
            text+= "#d您的挑戰資訊：\r\n";
            text+= "#b劍士："+ getChallengeData(seasonOfYear, 1)+"\r\n";
            text+= "法師："+ getChallengeData(seasonOfYear, 2)+"\r\n";
            text+= "弓箭手："+ getChallengeData(seasonOfYear, 3)+"\r\n";
            text+= "盜賊："+ getChallengeData(seasonOfYear, 4)+"\r\n";
            text+= "海盜："+ getChallengeData(seasonOfYear, 5)+"\r\n";
            text+= maskListNode(1, "#b噩夢地牢入場");
            text+= maskListNode(2, "#b玩法說明");
            text+= maskListNode(3, "#b查詢伺服器排名");
            text+= maskListNode(4, "#b領取先前賽季獎勵");
            cm.sendNext(text);
        }
    }
    else if (status == 1){
        if(isWarp){
            cm.dispose()
            cm.warp(100000000);
            return;
        }
        else{
            selectionMode = selection;
            switch(selectionMode){
                case 1:{
                    text = "";
                    text += "#d#e\r\n噩夢地牢 - "+ jobName[getCurrentJob()] + "\r\n"
                    text += "目前最佳紀錄: #b" + getChallengeData(seasonOfYear, currentJob) + "#d\r\n";
                    text += "入場獎勵:\r\n" + getCanGetRewardText(seasonOfYear, currentJob) + "\r\n";
                    text += "#d確定要進入嗎？"
                    cm.sendYesNo(text);
                    break;
                }
                case 2:
                    text = "";
                    text += "#d#e噩夢地牢每"+seasonPeriod+"天為一個賽季，每個賽季間可#r無限制入場#d。\r\n";
                    text += "#d#e當個別職業於賽季達到指定獎勵階段時，獎品會以送禮方式送至禮物箱內。\r\n";
                    text += "#b#e"+maskItem(4310272)+"#d可用於升級被動技能#s80000616#。";
                    cm.sendOk(text);
                    cm.dispose();
                    break;
                case 3:{
                    var rankLog = "噩夢地牢挑戰_第"+ seasonOfYear +"季_總成績";
                    var data = cm.getConnection().prepareStatement("SELECT a.name, count FROM characterSet "+
                    "join accounts on characterSet.accountid = accounts.id "+
                    "join  (SELECT * FROM characters order by level desc) AS a on characterSet.accountid = a.accountid  "+
                    "where bossid = BINARY '"+rankLog+"' "+
                    "group by a.accountid "+
                    "ORDER BY count Desc, characterSet.id asc;").executeQuery(); // 查詢數據
                    var i=1;
                    var chrText = "";
                    while (data.next() && i<= 20) {
                        var serverBest = data.getInt("characterSet.count");
                        chrText += "第"+i+"名: " + data.getString("a.name") + "(" + serverBest + ")\r\n";
                        i++;
                    }
                    if(chrText == "") {
                        chrText = "目前還沒有玩家參與\r\n";
                    }
                    text = "#d#e目前伺服器排名如下：\r\n#b" + chrText;
                    cm.sendOk(text);
                    cm.dispose();
                    break;
                }
                case 4:{
                    text = "施工中。";
                    //TODO:領取賽季排名獎勵
                    cm.sendOk(text);
                    cm.dispose();
                    break;
                }
            }
        }
    }
    else if (status == 2) {
            if (cm.getParty() == null) { //判斷組隊
                cm.sendSimple("請創立一個組隊再來吧。");
                cm.dispose()
                return;
            } 
            else if (cm.getParty().getMembers().size() != 1 ){
                cm.sendOk("噩夢地牢僅限單人入場"); 
                cm.dispose()
                return;
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的組隊部分成員不在當前地圖,請召集他們過來後在嘗試。"); //判斷組隊成員是否在一張地圖..
                cm.dispose()
                return;
            } 
            var em = cm.getEventManager("噩夢地牢");
            if (em == null) {
                cm.sendSimple("副本暫未開啟，敬請期待。");
                cm.dispose()
                return;
            } else {
                var prop = em.getProperty("state");
                if (prop == null || prop.equals("0")) {
                    cm.dispose();
                    em.setProperty("season", seasonOfYear);
                    em.setProperty("job", currentJob);
                    em.setProperty("historyHigh", cm.getPlayer().getCharacterSet("噩夢地牢挑戰_第"+seasonOfYear+"季_"+currentJob));
                    em.startInstance(cm.getParty(), cm.getMap());   
                    return;
                } else {
                    cm.sendOk("已經有隊伍在進行了,請換其他頻道嘗試。");
                    cm.dispose()
                }
            }
    }
}

//============================

function getCurrentJob(){
    if(cm.getPlayer().getJob() == 2712){
        return 2;
    }
    if(cm.getPlayer().getJob() == 3612){
        return 5;
    }
    if(cm.getPlayer().getJob() == 3712){
        return 1;
    }
    return Math.floor((cm.getPlayer().getJob() % 1000) / 100);
}

function getCanGetRewardText(season, job){
    var text = "";
    var currentJobReward = cm.getPlayer().getCharacterSet("噩夢地牢挑戰_第"+ season +"季_"+ job + "_獎勵").toString();
    var isAllClean = currentJobReward == 0;
    for(var i=0;i<stageReward.length;i++){
        if(isAllClean || currentJobReward[i] == 0){
            text+= "#b第" + stageReward[i][0] + "層 - " + maskItem(stageReward[i][1]) + " x " + stageReward[i][2] + "\r\n";
        }
        else{
            text+= "#r第" + stageReward[i][0] + "層 - " + maskItem(stageReward[i][1]) + " x " + stageReward[i][2] + "（已領取）\r\n";
        }
    }
    return text;
}

function getSeasonOfYear(){
    currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,2);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.floor(( currentdate.getDay() - 1 + numberOfDays) / seasonPeriod);
    result -= seasonPreset - 1;
    return result;
}

function getPeriodString(season){
    season += seasonPreset;
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,2);
    var dateStart = new Date(oneJan.getTime() + ((season-1) * seasonPeriod) *  (24 * 60 * 60 * 1000));
    var dateEnd = new Date(oneJan.getTime() + (season * seasonPeriod - 1) *  (24 * 60 * 60 * 1000));
    return formatDate(dateStart) + " ~ " + formatDate(dateEnd);
}

function getChallengeData(season, job){
    var data = cm.getPlayer().getCharacterSet("噩夢地牢挑戰_第"+season+"季_"+job);
    if (data > 0) {
        return  data + "層";
    }
    else {
        return "目前還沒有紀錄";
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}