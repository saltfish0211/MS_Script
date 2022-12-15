var facetype = [];
var faceCard = 5152053;
var status = -1;
var beauty = -1;
var types = -1;
var ct = -1;
var isSecond = false;
var isAngel;


facetypeArray = [
    [//整形00區
    [20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019],
    [21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019]
    ],
    [//整形01區
    [20020,20021,20022,20023,20024,20025,20026,20027,20028,20029,20030,20031,20032,20033,20034,20035,20036,20037,20038,20039,20040,20041],
    [21020,21021,21022,21023,21024,21025,21026,21027,21028,21029,21030,21031,21032,21033,21034,21035,21036,21037,21038,21039,21040,21041]
    ],
    [//整形02區
    [20041,20042,20043,20044,20045,20046,20047,20048,20049,20050,20051,20052,20053,20054,20055,20056,20057,20058,20059,20060,20061],
    [21042,21043,21044,21045,21046,21047,21048,21049,21050,21051,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061]
    ],
    [//整形03區
    [20062,20063,20064,20065,20066,20067,20068,20069,20070,20071,20072,20073,20074,20075,20076,20077,20078,20079,20080,20081],
    [21062,21063,21064,21065,21066,21067,21068,21069,21070,20071,21072,21073,21074,21075,21076,21077,21078,21079,21080,21081]
    ],
    [//整形04區
    [20082,20083,20084,20085,20086,20087,20088,20089,20090,20091,20092,20093,20094,20095,20096,20097,20098,20099,23000,23001],
    [21082,21083,21084,21085,21086,21087,21088,21089,21090,21091,21092,21093,21094,21095,21096,21097,21098,21099,24000,24001]
    ],
    [//整形05區
    [23002,23003,23004,23005,23006,23008,23009,23010,23011,23012,23013,23014,23015,23016,23017,23018,23019,23020,23021,23023],
    [24003,24004,24005,24006,24007,20408,24009,24010,24011,24012,24013,24014,24015,24016,24018,24019,24020,24022,24024,24026]
    ],
    [//整形06區
    [23024,23025,23026,23027,23028,23029,23031,23032,23033,23034,23035,23036,23037,23038,23039,23040,23041,23042,23044],
    [24027,24028,24029,24031,24033,24034,24035,24036,24037,24038,24039,24040,24041,24042,24043,24044,24045,24048,24050,24051]
    ],
    [//整形07區
    [23045,23046,23047,23048,23051,23053,23054,23056,23057,23060,23061,23062,23063,23065,23066,23067,23068,23069,23072,23073],
    [24054,24055,24058,24059,24060,24061,24062,24063,24064,24065,24066,24067,24068,24071,24072,24073,24074,24075,24076,24077]
    ],
    [//整形08區
    [23074,23075,23079,23080,23081,23082,23083,23084,23085,23086,23087,23088,23089,23090,23091,23092,23095,23096,23097,23098],
    [24078,24079,24080,24081,24082,24083,24084,24085,24086,24087,24088,24091,24092,24093,24094,24095,24096,24097,24098,24099]
    ],
    [//整形09區
    [23099,25000,25001,25002,25003,25004,25005,25006,25007,25008,25009,25010,25011,25012,25013,25014,25015,25016,25017,25018],
    [26000,26401,26003,26004,26005,26006,26007,26008,26009,26010,26011,26012,26013,26014,26015,26016,26017,26018,26019,26020]
    ],
    [//整形10區
    [25019,25020,25021,25022,25023,25024,25025,25026,25027,25028,25029,25030,25031,25032,25033,25034,25035,25036,25037,25038],
    [26021,26022,26023,26024,26025,26026,26027,26028,26029,26030,26031,26032,26033,26034,26035,26036,26037,26038,26039,26040]
    ],
    [//整形11區
    [25039,25040,25041,25042,25043,25044,25045,25046,25047,25048,25049,25050,25051,25052,25053,25054,25055,25056,25057,25058],
    [26041,26042,26043,26044,26045,26046,26047,26048,26049,26050,26051,26052,26053,26054,26055,26056,26057,26058,26059,26060]
    ],
    [//整形12區
    [25059,25060,25061,25062,25063,25069,25070,25071,25072,25073,25074,25075,25077,25078,25079,25080,25083,25084,25085,25088],
    [26061,26062,26063,26064,26066,26067,26073,26074,26075,26076,26077,26078,26079,26080,26081,26082,26083,26084,26085]
    ],
    [//整形13區
    [25089,25090,25091,25093,25095,25096,25097,25098,27001,27002,27003,27004,27006,27007,27008,27009,27010,27011,27013,27014],
    [26086,26089,26090,26091,26094,26095,26096,26097,26099,28000,28001,28003,28004,28005,28006,28008,28010,28011,28012,28014]
    ],
    [//整形14區
    [27015,27016,27017,27018,27019,27020,27021,27022,27023,27024,27025,27026,27027,27028,27029,27030,27031,27032,27033,27034],
    [28015,28016,28017,28019,28020,28021,28022,28023,28024,28025,28026,28027,28028,28029,28030,28032,28033,28034,28035,28036]
    ]
]

