/* global cm */
load("scripts/霞光共通.js");

var rentItem = [
	{
		id: 1012041,
		isCustomEquip: true,
		star: 5,
		count: 1
	},
	{
		id: 1022090,
		isCustomEquip: true,
		star: 5,
		count: 1
	},
	{
		id: 1152127,
		isCustomEquip: true,
		PAD: 25,
		MAD: 25,
		star: 8,
		customNote: "雙攻+25 8星",
		count: 1
	},
	{
		id: 1132243,
		isCustomEquip: true,
		star: 12,
		customNote: "全屬12%",
		potential1: 30086,
		potential2: 20086,
		potential3: 20086,
		count: 1
	},
	{
		id: 1122264,
		isCustomEquip: true,
		star: 12,
		customNote: "全屬12%",
		potential1: 30086,
		potential2: 20086,
		potential3: 20086,
		count: 1
	},
	{
		id: 1032220,
		isCustomEquip: true,
		star: 12,
		customNote: "全屬12%",
		potential1: 30086,
		potential2: 20086,
		potential3: 20086,
		count: 1
	},
	{
		id: 1113072,
		isCustomEquip: true,
		star: 12,
		customNote: "全屬12%",
		potential1: 30086,
		potential2: 20086,
		potential3: 20086,
		count: 1
	},
	{
		id: 1114330,
		count: 1,
	},
	{
		id: 1114330,
		count: 1,
	},
	{
		id: 1114330,
		count: 1,
	},
	{
		id: 1114330,
		count: 1,
	},
	{
		id: 2439902,
		count: 100,
	},
	{
		id: 2430192,
		count: 1,
	},
	{
		id: 1672080,
		count: 1,
	},
	{
		id: 1662111,
		count: 1,
	},
	{
		id: 1202193,
		count: 1,
	},
	{
		id: 1113220,
		count: 1,
	},
	{
		id: 2000054,
		count: 1,
	},
	{
		id: 5000641,
		isPet: true,
		count: 1
	},
	{
		id: 5000642,
		isPet: true,
		count: 1
	},
	{
		id: 5000643,
		isPet: true,
		count: 1
	},

]
var status = -1;
function start() {
    action(1, 0, 0);
}

var price = 5000;
var selectionNode = 0;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }else {
        if (status >= 0 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    var text = "";
    if (status == 0) {
		text = "#d#e歡迎使用租借裝備，這裡可以取得對練級路程有幫助的裝備，只需要花1000楓點，確定要使用嗎？可以取得以下道具：#n"+ "\r\n";
		for(var i=0;i<rentItem.length;i++){
			text+= "#b" + maskItem(rentItem[i].id) + "x" + rentItem[i].count + "\r\n";
			text+= maskItemDescription(rentItem[i]);
		}
        cm.sendYesNo(text);
    }
	else if (status == 1){
		if(cm.getPlayer().getCSPoints(2) < 1000){
			cm.sendSimple("請確認楓點充足。");
			cm.dispose();
		}
		else if(cm.getSpace(1) < rentItem.length){
			cm.sendSimple("請確認空間充足。");
			cm.dispose();
		}
		else{
			cm.getPlayer().modifyCSPoints(2, -1000);
			var result = doItemReward(rentItem);
			cm.sendSimple("領取成功，歡迎繼續支持。");
			cm.dispose();
			return;
		}
	}
}


function doItemReward(reward) {
    for (var i = 0; i < reward.length; i++) {
        var item = reward[i];
        if (item.isCustomEquip == true) {
            var toDrop = cm.getNewEquip(item.id); // 生成一個Equip類       
            if (item.star != null) {
                toDrop.setStarForceLevel(item.star); //裝備星力
            }
            if (item.potential1 != null) {
                toDrop.setPotential1(item.potential1); //裝備潛能1
            }
            if (item.potential2 != null) {
                toDrop.setPotential2(item.potential2); //裝備潛能2
            }
            if (item.potential3 != null) {
                toDrop.setPotential3(item.potential3); //裝備潛能3
            }
            if (item.PAD != null) {
                toDrop.setPad(item.PAD); //裝備潛能3
            }
            if (item.MAD != null) {
                toDrop.setMad(item.MAD); //裝備潛能3
            }
            if (item.mvpItem != null){
                toDrop.setMvpEquip(item.mvpItem);
            }
            if (item.tuc != null){
                toDrop.setRestUpgradeCount(item.tuc);
            }
            if (item.period != null){
                toDrop.setExpiration(cm.getCurrentTime() + (item.period * 24 * 60 * 60 * 1000))
            }
            toDrop.initState(false);
            cm.addFromDrop(cm.getC(), toDrop, false)
        }
        else if (item.isPet == true) {
            cm.gainPetItem(item.id, 1);
        }
        else if (item.period != null) {
            cm.gainItemPeriod(item.id, item.count, item.period);
        }
        else {
            cm.gainItem(item.id, 1 * item.count);
        }
    }
    return {
        success: true,
        text: "領取["+reward.name+"]獎勵成功。\r\n"
    };
}

function maskItemDescription(item){
    var text = "";
    if(item.isCustomEquip){
        text+= "#b裝備素質：";
        if(item.star != null){
            text+= " 星力:" + item.star + "星";
        }
    }
    if(item.customNote != null){
        text+= " #b" + item.customNote;
    }
    if(item.period != null){
        text += " 期限: " + item.period + "天";
    }
    text+= "#k#n\r\n";
    return text;
}