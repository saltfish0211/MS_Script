
var status = 0;
var diff;
var time;
var sel;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

// 每個禮包所需的在線時長
//var condition = new Array(1440, 500, 500, 30, 30);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

     var diff =  cm.getDojoPoints() - cm.getPQLog("武陵點數獎勵");

        if (status == 0) {
        var selStr = "請選擇您要兌換的道具：\r\n你目前共有修煉點數： #r" + diff + "#k #b點#n#r#e\r\n請注意，某些道具兌換以後無法交易！\r\n#n";
        selStr += "#L0##r20#b個#v4001839##z4001839#   #r40#b修煉點數\r\n";
        selStr += "#L1##r15#b個#v2433287##z2433287#   #r40#b修煉點數\r\n";
        selStr += "#L2##r1#b個#v1082393##z1082393#   #r2500#b修煉點數\r\n";
        selStr += "#L3##r1#b個#v1082394##z1082394#   #r1800#b修煉點數\r\n";
        selStr += "#L4##r1#b個#v2049405##z2049405# #r800#b修煉點數\r\n";
        selStr += "#L5##r1#b個#v2615001##z2615001#   #r600#b修煉點數\r\n";
        selStr += "#L6##r1#b個#v2615000##z2615000#   #r500#b修煉點數\r\n";
        selStr += "#L7##r1#b個#v2048800##z2048800#   #r450#b修煉點數\r\n";
        selStr += "#L8##r1#b個#v2048801##z2048801#   #r450#b修煉點數\r\n";
        selStr += "#L9##r1#b個#v2040872##z2040872#   #r450#b修煉點數\r\n";
        selStr += "#L10##r1#b個#v2040873##z2040873#   #r450#b修煉點數\r\n";
        selStr += "#L11##r1#b個#v2043003##z2043003#   #r450#b修煉點數\r\n";
        selStr += "#L12##r1#b個#v2043103##z2043103#   #r450#b修煉點數\r\n";
        selStr += "#L13##r1#b個#v2043203##z2043203#   #r450#b修煉點數\r\n";
        selStr += "#L14##r1#b個#v2043303##z2043303#   #r450#b修煉點數\r\n";
        selStr += "#L15##r1#b個#v2043703##z2043703#   #r450#b修煉點數\r\n";
        selStr += "#L16##r1#b個#v2043803##z2043803#   #r450#b修煉點數\r\n";
        selStr += "#L17##r1#b個#v2044003##z2044003#   #r450#b修煉點數\r\n";
        selStr += "#L18##r1#b個#v2044019##z2044019#   #r450#b修煉點數\r\n";
        selStr += "#L19##r1#b個#v2044103##z2044103#   #r450#b修煉點數\r\n";
        selStr += "#L20##r1#b個#v2044203##z2044203#   #r450#b修煉點數\r\n";
        selStr += "#L21##r1#b個#v2044303##z2044303#   #r450#b修煉點數\r\n";
        selStr += "#L22##r1#b個#v2044403##z2044403#   #r450#b修煉點數\r\n";
        selStr += "#L23##r1#b個#v2044503##z2044503#   #r450#b修煉點數\r\n";
        selStr += "#L24##r1#b個#v2044603##z2044603#   #r450#b修煉點數\r\n";
        selStr += "#L25##r1#b個#v2044703##z2044703#   #r450#b修煉點數\r\n";
        selStr += "#L26##r1#b個#v2044815##z2044815#   #r450#b修煉點數\r\n";
        selStr += "#L27##r1#b個#v2044908##z2044908#   #r450#b修煉點數\r\n";
        selStr += "#L28##r1#b個#v2049406##z2049406#   #r500#b修煉點數\r\n";
        selStr += "#L29##r1#b個#v2041200##z2041200#   #r450#b修煉點數\r\n";
        selStr += "#L30##r1#b個#v3700044##z3700044#   #r450#b修煉點數\r\n";
        selStr += "#L31##r1#b個#v3700049##z3700049#   #r450#b修煉點數\r\n";
        selStr += "#L32##r1#b個#v1802384##z1802384#   #r450#b修煉點數\r\n";
        selStr += "#L33##r1#b個#v1802385##z1802385#   #r450#b修煉點數\r\n";
        selStr += "#L34##r1#b個#v1802386##z1802386#   #r450#b修煉點數\r\n";
        selStr += "#L35##r1#b個#v1802459##z1802459#   #r450#b修煉點數\r\n";
        selStr += "#L36##r1#b個#v1802460##z1802460#   #r450#b修煉點數\r\n";
        selStr += "#L37##r1#b個#v1802461##z1802461#   #r450#b修煉點數\r\n";
        selStr += "#L38##r1#b個#v1802346##z1802346#   #r450#b修煉點數\r\n";
        selStr += "#L39##r1#b個#v1802347##z1802347#   #r450#b修煉點數\r\n";
        selStr += "#L40##r1#b個#v1802348##z1802348#   #r450#b修煉點數\r\n";
        selStr += "#L41##r1#b個#v1003068##z1003068#   #r450#b修煉點數\r\n";
        selStr += "#L42##r1#b個#v1802220##z1802220#   #r450#b修煉點數\r\n";
        selStr += "#L43##r1#b個#v1802424##z1802424#   #r450#b修煉點數\r\n";
        selStr += "#L44##r1#b個#v1802425##z1802425#   #r450#b修煉點數\r\n";
        selStr += "#L45##r1#b個#v1802426##z1802426#   #r450#b修煉點數\r\n";
        selStr += "#L46##r1#b個#v1802426##z1802426#   #r450#b修煉點數\r\n";
        selStr += "#L47##r1#b個#v1802380##z1802380#   #r450#b修煉點數\r\n";
        selStr += "#L48##r1#b個#v1802381##z1802381#   #r450#b修煉點數\r\n";
        selStr += "#L49##r1#b個#v1802382##z1802382#   #r450#b修煉點數\r\n";
        selStr += "#L50##r1#b個#v1802375##z1802375#   #r450#b修煉點數\r\n";
        selStr += "#L51##r1#b個#v1802366##z1802366#   #r450#b修煉點數\r\n";
        selStr += "#L52##r1#b個#v1802084##z1802084#   #r450#b修煉點數\r\n";
        selStr += "#L53##r1#b個#v1802083##z1802083#   #r450#b修煉點數\r\n";
        selStr += "#L54##r1#b個#v1802082##z1802082#   #r450#b修煉點數\r\n";
        selStr += "#L55##r1#b個#v1802078##z1802078#   #r450#b修煉點數\r\n";
        selStr += "#L56##r1#b個#v1802080##z1802080#   #r450#b修煉點數\r\n";
        selStr += "#L57##r1#b個#v1802081##z1802081#   #r450#b修煉點數\r\n";
        selStr += "#L58##r1#b個#v1802060##z1802060#   #r450#b修煉點數\r\n";
        selStr += "#L59##r1#b個#v1802394##z1802394#   #r450#b修煉點數\r\n";
        selStr += "#L60##r1#b個#v1802395##z1802395#   #r450#b修煉點數\r\n";
        selStr += "#L61##r1#b個#v1802396##z1802396#   #r450#b修煉點數\r\n";
        selStr += "#L62##r1#b個#v1802365##z1802365#   #r450#b修煉點數\r\n";
        selStr += "#L63##r1#b個#v1802352##z1802352#   #r450#b修煉點數\r\n";
        selStr += "#L64##r1#b個#v1802068##z1802068#   #r450#b修煉點數\r\n";
        selStr += "#L65##r1#b個#v1802076##z1802076#   #r450#b修煉點數\r\n";
        selStr += "#L66##r1#b個#v1802444##z1802444#   #r450#b修煉點數\r\n";
        selStr += "#L67##r1#b個#v1802422##z1802422#   #r450#b修煉點數\r\n";
        selStr += "#L68##r1#b個#v1802446##z1802446#   #r450#b修煉點數\r\n";
        selStr += "#L69##r25#b個#v2003571##z2003571#   #r450#b修煉點數\r\n";
        selStr += "#L70##r1#b個#v1802501##z1802501#   #r450#b修煉點數\r\n";
        selStr += "#L71##r1#b個#v1802502##z1802502#   #r450#b修煉點數\r\n";



        
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
    if (cm.getDojoPoints() >= 40 && diff > 40) {
            cm.gainItem(4001839, 20);
            cm.setPQLog("武陵點數獎勵",0,40)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  領取40點修煉獎勵，給予星星x20個作為獎勵");
            cm.sendOk("#r - 40修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得星星x20！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有40修煉點.");
            cm.dispose();
            }
            break;
        case 1:
    if (cm.getDojoPoints() >= 40 && diff > 40) {
            cm.gainItem(2433287, 15);
            cm.setPQLog("武陵點數獎勵",0,40)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  領取40點修煉獎勵，給予15個咒語痕跡x15個作為獎勵");
            cm.sendOk("#r - 40修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得咒語痕跡x15個！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有40修煉點.");
            cm.dispose();
            }
            break;
        case 2:
    if (cm.getDojoPoints() >= 2500 && diff > 2500) {
            cm.gainItem(1082393, 1);
            cm.setPQLog("武陵點數獎勵",0,2500)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取2500點修煉獎勵，給予1個武公的手套作為獎勵");
            cm.sendOk("#r - 2500修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1082393#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有2500修煉點.");
            cm.dispose();
            }
            break;
        case 3:
    if (cm.getDojoPoints() >= 1800 && diff > 1800) {
            cm.gainItem(1082394, 1);
            cm.setPQLog("武陵點數獎勵",0,1800)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1800點修煉獎勵，給予1個蕭公的手套作為獎勵");
            cm.sendOk("#r - 1800修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1082394#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1800修煉點.");
            cm.dispose();
            }
            break;
        case 4:
    if (cm.getDojoPoints() >= 800 && diff > 800) {
            cm.gainItem(2049405, 1);
            cm.setPQLog("武陵點數獎勵",0,800)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取800點修煉獎勵，給予1個真·覺醒冒險之心專用潛能力卷軸作為獎勵");
            cm.sendOk("#r - 800修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z2049405#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有800修煉點.");
            cm.dispose();
            }
            break;
        case 5:
    if (cm.getDojoPoints() >= 600 && diff > 600) {
            cm.gainItem(2615001, 1);
            cm.setPQLog("武陵點數獎勵",0,600)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取600點修煉獎勵，給予1個培羅德高級卷軸作為獎勵");
            cm.sendOk("#r - 600修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z2615001#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有600修煉點.");
            cm.dispose();
            }
            break;
        case 6:
    if (cm.getDojoPoints() >= 500 && diff > 500) {
            cm.gainItem(2615000, 1);
            cm.setPQLog("武陵點數獎勵",0,500)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  領取500點修煉獎勵，給予1個培羅德低級卷軸作為獎勵");
            cm.sendOk("#r - 500修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z2615000#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有500修煉點.");
            cm.dispose();
            }
            break;
        case 7:
    if (cm.getDojoPoints() >= 10 && diff > 10) {
            cm.gainItem(2048800, 1);
            cm.setPQLog("武陵點數獎勵",0,10)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取450點修煉獎勵，給予1個#z2048800#作為獎勵");
            cm.sendOk("#r - 900修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z2048800#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有900分鐘在線點.");
            cm.dispose();
            }
            break;
        case 8:
    if (cm.getDojoPoints() >= 1000 && diff > 1000) {
           // cm.gainItem(5000403, 1);
            cm.gainPetItem(5000403, 1);  
            cm.setPQLog("武陵點數獎勵",0,1000)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1000點修煉獎勵，給予1個小士兵阿紅作為獎勵");
            cm.sendOk("#r - 1000修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z5000403#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1000分鐘在線點.");
            cm.dispose();
            }
            break;
        case 9:
    if (cm.getDojoPoints() >= 1000 && diff > 1000) {
           // cm.gainItem(5000404, 1);
          cm.gainPetItem(5000404, 1);
            cm.setPQLog("武陵點數獎勵",0,1000)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1000點修煉獎勵，給予1個小士兵阿藍作為獎勵");
            cm.sendOk("#r - 1000修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z5000404#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1000分鐘在線點.");
            cm.dispose();
            }
            break;
        case 10:
    if (cm.getDojoPoints() >= 50 && diff > 50) {
           cm.gainItem(2460003, 100);
            cm.setPQLog("武陵點數獎勵",0,50)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  領取50點修煉獎勵，給予100個鑒定放大鏡(特級)作為獎勵");
            cm.sendOk("#r - 50修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得100個#z2460003#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有50分鐘在線點.");
            cm.dispose();
            }
            break;
        case 11:
    if (cm.getDojoPoints() >= 500 && diff > 500) {
           cm.gainItem(2460003, 1100);

            cm.setPQLog("武陵點數獎勵",0,500)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取500點修煉獎勵，給予1100個鑒定放大鏡(特級)作為獎勵");
            cm.sendOk("#r - 500修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1100個#z2460003#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有500分鐘在線點.");
            cm.dispose();
            }
            break;
        case 12:
    if (cm.getDojoPoints() >= 700 && diff > 700) {
           cm.gainItem(1372039, 1);
            cm.setPQLog("武陵點數獎勵",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取700點修煉獎勵，給予1個爆炎之杖作為獎勵");
            cm.sendOk("#r - 700修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1372039#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有700分鐘在線點.");
            cm.dispose();
            }
            break;
        case 13:
    if (cm.getDojoPoints() >= 700 && diff > 700) {
           cm.gainItem(1372040, 1);
            cm.setPQLog("武陵點數獎勵",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取700點修煉獎勵，給予1個劇毒之杖作為獎勵");
            cm.sendOk("#r - 700修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1372040#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有700分鐘在線點.");
            cm.dispose();
            }
            break;
        case 14:
    if (cm.getDojoPoints() >= 700 && diff > 700) {
           cm.gainItem(1372041, 1);
            cm.setPQLog("武陵點數獎勵",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取700點修煉獎勵，給予1個寒冰之杖作為獎勵");
            cm.sendOk("#r - 700修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1372041#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有700分鐘在線點.");
            cm.dispose();
            }
            break;
        case 15:
    if (cm.getDojoPoints() >= 700 && diff > 700) {
           cm.gainItem(1372042, 1);
            cm.setPQLog("武陵點數獎勵",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取700點修煉獎勵，給予1個狂雷之杖作為獎勵");
            cm.sendOk("#r - 700修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1372042#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有700分鐘在線點.");
            cm.dispose();
            }
            break;
        case 16:
    if (cm.getDojoPoints() >= 1440 && diff > 1440) {
            cm.gainItem(1382049, 1);
            cm.setPQLog("武陵點數獎勵",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1440點修煉獎勵，給予1個朱雀長杖作為獎勵");
            cm.sendOk("#r - 1440修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1382049#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1440分鐘在線點.");
            cm.dispose();
            }
            break;
        case 17:
    if (cm.getDojoPoints() >= 1440 && diff > 1440) {
            cm.gainItem(1382050, 1);
            cm.setPQLog("武陵點數獎勵",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1440點修煉獎勵，給予1個玄武長杖作為獎勵");
            cm.sendOk("#r - 1440修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1382050#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1440分鐘在線點.");
            cm.dispose();
            }
            break;
        case 18:
    if (cm.getDojoPoints() >= 1440 && diff > 1440) {
            cm.gainItem(1382051, 1);
            cm.setPQLog("武陵點數獎勵",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1440點修煉獎勵，給予1個白虎長杖作為獎勵");
            cm.sendOk("#r - 1440修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1382051#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1440分鐘在線點.");
            cm.dispose();
            }
            break;
        case 19:
    if (cm.getDojoPoints() >= 1440 && diff > 1440) {
            cm.gainItem(1382052, 1);
            cm.setPQLog("武陵點數獎勵",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1440點修煉獎勵，給予1個青龍長杖作為獎勵");
            cm.sendOk("#r - 1440修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1382052#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1440分鐘在線點.");
            cm.dispose();
            }
            break;
        case 20:
    if (cm.getDojoPoints() >= 600 && diff > 600) {
            cm.gainItem(1302150, 1);
            cm.setPQLog("武陵點數獎勵",0,600)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取600點修煉獎勵，給予1個魔女的掃把作為獎勵");
            cm.sendOk("#r - 600修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1302150#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有600分鐘在線點.");
            cm.dispose();
            }
            break;
        case 21:
    if (cm.getDojoPoints() >= 600 && diff > 600) {
            cm.gainItem(1402044, 1);
            cm.setPQLog("武陵點數獎勵",0,600)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取600點修煉獎勵，給予1個南瓜燈籠作為獎勵");
            cm.sendOk("#r - 600修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1402044#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有600分鐘在線點.");
            cm.dispose();
            }
            break;
        case 22:
    if (cm.getDojoPoints() >= 700 && diff > 700) {
            cm.gainItem(1702092, 1);
            cm.setPQLog("武陵點數獎勵",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取700點修煉獎勵，給予1個南瓜枴杖作為獎勵");
            cm.sendOk("#r - 700修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1702092#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有700分鐘在線點.");
            cm.dispose();
            }
            break;
        case 23:
    if (cm.getDojoPoints() >= 1440 && diff > 1440) {
            cm.gainItem(1402014, 1);
            cm.setPQLog("武陵點數獎勵",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1440點修煉獎勵，給予1個溫度計作為獎勵");
            cm.sendOk("#r - 1440修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1402014#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1440分鐘在線點.");
            cm.dispose();
            }
            break;
        case 24:
    if (cm.getDojoPoints() >= 1440 && diff > 1440) {
            cm.gainItem(1382050, 1);
            cm.setPQLog("武陵點數獎勵",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  領取1440點修煉獎勵，給予1個玄武長杖作為獎勵");
            cm.sendOk("#r - 1440修煉點數獎勵 >> \r\n#d領取成功#k\r\n獲得1個#z1382050#！");
            cm.dispose();
            } else {
            cm.sendOk("你還沒有1440分鐘在線點.");
            cm.dispose();
            }
            break;


    }
    }
}