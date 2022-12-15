try{load("scripts_custom/config/BossConfig.js");}catch(e){load("scripts/config/BossConfig.js");}
var EventConfig = BossEventConfigs.黑魔法師;

var stage1 = 0;

var mapIds = [
    450013000,
    450013100,
    450013200,
    450013300,
    450013400,
    450013500,
    450013600,
    450013700
];

var random = new java.util.Random();
function init() {
    em.setProperty("state", "0");
    em.setProperty("state1", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    var eim = em.newInstance("BossBlackMage_HARD");
    for (var i = 0; i < mapIds.length; i++) {
        var map = eim.setInstanceMap(mapIds[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
    }
    if (EventConfig.EventTime != null) {
        eim.startEventTimer(EventConfig.EventTime);
    }
    if (EventConfig.EventReviveCount != null && EventConfig.EventReviveCount > 0) {
        eim.setReviveCount(EventConfig.EventReviveCount);
    }
    
    eim.schedule("刷新屏障", 20000); 
    eim.schedule("刷新閃電", 30000); 
    startOnePart(eim);
    return eim;
}

function playerEntry(eim, player) {
    
    player.restReviveCount();
    
    if (EventConfig.ReviveCount != null && EventConfig.ReviveCount > 0) {
        player.setReviveCount(EventConfig.ReviveCount);
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
    var map = eim.getMapFactoryMap(450012500);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    var isEventMap = false;
    for (var i = 0; i < mapIds.length; i++) {
        if( mapid==mapIds[i]){
            isEventMap = true;
        }
    }
    if(!isEventMap){
        eim.unregisterPlayer(player);
    }    
    
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("state1", "0");
        em.setProperty("leader", "true");
    }
    
    
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId, player) {
    if ( mobId==8880500 || mobId==8880501){
        stage1 ++;
    }

    if ( stage1==2 && parseInt(em.getProperty("state"))==1 ){
        var map2 = eim.getMapInstance(mapIds[2]);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).changeMap(map2, map2.getPortal(0));
        }
        em.setProperty("state", "2");
        startTwoPart(eim);
    }
    
    if ( mobId==8880502 ){
        var map3 = eim.getMapInstance(mapIds[4]);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).changeMap(map3, map3.getPortal(0));
        }
        em.setProperty("state", "3");
        startThreePart(eim);
    }
    
    if ( mobId==8880503 ){
        var map4 = eim.getMapInstance(mapIds[6]);
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            eim.getPlayers().get(i).changeMap(map4, map4.getPortal(0));
        }
        em.setProperty("state", "4");
        startFourPart(eim);
    }
    
    
    
    
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}


function 刷新閃電(eim){    
    var posY = [-1429,1800];//生成橫向座標範圍
    var num = 1;//每次數量
    var cycle = 30;//刷新間隔秒
    var mobid = 8880506;//閃電
    var map = eim.getMapInstance(450013100);
    //清光閃電
    map.killMonster(mobid);
    var xlength = Math.floor((posY[1]-posY[0])/num);
    
    for(i=0;i<num;i++){
        var mob = em.getMonster(mobid);
        mob.disableDrops();
        map.getEvent().registerMonster(mob);         
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point( posY[0]+xlength*Math.floor( Math.random()*num ), 85));
    } 
    eim.schedule("刷新閃電", cycle*1000);
}

function 刷新屏障(eim){    
    var posY = [-1429,1800];//生成橫向座標範圍
    var num = 1;//每次數量
    var cycle = 20;//刷新間隔秒
    var mobid = 8880507;//閃電
    var map = eim.getMapInstance(450013100);
    //清光閃電
    map.killMonster(mobid);
    var xlength = Math.floor((posY[1]-posY[0])/num);
    
    for(i=0;i<num;i++){
        var mob = em.getMonster(mobid);
        mob.disableDrops();
        map.getEvent().registerMonster(mob);         
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point( posY[0]+xlength*Math.floor( Math.random()*num ), 85));
    } 
    eim.schedule("刷新屏障", cycle*1000);
}

function allMonstersDead(eim) {
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
    var map = eim.getMapInstance(1);
    stage1 = 0;
    for each(monsterStatus in EventConfig.Monsters[map.getId()]) {
        var mob = getMonster(monsterStatus, em);
        //mob.disableSpawnRevives();
        if (mob != null) {
            if (map.getEvent() != null) {
                map.getEvent().registerMonster(mob);
            }
            map.spawnMonsterOnGroundBelow(mob, mob.getPosition());
        }
    }    
    
}

function startTwoPart(eim) {
    var map = eim.getMapInstance(3);
    for each(monsterStatus in EventConfig.Monsters[map.getId()]) {
        var mob = getMonster(monsterStatus, em);
        if(em.getProperty("practice") == "true"){
            mob.disableDrops();
        }
        if (mob != null) {
            if (map.getEvent() != null) {
                map.getEvent().registerMonster(mob);
            }
            map.spawnMonsterOnGroundBelow(mob, mob.getPosition());
        }
    }    
}

function startThreePart(eim) {
    var map = eim.getMapInstance(5);
    for each(monsterStatus in EventConfig.Monsters[map.getId()]) {
        var mob = getMonster(monsterStatus, em);
        if(em.getProperty("practice") == "true"){
            mob.disableDrops();
        }
        if (mob != null) {
            if (map.getEvent() != null) {
                map.getEvent().registerMonster(mob);
            }
            map.spawnMonsterOnGroundBelow(mob, mob.getPosition());
        }
    }    
}

function startFourPart(eim) {
    var map = eim.getMapInstance(7);
    for each(monsterStatus in EventConfig.Monsters[map.getId()]) {
        var mob = getMonster(monsterStatus, em);
        if(em.getProperty("practice") == "true"){
            mob.disableDrops();
        }
        if (mob != null) {
            if (map.getEvent() != null) {
                map.getEvent().registerMonster(mob);
            }
            map.spawnMonsterOnGroundBelow(mob, mob.getPosition());
        }
    }    
}
