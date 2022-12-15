
load("scripts/霞光共通.js");

var placeList = [
    {
        name: "#r練 級 推 薦#k",
        comment: "#b#e霞光團隊整理專屬行程，新米照著練就對了！#k#n\r\n\r\n",
        splitWidth: 1,
        options: [
            {
                name: "[石巨人寺院] 石巨人的寺院4（推薦10~30）",
                id: 100040400,
            },
            {
                name: "[北部森林] 綠樹的藤條（推薦20~30）",
                id: 101030100,
            },
            {
                name: "[墮落城市地鐵] 2號線第2區段（30~50）",
                id: 103020410,
            },
            {
                name: "[沼澤] 寧靜的沼澤（推薦50~80）",
                id: 105010000,
            },
            {
                name: "[納希沙漠] 沉睡沙漠（推薦70~80）",
                id: 260020610,
            },
            {
                name: "[隱藏地圖] 閒人勿入（推薦80~90）",
                id: 261020401,
            },
            {
                name: "[神木村] 天空之巢Ⅱ（推薦90~105）",
                id: 240010600,
                star: 5,
            },
            {
                name: "[玩具城] 遺忘的迴廊（推薦105~120）",
                id: 220070400,
                star: 28,
            },
            {
                name: "[冰原雪域] 試煉的洞穴3（推薦120~135）",
                id: 211042200,
                star: 55,
            },
            {
                name: "[星光之塔] 2樓咖啡廳〈4〉（推薦135~160）",
                id: 103041119,
                star: 80,
            },
            {
                name: "[UFO 內部] 走廊 H01（推薦155~180）",
                id: 221030640,
                star: 140,
            },
            {
                name: "[黃昏的勇士之村] 被遺棄的挖掘地區 2（推薦180~200）",
                id: 273040100,
            },
        ]
    },
    {
        name: "經 典 村 莊",
        splitWidth: 3,
        options: [
            {
                name: "自由市場",
                id: 910000000,
            },
            {
                name: "技術村",
                id: 910001000,
            },
            {
                name: "美洲豹棲息地",
                id: 931000500
            },
            {
                name: "楓之島",
                id: 10000,
            },
            {
                name: "耶雷弗",
                id: 130000000,
            },
            {
                name: "維多利亞港",
                id: 104000000,
            },
            {
                name: "弓箭手村",
                id: 100000000,
            },
            {
                name: "勇士之村",
                id: 102000000,
            },
            {
                name: "魔法森林",
                id: 101000000,
            },
            {
                name: "鯨魚號",
                id: 120000100,
            },
            {
                name: "墮落城市",
                id: 103000000
            },
            {
                name: "奇幻村",
                id: 105000000,
            },
            {
                name: "瑞恩",
                id: 140000000,
            },
            {
                name: "水世界",
                id: 230000000,
            },
            {
                name: "玩具城",
                id: 220000000,
            },
            {
                name: "結婚小鎮",
                id: 680000000
            },
            {
                name: "艾靈森林",
                id: 300000000,
            },
            {
                name: "時間神殿",
                id: 270000000,
            },
            {
                name: "黃金海灘",
                id: 120040000,
            },
            {
                name: "夢幻主題公園",
                id: 222100000,
            },
            {
                name: "冰原雪域山脈",
                id: 211000000,
            },
            {
                name: "獅子王城",
                id: 211060000,
            },
            {
                name: "武陵桃園",
                id: 250000000,
            },
            {
                name: "黃金寺廟",
                id: 252000000,
            },
            {
                name: "納希沙漠",
                id: 260000000,
            },
            {
                name: "阿斯旺",
                id: 262000000,
            },
            {
                name: "神木村",
                id: 240000000,
            },
            {
                name: "埃德爾斯坦",
                id: 310000000,
            },
            {
                name: "機械墳墓",
                id: 310070000,
            },
            {
                name: "被破壞的弓箭手村",
                id: 271010000,
            },
            {
                name: "黃金地帶黑市",
                id: 401040000,
            },
            {
                name: "赫力席姆",
                id: 401000000,
            },
            {
                name: "萬神殿",
                id: 400000001,
            },
            {
                name: "被遺棄的露營地",
                id: 105300000
            },
            {
                name: "西門町",
                id: 740000000,
            },
            {
                name: "不夜城",
                id: 741000000,
            },
            {
                name: "克梅勒茲",
                id: 865010200
            },
            {
                name: "無名村",
                id: 450001000,
            },
            {
                name: "啾啾島",
                id: 450002000,
            },
            {
                name: "拉契爾恩",
                id: 450003000,
            },
            {
                name: "阿爾卡娜",
                id: 450005000,
            },
            {
                name: "魔菈斯",
                id: 450006130,
            },
            {
                name: "艾斯佩拉",
                id: 450007040,
            },
        ],
    },
    {
        name: "BOSS  傳 送",
        splitWidth: 3,
        options: [

            {
                name: "殘暴炎魔",
                id: 211042300,
            },
            {
                name: "闇黑龍王",
                id: 240050400,
            },
            {
                name: "皮卡啾",
                id: 270050000,
            },
            {
                name: "凡雷恩",
                id: 211061001,
            },
            {
                name: "阿卡伊農",
                id: 272030300,
            },
            {
                name: "希拉",
                id: 262030000,
            },
            {
                name: "梅格耐斯",
                id: 401060000,
            },
            {
                name: "西格諾斯",
                id: 271040000,
            },
            {
                name: "拉圖斯",
                id: 220080000
            },
            {
                name: "森蘭丸",
                id: 807300100,
            },
            {
                name: "培羅德",
                id: 863010000,
            },
            {
                name: "濃姬",
                id: 811000099,
            },
            {
                name: "露塔碧思",
                id: 105200000,
            },
            /*{
                name: "庫洛斯",
                id: 806300300,
            },*/
            {
                name: "史烏",
                id: 350060300,
            },
            {
                name: "戴米安",
                id: 105300303,
            },
            {
                name: "露希妲",
                id: 450003600,
            },
            {
                name: "威爾",
                id: 450007240,
            },
            {
                name: "真。希拉",
                id: 450011990,
            },
            {
                name: "頓凱爾",
                id: 450012200,
            },
            {
                name: "黑魔法師",
                id: 450012500,
            },
            {
                name: "#r賽蓮",
                id: 410000670,
            },
        ],
    },
    {
        name: "奧 術 之 河",
        splitWidth: 1,
        options: [
            {
                name: "[安息的洞穴]洞穴下側",
                id: 450001216,
            },
            {
                name: "[反轉城市]隱藏研究列車",
                id: 450014300
            },
            {
                name: "[反轉城市]隱藏地下列車",
                id: 450014310
            },
            {
                name: "[嚼嚼艾爾蘭]隱藏伊利亞特平原",
                id: 450015290
            },
            {
                name: "[嚼嚼艾爾蘭]隱藏蘑菇鳥森林",
                id: 450015280
            },
            {
                name: "[啾啾村]揪樂森林深處",
                id: 450002010,
            },
            {
                name: "[啾啾村]正圓森林1",
                id: 450002008,
            },
            {
                name: "[拉契爾恩市中心]顯露本色之處3",
                id: 450003420,
            },
            {
                name: "[阿爾卡娜]洞穴的下路",
                id: 450005430,
            },
            {
                name: "[阿爾卡娜]洞穴的下路深處1",
                id: 450005431,
            },
            {
                name: "[阿爾卡娜]五道洞穴的上路",
                id: 450005510,
            },
            {
                name: "[阿爾卡娜]五道洞穴",
                id: 450005500,
            },
            {
                name: "[賽拉斯]無限沉淪的深海4",
                id: 450016140,
            },
            {
                name: "[賽拉斯]星星被吞噬的深海1",
                id: 450016210,
            },
            {
                name: "[賽拉斯]星星被吞噬的深海4",
                id: 450016240,
            },
            {
                name: "[艾斯佩拉]鏡光大海2",
                id: 450007110,
            },
            {
                name: "[艾斯佩拉]鏡光大海3",
                id: 450007120,
            },
            {
                name: "[泰涅布利斯]虛空海浪3",
                id: 450009330,
            },
            {
                name: "[泰涅布利斯]苦痛迷宮內部5",
                id: 450011440,
            },
            {
                name: "[泰涅布利斯]世界終結之處1-5",
                id: 450012340,
            },
            {
                name: "[賽爾尼溫]王立圖書館第一區域",
                id: 410000700,
            },
            {
                name: "[賽爾尼溫]王立圖書館第四區域",
                id: 410000730,
            },
            {
                name: "[賽爾尼溫]燃燒的王立圖書館第一區域",
                id: 410000840,
            },
            {
                name: "[飯店阿爾克斯]不法之徒所支配的荒野2",
                id: 410003050,
            },
            {
                name: "[飯店阿爾克斯]沒有目的地的橫貫列車5",
                id: 410003190,
            },
        ],
    },
    {
        name: "美 景 私 藏",
        splitWidth: 2,
        options: [

            {
                name: "[鯨魚號]動力機房",
                id: 120000301,
            },
            {
                name: "[日本區]菇菇神社",
                id: 800000000,
            },
            {
                name: "[安息的洞穴]雨霧瀑布",
                id: 450001250,
            },
            {
                name: "[拉契爾恩時間塔]惡夢時間塔頂端",
                id: 450003600,
            },
            {
                name: "[瑞恩島]鏡子洞窟",
                id: 140030000,
            },
            {
                name: "[童話村]井口",
                id: 222000001,
            },
            {
                name: "[水世界]鯨魚島",
                id: 230010201,
            },
            {
                name: "[水世界]椰子森林",
                id: 230020201,
            },
            {
                name: "[精靈之林]櫻花處",
                id: 101050000,
            },
            {
                name: "[精靈之林]發光的洞穴之路",
                id: 101050100,
            },
            {
                name: "[精靈之林]精靈之島",
                id: 101050020,
            },
            {
                name: "[埃羅汀]森林深處內泉水流經之處",
                id: 101084400,
            },
            {
                name: "[神木村]九靈龍巢穴",
                id: 240040611,
            },
            {
                name: "[美男法師寺院]佛堂",
                id: 410000251,
            },
            {
                name: "[里斯托尼亞]尖塔",
                id: 410000352
            }
        ]
    },
]
var selectedRedeem = null;
var selectionNode = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {

        if (status >= 2 && mode == 0) {
            status = 0;
        }
        else if (mode == 1)
            status++;
        else if (mode == 0) {
            status--;
        }
        else {
            cm.dispose();
        }


        if (status == 0) {
            var text = Logo + "#b#e歡迎使用霞光傳送系統，請選擇想要去的地方。#k#n\r\n";
            for (var i = 0; i < placeList.length; i++) {
                var item = placeList[i];
                text += maskListNode(i, centerText(特效 + item.name + 特效, 7));
            }
            cm.sendNext(text);
        }
        else if (status == 1) {
            var text = "";
            if (placeList[selection].comment != null) {
                text += placeList[selection].comment;
            }
            else {
                text += "請選擇您要去的地方\r\n";
            }

            if (selection >= 0) {
                selectedCat = placeList[selection];

            }
            for (var i = 0; i < selectedCat.options.length; i++) {
                var item = selectedCat.options[i];
                var name = "#d#e";
                if (item.star != null) {
                    name += "#d【★" + item.star + "】#n";
                }
                name += item.name;
                if (item.log != null) {
                    if (cm.getPlayer().getCharacterSet(item.log + getToday()) >= item.maxTimes) {
                        name += "#r(" + cm.getPlayer().getCharacterSet(item.log + getToday()) + "/" + item.maxTimes + ")#d";
                    }
                    else {
                        name += "#g(" + cm.getPlayer().getCharacterSet(item.log + getToday()) + "/" + item.maxTimes + ")#d";
                    }
                }
                text += "#L" + i + "#" + name + "#l";

                for(var j = 0; j < (10 - name.length)*2; j++){
                    text += " ";
                }
                if ((i + 1) % selectedCat.splitWidth == 0) {
                    text += "\r\n";
                }
            }
            cm.sendNext(text);
        }
        else if (status == 2) {
            var text = "確定要傳送到" + selectedCat.options[selection].name + "嗎？";
            selectionNode = selection;
            cm.sendYesNo(text);

        }
        else if (status == 3) {
            if (mode == 1) {
                cm.warp(selectedCat.options[selectionNode].id)
                cm.dispose();
            }
            else {
                cm.sendOk(
                    "等你想去再來找我吧。");
                cm.dispose();
                return;
            }
        }
    }
}
//將文字置中
function centerText(text, whiteSpace) {
    for (var i = 0; i < whiteSpace; i++) {
        text = " " + text + " ";
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

function maskItem(itemCode) {
    return "#i" + itemCode + ":##t" + itemCode + "#";
}

function maskListNode(node, text) {
    return "#L" + node + "#" + text + "\r\n";
}
