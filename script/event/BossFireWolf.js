/*  
 *  
 *  功能：BOSS 烈焰戰狼
 *
 */
var mapId = 993000500;
var leaveToMapId = 993000600;

//自定義復活次數
var reviveCount = 5;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    em.setProperty("summon", "0");
    var eim = em.newInstance("烈焰戰狼");
    var map1 = eim.setInstanceMap(993000500);
    map1.resetFully();
    map1.killAllMonsters(false);
    eim.startEventTimer(30 * 1000); //30s
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
    map.startMapEffect("消滅烈焰戰狼的勇士增加了。快點去攻擊牠吧！能停留的時間只有30秒而已！", 5120116);
}

function playerRevive(eim, player) {
    if (player.getEventReviveCount() > 0) {
        player.addHP(50);
        var map = eim.getMapFactoryMap(mapId);
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(mapId);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, leaveToMapId);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    var mob;
    switch (mapid) {
        case mapId:
        {
            if (em.getProperty("state").equals("1") && em.getProperty("summon").equals("0")) {
                em.setProperty("summon", "1");
                mob = em.getMonster(9101078);
                //mob.getStats().setChange(true);
                // mob.getChangedStats().setOHp(63000000000);
                eim.registerMonster(mob);
                eim.getMapInstance(0).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-363, 100));
            }
            break;
        }
    }
    if (mapid != mapId) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId, player) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 993000600)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
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
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}
function monsterDamaged(eim, player, mobid, damage) {
}
function monsterKilled(eim, player, cp) {
}