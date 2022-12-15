
var score = 0;
var eim = null;
var rescueCount = {};
var map = null;
var players = [];
var prisoners = [
    [8644101,580,-744],
    [8644102,1350,-984],
    [8644103,2654,-1598],
    [8644104,1889,-1763],
    [8644105,1078,-2002],
    [8644106,407,-2242],
    [8644107,-685,-2242],
    [8644108,-1349,-2002],
    [8644109,-2163,-1763],
    [8644110,-2937,-1598],
    [8644111,-1621,-984],
    [8644112,-960,-744],
];

var badSpirits = [
    8644301,
    8644302,
    8644303,
    8644304,
    8644305
];

var currentStage = 0;
var spawnBadSpiritsTime = [20000,10000,10000,5000,5000]


var safeZoneLt = [-405, -840];
var safeZoneRb = [45, -440];

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "false");
}

function setup(level, leaderid) {
    score = 0;
    currentStage =0;
    rescueCount = {};
    players = [];
    em.setProperty("state", "1");
    eim = em.newInstance("精靈救援者");
    map = eim.setInstanceMap(921172300);
    map.resetFully();
    //生成被關住的精靈們
    spiritRespawn();
    badSpiritGenerate();
    detectUserPosition();
    eim.startEventTimer(1000 * 60 * 3); //3 min
    return eim;
}

function playerEntry(eim, player) {
    rescueCount[player.getName()] = 0; // 目前身上所有的精靈數
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    players.push(player);
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 921172300) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(100, 921172400)) {
            if(score > 1000){
                var scoreText = "你的分數為" + score + "分";
                    var text = scoreText;
                    var historyHigh = player.getCharacterSet("救援精靈");
                    if(historyHigh >= score){
                        text += "，你的歷史分數為"+historyHigh;
                    }
                    else{
                        player.setCharacterSet("救援精靈",score);
                        text+= "，你刷新了最高分數紀錄" + score + "分！";
                    }
        
        
                    if(player.getLevel() >= 250){
                        text += "獲得" + (9 + Math.floor(score/1000)) + "個祕法符文兌換卷以及"+(15 + Math.floor(score/800))+"個真實符文兌換卷。";
                        player.gainItem(2439992, 15 + Math.floor(score/800), "精靈救援者")
                        player.gainItem(2438141, 9 + Math.floor(score/1000), "精靈救援者")
                    }
                    else{
                        text += "獲得" + (9 + Math.floor(score/1000)) + "個祕法符文兌換卷。";
                        player.gainItem(2438141, 9 + Math.floor(score/1000), "精靈救援者")
                    }
                    player.dropMessage(-11, text);
            }
            else{
                player.dropMessage(1, "由於您的分數未達1000分，因此未發放任何獎勵。");
            }
            em.setProperty("state", "0");
            em.setProperty("leader", "false");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 921172400);
    em.setProperty("state", "0");
    em.setProperty("leader", "false");
    return 0;
}

function monsterValue(eim, mobId, player) {
    if(mobId >= 8644101 && mobId <= 8644112){
        rescueCount[player.getName()] ++;
        map.startMapEffect((player != null ? player.getName() : "null") + "拯救了精靈，他身上有" + rescueCount[player.getName()] + "個精靈", 5120175);
    }
    else{
        map.startMapEffect("碰到毒怪了！所有人身上的精靈減少一隻", 5120175);
        for (var i = 0; i <players.length; i++) {
            var name = players[i].getName();
            rescueCount[name]-= rescueCount[name] > 0;
            players[i].dropMessage(-11, "你受到懲罰了！你身上的精靈剩下" +  rescueCount[name] + "隻");
        }
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(100, 921172400)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "false");
    }
}
function scheduledTimeout(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var player = eim.getPlayers().get(i);
        if(score > 1000){
            var scoreText = "你的分數為" + score + "分";
                var text = scoreText;
                var historyHigh = player.getCharacterSet("救援精靈");
                if(historyHigh >= score){
                    text += "，你的歷史分數為"+historyHigh;
                }
                else{
                    player.setCharacterSet("救援精靈",score);
                    text+= "，你刷新了最高分數紀錄" + score + "分！";
                }
    
    
                if(player.getLevel() >= 250){
                    text += "獲得" + (9 + Math.floor(score/1000)) + "個祕法符文兌換卷以及"+(15 + Math.floor(score/800))+"個真實符文兌換卷。";
                    player.gainItem(2439992, 15 + Math.floor(score/800), "精靈救援者")
                    player.gainItem(2438141, 9 + Math.floor(score/1000), "精靈救援者")
                }
                else{
                    text += "獲得" + (9 + Math.floor(score/1000)) + "個祕法符文兌換卷。";
                    player.gainItem(2438141, 9 + Math.floor(score/1000), "精靈救援者")
                }
                player.dropMessage(-11, text);
        }
        else{
            player.dropMessage(1, "由於您的分數未達1000分，因此未發放任何獎勵。");
        }
    }
    eim.disposeIfPlayerBelow(100, 921172400);
    em.setProperty("state", "0");
    em.setProperty("leader", "false");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}

