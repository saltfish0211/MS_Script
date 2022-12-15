//==============
//副本配置
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
var mapId = 993135002;
var returnMapId = 100000000;
var timeLimit = 15 * 60 * 1000;

var reviveCount = 3;

var season;
var job;
var historyHigh;
var getRewardLog = "";
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

var mobs = [
    //ID, MinScale, MaxScale
    [9401033, 20, 100],
    [9401041, 100, 200],
    [9401058, 50, 150],
    [9305690, 0, 0],
    [9305691, 0, 0],
];

var boss = [
    //ID, Scale
    [9390716, 300, 0],
    [9390717, 400, 0],
    [9401063, 200, 0],
    [9305707, 150, 0],
]


var spawnPoint = [
    new java.awt.Point(-400, 216),
    new java.awt.Point(-300, 216),
    new java.awt.Point(-200, 216),
    new java.awt.Point(-100, 216),
    new java.awt.Point(0, 216),

    new java.awt.Point(100, 216),
    new java.awt.Point(200, 216),
    new java.awt.Point(300, 216),
    new java.awt.Point(400, 216),
    new java.awt.Point(500, 216),

];

var traps = [
    8880332, 8880325, 8880507, 8880508, 8880618
]

//==============

var map = null;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    eim = em.newInstance("挑戰地牢");
    map = eim.setInstanceMap(mapId);
    map.resetFully();
    map.spawnNpc(2081005, new java.awt.Point(-700, 216));
    map.setConsumeItemCoolTime(5);
    eim.startEventTimer(1000 * 60 * 15); //15分鐘
    season = em.getProperty("season");
    job = em.getProperty("job");
    historyHigh = em.getProperty("historyHigh");


    em.setProperty("currentStage", "0");
    eim.setProperty("currentStage", "0");
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    getRewardLog = player.getCharacterSet("噩夢地牢挑戰_第"+ season +"季_"+ job + "_獎勵").toString();
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
    monsterValue(eim, 0, null);
}



function playerRevive(eim, player) {
    if (player.getEventReviveCount() > 0) {
        player.eventRevive();
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(returnMapId);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim, eim.getPlayers().get(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != mapId) {
        end(eim,player);
    }
}

function playerDisconnected(eim, player) {
    var dcMap = em.getMapFactoryMap(returnMapId);
    player.changeMap(dcMap, dcMap.getPortal(0));
    return 0;
}

function monsterValue(eim, mobId, player) {
    for(var i=0;i<traps.length;i++){
        if(mobId == traps[i]){
            return 1;
        }
    }
    if(map.getMonsterById(mobId) == null){
        var currentStage = parseInt(eim.getProperty("currentStage"));
        if(currentStage == 0){
            map.startMapEffect("請在15分鐘內盡可能達到最高階段！第一階段將在3秒後開始", 5120128);
            
        }
        else{
            map.startMapEffect("第"+(currentStage+1)+"階段將在3秒後開始，請盡快消滅怪物！", 5120128);
        }
        dropReward(eim, currentStage);
        em.setProperty("currentStage", currentStage+1);
        eim.setProperty("currentStage", currentStage+1);
        eim.schedule("spawnMonster", 3000);
    }
    return 1;
}

function playerExit(eim, player) {
    end(eim,player);
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        eim.dispose();
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim,player) {
    var currentStage = parseInt(eim.getProperty("currentStage"));
    if(currentStage-1 > historyHigh){
        var rewardString = "";
        for(var i=0;i<stageReward.length;i++){
            if(currentStage > stageReward[i][0]){
                rewardString = rewardString.concat("1");
            }
            else{
                rewardString = rewardString.concat("0");
            }
        }
        player.dropMessage(1, "恭喜你刷新了新紀錄，你原本的紀錄是: "+ historyHigh +"層，目前的紀錄為:"+ (currentStage-1) + "層");
        player.setCharacterSet("噩夢地牢挑戰_第"+season+"季_"+job, (currentStage-1));
        var totalHigh = player.getCharacterSet("噩夢地牢挑戰_第"+ season +"季_總成績");
        player.setCharacterSet("噩夢地牢挑戰_第"+ season +"季_總成績", totalHigh + (currentStage-1) - historyHigh);
        player.setCharacterSet("噩夢地牢挑戰_第"+ season +"季_"+ job + "_獎勵", rewardString);
    }
    if (eim.disposeIfPlayerBelow(100, returnMapId)) {
        eim.dispose();
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function handleTrap(eim, currentStage){

    if(currentStage % 10 == 0){
        //每10關多一組蜘蛛腳
        var mob = em.getMonster(8880332);
        mob.disableDrops();
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, spawnPoint[4]);
    }
    if(currentStage % 10 == 5){
        //每10關多一組蜘蛛眼
        var mob = em.getMonster(8880325);
        mob.disableDrops();
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, spawnPoint[4]);
    }
    if(currentStage >= 10 && currentStage % 10 == 8){
        //每5關出牆干擾
        var mob = em.getMonster(8880507);
        mob.disableDrops();
        var modified = em.newMonsterStats();
        modified.setOHp(1000);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, getRandomFootholds(map));
    }
    if(currentStage >= 10 && currentStage % 10 == 3){
        var mob = em.getMonster(8880618);
        mob.disableDrops();
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, getRandomFootholds(map));
    }
}

