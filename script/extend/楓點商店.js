
load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var redeemList = [
    {
        name: "抽 獎 專 區",
        options: [
            {
                product: 5060029,
                count: 1,
                price: 1000
            },
            {
                product: 5060028,
                count: 1,
                price: 1000
            },
            {
                product: 5060025,
                count: 1,
                price: 1000
            },
            {
                product: 5060048,
                count: 1,
                price: 1000
            },
            {
                product: 5537000,
                count: 1,
                price: 2000
            },
            {
                product: 2630018,
                count: 1,
                price: 5000
            },
            {
                product: 2028393,
                count: 1,
                price: 3000
            },
            {
                product: 2028394,
                count: 1,
                price: 3000
            },
            {
                product: 5060049,
                count: 1,
                price: 3000
            },
            {
                product: 5060057,
                count: 1,
                price: 5000
            },
        ]
    },
    {
        name: "強 化 道 具",
        options: [
            {
                product: 5062017,
                count: 1,
                price: 300
            },
            {
                product: 5062020,
                count: 1,
                price: 500
            },
            {
                product: 5062021,
                count: 1,
                price: 250
            },
            {
                product: 5062019,
                count: 1,
                price: 250
            },
            {
                product: 5062026,
                count: 1,
                price: 1500
            },
            {
                product: 5062500,
                count: 1,
                price: 1500
            },
            {
                product: 5062800,
                count: 1,
                price: 500
            },
            {
                product: 2702003,
                count: 1,
                price: 2000
            },
            {
                product: 5064502,
                count: 1,
                price: 2000
            },
            {
                product: 5192000,
                count: 1,
                price: 1000
            },
            {
                product: 常用道具.萌獸方塊,
                count: 1,
                price: 500
            },
            {
                product: 2048760,
                count: 1,
                price: 2000
            },
            {
                product: 2430755,
                count: 1,
                price: 2000
            },
            {
                product: 常用道具.傳說卷軸,
                count: 1,
                price: 12000
            }
        ],
    },
    {
        name: "分 身 必 買",
        options: [
            {
                product: 2431305,
                count: 1,
                price: 10
            },
            {
                product: 2431938,
                count: 1,
                price: 500
            },
            {
                product: 2431960,
                count: 1,
                price: 1000
            },
            {
                product: 常用道具.商城加倍200,
                count: 1,
                price: 1000
            },
            {
                product: 2431848,
                count: 1,
                price: 10
            },
            {
                product: 5530241,
                count: 1,
                price: 50
            },
            {
                product: 5530242,
                count: 1,
                price: 50
            },
            {
                product: 5530243,
                count: 1,
                price: 50
            },
            {
                product: 5530244,
                count: 1,
                price: 50
            },
            {
                product: 2432845,
                count: 1,
                price: 100
            },
            {
                product: 1202193,
                count: 1,
                price: 200
            },
        ]
    },
    {
        name: "實 用 雜 物",
        options: [
            {
                product: 4319914,
                count: 1,
                price: 300000
            },
            {
                product: 5064100,
                count: 1,
                price: 1000
            },
            {
                product: 2530000,
                count: 1,
                price: 500
            },
            {
                product: 2001556,
                count: 100,
                price: 10
            },
            {
                product: 2430030,
                count: 1,
                price: 500
            },
            {
                product: 2590012,
                count: 1,
                price: 500
            },
            {
                product: 1802653,
                count: 1,
                price: 100
            },
            {
                product: 2435516,
                count: 1,
                price: 500
            },
            {
                product: 2433964,
                count: 1,
                price: 100
            },
            {
                product: 2430441,
                count: 1,
                price: 500
            },
            {
                product: 5520000,
                count: 1,
                price: 1000
            },
            {
                product: 5520001,
                count: 1,
                price: 2000
            },
            {
                product: 2892000,
                count: 1,
                price: 1000
            },
            {
                product: 5520002,
                count: 1,
                price: 3000
            },
            {
                product: 5520003,
                count: 1,
                price: 2000
            }, 
            {
                product: 2438159,
                count: 1,
                price: 1000
            },
            {
                product: 2300001,
                count: 1000,
                price: 500
            },
            {
                product: 4310086,
                count: 1,
                price: 2500
            },
            {
                product: 2190000,
                count: 1,
                price: 10
            }
        ]
    },
    {
        name: "外 觀 專 區",
        options: [
            
            {
                product: 2432946,
                count: 1,
                price: 2500
            },
            {
                product: 5152300,
                count: 1,
                price: 2500
            },
            {
                product: 5680531,
                count: 1,
                price: 100
            },
            {
                product: 5680733,
                count: 1,
                price: 100
            },
            {
                product: 5860000,
                count: 1,
                price: 3000
            },
            {
                product: 5860001,
                count: 1,
                price: 1500
            },
            {
                product: 5062400,
                count: 1,
                price: 50
            },
            {
                product: 5062402,
                count: 1,
                price: 50
            },
            {
                product: 5062404,
                count: 1,
                price: 1000
            },
        ]  
    },
    {
        name: "尬 廣 喇 叭",
        options: [
            {
                product: 5072000,
                count: 10,
                price: 100
            },
            {
                product: 5073000,
                count: 10,
                price: 100
            },
            {
                product: 5074000,
                count: 10,
                price: 100
            },
            {
                product: 5076000,
                count: 10,
                price: 150
            },
            {
                product: 5390010,
                count: 10,
                price: 3000
            },
            {
                product: 5390006,
                count: 10,
                price: 3000
            },
            {
                product: 5390005,
                count: 10,
                price: 3000
            },
            {
                product: 5390018,
                count: 10,
                price: 3000
            },
            {
                product: 5390019,
                count: 10,
                price: 3000
            },
            {
                product: 5390020,
                count: 10,
                price: 3000
            },
            {
                product: 5390022,
                count: 10,
                price: 3000
            },
            {
                product: 5390003,
                count: 10,
                price: 5000
            },
            {
                product: 5390004,
                count: 10,
                price: 5000
            },
            {
                product: 5390007,
                count: 10,
                price: 5000
            },
            {
                product: 5390008,
                count: 10,
                price: 5000
            },
            {
                product: 5077000,
                count: 10,
                price: 5000
            },
        ]
    },
    {
        name: "各 職 副 武",
        options: [
            {
                product: 1352003,
                count: 1,
                price: 100
            },
            {
                product: 1352103,
                count: 1,
                price: 100
            },
            {
                product: 1352202,
                count: 1,
                price: 100
            },
            {
                product: 1352212,
                count: 1,
                price: 100
            },
            {
                product: 1352222,
                count: 1,
                price: 100
            },
            {
                product: 1352232,
                count: 1,
                price: 100
            },
            {
                product: 1352242,
                count: 1,
                price: 100
            },
            {
                product: 1352252,
                count: 1,
                price: 100
            },
            {
                product: 1352262,
                count: 1,
                price: 100
            },
            {
                product: 1352272,
                count: 1,
                price: 100
            },
            {
                product: 1352282,
                count: 1,
                price: 100
            },
            {
                product: 1352292,
                count: 1,
                price: 100
            },
            {
                product: 1352303,
                count: 1,
                price: 100
            },
            {
                product: 1352403,
                count: 1,
                price: 100
            },
            {
                product: 1352503,
                count: 1,
                price: 100
            },
            {
                product: 1352604,
                count: 1,
                price: 100
            },
            {
                product: 1352703,
                count: 1,
                price: 100
            },
            {
                product: 1352803,
                count: 1,
                price: 100
            },
            {
                product: 1352813,
                count: 1,
                price: 100
            },
            {
                product: 1352823,
                count: 1,
                price: 100
            },
            {
                product: 1352902,
                count: 1,
                price: 100
            },
            {
                product: 1352912,
                count: 1,
                price: 100
            },
            {
                product: 1352922,
                count: 1,
                price: 100
            },
            {
                product: 1352932,
                count: 1,
                price: 100
            },
            {
                product: 1352942,
                count: 1,
                price: 100
            },
            {
                product: 1352952,
                count: 1,
                price: 100
            },
            {
                product: 1352962,
                count: 1,
                price: 100
            },
            {
                product: 1352972,
                count: 1,
                price: 100
            },
            {
                product: 1353004,
                count: 1,
                price: 100
            },
            {
                product: 1353103,
                count: 1,
                price: 100
            },
            {
                product: 1353203,
                count: 1,
                price: 100
            },
            {
                product: 1099009,
                count: 1,
                price: 100
            },
            {
                product: 1353703,
                count: 1,
                price: 100
            },
            {
                product: 1354003,
                count: 1,
                price: 100
            },
            {
                product: 1354013,
                count: 1,
                price: 100
            },
            {
                product: 1352863,
                count: 1,
                price: 100
            },
            {
                product: 1353603,
                count: 1,
                price: 100
            },
            {
                product: 1353803,
                count: 1,
                price: 100
            },
            {
                product: 1353503,
                count: 1,
                price: 100
            }
        ]
    },
    {
        name: "點 裝 副 武",
        options: [
            {
                product: 1342069,
                count: 1,
                price: 100
            },
            {
                product: 1352295,
                count: 1,
                price: 100
            },
            {
                product: 1354009,
                count: 1,
                price: 100
            },
            {
                product: 1352869,
                count: 1,
                price: 100
            },
            {
                product: 1353209,
                count: 1,
                price: 100
            }
        ]
    },
]
var selectedRedeem = null;
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
        if (status >= 4 && mode == 0) {
            cm.sendOk("什麼？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else if (mode == 0) {
            status--;
        }
        else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            var text = Logo + "歡迎來到楓點商店，這裡可以購買許多商品。\r\n";
            for (var i = 0; i < redeemList.length; i++) {
                var item = redeemList[i];
                text += maskListNode(i, centerText(特效 + item.name + 特效, 7));
            }
            cm.sendNext(text);
        }
        else if (status == 1) {
            var text = "請選擇您要購買的商品\r\n";
            if (selection >= 0) {
                selectedRedeem = redeemList[selection];
            }
            for (var i = 0; i < selectedRedeem.options.length; i++) {
                var item = selectedRedeem.options[i];
                var upgradeText = "";
                if (item.price > 0) {
                    upgradeText += maskCount(item.price) + "楓點";
                }
                var count = item.count == null ? 1 : item.count;
                text += maskListNode(i, "使用" + upgradeText + "購買" + (item.fakeProduct != null ? maskItem(item.fakeProduct) : maskItem(item.product)) + "x" + count);
            }
            cm.sendNext(text);
        }
        else if (status == 2) {
            if (selection >= 0) {
                var text = "請輸入要兌換的數量";
                selectionNode = selection;
                if(selectedRedeem.options[selectionNode].fakeProduct != null){
                    text += "，優惠商品每人限購一組。";
                    cm.sendGetNumber(text, 1, 1, 1);
                }
                else{
                    cm.sendGetNumber(text, 1, 1, cm.getPlayer().getCSPoints(2) / selectedRedeem.options[selectionNode].price);
                }
            }
            else {
                cm.sendOk("請確認您的物品充足。");
                cm.dispose();
                return;
            }

        }
        else if (status == 3) {
            cnt = selection;
            var count = selectedRedeem.options[selectionNode].count == null ? 1 : selectedRedeem.options[selectionNode].count;
            if(count * cnt >= 30000){
                cm.sendOk("單次購買商品數量不能超過30000，請減少購買組數後再試。");
                cm.dispose();
                return;
            }
            else if (selection >= 0 && cm.getPlayer().getCSPoints(2) >= selectedRedeem.options[selectionNode].price * cnt) {
                var text = "確定要購買" + (selectedRedeem.options[selectionNode].fakeProduct != null ? maskItem(selectedRedeem.options[selectionNode].fakeProduct) : maskItem(selectedRedeem.options[selectionNode].product)) + "x" + cnt + "嗎？" + alertText("\r\n賣出不能退回哦。");
                cm.sendYesNo(text);
            }
            else {
                cm.sendOk("請確認您的點數充足。");
                cm.dispose();
                return;
            }

        }
        else if (status == 4) {
            if (mode == 1) {
                FileoutputUtil.logToFile("logs/楓點商店.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 合成道具:" + cm.getItemName(selectedRedeem.options[selectionNode].product) + "x" + cnt + "\r\n");
                doShopRedeem(selectedRedeem.options[selectionNode]);
                cm.sendOk(
                    "購買" + (selectedRedeem.options[selectionNode].fakeProduct != null ? maskItem(selectedRedeem.options[selectionNode].fakeProduct) : maskItem(selectedRedeem.options[selectionNode].product)) + "完畢，請確認您的背包。");
                cm.dispose();
                return;
            }
            else {
                cm.sendOk(
                    "此次購買未完成。");
                cm.dispose();
                return;
            }

        }
    }
}


function doShopRedeem(redeem) {
    var count = redeem.count == null ? 1 : redeem.count;
    cm.getPlayer().modifyCSPoints(2,-1 * redeem.price * cnt);
    
    if (redeem.period != null) {
        cm.gainItem(redeem.product, 1, redeem.period);
    }
    else{
        cm.gainItem(redeem.product, count * cnt);
    }
}