function start() {
    isAngel = cm.getBeginner() == 6001;
    if (isAngel) {
        cm.sendChoiceAngle();
        return;
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.sendOk("你還沒做好心理準備嗎？決定好了之後，請你再來和我說話。");
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            if (isAngel) {
                isSecond = selection != 0;
            }
            var str = "你好，我是整形手術領域的藝術家。如果你有 #r100楓點#k，我可以為你做臉部整形手術。怎麼樣？ 你想讓自己的臉變得完美無瑕嗎？\r\n";
            for(i=0;i<facetypeArray.length;i++){
                str += "#L" + i + "#整形"+i+"區#k\r\n" ;
            }
            str += 
            cm.sendSimple(str);
            break;
        case 1:
            beauty = selection;
            getFaceID(selection);
            var iNow = 0;
            var face = isSecond ? cm.getPlayer().getSecondFace() : cm.getPlayerStat("FACE");
            var faceTypeNow = [];
            for (var i = 0; i < facetype.length; i++) {
                if (facetype[i] != face - face % 1000 + face % 100) {
                    faceTypeNow[iNow++] = facetype[i] + face % 1000 - (face % 100);
                }
            }
            facetype = cm.getCanFace(faceTypeNow);
            cm.sendSimple("那麼你想...\r\n#b#L0#看看這裡都有什麼臉型#l\r\n#b#L1#變換臉型#l");
            break;
        case 2:
            if (facetype.length == 0) {
                cm.sendOk("該項正在整理中....");
                cm.dispose();
            } else if (selection == 0) {
                types = 0;
                cm.askAvatar("那麼請隨便隨便看..", facetype, faceCard, isSecond);

            } else if (selection == 1) {
                types = 1;
                if (beauty != -1) {
                    cm.sendYesNo("使用#b 100楓點 #k，可以隨意更改臉型。但是請別擔心，我的手術已經達到了一樹的境界。你真的要使用#b 100楓點 #k，更換髮型嗎？");
                } else {
                    cm.sendOk("出現未知錯誤");
                    cm.dispose();
                }
            }
            break;
        case 3:
            if (types == 0) {
                status = 0;
                action(mode, type, beauty);
            } else {
                if (cm.setRandomAvatar(faceCard[beauty], facetype, isSecond) == 1) {
                    cm.sendOk("好了,讓朋友們讚歎你的新髮型吧!");
                    cm.safeDispose();
                } else {
                    cm.sendYesNo("您沒有可使用的會員卡。是否想消耗980楓點/樂豆點直接購買使用？");
                }
            }
            break;
        case 4:
            status = 2;
            if (cm.getChar().getCSPoints(1) >= 980) {
                ct = 1;
            }
            if (cm.getChar().getCSPoints(2) >= 980) {
                ct = 2;
            }
            if (ct != -1) {
                if (cm.gainNX(ct, -980)) {
                    cm.gainItem(faceCard[beauty], 1);
                } else {
                    cm.sendOk("你好像沒有足夠的樂豆點/楓點!");
                    cm.dispose();
                }

            } else {
                beauty = -1;
            }
            action(mode, type, selection);
            break;
        default:
            cm.dispose();
            break;
    }
}

