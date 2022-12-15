
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);

load("scripts/霞光共通.js");
load("scripts/config/HairConfig.js");
load("scripts/config/FaceConfig.js");
var status = -1;
var faceStyle;
var hairStyle;
var isAngel;
var isZero;
var npcMode;
var isSecond = 0;
var isAndroid = 0;
var selectedCat = 0;
var selectedCatArray = [];


var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13);



function start() {
    isAngel = cm.getBeginner() == 6001;
    isZero = cm.getBeginner() == 10000;
    if (isAngel) {
        cm.askAngelicBuster();
    } else if (isZero) {
        cm.sendSimple("請選擇要接受變更的角色.#b\r\n\r\n#b#L0#神之子阿爾法#l\r\n#L1#神之子蓓塔#l\r\n#L2#神之子阿爾法 + 神之子蓓塔#l");
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {

    if (mode <= 0) {
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
            } else if (isZero) {
                isSecond = selection;
            }
            faceStyle  = isSecond == 1 ? cm.getPlayer().getSecondFace() : cm.getPlayerStat("FACE");
            hairStyle = isSecond == 1 ? cm.getPlayer().getSecondHair() : cm.getPlayerStat("HAIR");
            var str = "#b#e歡迎來到霞光整形系統。我可以為你做外型的更換，要做什麼服務呢？\r\n";
            str += maskListNode(1, "我要變換髮型");
            str += maskListNode(2, "我要變換臉型");
            str += maskListNode(6, "我要變換髮型（v238~v243，不支援混染）");
            str += maskListNode(7, "我要變換臉型（v238~v243，不支援混染）");
            str += maskListNode(8, "我要消除髮型混染");
            str += maskListNode(9, "我要消除瞳孔混染");
            str += maskListNode(3, "我要染髮");
            str += maskListNode(4, "我要變換膚色");
            str += maskListNode(5, "我要變換瞳孔顏色");
            str += maskListNode(11, "我要變換機器人髮型");
            str += maskListNode(12, "我要變換機器人臉型");
            str += maskListNode(16, "我要變換機器人髮型（v238~v243，不支援混染）");
            str += maskListNode(17, "我要變換機器人臉型（v238~v243，不支援混染）");
            str += maskListNode(13, "我要變換機器人髮色");
            str += maskListNode(14, "我要變換機器人膚色");
            str += maskListNode(15, "我要變換機器人瞳孔顏色");
            str += maskListNode(98, "使用代碼直接變更外型");
            str += maskListNode(99, "使用代碼直接變更機器人外型");
                cm.sendSimple(str);
            break;
        case 1:
            npcMode = selection;
            var text = "";
            if((selection > 10 && selection < 90) || selection == 99){
                var android = cm.getPlayer().getAndroid();
                if (android == null) {
                    cm.sendOk("需要帶著機器人！");
                    cm.dispose();
                    return;
                }
                faceStyle = cm.getAndroidStat("FACE");
                hairStyle = cm.getAndroidStat("HAIR");
                isAndroid = true;
            }
            switch (selection) {
                case 8:
                    cm.getPlayer().changeMixHairColor(true, -1, 0, 0);
                    cm.sendOk("完成。");
                    cm.dispose();
                    return;
                    break;
                case 9:
                    cm.setAvatar(Math.floor(cm.getPlayer().getFace() / 1000), isSecond == 1);
                    cm.sendOk("完成。");
                    cm.dispose();
                    return;
                    break;
                case 11: //機器人變髮
                case 1: //變髮
                    for(var i=0;i<hairStyleArray.length;i++){
                        text += maskListNode(i,maskSalonTitle(hairStyleArray[i]));
                        text += maskSalonDescription(hairStyleArray[i]);
                    }
                    cm.sendSimple(text);
                    break;
                case 6:
                    if(cm.getPlayer().getHairBaseColor() > -1){
                        cm.sendOk("您目前有設定髮型混染，請先將髮色染回純色。");
                        cm.dispose();
                        return;
                    }
                    else{
                        for(var i=0;i<newHairStyleArray.length;i++){
                            text += maskListNode(i,maskSalonTitle(newHairStyleArray[i]));
                            text += maskSalonDescription(newHairStyleArray[i]);
                        }
                        cm.sendSimple(text);
                    }
                    break;
                case 16:
                    for(var i=0;i<newHairStyleArray.length;i++){
                        text += maskListNode(i,maskSalonTitle(newHairStyleArray[i]));
                        text += maskSalonDescription(newHairStyleArray[i]);
                    }
                    cm.sendSimple(text);
                    break;
                case 12: //機器人整形
                case 2: //整形
                    for(var i=0;i<faceStyleArray.length;i++){
                        text += maskListNode(i,maskSalonTitle(faceStyleArray[i]));
                        text += maskSalonDescription(faceStyleArray[i]);
                    }
                    cm.sendSimple(text);
                    break;
                case 7:
                    if(cm.getPlayer().getFace() > 99999){
                        cm.sendOk("您目前有設定臉型混染，請先將瞳孔顏色染回純色。");
                        cm.dispose();
                        return;
                    }
                    else{
                        for(var i=0;i<newFaceStyleArray.length;i++){
                            text += maskListNode(i,maskSalonTitle(newFaceStyleArray[i]));
                            text += maskSalonDescription(newFaceStyleArray[i]);
                        }
                        cm.sendSimple(text);
                    }
                    break;
                case 17:
                    for(var i=0;i<newFaceStyleArray.length;i++){
                        text += maskListNode(i,maskSalonTitle(newFaceStyleArray[i]));
                        text += maskSalonDescription(newFaceStyleArray[i]);
                    }
                    cm.sendSimple(text);
                    break;
                case 13:
                case 3: //染髮
                    showDyeHair();
                    break;
                case 14: //機器人護膚
                case 4: //護膚
                    showSkin();
                    break;
                case 15: //機器人換瞳色
                case 5: //換瞳色
                    showEyeColor();
                    break;
                case 98: //機器人變髮
                case 99: //變髮
                    cm.sendGetNumber("請輸入想要替換的外型代碼。",10000,10000,99999);
                    break;
            }
            break;
        case 2:
            selectedCat = selection;
            switch (npcMode){
                case 11:
                case 1:
                    selectedCatArray = hairStyleArray[selectedCat].items;
                    showHair();
                    break;
                case 12:
                case 2:
                    selectedCatArray = faceStyleArray[selectedCat].items;
                    showFace();
                    break;
                case 16:
                case 6:
                    selectedCatArray = newHairStyleArray[selectedCat].items;
                    showHair();
                    break;
                case 17:
                case 7:
                    selectedCatArray = newFaceStyleArray[selectedCat].items;
                    showFace();
                    break;
                case 3:
                    setOutFit(selectedCatArray[selection], selectedCatArray[cm.getNumber()], "新髮型看起來怎麼樣呢？快去和朋友炫耀一下吧！");
                    break;
                case 13:
                    setOutFit(selectedCatArray[selection], selectedCatArray[cm.getNumber()], "恭喜，機器人的髮型已經換好囉！");
                    break;
                case 4:
                    setOutFit(selectedCatArray[selection], selectedCatArray[cm.getNumber()], "完成了,讓朋友們讚歎你的新膚色吧!");
                    break;
                case 14:
                    setOutFit(selectedCatArray[selection], selectedCatArray[cm.getNumber()], "恭喜，機器人的膚色已經換好囉！");
                    break;
                case 5:
                    setOutFit(selectedCatArray[selection], selectedCatArray[cm.getNumber()], "新臉型看起來怎麼樣呢？快去和朋友炫耀一下吧！");
                    break;
                case 15:
                    setOutFit(selectedCatArray[selection], selectedCatArray[cm.getNumber()], "恭喜，機器人的臉型已經換好囉！");
                    break;
                case 98: //變髮
                    setOutFit(selection, 5152050, "恭喜，你的造型已經換好囉！");
                    break;
                case 99: //變髮
                    setOutFit(selection, 5152050, "恭喜，機器人的造型已經換好囉！");
                    break;
            }
            break;
        case 3:
            switch (npcMode){
                case 6:
                case 1:
                    //cm.getPlayer().dropMessage(1, selection);
                    setOutFit( selectedCatArray[selection], selectedCatArray[cm.getNumber()], "新髮型看起來怎麼樣呢？快去和朋友炫耀一下吧！");
                    break;
                case 16:
                case 11:
                    //cm.getPlayer().dropMessage(1, selection);
                    setOutFit( selectedCatArray[selection], selectedCatArray[cm.getNumber()], "恭喜，機器人的髮型已經換好囉！");
                    break;
                case 7:
                case 2:
                        //cm.getPlayer().dropMessage(1, selection);
                    setOutFit( selectedCatArray[selection], selectedCatArray[cm.getNumber()], "新臉型看起來怎麼樣呢？快去和朋友炫耀一下吧！");
                    break;
                case 17:
                case 12:
                    //cm.getPlayer().dropMessage(1, selection);
                    setOutFit( selectedCatArray[selection], selectedCatArray[cm.getNumber()], "恭喜，機器人的臉型已經換好囉！");
                    break;

            }
        default:
            cm.dispose();
            break;
    }
}


function maskSalonDescription(salonCat){
    if(salonCat.description == null){
        return "";
    }
    var text = "    ";
    text+= "#b"+ salonCat.description;
    text+= "#k#n\r\n";
    return text;
}

function maskSalonTitle(salonCat) {
    var text = "";
    text += "#d#e";
    text+= salonCat.name + "#k#n\r\n";
    return text;
}


function showFace() {
    var ticketID = 5152050;
    var styleArray = new Array();
    for(var i = 0; i < selectedCatArray.length; i++) {
        var gStyle = selectedCatArray[i];
        styleArray.push(Math.floor(gStyle / 1000) * 1000 + gStyle % 100 + Math.floor(faceStyle % 1000 / 100) * 100);
    }
    styleArray = cm.getCanFace(styleArray);
    var msg =  "可以幫你把現在的臉型改變成新的樣子...我可以給你做整容手術。慢慢挑選你喜歡的臉吧";
    if(isAndroid){
        msg = "可以幫你的機器人改變臉型...慢慢挑選吧";
    }
    showSetAvatarDialog(ticketID, styleArray, styleArray, msg)
}

function showHair() {
    var ticketID = 5150043;
    var styleArray = new Array();
    for(var i = 0; i < selectedCatArray.length; i++) {
        var gStyle = selectedCatArray[i];
        styleArray.push(Math.floor(gStyle / 10) * 10 + hairStyle % 10);
    }
    styleArray = cm.getCanHair(styleArray);
    var msg = "可以幫你把現在的髮型改變成新的樣子.對現在的髮型不會感到厭煩嗎？可以幫你變換髮型.慢慢挑選想要變換的髮型吧";
    if(isAndroid){
        msg = "可以幫你的機器人改變髮型...慢慢挑選吧";
    }
    showSetAvatarDialog(ticketID, styleArray, styleArray, msg)
}

function showDyeHair(){
    var ticketID = 5150043;
    var currentColor = Math.floor(hairStyle / 10) * 10;
    var styleArray = new Array();
    styleArray = [];
    for (var i = 0; i < 8; i++) {
        styleArray[i] = currentColor + i;
    }
    styleArray = cm.getCanHair(styleArray);
    var msg = "可以幫你把現在的髮型改變成新的樣子.對現在的髮型不會感到厭煩嗎？可以幫你變換髮型.慢慢挑選想要變換的髮型吧";
    if(isAndroid){
        msg = "可以幫你的機器人改變髮型...慢慢挑選吧";
    }
    showSetAvatarDialog(ticketID, styleArray, msg)
}


function showEyeColor(){
    var ticketID = 5152100;
    var styleArray = new Array();
    var currentColor = Math.floor(faceStyle / 1000) * 1000 + faceStyle % 100;
    cm.getPlayer().dropMessage(6, "目前臉型:"+ faceStyle);
    cm.getPlayer().dropMessage(6, "基礎臉型:"+ currentColor);
    styleArray = [];
    for (var i = 0; i < 8; i++) {
        cm.getPlayer().dropMessage(6, parseInt(faceStyle / 1000) * 1000 + faceStyle % 100 + i * 100);
        styleArray[i] = parseInt(faceStyle / 1000) * 1000 + faceStyle % 100 + i * 100;
    }
    styleArray = cm.getCanFace(styleArray);
    var msg = "可以幫你把現在的臉型改變成新的樣子.對現在的臉型不會感到厭煩嗎？可以幫你變換臉型.慢慢挑選想要變換的臉型吧";
    if(isAndroid){
        msg = "可以幫你的機器人改變臉型...慢慢挑選吧";
    }
    showSetAvatarDialog(ticketID, styleArray, msg)
}



function showSkin(){
    var ticketID = 5153013;
    var msg = "可以在我們店裡看到使用特殊開發機器管理皮膚後的樣子。你想要哪種皮膚呢？";
    showSetAvatarDialog(ticketID, skin, msg)
}


function showSetAvatarDialog(ticketID, styleArray, msg){
    if (styleArray.length <= 0) {
        cm.sendOk("沒有可更換的造型");
        cm.dispose();
        return;
    }
    selectedCatArray = styleArray;
    if(isAndroid){
        cm.askAndroid(ticketID, styleArray, msg);
    }
    else if (isSecond == 2) {
        cm.askAvatarZero(ticketID, styleArray, styleArray, msg);
    } else {
        cm.askAvatar(msg, styleArray, ticketID, isSecond != 0);
    }

}


function setOutFit(selection,itemId, successMsg){
    
    if(isAndroid){
        if (cm.setAvatarA(selection) == -1) {
            cm.sendOk("出現未知錯誤。");
            cm.dispose();
            return;
        }
        else{
            cm.sendOk(successMsg);
            cm.dispose();
            return;
        }
    }
    else if (cm.setAvatar(selection, isSecond == 1) == -1 || (isSecond == 2 && cm.setAvatar(itemId, isSecond == 2) == -1)) {
        cm.sendOk("出現未知錯誤。");
        cm.dispose();
        return;
    }
    else{
        cm.sendOk(successMsg);
        cm.dispose();
        return;
    }
}