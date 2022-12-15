
try{load("scripts_custom/config/BossConfig.js");}catch(e){load("scripts/config/BossConfig.js");}
var EventConfig = BossEventConfigs.賽蓮;

var currentPhase = 0;
var currentTime = 0;
var dayPeriod = [110, 110, 30, 110];
var dayMobId = [8880607, 8880609, 8880612, 8880603];


function init() {
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    var eim = em.newInstance("BossSeren_HARD");
    var map;
    map = eim.setInstanceMap(410002000);
    map.resetFully();
    map.killAllMonsters(true);
    map = eim.setInstanceMap(410002020);
    map.resetFully();
    map.killAllMonsters(true);
    map = eim.setInstanceMap(410002040);
    map.resetFully();
    map.killAllMonsters(true);
    map = eim.setInstanceMap(410002060);
    map.resetFully();
    map.killAllMonsters(true);
    map = eim.setInstanceMap(410002080);
    map.resetFully();
    map.killAllMonsters(true);
    if (EventConfig.EventTime != null) {
        eim.startEventTimer(EventConfig.EventTime);
    }
    if (EventConfig.EventReviveCount != null && EventConfig.EventReviveCount > 0) {
        eim.setReviveCount(EventConfig.EventReviveCount);
    }
    
    startOnePart(eim);
    return eim;
}

function playerEntry(eim, player) {
    
    player.restReviveCount();
    
    if (EventConfig.ReviveCount != null && EventConfig.ReviveCount > 0) {
        if(em.getProperty("practice") == "true"){
            player.setReviveCount(99);
        }
        else{
            player.setReviveCount(EventConfig.ReviveCount);
        }
    }
    
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getEventReviveCount() > 0) {
        player.eventRevive();
        player.changePortal(0);
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(410000670);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 410000670);
    eim.dispose();
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    var isEventMap = false;
    if( mapid==410002000 || mapid==410002020 || mapid==410002040 || mapid==410002060 || mapid==410002080){
        isEventMap = true;
    }
    if(mapid==410002060){
        em.bossSerenInitTimeChart(player);
    }
    if(mapid==410002080){
        eim.restartEventTimer(600 * 1000);
    }
    if(!isEventMap){
        eim.unregisterPlayer(player);
    }    

    if (eim.disposeIfPlayerBelow(0, 0)) {
        eim.dispose();
        em.setProperty("state", "0");
        em.setProperty("state1", "0");
        em.setProperty("leader", "true");
    }
    
    
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId, player) {
    var stage = 0;
    if (player != null && mobId==8880600){
        stage = 1;
    }
    for(var i=0;i<dayMobId.length;i++){
        if(mobId == dayMobId[i] && currentPhase == i+1){
            stage = 2;
        }
    }

    if ( stage==1 && parseInt(em.getProperty("state"))==1 ){
        var map2 = eim.getMapInstance(410002040);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            if(!eim.getPlayers().get(i).isAlive()){
                eim.getPlayers().get(i).eventRevive();//扣除覆活次數
                eim.getPlayers().get(i).addHP(50);
            }
            eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
        }
        em.setProperty("state", "2");
        startTwoPart(eim);
    }
    if ( stage==2 && parseInt(em.getProperty("state"))==2 ){
        var map2 = eim.getMapInstance(410002080);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            if(!eim.getPlayers().get(i).isAlive()){
                eim.getPlayers().get(i).eventRevive();//扣除覆活次數
                eim.getPlayers().get(i).addHP(50);
            }
            eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
        }
        var mob = em.getMonster(8880614);
        if(em.getProperty("practice") == "true"){
            mob.disableDrops();
        }
        eim.registerMonster(mob);
        map2.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 275));
        em.setProperty("state", "3");
    }

    if(mobId == 8880614){
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            if(em.getProperty("practice") != "true"){
                eim.getPlayers().get(i).openNpc(3004523, "serenRewardNpc");
            }
            else{
                eim.getPlayers().get(i).dropMessage(1, "練習模式無法獲得獎勵！");
            }
        }
    }
    return 1;
}


function allMonstersDead(eim) {
    return 1;
}


function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}


function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function playerDead(eim, player) {
}

function cancelSchedule() {
}

function monsterDrop(eim, player, mob) {
}

function pickUpItem(eim, player, itemID) {
}


function startOnePart(eim) {
    var map = eim.getMapInstance(410002020);
    var mob = em.getMonster(8880600);
    var modified = em.newMonsterStats();
    modified.setOHp(1890 * 10000 * 10000 * 10000);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(600, 275));
    eim.schedule("summonFall", 12000);
}

function startTwoPart(eim) {
    currentPhase = 1;
    currentTime = 0;
    var map = eim.getMapInstance(410002060);
    var mob = em.getMonster(8880607);
    var modified = em.newMonsterStats();
    modified.setOHp(4950 * 10000 * 10000 * 10000);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    eim.schedule("summonFallNoon", 10);
    eim.schedule("summonFireWall", 10);
    eim.schedule("summonBallDawn", 10);
    eim.schedule("summonFieldSkillNoon", 10);
    eim.schedule("updateTimeChart", 10000);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(475, 305));
}


