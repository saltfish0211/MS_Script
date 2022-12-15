
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var redeemList = [
    {
        name: "超 值 禮 包",
        options: [
            {
                name: "情人節活動禮包",
                description: "內容物請見DC #d情人節活動#k 頻道，販售至3/20 23:59",
                isBag: true,
                product: [
                    {
                        id: 1662072,
                        isCustomEquip: true,
                        description: "BOSS傷害+20% 無視防禦+20% 全屬性+50 雙攻+50",
                        bossDamage: 20,
                        ignorePDR: 20,
                        allStat: 50,
                        allStatPercentage: 20,
                        MAD: 50,
                        PAD: 50,
                        count: 1
                    },
                    {
                        id: 常用道具.X卷箱,
                        count: 20,
                    },
                    {
                        id: 常用道具.B卷箱,
                        count: 5,
                    },
                    {
                        id: 常用道具.閃炫方塊,
                        count: 200,
                    },
                    {
                        id: 常用道具.附加方塊,
                        count: 200,
                    },
                    {
                        id: 常用道具.萌獸方塊,
                        count: 500,
                    },
                ],
                price: 5200
            },
            {
                name: "超值霞光徽章包",
                description: "50個" + maskItem(4319911) + "",
                isBag: true,
                product: [
                    {
                        id: 4319911,
                        count: 50
                    }
                ],
                price: 3000
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
                price: 10000
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
        ],
    },
    {
        name: "卷 軸 強 化",
        options: [
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
                price: 150
            },
            {
                product: 常用道具.V卷箱,
                count: 1,
                price: 250
            },
            {
                product: 常用道具.B卷箱,
                count: 1,
                price: 350
            },
        ],
    },
    {
        name: "蘋 果 大 獎",
        options: [
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
            }
        ]
    },
    {
        name: "娛 樂 專 區",
        options: [
            {
                product: 2437563,
                count: 1,
                price: 1000
            }
        ]
    }
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
                if(selectedProduct.price > cm.getPlayer().getCSPoints(1)){
                    cm.sendOk("您的樂豆點不夠喔。");
                    cm.dispose();
                }
                else{
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
    for(var i=0;i<itemArr.length;i++){
        var redeem = itemArr[i];

        redeem.count = redeem.count == null ? 1 : redeem.count;
        beanelsGetItem(redeem)
    }
}