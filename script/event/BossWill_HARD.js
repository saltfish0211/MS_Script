
load('nashorn:mozilla_compat.js');
importPackage(Packages.server.maps.field);
try{load("scripts_custom/config/BossConfig.js");}catch(e){load("scripts/config/BossConfig.js");}
var EventConfig = BossEventConfigs.威爾;

var eventMaps=[
    450008750,
    450008800,
    450008850,
    450008900,
    450008950
];
var finalWebMap = null;

function init() {
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(level,eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("state1", "1");
    em.setProperty("leader", "true");
    
    var eim = em.newInstance("BossWill_HARD");
    for (var e = 0; e < eventMaps.length; e++) {
        var b = eim.setInstanceMap(eventMaps[e]);
        b.resetFully();
        b.killAllMonsters(true);
    }
        
    eim.schedule("addMoonLight", 1000);
    eim.schedule("monsterSpawn", 1000);
    //eim.schedule("pf", 1000 * 60 * 3);
    
    eim.schedule("summonFall", 5000);    
    eim.setProperty("HPstate", "1");
    
    if (EventConfig.EventTime != null) {
        eim.startEventTimer(EventConfig.EventTime);
    }
    if (EventConfig.EventReviveCount != null && EventConfig.EventReviveCount > 0) {
        eim.setReviveCount(EventConfig.EventReviveCount);
    }  
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    if (EventConfig.ReviveCount != null && EventConfig.ReviveCount > 0) {
        player.setReviveCount(EventConfig.ReviveCount);
    }
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getEventReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();//扣除覆活次數
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(450007240);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    var kick=true;
    for (var e = 0; e < eventMaps.length; e++) {
        if(eventMaps[e]==mapid){
            kick=false;
        }
    }
    
    if(kick)
        eim.unregisterPlayer(player);
    
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

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}
function monsterValue(eim, mobId, player) {
    if(mobId == 8880344 || mobId == 8880341 || mobId == 8880342){
        eim.schedule("nextMap", 3000);
    }
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.modifyMoonlightValue(-200);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function summonFall(eim) {//
    var time = 5000;
    var map = eim.getMapInstance(0);
    map.obtacleFall(3, 63, 63);//威爾地圖特效
    eim.schedule("summonFall", time);
}

function summonWeb(eim) {//
    var time = 1500;
    if(finalWebMap!=null){
        finalWebMap.addNarrowWeb();
    }
    eim.schedule("summonWeb", time);
}


function clearPQ(eim) {
    end(eim);
}

function pf(eim) {
    if (em.getProperty("state1").equals("1")==true){
        em.setProperty("state1", "2");
        eim.schedule("pf", 1000 * 60 * 3);
    } else if (em.getProperty("state1").equals("2")==true){
        eim.schedule("nextMap", 3000);
        em.setProperty("state1", "3");
        eim.schedule("pf", 1000 * 60 * 6);
    } else if (em.getProperty("state1").equals("3")==true){
        em.setProperty("state1", "4");
    }
}

function nextMap(eim){
    if (em.getProperty("state").equals("2")==true){
        var mapA = eim.getMapInstance(450008850);
        eim.schedule("monsterSpawn", 1);
        for (var i = 0; i < eim.getPlayerCount() ; i++) {
            if(!eim.getPlayers().get(i).isAlive()){
                eim.getPlayers().get(i).eventRevive();//扣除覆活次數
                eim.getPlayers().get(i).addHP(50);
            }
            eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
        }
    } else if (em.getProperty("state").equals("3")==true){
        var mapA = eim.getMapInstance(450008950);
        eim.schedule("monsterSpawn", 1);
        finalWebMap = mapA;
        eim.schedule("summonWeb", 1000);
        for (var i = 0; i < eim.getPlayerCount() ; i++) {
            if(!eim.getPlayers().get(i).isAlive()){
                eim.getPlayers().get(i).eventRevive();//扣除覆活次數
                eim.getPlayers().get(i).addHP(50);
            }
            eim.getPlayers().get(i).changeMap(mapA, mapA.getPortal(0))
        }
    } else if (em.getProperty("state").equals("4")==true){
        eim.schedule("monsterSpawn", 1);
    } 
}

function addMoonLight(eim){
    
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var pla = eim.getPlayers().get(i);
        pla.modifyMoonlightValue(3);
        //pla.dropMessage(6, "addMoonLight");
    }
    eim.schedule("addMoonLight", 1000);
}

function end(eim) {            
    eim.disposeIfPlayerBelow(100, 100000000);
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function monsterSpawn(eim) {
    var map = eim.getMapInstance(450008750);
    var map1 = eim.getMapInstance(450008850);
    var map2 = eim.getMapInstance(450008950);
        
    if (em.getProperty("state").equals("1")==true){
        for each(monsterStatus in EventConfig.Monsters[map.getId()]) {
            var mob = getMonster(monsterStatus, em);
            if (mob != null) {
                if (map.getEvent() != null) {
                    map.getEvent().registerMonster(mob);
                }
                map.spawnMonsterOnGroundBelow(mob, mob.getPosition());
            }
        }   
        map.startMapEffect("“威爾”第一階段已出現，請盡快消滅！", 5120116);
        eim.setProperty("HPstate", "1");
        em.setProperty("state", "2");
    } else if (em.getProperty("state").equals("2")==true) {
        for each(monsterStatus in EventConfig.Monsters[map1.getId()]) {
            var mob = getMonster(monsterStatus, em);
            if (mob != null) {
                if (map1.getEvent() != null) {
                    map1.getEvent().registerMonster(mob);
                }
                map1.spawnMonsterOnGroundBelow(mob, mob.getPosition());
            }
        }    
        map1.startMapEffect("威爾變得認真起來。在鏡子的深處，好像可以照出威爾的真心。 ", 5120116);        
        eim.setProperty("HPstate", "1");            
        em.setProperty("state", "3");
    } else if (em.getProperty("state").equals("3")==true) {
        for each(monsterStatus in EventConfig.Monsters[map2.getId()]) {
            var mob = getMonster(monsterStatus, em);
            if (mob != null) {
                if (map2.getEvent() != null) {
                    map2.getEvent().registerMonster(mob);
                }
                map2.spawnMonsterOnGroundBelow(mob, mob.getPosition());
            }
        }    
        map2.startMapEffect("威爾沒那麼悠然自得了。鏡世界的最深處好像即將顯露出來。 ", 5120116);
        eim.setProperty("HPstate", "1");

        //eim.getMapInstance(0).spawnNpc(9000056, new java.awt.Point(734, 17));
        em.setProperty("state", "4");
    } else if (em.getProperty("state").equals("4")==true) {
        map.startMapEffect("偉大的勇者，你是英雄的驕傲~", 5120116);
        eim.schedule("likai", 1000 * 120);
        map.broadcastMessage(em.getClock(120));
        //em.getMapFactory().getMap(450008450).startSimpleMapEffect("1分鐘中後將關閉次元世界，請盡快領取點擊NPC領取獎勵後退出",5120093);
    }
}

function allMonstersDead(eim) {
    eim.setProperty("HPstate", "-1");
}


function likai(eim) {
    eim.disposeIfPlayerBelow(100, 100000000);
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}




function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}
function monsterDrop(eim, player, mob) { }
function pickUpItem(eim, player, itemID) {}
function monsterKilled(eim, player, mobID) {
    // 可留空，主要處理怪物死亡後的邏輯代碼
}