function spiritRespawn(){
    
    for(var number=0;number<prisoners.length;number++){
        var mob = em.getMonster(prisoners[number][0]);
        modified = em.newMonsterStats();
        modified.setOHp(10000000);
        modified.setOMp(mob.getMobMaxMp());
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(prisoners[number][1], prisoners[number][2]));
    }
    map.startMapEffect("新的精靈重生了，快點救出他們並回到中間的安全區域！", 5120175);
    eim.schedule("spiritRespawn", 50 * 1000);
}

function badSpiritGenerate(){
    var mob = em.getMonster(badSpirits[currentStage]);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-900,-1390));
    eim.schedule("badSpiritGenerate", spawnBadSpiritsTime[currentStage]);
}

function detectUserPosition(){
    
     for (var i = 0; i < players.length; i++) {
        var player = players[i];
        var pos = player.getPosition();
        //player.dropMessage(6, "current position x:" + pos.x + " y:"+ pos.y);
        if(isInSafeZone(player,pos.x,pos.y)){
            rescueSpirit(player);
        }
    }
    eim.schedule("detectUserPosition", 1000);
}

function isInSafeZone(player,x,y){
    //player.dropMessage(6, "safeZoneLt x:" + safeZoneLt[0] + "~" + safeZoneRb[0]);
    //player.dropMessage(6, "safeZoneLt y:" + safeZoneLt[1] + "~" + safeZoneRb[1]);
    return (x >= safeZoneLt[0] && x <= safeZoneRb[0]) && (y >= safeZoneLt[1] && y <= safeZoneRb[1])
}

function rescueSpirit(player){
    var resCnt = rescueCount[player.getName()];
    if(resCnt == 0){
        return;
    }
    if(resCnt >= 5){
        score+=2500;
    }
    else if(resCnt == 4){
        score+=1500;
    }
    else if(resCnt == 3){
        score+=1000;
    }
    else if(resCnt == 2){
        score+=500;
    }
    else if(resCnt == 1){
        score+=200;
    }
    rescueCount[player.getName()]=0;
    if(
        (currentStage==0 && score > 2000) ||
        (currentStage==1 && score > 3000) ||
        (currentStage==2 && score > 5000) ||
        (currentStage==3 && score > 10000)
    ){
        currentStage ++;
        switch(currentStage){
            case 1:
                map.startMapEffect("猛毒的精靈似乎發現了！趕緊逃跑！目前分數:" + score + "分。", 5120175);
                break;
            case 2:
            case 3:
                map.startMapEffect("猛毒的精靈變得更強了．．．！目前分數:" + score + "分。", 5120175);
                break;
            case 4:
                map.startMapEffect("猛毒的精靈變成完整體了！小心點阿！目前分數:" + score + "分。", 5120175);
                break;
        }
    }
    else{
        map.startMapEffect("拯救精靈成功，趕快尋找更多精靈吧，目前分數:" + score + "分。", 5120175);
    }
}