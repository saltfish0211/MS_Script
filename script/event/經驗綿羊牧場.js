//==============
//副本配置
var mapId = 993033300;
var returnMapId = 910000000;
var reviveCount = 99;
var timeLimit = 10 * 60 * 1000;
var avgLevel = 0;
var difficulty = 0;
var lvMobExp = [];

//怪物ID、血量、經驗值陣列
var mobs = [
    [9600003, 2000 * 10000],
    [9600008, 1  * 10000 * 10000],
    [8140110, 2  * 10000 * 10000],
    [8140111, 3 * 10000 * 10000],
    [9305692, 4 * 10000 * 10000]
];

var spawnPoint = [
    new java.awt.Point(1750, 395),
    new java.awt.Point(1950, 395),
    new java.awt.Point(2150, 395),
    new java.awt.Point(2350, 395),
    new java.awt.Point(2550, 395),

    new java.awt.Point(1750, 395),
    new java.awt.Point(1950, 395),
    new java.awt.Point(2150, 395),
    new java.awt.Point(2350, 395),
    new java.awt.Point(2550, 395),

    new java.awt.Point(1750, 395),
    new java.awt.Point(1950, 395),
    new java.awt.Point(2150, 395),
    new java.awt.Point(2350, 395),
    new java.awt.Point(2550, 395),
];

var currentMobSetting = null;
//==============

var map = null;

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
    lvMobExp = em.getLvMobExp();
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    em.setProperty("state", "1");
    eim = em.newInstance("Sheep");
    map = eim.setInstanceMap(mapId);
    map.resetFully();
    eim.startEventTimer(timeLimit); //15分鐘
    eim.setReviveCount(reviveCount);
    em.setProperty("currentStage", "0");
    eim.setProperty("currentStage", "0");
    eim.setReviveCount(99);
    spawnMonster(eim);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(3);
    player.changeMap(map, map.getPortal(0));
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
    eim.disposeIfPlayerBelow(100, returnMapId);
    eim.dispose();
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    
}

function changedMap(eim, player, mapid) {
    if (mapid != mapId) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, returnMapId)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "false");
            
        }
    }
}

function playerDisconnected(eim, player) {
    var dcMap = em.getMapFactoryMap(returnMapId);
    player.changeMap(dcMap, dcMap.getPortal(0));
    return 0;
}

function monsterValue(eim, mobId, player) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(100, returnMapId)) {
        eim.dispose();
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, returnMapId)) {
        eim.dispose();
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}


function spawnMonster(eim){
    if(avgLevel == 0){
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            avgLevel += eim.getPlayers().get(i).getLevel();
        }
        avgLevel /= eim.getPlayerCount();
        if(avgLevel <= 220){
            difficulty = 0;
        }
        else if(avgLevel <= 240){
            difficulty = 1;
        }
        else if(avgLevel <= 250){
            difficulty = 2;
        }
        else if(avgLevel <= 260){
            difficulty = 3;
        }
        else{
            difficulty = 4;
        }
    }
    if(map.getAllMonster().size() < 40){
        for(var i=0;i<spawnPoint.length;i++){
            var mob = em.getMonster(mobs[difficulty][0]);
        
            mob.setPosition(spawnPoint[i]);
            var modified = em.newMonsterStats();
            modified.setOHp(mobs[difficulty][1]);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            mob.getStats().setPDRate(0);
            mob.getStats().setMDRate(0);
            mob.setScale(mob.getScale() + 50);
            mob.disableDrops();
            eim.registerMonster(mob);
            map.spawnMonsterOnGroundBelow(mob, spawnPoint[i]);
        }
    }
    eim.schedule("spawnMonster", 3000);
}

function monsterValue(eim, mobId, player) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var pla = eim.getPlayers().get(i);
        var n = lvMobExp.length < pla.getLevel() ? lvMobExp.length : pla.getLevel();
        var gainExp = 0;
        if(pla.getLevel() <= 220){
            gainExp = parseInt(lvMobExp[n - 1] * 500);
        }
        else if(pla.getLevel() <= 240){
            gainExp = parseInt(lvMobExp[n - 1] * 500);
        }
        else if(pla.getLevel() <= 250){
            gainExp = parseInt(lvMobExp[n - 1] * 700);
        }
        else if(pla.getLevel() <= 260){
            gainExp = parseInt(lvMobExp[n - 1] * 2000);
        }
        else if(pla.getLevel() <= 270){
            gainExp = parseInt(lvMobExp[n - 1] * 6000);
        }
        else if(pla.getLevel() <= 280){
            gainExp = parseInt(lvMobExp[n - 1] * 8000);
        }
        else if(pla.getLevel() <= 300){
            gainExp = parseInt(lvMobExp[n - 1] * 12000);
        }
        pla.gainFieldExp(gainExp, false);
    }
    return 1;
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
    if (player.getEventReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(450009301);
    player.changeMap(map, map.getPortal(0));
    return true;
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}
