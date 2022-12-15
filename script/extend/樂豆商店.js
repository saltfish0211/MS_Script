
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var redeemList = [
    {
        name: "超 值 禮 包",
        options: [
            {
                name: "端午石板禮包",
                description: "內容物可點擊入內查看，販售至6/12 23:59",
                isBag: true,
                product: [
                    {
                        id: 1202287, 
                        isCustomEquip: true,
                        allStat: 100,
                        MAD: 100,
                        PAD: 100,
                        allStatPercentage: 12,
                        customNote: "+100全屬性、雙攻 12%全屬性",
                        count: 1
                    },
                    {
                        id: 2048760, 
                        count: 200
                    },
                    {
                        id: 常用道具.時裝自選潛能硬幣, 
                        count: 3
                    },
                    {
                        id: 常用道具.星力20強化卷, 
                        count: 2
                    },
                    {
                        id: 常用道具.追加1星100, 
                        count: 2
                    },
                    {
                        id: 常用道具.恢復卡,
                        count: 10
                    },
                    {
                        id: 常用道具.榮耀卷箱,
                        count: 10
                    },
                    {
                        id: 常用道具.進化晶片選擇卷, 
                        count: 20
                    },
                    {
                        id: 常用道具.大師附加方塊, 
                        count: 30
                    },
                ],
                price: 5999
            },
            {
                name: "霞光勳章大禮包",
                description: "50個" + maskItem(4319911),
                isBag: true,
                product: [
                    {
                        id: 4319911,
                        count: 50
                    },
                ],
                price: 2999
            },
            {
                name: "方塊大禮包A",
                description: "閃炫+結合方塊組合",
                isBag: true,
                product: [
                    {
                        id: 常用道具.閃炫方塊,
                        count: 100
                    },
                    {
                        id: 常用道具.結合方塊,
                        count: 100
                    },
                    {
                        id: 常用道具.霞光谷錢袋,
                        count: 10
                    },
                ],
                price: 499
            },
            {
                name: "方塊大禮包B",
                description: "附加+萌獸方塊組合",
                isBag: true,
                product: [
                    {
                        id: 常用道具.附加方塊,
                        count: 100
                    },
                    {
                        id: 常用道具.萌獸方塊,
                        count: 300
                    },
                    {
                        id: 常用道具.霞光谷錢袋,
                        count: 25
                    },
                ],
                price: 649
            },
            {
                name: "附加方塊大禮包",
                description: "很多附加方塊",
                isBag: true,
                product: [
                    {
                        id: 常用道具.附加方塊,
                        count: 300
                    },
                    {
                        id: 常用道具.霞光谷錢袋,
                        count: 50
                    },
                ],
                price: 1099
            },
            {
                name: "時裝潛能組合",
                description: "包含" + maskItem(4319921) + "與" + maskItem(4319922) + "的超值組合",
                isBag: true,
                product: [
                    {
                        id: 4319921,
                        count: 5
                    },
                    {
                        id: 4319922,
                        count: 300
                    },
                ],
                price: 9999
            },
            {
                name: "戰鬥機器人禮包",
                description: "新手推薦購買超值組合A",
                isBag: true,
                product: [
                    {
                        id: 1662072,
                        count: 1,
                        isCustomEquip: true,
                        allStat: 50,
                        MAD: 50,
                        PAD: 50,
                        ignorePDR: 20,
                        bossDamage: 20,
                        description: "+50全屬性 Boss傷害20% 無視防禦20%",
                        price: 1500
                    },
                    {
                        id: 常用道具.時裝自選潛能硬幣,
                        count: 3
                    },
                    {
                        id: 常用道具.真實1個,
                        count: 300
                    },
                    {
                        id: 常用道具.B卷箱,
                        count: 20
                    },
                ],
                price: 5999
            },
            {
                name: "酷咪圖騰禮包",
                description: "新手推薦購買超值組合B",
                isBag: true,
                product: [
                    {
                        id: 1202041,
                        count: 1,
                        isCustomEquip: true,
                        allStat: 100,
                        MAD: 100,
                        PAD: 100,
                        allStatPercentage: 20,
                        description: "+100全屬、雙攻 全屬性+20%",
                        price: 1500
                    },
                    {
                        id: 常用道具.時裝自選潛能硬幣,
                        count: 3
                    },
                    {
                        id: 常用道具.真實1個,
                        count: 300
                    },
                    {
                        id: 常用道具.B卷箱,
                        count: 20
                    },
                ],
                price: 5399
            },
            {
                name: "裝備強化組合",
                description: "包含" + maskItem(常用道具.星力20強化卷) + "與" + maskItem(常用道具.追加1星100) + "的超值組合",
                isBag: true,
                product: [
                    {
                        id: 常用道具.星力20強化卷,
                        count: 1
                    },
                    {
                        id: 常用道具.追加1星100,
                        count: 3
                    },
                    {
                        id: 常用道具.榮耀卷箱,
                        count: 50
                    },
                    {
                        id: 常用道具.恢復卡,
                        count: 50
                    },
                    {
                        id: 常用道具.白金槌子,
                        count: 300
                    }
                ],
                price: 10000
            },
        ]
    },
    {
        name: "#r霞 光 月 卡#k",
        options: [
            {
                product: 5429901,
                count: 1,
                description: "30天",
                period: 30,
                price: 500
            },
            {
                product: 5429902,
                description: "30天",
                count: 1,
                price: 2000,
                period: 30
            },
            {
                product: [
                    {
                        id: 5420008,
                        count: 1,
                        period: 30
                    },
                    {
                        id: 常用道具.椅子自選箱,
                        count: 1,
                    },
                    {
                        id: 常用道具.全日掉寶加倍,
                        count: 1,
                        period: 30
                    }
                ],
                isBag: true,
                name: "霞光谷高級服務票卷組合",
                description: "30日服務票卷",
                count: 1,
                price: 3000,
                period: 30
            },
            {
                product: [
                    {
                        id: 常用道具.全日經驗加倍,
                        count: 1,
                        period: 30
                    },
                    {
                        id: 4319915,
                        count: 3,
                    },
                    {
                        id: 常用道具.椅子自選箱,
                        count: 1,
                    },
                    {
                        id: 常用道具.騎寵自選箱,
                        count: 1,
                    },
                    {
                        id: 常用道具.字型自選箱,
                        count: 1,
                    },
                ],
                isBag: true,
                name: "經驗全日票卷組合",
                description: "30日經驗票卷",
                count: 1,
                price: 2399,
                period: 30
            },
        ],
    },
    {
        name: "卷 軸 強 化",
        options: [
            {
                product: 4319911,
                count: 1,
                price: 88
            },
            {
                product: 4319931,
                count: 1,
                price: 150
            },
            {
                product: 4319932,
                count: 1,
                price: 150
            },
            {
                product: 4319933,
                count: 1,
                price: 150
            },
            {
                product: 常用道具.X卷箱,
                count: 1,
                price: 100
            },
            {
                product: 常用道具.V卷箱,
                count: 1,
                price: 150
            },
            {
                product: 常用道具.B卷箱,
                count: 1,
                price: 250
            },
            {
                product: 常用道具.白金槌子,
                count: 1,
                price: 10
            },
            {
                product: 2591008,
                count: 1,
                price: 588
            }
        ],
    },
    {
        name: "實 用 道 具",
        options: [
            {
                product: 常用道具.全日經驗加倍,
                count: 1,
                period: 1,
                price: 50
            },
            {
                product: 2437563,
                count: 1,
                price: 1000
            }
        ]
    }, 
    {
        name: "蘋 果 大 獎",
        options: [
            {
                product: 2434340,
                count: 1,
                description: "使用後可自選航海師武器一把",
                price: 900
            },
            {
                product: 1113211,
                count: 1,
                description: "使用技能後產生護盾，提高打王生存率",
                price: 3000
            },
            {
                product: 1114402,
                count: 1,
                description: "使用技能後增加獲得經驗值（奧術之河地區）",
                price: 1500
            },
            {
                product: 1114400,
                description: "可以提升現在所在地圖燃燒階段，並且可以進一步用"+ maskItem(4319933) + "提升最大燃燒階段。",
                count: 1,
                price: 1500
            },
            {
                product: 1114401,
                count: 1,
                description: "降低自身能力增加獲得經驗值",
                price: 1000
            },
            {
                product: 1033000,
                count: 1,
                description: "使用技能後王進入無法行動狀態一段時間",
                price: 1500
            },
            {
                product: 1122296,
                count: 1,
                description: "抵擋死亡一次",
                price: 1500
            },
            {
                product: 1182158,
                count: 1,
                description: "無視BOSS施放的反盾、方向相反",
                price: 1000
            },
            {
                product: 1182136,
                count: 1,
                description: "召喚雷射協助攻擊\r\n#r天使破壞者使用時機率產生BUG，建議該職業不要購買#k",
                price: 1000
            },
            {
                product: 1032261,
                count: 1,
                description: "協助自動施放BUFF，類似寵物自動BUFF",
                price: 1000
            },
            {
                product: 1672075,
                count: 1,
                description: "最強畢業心臟",
                price: 1000
            },
        ]
    },
]
var selectedRedeem = null;
var selectedProduct;
var selectionNode = 0;
var cnt = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 3 && mode == 0) {
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
            var text = Logo + "歡迎來到樂豆商店，這裡可以購買許多商品。\r\n";
            for (var i = 0; i < redeemList.length; i++) {
                var item = redeemList[i];
                text += maskListNode(i, centerText(特效 + item.name + 特效, 7));
            }
            cm.sendNext(text);
        }
        else if (status == 1) {
            var text = "#b#e請選擇您要購買的商品\r\n";
            if (selection >= 0) {
                selectedRedeem = redeemList[selection];
            }
            for (var i = 0; i < selectedRedeem.options.length; i++) {
                var item = selectedRedeem.options[i];
                var count = item.count == null ? 1 : item.count;
                if(item.isBag){
                    text += maskListNode(i, maskTitle(item.name, item.price, true) + "\r\n");
                    text += maskDescription(item.description);
                }
                else{
                    text += maskListNode(i, maskTitle(maskItem(item.product) + "x" + count, item.price, false) + "\r\n");
                    text += maskItemDescription(item.description);
                }
            }
            cm.sendNext(text);
        }
        else if (status == 2) {
            if (selection >= 0) {
                var text = "#b#e請輸入要購買的數量";
                selectionNode = selection;
                selectedProduct = selectedRedeem.options[selectionNode];
                if(selectedProduct.isBag){
                    var text = "#d#e請確認包裹內容:\r\n";
                    for(var i=0;i<selectedProduct.product.length;i++){
                        text += maskItem(selectedProduct.product[i].id) + "x" + selectedProduct.product[i].count + "\r\n";
                        if(selectedProduct.product[i].description != null){
                            text += "#b#n物品說明:" + selectedProduct.product[i].description + "\r\n#d#e";
                        }
                    }
                    text += "#d#e每組"+selectedProduct.price+"樂豆點，要購買幾組呢？";
                }
                cm.sendGetNumber(text, 1, 1, cm.getPlayer().getCSPoints(1) / selectedProduct.price);
            }
            else {
                cm.sendOk("請確認您的物品充足。");
                cm.dispose();
            }

        }
        else if (status == 3) {
            cnt = selection;
            if (selection >= 0 && cm.getPlayer().getCSPoints(1) >= selectedProduct.price * cnt) {
                if(selectedProduct.isBag){
                    var text = "#d#e請確認包裹內容:\r\n";
                    for(var i=0;i<selectedProduct.product.length;i++){
                        text += maskItem(selectedProduct.product[i].id) + "x" + selectedProduct.product[i].count + "\r\n";
                    }
                    text += "#d#e確定要購買" + cnt + "組嗎？"+ alertText("\r\n賣出不能退回哦。");
                }
                else{
                    var text = "#d#e確定要購買" + maskItem(selectedProduct.product) + "x" + cnt*selectedProduct.count + "嗎？" + alertText("\r\n賣出不能退回哦。");
                }
                cm.sendYesNo(text);
            }
            else {
                cm.sendOk("請確認您的點數充足。");
                cm.dispose();
            }

        }
        else if (status == 4) {
            if (mode == 1) {
                var text ="";
                if(selectedProduct.isBag){
                    FileoutputUtil.logToFile("logs/樂豆商店.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 購買道具:" + selectedProduct.name + "x" + cnt + "\r\n");
                    text = "購買" + selectedProduct.name + "道具" + cnt + "組完畢，請確認您的背包。";
                }
                else{
                    FileoutputUtil.logToFile("logs/樂豆商店.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 購買道具:" + cm.getItemName(selectedProduct.product) + "x" + cnt + "\r\n");
                    text = "購買" + maskItem(selectedProduct.product) + "x" + selectedProduct.count + "道具" + cnt + "組完畢，請確認您的背包。";
                }
                doShopRedeem(selectedProduct);
                cm.sendOk(text);
                cm.dispose();
            }
            else {
                cm.sendOk(
                    "此次購買未完成。");
                cm.dispose();
            }

        }
    }
}

function maskTitle(title, price, isBag){
    return "#d#e" + (isBag ? "[超值套組]":"") + title + ": 每組" + price + "樂豆點";
}


function maskDescription(description){
    if(description == null){
        return null;
    }
    return "#b#n    包裝內含:" + description + "\r\n";
}

function maskItemDescription(description){
    if(description == null || description == "null"){
        return "";
    }
    return "#b#n    物品說明:" + description + "\r\n";
}


function doShopRedeem(product) {
    cm.getPlayer().modifyCSPoints(1,-1 * product.price * cnt);
    
    var itemArr = [];
    if(!product.isBag){
        itemArr.push(
            {
                id: product.product,
                count : product.count,
                period: product.period,
            }
        );
    }
    else{
        itemArr = product.product;
    }
    for(var n=0;n<cnt;n++){
        for(var i=0;i<itemArr.length;i++){
            var redeem = itemArr[i];
            redeem.count = redeem.count == null ? 1 : redeem.count;
            beanelsGetItem(redeem)
        }
    }
}