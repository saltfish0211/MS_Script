
load("scripts/Polyfill.js");

//一些自己會用到的sdk
var Logo = "";//"     #fEffect/BasicEff/DoggoLogo/0#\r\n";
var 特效 = "#fEffect/CharacterEff/1082312/2/0#";
var colorSnippet = {
    RED: "#r",
    BLUE: "#b",
    GREEN: "#g",
    PURPLE: "#d",
    BLACK: "#k"
}



//將文字置中
function centerText(text, whiteSpace) {
    for (var i = 0; i < whiteSpace; i++) {
        text = " " + text + " ";
    }
    return text;
}
//將文字補滿指定長度
function fillPadding(text, whiteSpace) {
    for (var i = 0; i < whiteSpace - text.length; i++) {
        text = text + " ";
    }
    return text;
}
//將文字變成紅色粗體
function alertText(text) {
    return "#r#e" + text + "#n#k";
}
//將楓幣轉成文字單位
function maskCount(count) {
    if (count > 100000000) {
        return count / 100000000 + "億"
    }
    if (count > 10000) {
        return count / 10000 + "萬"
    }
    return count;
}

function maskPrizeStatus(id) {
    var isTake = cm.getPlayer().getCharacterSet(id);
    if (isTake > 0) {
        return "#r(已領取)#k";
    }
    else {
        return "#g(未領取)#k";
    }
}


function maskItem(itemCode) {
    return "#i" + itemCode + ":# #t" + itemCode + "#";
}

function maskListNode(node, text) {
    return "#L" + node + "#" + text + "#l\r\n";
}

function maskListNodeWithoutRN(node, text) {
    return "#L" + node + "#" + text + "#l";
}

//隨機回傳陣列的其中一個道具
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }


//檢查身上是否有某個陣列的道具
function itemCheck(requirements, cnt) {
    var node = true;
    for (var i = 0; i < requirements.length; i++) {
        var item = requirements[i];
        if (!cm.haveItem(item.id, item.count * cnt)) {
            node = false;
        }
    }
    return node;
}

function mesoCheck(meso){
    var node = true;
    if (requiredMeso > 0 && cm.getMeso() < meso) {
        node = false;
    }
    return node;
}

function getToday(){
    return new Date().getFullYear() + "/" + ((new Date()).getMonth() + 1) + "/" + new Date().getDate();
}

function beanelsGetItem(item){
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
        if (item.ignorePDR != null){
            toDrop.setIgnorePDR(item.ignorePDR);
        }
        if (item.totalDamage != null){
            toDrop.setTotalDamage(item.totalDamage);
        }
        if (item.bossDamage != null){
            toDrop.setBossDamage(item.bossDamage);
        }
        if (item.allStatPercentage != null){
            toDrop.setAllStat(item.allStatPercentage);
        }
        if (item.allStat != null){
            toDrop.setStr(item.allStat);
            toDrop.setInt(item.allStat);
            toDrop.setDex(item.allStat);
            toDrop.setLuk(item.allStat);
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

function checkIfCanHold(itemArray){
    var requireSpaces = [0,0,0,0,0,0];
    for(var i=0;i<itemArray.length;i++){
        var item = itemArray[i];
        var cat = Math.floor(item.id / 1000000);
        if(cat > 0){
            requireSpaces[cat-1] ++;
        }
    }
    var haveSpace = true;
    for(var i=0;i<6;i++){
        if(cm.getSpace(i+1) < requireSpaces[i]){
            haveSpace = false;
        }
    }
    return haveSpace;
}


function checkAllCharacterSet(log ,time){
    var cantEnterMemberText = null;
    if(cm.getPlayer().getParty() == null){
        return null;
    }
    var party = cm.getPlayer().getParty().getMemberList();
    for (var i =0;i< party.length; i++) {
        var partyCharacter = party[i];
        var player = partyCharacter.getChr();
        //player.dropMessage(6, "目前log:" + log + "次數為:"+player.getCharacterSet(log) + "限制為:" + time + "是否超限:" + (player.getCharacterSet(log) >= time))
        if (player == null) {
            continue;
        }
        if(player.getCharacterSet(log) >= time && !player.isAdmin()){
            if(cantEnterMemberText == null){
                cantEnterMemberText = player.getName();
                //player.dropMessage(6, "超出進場限制:" + cantEnterMemberText)
            }
            else{
                cantEnterMemberText += "," + player.getName();
                //player.dropMessage(6, "超出進場限制:" + cantEnterMemberText)
            }
        }
    }

    return cantEnterMemberText;
}
function gainMembersCharacterLog(log ,time){
    if(cm.getPlayer().getParty() == null){
        return 0;
    }
    var party = cm.getPlayer().getParty().getMemberList();
    for (var i =0;i< party.length; i++) {
        var partyCharacter = party[i];
        var player = partyCharacter.getChr();
        if (player == null) {
            continue;
        }
        player.setCharacterSet(log, player.getCharacterSet(log) + time);
    }
}