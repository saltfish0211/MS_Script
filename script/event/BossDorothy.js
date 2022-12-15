/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：taolesi
 *  @Author Kent 
 */
//自定義復活次數
try{load("scripts_custom/config/BossStatus.js");}catch(e){load("scripts/config/BossStatus.js");}

var reviveCount = 5;
var Task;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    em.setProperty("time", "false");
}

function setup(eim, leaderid) {
    var eim = em.newInstance("BossDorothy");
    em.setProperty("state", "1");
    eim.setProperty("leader", "false");
    eim.setProperty("time", "true");
    var map = eim.setInstanceMap(992050000);
    map.resetFully();
    map.killAllMonsters(true);
    
    var mob1 = em.getMonster(9309126);//火山怪
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(124,184));
    
    //載入BOSS自訂數值        
    BossStatu = Boss("Dorothy",em);
    var mob = em.getMonster(BossStatu.ID);
    mob.getStats().setHp(BossStatu.HP);
    mob.getStats().setMp(BossStatu.MP);
    mob.getStats().setPhysicalAttack(BossStatu.PAD);
    mob.getStats().setMagicAttack(BossStatu.MAD);
    mob.getStats().setPDRate(BossStatu.PDRate);
    mob.getStats().setMDRate(BossStatu.MDRate);
    mob.getStats().setLevel(BossStatu.LEVEL); 
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(740, 184));
    eim.startEventTimer(2300000); // 1 hr
    Task = em.schedule("timing",1000*60,eim);
    em.schedule("spawn",1000*30,eim);
    return eim;
}
function timing(eim){
    if (eim.getProperty("time")=="true"){
        var map = eim.getMapInstance(0);
        var mob = em.getMonster(9309210);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob,new java.awt.Point(381,184));
        Task = em.schedule("timing",1000*50,eim);
    }
}
function spawn(eim){
    var map = eim.getMapInstance(0);
    var mob2 = em.getMonster(9309206);//拓拓   
    mob2.getStats().setHp(mob2.getMobMaxHp() * 37000);
    mob2.getStats().setMp(mob2.getMobMaxMp() * 50);
    eim.registerMonster(mob2);
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(740, 184));
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
    //player.openNpc(9310136,"jiance");
}

function changedMap(eim, player, mapid) {
    if (mapid!=992050000){
        eim.unregisterPlayer(player);
        player.restReviveCount();
        eim.disposeIfPlayerBelow(100, 910000001);
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        eim.setProperty("time", "false");
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000001);
    em.setProperty("state", "0");
    em.setProperty("leader", "false");
    eim.setProperty("time", "false");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.restReviveCount();
    if (eim.disposeIfPlayerBelow(100, 910000001)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        eim.setProperty("time", "false");
    }
}

function monsterValue(eim, mobId, player) {
    var map = eim.getMapInstance(0);
    if (mobId == 9309207){
        if (em.getProperty("state")=="5"){
            eim.setProperty("time", "false");
            var map = eim.getMapInstance(0);
            var mob = em.getMonster(8920106);
            mob.getStats().setChange(true);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(701, 184));
        }else{
            em.setProperty("state","5");
        }
    }else if (mobId == 9309206){
        if (em.getProperty("state")=="5"){
            eim.setProperty("time", "false");
            var map = eim.getMapInstance(0);
            var mob = em.getMonster(8920106);
            mob.getStats().setChange(true);
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(701, 184));
        }else{
            em.setProperty("state","5");
        }
    }
    return 1;
}

function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    if (player.getEventReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(105200000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
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
