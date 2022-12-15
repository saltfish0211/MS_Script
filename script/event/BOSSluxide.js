var mobid;
var mob;
var modified;
var MaxRandom;
var setupTask;
var MapList = Array(
		    450004150,//BOSS地圖1
	        450004550, //BOSS地圖2
	        450004600 //BOSS地圖2
        );
var reviveCount = 10;
function init() {
    em.setProperty("state", "0");
    // em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Lucid");
	    for (var i = 0; i < MapList.length; i++) {
        var map = eim.setInstanceMap(MapList[i]);
        map.resetPQ(level);
        map.resetFully();
        map.killAllMonsters(true);
		 }
	var map = eim.setInstanceMap(450004150);
    mobid = 8880171;////噩夢岩石1
    mob = em.getMonster(mobid);
    mob.getStats().setHp(90000000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(609, 43));

    mobid = 8880171;////噩夢岩石2
    mob = em.getMonster(mobid);
    mob.getStats().setHp(90000000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1348, 43));

    mobid = 8880166;////噩夢之花
    mob = em.getMonster(mobid);
    mob.getStats().setHp(90000000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(999, 48));

    mobid = 8880141;////露希妲
    mob = em.getMonster(mobid);
    mob.getStats().setHp(90000000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004150);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(999, 48));
    eim.startEventTimer(1000 * 60 * 30);//第一、二關有15分鐘的時間


	///////2階段
    mobid = 8880171;////不會動的岩石1
    mob = em.getMonster(mobid);
    mob.getStats().setHp(6500000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(954,-359));

    mobid = 8880171;////不會動的岩石2
    mob = em.getMonster(mobid);
    mob.getStats().setHp(6500000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(378,-907));

    mobid = 8880171;////不會動的岩石3
    mob = em.getMonster(mobid);
    mob.getStats().setHp(6500000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(404,-375));

    mobid = 8880171;////不會動的岩石4
    mob = em.getMonster(mobid);
    mob.getStats().setHp(6500000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1086,-842));

    mobid = 8880150;////露希妲
    mob = em.getMonster(mobid);
    mob.getStats().setHp(150000000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004550);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(613,-490));

	mobid = 8880167;////最後的音樂盒
    mob = em.getMonster(mobid);
    mob.getStats().setHp(3000000000);
    mob.getStats().setMp(1000000000);
    eim.registerMonster(mob);
    var mapForMob8 = eim.getMapInstance(450004600);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(93,35));

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getEventReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(450004000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {
	    switch (mapid) {
		 case 450004150://BOSS地圖
            em.setProperty("state", "1");
            var map = eim.getMapInstance(450004150);
            // map.startMapEffect("你們這幾個弱雞也敢來這裡？", 5120129);
		   // map.spawnNpc(3003207, new java.awt.Point(1566, 43));//創建防毒面具
            // eim.restartEventTimer(1000 * 60 * 60);//第五大關有1小時的時間
            break;
		 case 450004550://BOSS地圖
            em.setProperty("state", "2");
            var map = eim.getMapInstance(450004550);
		  //  map.spawnNpc(3003207, new java.awt.Point(1184, -378));//創建防毒面具
             map.startMapEffect("看來你們還不知道什麼是絕望！", 5120129);
            // eim.restartEventTimer(1000 * 60 * 60);//第五大關有1小時的時間
            break;
		 case 450004600://BOSS地圖
            em.setProperty("state", "3");
            // var map = eim.getMapInstance(450004600);
		    // map.spawnNpc(3003207, new java.awt.Point(1167, -378));//創建防毒面具
            // map.startMapEffect("看來你們還不知道什麼是絕望！", 5120129);
            eim.restartEventTimer(1000 * 60 * 30);//第五大關有1小時的時間
            break;
		}
    switch (mapid) {
		case 450004150://BOSS地圖1
		case 450004550://BOSS地圖2
		case 450004600://BOSS地圖2
            return
     }
	 player.dropMessage(6, "[露希妲] 已退出挑戰。");
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() <= 0) {
        eim.disposeIfPlayerBelow(100, 450004000);
    }
}
function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 450004000);
}

function playerDisconnected(eim, player) {
    // eim.disposeIfPlayerBelow(100, 450004150);
    // em.setProperty("state", "0");
    // em.setProperty("leader", "true");
    eim.unregisterPlayer(player);
    return 0;
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function monsterValue(eim, mobId, player) {
	if (mobid == 8880141) {//露希妲第二階段
		eim.getMapFactory().getMap(450004150).killAllMonsters(true);//殺死所有怪物
	    // var map = eim.getMapInstance(450004150);
		// map.spawnNpc(3003270, new java.awt.Point(1566, 43));//創建露希妲
		setupTask = em.schedule("chuansong", 1000 * 1 * 3, eim);//延遲3秒過圖
        return 0;
	}
	if (mobid == 8880150) {
        eim.getMapFactory().getMap(450004550).killAllMonsters(true);//殺死所有怪物
		setupTask = em.schedule("chuansongk", 1000 * 1 * 5, eim);//延遲3秒召喚NPC
        return 0;
    }
	return 1;
}
function chuansong(eim, player) {
    if (eim.getMapFactory().getMap(450004150).getCharactersSize() != 0) {
        openNpc(eim, 3003270, 1);//monsterdrop 不能使用於地圖原有的怪物，只能這樣了T.T

	}
}
function chuansongk(eim, player) {
    if (eim.getMapFactory().getMap(450004550).getCharactersSize() != 0) {
	    var map = eim.getMapInstance(450004550);
		// map.spawnNpc(3003271, new java.awt.Point(613,-490));//創建露希妲
        openNpc(eim, 3003270, 2);//monsterdrop 不能使用於地圖原有的怪物，只能這樣了T.T
    }
}

function scheduledTimeout(eim) {
	    eim.broadcastPlayerMsg(1, "[露希妲] 真遺憾！已超過限定挑戰時間，本次挑戰失敗！別氣餒，期待更加強大的您前來挑戰~");
    eim.disposeIfPlayerBelow(100, 450004000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function clearPQ(eim) {
    scheduledTimeout(eim);
}
function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}
function allMonstersDead(eim) {}

function leftParty(eim, player) {
    eim.disposeIfPlayerBelow(100, 450004000);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 450004000);
}

function onMapLoad(eim, player) {
}
function playerDead(eim, player) {}

function monsterDrop(eim, player, mob) {
}
function monsterDamaged(eim, player, mobid, damage) {
}