function summonFall(eim) {
    var time = 15000;
    var map = eim.getMapInstance(410002020);
    map.obtacleFall(5, 84, 84);//地圖特效
    /*
    //em.bossSerenNoonFieldSkill(eim.getPlayers().get(0), map.getLeft(), map.getRight(), 2);
    var str = "-500,800,1000,-100,-100,2000,300,-300,3000";
    em.showBossFieldSkill(eim.getPlayers().get(0), 
    100007,
    1, 
    0,    //人物會卡住的時間
    eim.getPlayers().get(0).getId(), //光炮寬度？
    eim.getPlayers().get(0).getId(), //光炮高度？
    3000, //screen特效持續時間
    0,  //起點Y應該在的位置
    3000, //攻擊持續時間
    2000,  //看起來像長度，結束Y
    1000, //不知道是啥
    3, //發射物長度
    str);
    //delay,unk,unk(centerpoint?),screenDuration, unk, attackDuration, height, unk
    //size(第九個int決定長度), 然後(起始x,目標x,DELAY), y似乎沒用？

    // 100024 只有準備沒有光束
    //var str = "0,1000,1000,3000,3000,3000,300,1000,";
    //    str+= "9,100,200,300,400,500,600,700,800,900";
    //em.broadcastServerMsg("觸發BossField " + str);

    //100024 each size 1 int*/
    eim.schedule("summonFall", time);
}


function updateTimeChart(eim){
    currentTime = (currentTime + 5) % 720;
    var needTime = 0;
        for(var i=0;i<currentPhase;i++){
            needTime += dayPeriod[i];
        }
    if(currentTime >= needTime){
        //currentTime -= dayPeriod[currentPhase - 1];
        eim.schedule("changeForm", 10);
        if(currentPhase == 4){
            currentTime = 0;
        }
        //currentTime = 0;
    }
    //eim.schedule("handle1715", 1 * 1000);
    em.bossSerenUpdateTimeChart(eim.getPlayers().get(0), (currentTime+360-55) );
    
    eim.schedule("updateTimeChart", 5 * 1000);
}

function changeForm(eim){
    //測試

    currentPhase = (currentPhase % 4) + 1;
    var previousId = currentPhase == 1 ? 3 : currentPhase - 2;
    var map = eim.getMapInstance(410002060);
    map.killMonster(8880605);
    map.killMonster(8880606);
    map.killMonster(8880618);
    map.killMonster(8880619);
    em.bossSerenMoveDayTime(eim.getPlayers().get(0), currentPhase);

    var mob = em.getMonster(dayMobId[currentPhase - 1]);
    var previousMob = map.getMonsterById(dayMobId[previousId]);
    if(previousMob == null){
        return 1;
    }
    mob.setTransTime(3000);
    previousMob.setTransTime(3000);

    mob.setChangeHP(previousMob.getMaxHP());
    mob.setHp(previousMob.getHp());
    mob.setCurrentFh(previousMob.getCurrentFH());
    mob.setStance(previousMob.getStance());

    eim.registerMonster(mob);
    if(previousMob.getPosition().getY() <= 100){
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(600, 275));
    }
    else{
        map.spawnMonsterOnGroundBelow(mob, previousMob.getPosition());
    }
    map.killMonster(previousMob, eim.getPlayers().get(0), false, true, 3, 0);
    return 1;
    
}

function handle1715(eim){
    em.bossSerenHandle1715(eim.getPlayers().get(0), 210, 305);

}

function summonFieldSkillNoon(eim) {
    var time = 10000;
    /*if (currentPhase == 1) { //正午型態
        var map = eim.getMapInstance(410002060);
        em.bossSerenNoonFieldSkill(eim.getPlayers().get(0), map.getLeft(), map.getRight(), 2);
    }*/
    eim.schedule("summonFieldSkillNoon", time);
}

function summonFallNoon(eim) {//
    var state = parseInt(eim.getProperty("state"));
    var time = 5000;
    if (currentPhase == 2) { //夕陽型態
        var map = eim.getMapInstance(410002060);
        map.obtacleFall(5, 83, 83);//地圖特效
    }
    eim.schedule("summonFallNoon", time);
}

function summonFireWall(eim) {//
    var state = parseInt(eim.getProperty("state"));
    var time = 25000;
    if (currentPhase == 2) { //夕陽型態
        var map = eim.getMapInstance(410002060);
        var mob = em.getMonster(8880618);
        mob.setTransTime(3000);
        var mob2 = em.getMonster(8880619);
        mob2.setTransTime(3000);
        map.spawnMonsterOnGroundBelow(mob, getStage2RandomFootholds(map));
        map.spawnMonsterOnGroundBelow(mob2, getStage2RandomFootholds(map));
    }
    eim.schedule("summonFireWall", time);
}

function summonBallDawn(eim) {//
    var state = parseInt(eim.getProperty("state"));
    var time = 10000;
    if (currentPhase == 4) { //黎明型態
        var map = eim.getMapInstance(410002060);
        var mob = em.getMonster(8880606);
        map.spawnMonsterOnGroundBelow(mob, getStage2RandomFootholds(map));
        mob = em.getMonster(8880606);
        map.spawnMonsterOnGroundBelow(mob, getStage2RandomFootholds(map));
        mob = em.getMonster(8880606);
        map.spawnMonsterOnGroundBelow(mob, getStage2RandomFootholds(map));
        mob = em.getMonster(8880606);
        map.spawnMonsterOnGroundBelow(mob, getStage2RandomFootholds(map));
        /*mob = em.getMonster(8880605);
        var randPlayer;
        do {
        randPlayer = eim.getPlayers().get(Math.floor(Math.random() * eim.getPlayerCount()));
        if (randPlayer != null) {
            break;
        }
        } while (1);
        map.spawnMonsterOnGroundBelow(mob, getStage2RandomFootholds(map));
        mob.setController(randPlayer);
        mob.setControllerHasAggro(true);
        mob.setControllerKnowsAboutAggro(true);*/
    }
    eim.schedule("summonBallDawn", time);
}


function getStage2RandomFootholds(mapInstance){
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