function spawnMonster(eim){
    var currentStage = parseInt(eim.getProperty("currentStage"))-1;

    handleTrap(eim, currentStage);

    if(currentStage % 10 != 9){
        map.startMapEffect("第"+(currentStage+1)+"階段開始了！擊敗怪物吧！", 5120128);
        for(var i=0;i<10;i++){
            var currentMobSetting = mobs[currentStage % 5];
            if(currentMobSetting != null){
                var mob = em.getMonster(currentMobSetting[0]);
                var modified = em.newMonsterStats();
                modified.setOHp(getHpByStage(currentStage));
                mob.setOverrideStats(modified);
                mob.getStats().setPDRate(0);
                mob.getStats().setMDRate(0);
                var scale = Math.max(Math.floor(Math.random() * (currentMobSetting[2] - currentMobSetting[1]) + currentMobSetting[1]) ,0)
                mob.setScale(mob.getScale() + scale);
                mob.disableDrops();
                eim.registerMonster(mob);
    
                map.setConsumeItemCoolTime(5 + Math.floor(currentStage * ((Math.floor(currentStage/5) +1) * 0.2)));
                map.spawnMonsterOnGroundBelow(mob, spawnPoint[i]);
                map.updateMonsterController(mob);
            }
        }
    }
    else{
        map.startMapEffect("第"+(currentStage+1)+"階段開始了！擊敗BOSS吧！", 5120128);
        var currentMobSetting = boss[Math.floor(currentStage / 10) % 3];
        if(currentMobSetting != null){
            var mob = em.getMonster(currentMobSetting[0]);
            var modified = em.newMonsterStats();
            modified.setOHp(getHpByStage(currentStage));
            mob.setOverrideStats(modified);
            mob.getStats().setPDRate(0);
            mob.getStats().setMDRate(0)
            mob.setScale(mob.getScale() + currentMobSetting[1]);
            mob.disableDrops();
            eim.registerMonster(mob);

            map.setConsumeItemCoolTime(5 + Math.floor(currentStage / 10) * 10 );
            map.spawnMonsterOnGroundBelow(mob, spawnPoint[5]);
            map.updateMonsterController(mob);
        }
    }
}


function allMonstersDead(eim) {
    return 1;
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}

function dropReward(eim,stage){
    var currentJobReward = getRewardLog;
    var isAllClean = currentJobReward == 0;
    for(var i=0;i<stageReward.length;i++){
        if(stage == stageReward[i][0]){
            if(isAllClean || currentJobReward[i] == 0){
                for (var j = 0; j < eim.getPlayerCount(); j++) {
                    var player = eim.getPlayers().get(j);
                    player.dropMessage(-11, "噩夢地牢第"+stage+"階段獎勵發送了。");
                    player.gainItem(stageReward[i][1], stageReward[j][2], "噩夢地牢 獲得時間:" + new Date().toString());
                }
            }
            else{
                for (var j = 0; j < eim.getPlayerCount(); j++) {
                    var player = eim.getPlayers().get(j);
                    player.dropMessage(-11, "噩夢地牢第"+stage+"階段獎勵已領取過，不重複發送。");
                }
            }
        }
    }
}

function getHpByStage(stage){
    var baseHp = 100000000;
    for(var i=0;i<stage;i++){
        baseHp *= (1.5 + Math.floor(stage/8) * 0.3);
    }
    if(stage % 10 == 9){
        baseHp *= Math.pow(3,Math.floor(stage/5));
    }
    return baseHp;
}


function getRandomFootholds(mapInstance){
    var point;
    do {
        var allfh = mapInstance.getFootholds().getAllRelevants();
        var arrayList = [];
        for (var i = 0; i < allfh.length; i++) {
            arrayList.push(new java.awt.Point(Math.random() * (mapInstance.getRight() - mapInstance.getLeft()) + mapInstance.getLeft(), allfh[i].getY2()))
        }
        point = arrayList[Math.floor(Math.random() * arrayList.length)];
        if (mapInstance.getFootholds().findBelow(point) != null) {
            break;
        }
    } while (1);
    return point;
}