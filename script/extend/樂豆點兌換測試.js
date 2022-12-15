/* global cm */
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);

var status = 0;
var select = -1;
var select0= -1;
var 彩楓兌換樂豆需求道具 = Array([[4000214,1]]);

function start() {
    if ( cm.getPlayerStat("GM") == 0 ||  cm.getPlayerStat("ADMIN") == 0){
        //cm.dispose();
        //return;
    }
    var str = "你好，請問您需要換什麼呢？\r\n";
    str += "#L0##i4000214# 換 #b樂豆點#k#l\r\n";
    str += "#L1##b樂豆點#k 換 #b#i4000214##l\r\n";
    cm.sendSimple( str );
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (select === -1) {
        select = selection;
    }

    switch (select){
        case (0):
            彩楓兌換樂豆點( selection,mode );
            break;
        case (1):
            樂豆點兌換彩楓( selection,mode );
            break;
    }
}

function 彩楓兌換樂豆點(selection,mode){
    var i = 1;
    if (status < i) {
        cm.dispose();
    } else if (status === i++) {
        var str = ""
        str += "要換多少樂豆點呢?\r\n";
        str += "#b一個#v4000214#可以兌換#r100#b點樂豆點#k\r\n";
        str += "請輸入要用幾個#i4000214#換樂豆 (一次最多兌換100個)"
        cm.sendGetNumber(str,1,1,100);
    } else if (status === i++) {
        select0 = selection;
        彩楓兌換樂豆需求道具[0][0][1] = select0;
        cm.sendYesNo(show(0,0,0,-select0*100,彩楓兌換樂豆需求道具[0]));
    } else if (status === i++) {
        if(buy(0,0,0,-select0*100,彩楓兌換樂豆需求道具[0]))
            cm.sendOk("兌換成功");
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function 樂豆點兌換彩楓(selection,mode){
    var i = 1;
    if (status < i) {
        cm.dispose();
    } else if (status === i++) {
        var str = ""
        str += "要換多少#i4000214#呢?\r\n";
        str += "#r100#b點樂豆可以換一個#v4000214##k\r\n";
	
        str += "請輸入要兌換幾個#i4000214#(一次最多兌換100個)"
        cm.sendGetNumber(str,1,1,100);
    } else if (status === i++) {
        select0 = selection;
        cm.sendYesNo(show(4000214,select0,0,select0*100,0));

    } else if (status === i++) {
        var 花費樂豆點 = select0*100;
        var 獲得道具 = 4000214;
        var 獲得數量 = select0;
	

        var str = "";
        if (100 < 花費樂豆點){
            str += "#r不足: 少 #e"+formatNumber(花費樂豆點-(100))+"#n點#k\r\n";
        }
		
		
        if (cm.canHold(獲得道具,獲得數量)==false && 獲得道具 != 0)
            str += "#r空間不足       : 無法獲得 #i"+獲得道具+"# #e"+獲得數量+"#n個";
        if(str != "") {
            //確認失敗，顯示缺少物品
            cm.sendOk(str);
        } else if (cm.getPlayer().modifyCSPoints(1, -花費樂豆點, true, false)) {
            cm.gainItem(獲得道具,獲得數量);
            FileoutputUtil.logToFile("logs/樂豆合成.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 合成道具:" + 獲得道具 + " 合成數量:" + 獲得數量 + "\r\n");
            cm.sendOk("兌換成功");
        } else {
            cm.sendOk("發生未知錯誤");
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}


function show(獲得道具, 獲得數量, 花費楓幣, 花費樂豆點, 花費道具陣列){
    var str = "";
    if(獲得道具 != 0 || 獲得數量!= 0){
        str += "#b獲得道具　　　  : #i" + 獲得道具 + ":##z"+獲得道具+"#\r\n";
        str += "#b獲得道具數量　  : " + 獲得數量 + "\r\n";
    }
    switch((花費楓幣<0)?-1:(花費楓幣==0)?0:(花費楓幣>0)?1:0){
        case 1:
            str += "#r花費楓幣　　　  : " + formatNumber(花費楓幣) + "\r\n";
            break;
        case -1:
            str += "#b獲得楓幣　　　  : " + formatNumber(-花費楓幣) + "\r\n";
            break;
        case 0:
    }
    switch((花費樂豆點<0)?-1:(花費樂豆點==0)?0:(花費樂豆點>0)?1:0){
        case 1:
            str += "#r花費 : " + formatNumber(花費樂豆點) + "\r\n";
            break;
        case -1:
            str += "#b獲得 : " + formatNumber(-花費樂豆點)+ "\r\n";
            break;
        case 0:
    }
    if (花費道具陣列!=0){
        //str += 花費道具陣列[0][0] + "\r\n";
        for(i=0;i<花費道具陣列.length;i++){
            str += "#r花費道具        : #v"+花費道具陣列[i][0]+"##z" + 花費道具陣列[i][0] +"# "+ 花費道具陣列[i][1]+ "個\r\n";
        }
    }
    str += "                                      #d#e是否確定購買？#k#n";
    return str ;
}

function buy(獲得道具,獲得數量,花費楓幣,花費樂豆點,花費道具陣列){
    var str = "";
    if (getPrice(1) < 花費樂豆點){
        str += "#r不足: 少 #e"+formatNumber(花費樂豆點-(getPrice(1)))+"#n點#k\r\n";
    }
    if (cm.getMeso() < 花費楓幣){
        str += "#r楓幣不足       : 少 #e"+formatNumber(花費楓幣-cm.getMeso())+"#n#k\r\n";
    }
    if (花費道具陣列!=0){
        for(i=0;i<花費道具陣列.length;i++){
            if( cm.haveItem( 花費道具陣列[i][0],花費道具陣列[i][1]) == false ){
                str += "#r道具不足       : #i"+花費道具陣列[i][0] +":#少 #e"+　(花費道具陣列[i][1]-cm.itemQuantity(花費道具陣列[i][0]))+"#n個\r\n";
            }
        }
    }
    if (cm.canHold(獲得道具,獲得數量)==false && 獲得道具 != 0)
        str += "#r空間不足       : 無法獲得 #i"+獲得道具+"# #e"+獲得數量+"#n個";

    if( str != "" ){
        //確認失敗，顯示缺少物品
        cm.sendOk( str );
        return false;
    }else{
        //確認成功，開始購買
        //扣除樂豆點
        gainPrice(1, -花費樂豆點);
        //扣除楓幣
        cm.gainMeso(-花費楓幣);
        //扣除裝備
        if (花費道具陣列!=0){
            for(i=0;i<花費道具陣列.length;i++){
                if(花費道具陣列[i][1]>32767){
                    for(k=1;k<花費道具陣列[i][1]/32767;k++){
                        cm.gainItem(花費道具陣列[i][0],-(32767));
                    }
                    cm.gainItem(花費道具陣列[i][0],-(花費道具陣列[i][1]%32767));
                }else{
                    cm.gainItem(花費道具陣列[i][0],-(花費道具陣列[i][1]));
                }
            }
        }
        //給予裝備
        if(獲得道具 != 0 && 獲得數量!= 0){
            cm.gainItem(獲得道具,獲得數量);
        }
        return true;
    }
}
function formatNumber(num, precision, separator) {
    var parts;
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
        num = Number(num);
        num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString();
        parts = num.split('.');
        parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
        return parts.join('.');
    }
    return NaN;
}