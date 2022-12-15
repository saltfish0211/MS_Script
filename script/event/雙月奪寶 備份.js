var setupTask, setupTask1;
var timerGap = 10000;
var lastSpawned = -1;
var isCountingDown = false;
var conctrl2 = false; //如果偵測到時間變小會開啟這個
var eim;
var destChannel = 0;
var channelCount = 16; //最大頻道數量
var scheduleTimes = [
    [0, 10],
    [2, 10],
    [4, 10],
    [6, 10],
    [8, 10],
    [10, 10],
    [12, 10],
    [14, 10],
    [16, 10],
    [18, 10],
    [18, 40],
    [19, 10],
    [19, 40],
    [20, 10],
    [20, 40],
    [21, 10],
    [21, 40],
    [22, 10],
    [22, 40],
    [23, 10],
    [23, 40],
]

var rewards = [
    [4319901, 50],
    [2633634, 10],
    [2430989, 1],
    [2430675, 1],
    [5062501, 3],
    [4001889, 1]
    [2439992, 20]
]

var maps = [
    101000003,
    101080000,
    101020400,
    101050100,
    100000000,
    100000203,
    120000100,
    120000101,
    103000000,
    103000004,
    220000000,
    220000100,
    220050300,
    224000001,
    224000061,
    230020201,
    230010201,
    230030101,
    230000001,
    230040401,
    230040410,
    221000300,
    240000000,
    240010501,
    270000000,
    211000000,
    211000001,
    211060000,
    200080100,
    200000200,
    200000300,
    410000250,
    402000001,
    402000323,
    402000100,
    410000419,
    410000423,
    410000415,
    410000413,
    400000001,
    400010000,
    400020000,
    400030000,
    400040000,
    241000130,
    241000140,
    241000150,
    241000200,
    241000101,
    260000303,
    260010402,
    261000002,
    260000202,
    260000203,
    260000204,
    260000205,
    260000206,
    260000207,
    450001002,
    450001200,
    450001100,
    450014090,
    450014130,
    450014200,
    450002025,
    450015230,
    450015140,
    450005010,
    450005200,
    450005300,
    450007000,
    450007170,
    450007200,
    250000002,
    250000003,
    251000100,
    875000010,
    875001103,
    875001001,
    270030411,
    270020211,
    270010111,
    300000100,
    300000011,
    300000002,
    310000001,
    310000003,
    310000004,
    310000010,
    310010010,
    101082000,
    101084400,
    101080900,
    140000001,
    140000012,
    140030000,
    130000101,
    130010220,
    130030005
]


function init() {
    cancelSchedule();
    scheduleNew(0);//先開始一次活動
}

function scheduleNew(time) {
    setupTask = em.schedule("start", time);
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
    if (setupTask1 != null) {
        setupTask1.cancel(true);
    }
}

function start() {
    var today = new Date();
    cancelSchedule();
    scheduleNew(timerGap);
    var hour = today.getHours();
    var min = today.getMinutes();
    var minGapTime = 100000000;
    destChannel = 1;//randomByHour(today) * (channelCount-1) + 1;

    for (var i = 0; i < scheduleTimes.length; i++) {
        if (lastSpawned != i && hour == scheduleTimes[i][0] && min == scheduleTimes[i][1]) {
            spawnRoutine();
            lastSpawned = i;
        }
        var nx = new Date();
        nx.setHours(scheduleTimes[i][0]);
        nx.setMinutes(scheduleTimes[i][1]);
        nx.setSeconds(0);
        if (nx.getTime() - today.getTime() > 0) {
            minGapTime = Math.min(minGapTime, nx.getTime() - today.getTime());
        }
    }
    //em.getChannelServer().broadcastGMMessage(Packages.packet.MaplePacketCreator.spouseMessage("[GM消息] 雙月奪寶測試訊息 lastSpawned:" + lastSpawned + " 下次gapTime:" + minGapTime, false));
    if (minGapTime <= 1000 * 60 * 5 && conctrl2 == 0 && !isCountingDown) {
        cancelSchedule();
        conctrl2 = Math.ceil(minGapTime / 60000);
        scheduleCountdown();
    }
}

function start1() {
    if (conctrl2 > 0) {
        setupTask1 = em.schedule("scheduleCountdown", 60 * 1000);
    }
    else {
        isCountingDown = true;
        scheduleNew(timerGap);
    }
}

function scheduleCountdown() {
    em.broadcastServerMsg(5120074, "[系統廣播]:奪寶活動即將在" + conctrl2 + "分鐘後於第" + destChannel + "頻道開始，請做好準備", true);
    em.broadcastYellowMsg("[系統廣播]:奪寶活動即將在" + conctrl2 + "分鐘後於第" + destChannel + "頻道開始，請做好準備");
    //em.getChannelServer().broadcastGMMessage(Packages.packet.MaplePacketCreator.spouseMessage("[GM消息] 雙月奪寶測試訊息 lastSpawned:" + lastSpawned + " conctrl2:" + conctrl2, false));
    conctrl2--;
    isCountingDown = true;
    start1();
}

function spawnRoutine() {
    isCountingDown = false;
    conctrl2 = 0;
    var currentChannel = em.getChannelServer().channel;
    if (currentChannel == destChannel) {
        var randomMap = null;
        do {
            if (eim != null) {
                if(eim.getMapInstance(0) != null){
                    eim.getMapInstance(0).killMonster(8643013);
                }
                eim.dispose();
            }
            eim = em.newInstance("SpawnMonster" + new Date().toString());
            var rand = Math.min((maps.length - 1), Math.max(0, Math.floor(Math.random() * maps.length)));
            var mapid = maps[rand];
            randomMap = eim.setInstanceMap(mapid);
        } while (randomMap == null);
        spawnMonster(randomMap);
        em.broadcastServerMsg(5120074, "[奪寶活動]: 活動寶箱在第" + destChannel + "頻道的[" + randomMap.getStreetName() + "]的某處生成了，快去尋找寶箱吧！v", true);
        em.broadcastYellowMsg("[奪寶活動]: 活動寶箱在第" + destChannel + "頻道的[" + randomMap.getStreetName() + "]的某處生成了，快去尋找寶箱吧！");
    }
    else {
        em.broadcastYellowMsg("[奪寶活動]: 活動寶箱在第" + destChannel + "頻道生成了！");
    }
}

function monsterValue(eim, mobId, player) {
    var msg = "[奪寶活動]:恭喜玩家[" + player.getName() + "]取得此次活動獎勵，敬請期待下次奪寶活動！";
    em.broadcastServerMsg(5120074, msg, true);
    em.broadcastYellowMsg(msg);
    var price = Math.min(6, Math.max(0, Math.floor(Math.random() * rewards.length)));
    try {
        player.gainItem(rewards[price][0], rewards[price][1], "奪寶活動");
    }
    catch (e) {
        player.gainItem(rewards[0][0], rewards[0][1], "奪寶活動");
    }
    player.gainItem(2436422, 1, "奪寶活動");
    eim.dispose();
}

function spawnMonster(mapInstance) {
    var currentChannel = em.getChannelServer().channel;
    if (currentChannel != destChannel) {
        return;
    }
    var point;
    var mapid = mapInstance.getId();
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
    //em.broadcastYellowMsg("[奪寶活動]:生成座標:" + point.getX() + " "+ point.getY() + "！");
    var mob = em.getMonster(8643013);
    eim.registerMonster(mob);
    mapInstance.spawnMonsterOnGroundBelow(mob, point);
}

function randomByHour(today) {
    var x = Math.sin((today.getHours()) * (today.getDate())) * 10000;
    return Math.floor(x - Math.floor(x));
}
