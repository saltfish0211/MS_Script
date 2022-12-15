/*      
 *  
 *  功能：怪物公園：豹紋
 *  
 */
load("scripts/霞光共通.js");
var status = -1;
var dayEventNames = Array("成長的星期日", "創造的星期一", "強化的星期二", "性向的星期三", "名譽的星期四", "黃金的星期五", "慶典的星期六");
var mapNames = Array("苔蘚森林", "天空森林修煉場", "海賊團秘密基地", "異界的戰場", "偏僻森林危險區域", "禁忌的時間", "隱藏的遺跡");
var maps = Array(953030000, 953040000, 953060000, 953070000, 953080000, 953050000, 953090000);
var minLevel = Array(115, 120, 125, 135, 140, 145, 150);
var maxLevel = Array(124, 129, 134, 144, 149, 154, 159);
var reqQuest = Array(0, 0, 0, 0, 0, 0, 0);
var lvRand = [115, 160];
var today;
var id = -1;
function start() {
    if (cm.getParty() != null) {
        cm.sendOk("怪物公園無法以組隊狀態進入，\r\n請解除組隊後入場。");
        cm.dispose();
        return;
    }
    var str = "";
    if (cm.getLevel() < lvRand[0] || (lvRand[1] != -1 && cm.getLevel() >= lvRand[1])) {
        str += lvRand[0] + "級以上";
        if (lvRand[1] != -1) {
            str += "，未滿" + lvRand[1];
        }
    }
    if (str != "") {
        cm.sendOk("高級副本 #b" + str + "#k的玩家才能使用。");
        cm.dispose();
        return;
    }
    var date = new java.text.SimpleDateFormat("yy/MM/dd").format(new java.util.Date());
    var sDate = cm.getWorldShareInfo(18805, "date");
    if (sDate != date) {
        cm.updateWorldShareInfo(18805, "count", "0");
        cm.updateWorldShareInfo(18805, "Td", date);
        cm.updateWorldShareInfo(18805, "date", date);
    }
    var nCount = cm.getCharacterSet("怪物公園" + getToday());
    nCount = parseInt(nCount)
    if (nCount >= 2) {
        cm.sendOk("今天已完成2次怪物公園，請明天再來。");
        cm.dispose();
        return;
    }
    var selStr = "<今天完成的次數#b" + nCount + " / 2次#k (目前伺服器基準)>\r\n\r\n";
    if (nCount < 2) {
        selStr += "今天的免費過關次數剩下#b" + (2 - nCount) + "次#k。";
    } else {
        cm.sendOk("#e" + selStr + "#n今天免費可以完成的次數2次都已經使用完了#k");
        cm.dispose();
        return;
    }
    selStr += "#n#b";
    for (var i = 0; i < mapNames.length; i++) {
        if (reqQuest[i] > 0 && !cm.isQuestFinished(reqQuest[i])) {
            continue;
        }
        selStr += "\r\n#L" + i + "#" + mapNames[i] + "(Lv." + minLevel[i] + "~" + maxLevel[i] + ")#l";
    }
    today = new Date().getDay();
    cm.sendSimple("#e<今天是#b" + dayEventNames[today] + "#k>\r\n" + selStr);
}

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status == i++ || mode != 1) {
        cm.dispose();
    } else if (status == i++) {
        if (id == -1) {
            id = selection;
        }
        var nCount = cm.getCharacterSet("怪物公園" + getToday());
        if(nCount >= 2){
            cm.sendSimple("今日的怪物公園已經用完了，請明天再來吧。")
            cm.dispose()
            return;
        }
        else{
            cm.askYesNo("#e<今天是#b" + dayEventNames[today] + "#k>\r\n\r\n選擇副本 : #b" + mapNames[id] + "(Lv." + minLevel[id] + "~" + maxLevel[id] + ")#k\r\n\r\n要進入副本嗎？");
        }
    } else if (status == i++) {
        var em = cm.getEventManager("MonsterPark");
        if (em == null) {
            cm.sendOk("配置不存在。");
        } else {
            if (em.getInstance("MonsterPark" + cm.getPlayer().getId()) != null) {
                em.getInstance("MonsterPark" + cm.getPlayer().getId()).dispose();
            }
            em.startInstance_Solo(maps[id], cm.getPlayer());
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
