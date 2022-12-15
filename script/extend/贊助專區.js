/*2019.02.03 by bobo */
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
var status = -1;
var donatePrice = -1;
var donateType = -1;
var sel = -1;
//紅利點數比例
var donate_rate = 3;
//首儲活動
var firstdonate = false;
//首儲比例
var firstdonate_rate = 3;
//贊助紅利開關
var point = false;
//贊助紅利比例
var point_rate = 1;
//首次贊助紅利比例
var firstpoint_rate = 1;
//首儲紀錄
var donate_log = "贊助首次";

function start() {
    action(1, 0, 0);
}

//斗內比值
function getCashRate(price) {
    var cashRate = donate_rate;
    //這裡是寫 單筆滿3000 1 : 5  沒有的話 1 : 4
    // if (price / 1000 >= 3) {
    //     cashRate = 5;
    // } else {
    //     cashRate = 4;
    // }
    if (firstdonate) {
        if (cm.getPlayer().getPrizeLog(donate_log) < 1) {
            cashRate = firstdonate_rate;
        }
    }
    return cashRate;
}

//斗內比值
function getPointRate(price) {

    var PointRate = point_rate;
    if (firstdonate) {
        if (cm.getPlayer().getPrizeLog(donate_log) < 1) {
            PointRate = firstpoint_rate;
        }
    }
    /*if (price >= 20000) {
        PointRate = 1.4;
    } else if (price >= 15000) {
        PointRate = 1.3;
    }else if (price >= 10000) {
        PointRate = 1.2;
    }else if (price >= 5000) {
        PointRate = 1.1;
    }*/
    return PointRate;
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else if (mode === 0) {
        status--;
    }

    var i = -1;
    var points = cm.getPlayer().getHyPay(3);
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        var msg = "";
        msg += "#b歡迎來到遊戲贊助系統區,請問你需要什麼服務呢?\r\n【#r贊助完成要點第二個選項兌換唷#b】\r\n紅利點數 #r1 #b點可以兌換 #r" + donate_rate + " #b 樂豆點\r\n您目前擁有: #r" + points + " #b紅利點數#d\r\n";
        msg += "#L1#1.我要贊助遊戲伺服器開單繳費!(#r點我開單#d)\r\n";
        msg += "#L2#2.我要將紅利點數 兌換 為樂豆點\r\n";
        cm.sendOk(msg);
    } else if (status === i++) {
        sel = selection;
        if (sel == 1) {
            var msg = "";
            msg += "#r捐贈須知:\r\n";
            msg += "#b------------------------------------------------------#d\r\n";
            msg += "#b1.#d遊戲伺服器贊助屬自由捐款,非商品販售,贊助過後無法退款\r\n";
            msg += "#b2.#d遊戲贊助將用於維持伺服器營運以及鞏固玩家的遊戲品質\r\n";
            msg += "#b3.#d贊助遊戲後,系統將自動發送本伺服器給予的紅利點回饋\r\n";
            msg += "#b4.#d以上若有任何問題,歡迎聯繫GM!\r\n";
            msg += "#b------------------------------------------------------#r\r\n";
            msg += "#r是否已閱讀須知並進行捐贈?";
            cm.sendYesNo(msg);
        } else if (sel == 2) {
            var msg = "";
            msg += "#b您目前擁有: #r" + points + " #b紅利點數,可兌換 #r" + parseInt(points * getCashRate(points)) + " #b點樂豆點。\r\n";
            msg += "請問您需要兌換掉多少點紅利點數呢?";
            cm.sendGetNumber(msg, 1, 1, points);
        } else {
            cm.dispose();
        }
    } else if (status === i++) {
        if (sel == 1) {
            cm.openWeb("https://web-hosts.net/霞光谷v237.html");
            cm.dispose();
        } else if (sel == 2) {
            var changepoints = selection;
            var gaingash = parseInt(changepoints * getCashRate(changepoints));
            if (changepoints <= points) {
                cm.addPayUsed(-1 *changepoints);
                cm.getPlayer().modifyCSPoints(1, gaingash, true);
                cm.sendOk("#b已為您將 #r" + changepoints + " #b紅利點數兌換為#r " + gaingash + " #b樂豆點! \r\n您剩餘 #r" + cm.getPlayer().getHyPay(3) + " #b點紅利點數。");
                if (firstdonate) {
                    if (cm.getPlayer().getPrizeLog(donate_log) < 1) {
                        cm.getPlayer().setPrizeLog(donate_log);
                    }
                }
                cm.dispose();
            } else {
                cm.sendOk("#r您的紅利點數不足哦!");
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}