function getFaceID(selection) {
    switch (selection) {
        case 0://5152053, 5152093, 5152094, 5152098
            if (cm.getPlayerStat("GENDER") == 0) {//皇家
                facetype = [20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019];
            } else {
                facetype = [21000,21001,21002,21003,21004,21005,21006,21007,21008,21009,21010,21011,21012,21013,21014,21015,21016,21017,21018,21019];
            }
            break;
        case 1:
            if (cm.getPlayerStat("GENDER") == 0) {//經典皇家
                facetype = [
                    20053, //單眼皮
                    20051, //貓眼
                    20055, //呆萌
                    20056, //美瞳
                    20057, //溫和精靈
                    20058, //耍酷幻影
                    20059, //溫柔幻影
                    20060, //堅毅
                    20061, //豆豆
                    20062, //犀利利
                    20063, //大方臉
                    20065, //影武
                    20066, //噘嘴
                    20067, //好好先生
                    20068, //憂愁
                    20069, //米哈逸
                    20070, //漫畫高手
                    20074, //堅韌異瞳
                    20075, //冷靜異瞳
                    20077, //鈴鐺眼
                    20076, //凱撒
                    20080, //星星眼
                    20081, //雪亮
                    20083, //懵懂少年
                    20084, //孤獨
                    20085, //沉著
                    20086, //史烏
                    20087, //端正
                    20088, //稚氣少年
                    20043, //雙瞳色
                    20045, //個性
                    20046, //外星人
                    20047, //漫畫
                    20035, //水靈靈
                    20036, //狂狼勇士
                    20141, //人心機器人
                    20142, //無心機器人
                    20040, //明眸
                    20052, //異界美型
                    20071, //瞳焰紅
                    20072 //瞳焰紫
                ];
            } else {
                facetype = [
                    21058, //雪亮
                    21059, //小芳臉
                    21061, //影武
                    21062, //噘嘴
                    21064, //憂愁
                    21065, //小傻瓜
                    21069, //堅韌異瞳
                    21070, //冷靜異瞳
                    21071, //凱撒
                    21072, //鈴鐺眼
                    21073, //天使破壞者
                    21074, //聰明諾巴
                    21075, //可愛諾巴
                    21077, //大圓眼
                    21078, //漫畫高手
                    21079, //阿莉亞
                    21080, //憂鬱
                    21081, //殺人鯨
                    21082, //天真
                    21083, //典雅
                    21084, //吊眼
                    21085, //維麗爾
                    21041, //雙瞳色
                    21043, //個性
                    21044, //外星人
                    21045, //漫畫
                    21033, //水靈靈
                    21034, //狂狼勇士
                    21036, //豆豆
                    21050, //異界美型
                    21038, //明眸
                    21139, //人心機器人
                    21140, //無心機器人
                    21049, //貓眼
                    21048, //近視
                    21052, //堅定
                    21066, //瞳焰紅
                    21067, //瞳焰紫
                    21086, //初心者
                    21089//紫色妖姬
                ];
            }
            break;
        case 2:
            if (cm.getPlayerStat("GENDER") == 0) {//RED皇家
                facetype = [
                    20089, //初心者
                    20093, //妖艷眉
                    20094, //雄心勃勃
                    20095, //滴溜溜
                    20054, //堅定
                    20097, //水晶葡萄
                    20090, //頑皮
                    20098, //正太
                    20099, //提斯
                    20096, //眈眈
                    23002, //褐眉大俠
                    23003, //倫多
                    23005, //奧利弗
                    23004, //異能
                    23006, //呆萌少年
                    23008, //模範生
                    20864, //天真弟
                    20882, //凝視
                    20044, //深邃大眼
                    23013, //路人甲
                    23014, //路人乙
                    23010, //月光
                    23011, //聰明玲瓏
                    23023, //信心滿滿
                    23012, //隱月
                    23021, //呆萌傻笑
                    23020, //大眼仔
                    23016, //寶玉
                    23018, //惡魔
                    23024, //睡美男
                    23017, //丹鳳眼
                    23015, //大眼睫毛
                    23019, //古惑仔
                    23031, //深邃大圓眼
                    23028, //平靜
                    23025 //委屈
                ];
            } else {
                facetype = [
                    21090, //凝神
                    21091, //琉璃眼
                    21093, //水晶葡萄
                    21094, //親切冒險家
                    21095, //非凡冒險家
                    21092, //溫柔女孩
                    24001, //蘿莉
                    21096, //奕奕
                    21097, //修嘉
                    21198, //奧利維亞
                    24002, //褐眉女俠
                    24003, //堅毅女俠
                    21099, //未來機器人
                    24004, //呆萌少女
                    21860, //天真妹
                    21863, //俏皮眼
                    21042, //深邃大眼
                    24009, //路人甲
                    24010, //路人乙
                    24007, //月光
                    24008, //朦妹妹
                    24016, //大眼
                    24018, //大佬夫人
                    24011, //假睫毛
                    24012, //黛玉
                    24019, //模範生
                    24014, //惡魔
                    24020, //睡美人
                    24021, //俏夫人
                    24013, //小鳳仙
                    24015, //古惑囡
                    24026, //深邃大圓眼
                    24024, //平靜
                    24022, //委屈
                    24023, //艷夫人
                    24027, //水晶之心
                    24025, //大姐大
                    24028, //自然萌
                    24031, //睫毛彎彎
                    24032 //紫色誘惑
                ];
            }
            break;
        case 3:
            if (cm.getPlayerStat("GENDER") == 0) {//週年慶皇家
                facetype = [
                    23026, //學生1
                    23027, //學生2
                    23032, //水晶之心
                    23029, //鷹鉤鼻大叔
                    23030, //殭屍臉
                    23035, //堅決
                    23033, //自然萌
                    23039, //兵團少年
                    23041, //剛毅
                    23042, //深邃
                    23043, //悲壯
                    23038, //迪倫
                    23034, //娃娃臉
                    23055, //未來機器人
                    23058, //天天變整容
                    23057, //芝麻眼
                    23056, //星光熠熠
                    23044, //派對精靈
                    23653, //不高興
                    23654, //嬰兒臉
                    23059, //逗比
                    23563, //小乖乖
                    23064, //笑盈盈
                    23060, //純真年代
                    20091, //侍神
                    20092, //隼人
                    20273, //熱血劍豪
                    20078, //堅毅劍豪
                    23069, //妖精
                    23071, //乖寶貝
                    23065, //真摯
                    23066, //冷靜
                    23076, //黯然神傷
                    23072, //憂鬱少年
                    23878, //憔悴病怏怏
                    23877, //中年帥哥
                    23070 //男才臉型
                ];
            } else {
                facetype = [
                    24036, //兵團少女
                    24038, //冷酷
                    24039, //正直 
                    24040, //悲壯
                    24041, //糕點師
                    24035, //水朦朦
                    24029, //娃娃臉
                    24056, //天天變整容
                    24053, //哈允德
                    24055, //芝麻眼
                    24054, //星光熠熠
                    24050, //派對精靈
                    24051, //嬰兒臉
                    24057, //逗比
                    24061, //笑盈盈
                    24058, //純真年代
                    24059, //水晶女孩
                    24060, //小乖乖
                    21087, //熱血劍豪
                    21088, //侍神
                    21068, //陰陽道師
                    21076, //陰陽術士
                    24068, //妖精
                    24069, //女貌臉型
                    24070, //乖寶貝
                    24071, //黯然神傷
                    24063, //精幹
                    24064, //溫柔
                    24072//憂鬱少女
                ];
            }
            break;
    }
}