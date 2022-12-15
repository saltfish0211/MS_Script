

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");
var redeemList = [
    {
        catId: 4001126,
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2439279,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2432845,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 5044010,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 250
                    }
                ],
                product: 2048203,//完美附加印章
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 150
                    }
                ],
                product: 2049512,//完美印章
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2049417, //特殊賦予捲
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 60
                    }
                ],
                product: 2048307, //特殊賦予捲
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2450064,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    },
                    {
                        id: 4001832,
                        count: 6000
                    },
                ],
                product: 2431048,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 500
                    },
                    {
                        id: 4001832,
                        count: 10000
                    },
                ],
                product: 2631487,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 15
                    }
                ],
                product: 2711012, //工匠方塊
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2048716, //強力輪迴星火
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 250
                    }
                ],
                product: 2435719, //核心寶石
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 500
                    }
                ],
                product: 2049370, //12星捲
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 1000
                    },
                ],
                product: 1190005, //狂楓心能源
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 100
                    }
                ],
                product: 2023125,//終極攻擊藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 100
                    }
                ],
                product: 2023127,//終極魔力藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2023126,//終極加速藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2023128,//終極經驗藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 300
                    }
                ],
                product: 2003550,//終極經驗藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 150
                    }
                ],
                product: 2049512,//完美印章
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 2023660,//聯盟之力階段3
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2023632,//[優質]深海釣魚場料理
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 2022245,//心跳停止糖
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 10
                    }
                ],
                product: 2022025,//加量章魚燒
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 10
                    }
                ],
                product: 2022027,//雙份日式炒麵
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2004009,//提升10階段力量的藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2004039,//提升10階段敏捷的藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2004059,//提升10階段智力的藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2004079,//提升10階段幸運的藥水
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 300
                    }
                ],
                product: 2003597,//高級大英雄的祕藥
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 30
                    }
                ],
                product: 2022567,//一片鮮奶油蛋糕 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 200
                    }
                ],
                product: 2023520,//馬瑟爾的禮物
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 300
                    }
                ],
                product: 2433808,//特殊的名譽勳章
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 300
                    }
                ],
                product: 2433604,//性向成長密藥
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 5155005,//卡勒塔的紅色珍珠
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 2431965,//基本傷害字型
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 2435516,//透明傷害字型
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 10
                    }
                ],
                product: 5072000,//高效能喇叭
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 100
                    }
                ],
                product: 2854002,//高等級萌獸卡牌包
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 300
                    }
                ],
                product: 5192000,//寵物強化箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 1000
                    }
                ],
                product: 4319923,//時裝潛能二排硬幣
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 3000
                    }
                ],
                product: 4319903,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1122076,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1012478,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1022231,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1032241,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1113149,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1122254,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1152170,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1182087,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 1162009,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 20
                    }
                ],
                product: 2041200,//霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 常用道具.紫色蘋果,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001126,
                        count: 50
                    }
                ],
                product: 4080000,
                count: 1,
                meso: 0
            },
        ]
    },
    {
        catId: 4001168,
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 200
                    },
                ],
                product: 5860002, //時裝染色選擇卷
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 5
                    },
                ],
                product: 常用道具.閃耀方塊, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 10
                    },
                ],
                product: 常用道具.閃炫方塊, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 20
                    },
                ],
                product: 常用道具.結合方塊, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 10
                    },
                ],
                product: 常用道具.萌獸方塊, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 60
                    },
                ],
                product: 常用道具.附加方塊, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 200
                    },
                ],
                product: 常用道具.X卷箱,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 1000
                    },
                ],
                product: 常用道具.V卷箱, 
                count: 1,
                meso: 0
            },
            /*{
                requirements: [
                    {
                        id: 4001168,
                        count: 1500
                    },
                ],
                product: 常用道具.B卷箱,
                count: 1,
                meso: 0
            },*/
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 200
                    },
                ],
                product: 1162036, //查克羅斯
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 50
                    },
                ],
                product: 4132001, //紅石
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 50
                    },
                ],
                product: 2472001, //白金鎚子
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 40
                    },
                ],
                product: 5060029, //艾比
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 40
                    },
                ],
                product: 5060028, //潘朵拉盒子
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 40
                    },
                ],
                product: 5060048, //金蘋果
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 40
                    },
                ],
                product: 5537000, //萌獸卡包
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 60
                    },
                ],
                product: 2028393, //幸運的椅子箱子
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 60
                    },
                ],
                product: 2028394, //幸運的騎寵箱子
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 60
                    },
                ],
                product: 5060049, //傷害字型箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 60
                    },
                ],
                product: 5060057, //幸運的寶箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 30
                    },
                ],
                product: 5064502, //覺醒的輪迴星火
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 10
                    },
                ],
                product: 2632481, //祕法符文交換卷1個
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 50
                    },
                ],
                product: 2590028, //靈魂卷軸200等
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 30
                    },
                ],
                product: 4319903, //霞光谷錢袋
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 200
                    },
                ],
                product: 4319911, //霞光勳章硬幣
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 100
                    },
                ],
                product: 4319922, //時裝潛能三排硬幣
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 1000
                    },
                ],
                product: 2439394, //迷宮的火焰傷害字型(unit)
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001168,
                        count: 1000
                    },
                ],
                product: 2439265, //迷霧傷害字型(unit)
                count: 1,
                meso: 0
            },
        ]
    },
    {
        catId: 4319912,  //釣魚
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 1000
                    },
                ],
                product: 1113272,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 1000
                    },
                ],
                product: 1132311,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 1000
                    },
                ],
                product: 1122378,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 500
                    },
                ],
                product: 2041191,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 300
                    },
                ],
                product: 2041192,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 500
                    },
                ],
                product: 2041291,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 300
                    },
                ],
                product: 2041292,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 500
                    },
                ],
                product: 2041391, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 300
                    },
                ],
                product: 2041392, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 50
                    },
                ],
                product: 常用道具.閃炫方塊,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4319912,
                        count: 200
                    },
                ],
                product: 常用道具.附加方塊,
                count: 1,
                meso: 0
            },
        ]
    },
    {
        catId: 4001878,  //釣魚
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 80
                    },
                ],
                product: 2431938, //夫尼爾武器箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 60
                    },
                    {
                        id: 4001879,
                        count: 5
                    },
                ],
                product: 2431960, //夫尼爾防具箱 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 300
                    },
                    {
                        id: 4001879,
                        count: 50
                    },
                ],
                product: 2434340, //航海武器箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 200
                    },
                    {
                        id: 4001879,
                        count: 50
                    },
                    {
                        id: 4001889,
                        count: 3
                    },
                ],
                product: 2432840, //航海防具箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 500
                    },
                    {
                        id: 4001879,
                        count: 100
                    },
                    {
                        id: 4001889,
                        count: 80
                    },
                ],
                product: 2630782, //神秘武器箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 800
                    },
                    {
                        id: 4001879,
                        count: 150
                    },
                    {
                        id: 4001889,
                        count: 100
                    },
                    {
                        id: 4001890,
                        count: 1
                    },
                ],
                product: 2630783, //神秘防具箱
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4001878,
                        count: 3000
                    },
                    {
                        id: 4001879,
                        count: 1500
                    },
                    {
                        id: 4001889,
                        count: 300
                    },
                    {
                        id: 4001890,
                        count: 20
                    },
                ],
                product: 2439614, //創世武器箱
                count: 1,
                meso: 0
            },
        ]
    },
    {
        catId: 4310097,
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 30
                    },
                ],
                product: 1113073,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 30
                    },
                ],
                product: 1032221, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 30
                    },
                ],
                product: 1122265, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 30
                    },
                ],
                product: 1132244, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 80
                    },
                ],
                product: 1113074,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 80
                    },
                ],
                product: 1032222, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 80
                    },
                ],
                product: 1122266, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 80
                    },
                ],
                product: 1132245, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 250
                    },
                ],
                product: 1113075,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 250
                    },
                ],
                product: 1032223, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 250
                    },
                ],
                product: 1122267, 
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4310097,
                        count: 250
                    },
                ],
                product: 1132246, 
                count: 1,
                meso: 0
            },
        ]
    },
    {
        catId: 4319941,
        catName: "進化晶片",
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 5062020,
                        count: 200
                    },
                ],
                product: 4319941,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 5062017,
                        count: 600
                    },
                ],
                product: 4319941,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 2430915,
                        count: 500
                    },
                ],
                product: 4319941,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 5062026,
                        count: 125
                    },
                ],
                product: 4319941,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 2439993,
                        count: 1
                    },
                ],
                product: 5062020,
                count: 200,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 2439993,
                        count: 1
                    },
                ],
                product: 5062026,
                count: 125,
                meso: 0
            },
        ]
    },
    {
        catId: 1190555,
        catName: "米特拉的憤怒",
        color: "#b",
        options: [
            {
                requirements: [
                    {
                        id: 4031394,
                        count: 30
                    },
                    {
                        id: 4001890,
                        count: 15
                    },
                ],
                product: 1190555,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4031394,
                        count: 30
                    },
                    {
                        id: 4001890,
                        count: 15
                    },
                ],
                product: 1190556,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4031394,
                        count: 30
                    },
                    {
                        id: 4001890,
                        count: 15
                    },
                ],
                product: 1190557,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4031394,
                        count: 30
                    },
                    {
                        id: 4001890,
                        count: 15
                    },
                ],
                product: 1190558,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 4031394,
                        count: 30
                    },
                    {
                        id: 4001890,
                        count: 15
                    },
                ],
                product: 1190559,
                count: 1,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 1190555,
                        count: 1
                    },
                ],
                product: 4031394,
                count: 5,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 1190556,
                        count: 1
                    },
                ],
                product: 4031394,
                count: 5,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 1190557,
                        count: 1
                    },
                ],
                product: 4031394,
                count: 5,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 1190558,
                        count: 1
                    },
                ],
                product: 4031394,
                count: 5,
                meso: 0
            },
            {
                requirements: [
                    {
                        id: 1190559,
                        count: 1
                    },
                ],
                product: 4031394,
                count: 5,
                meso: 0
            },
        ]
    }
]
var selectedRedeem = null;
var redeemProduct = null;
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
            var text = Logo + "此為兌換系統，您要進行什麼合成？\r\n";
            for (var i = 0; i < redeemList.length; i++) {
                var item = redeemList[i];
                if(item.catName != null){
                    text += "#L" + i + "#" + item.color + "#e#i" + item.catId + ":#" + item.catName + "合成" + "#k#n#l";
                }
                else{
                    text += "#L" + i + "#" + item.color + "#e" + maskItem(item.catId) + "合成" + "#k#n#l";
                }
                if (i % 2 == 1 || i > 1) {
                    text += "\r\n"
                }
            }
            cm.sendNext(text);
        }
        else if (status == 1) {
            var text = "#b#e請選擇您要兌換的商品\r\n";
            if (selection >= 0) {
                selectedRedeem = redeemList[selection];
            }
            for (var i = 0; i < selectedRedeem.options.length; i++) {
                var item = selectedRedeem.options[i];
                var count = item.count == null ? 1 : item.count;
                
                text += maskListNode(i, maskTitle(maskItem(item.product) + "x" + count) + "\r\n");
                text += maskItemDescription(item.requirements, 1, false);
                /*
                var upgradeText = "";
                for (var j = 0; j < item.requirements.length; j++) {
                    if (j > 0) {
                        upgradeText += ", ";
                    }
                    upgradeText += maskItem(item.requirements[j].id);
                    if (item.requirements[j].count > 1) {
                        upgradeText += "x" + maskCount(item.requirements[j].count);
                    }
                }
                if (item.meso > 0) {
                    if (item.requirements.length > 0) {
                        upgradeText += ", ";
                    }
                    upgradeText += maskCount(item.meso) + "楓幣";
                }
                var countText = item.count == null ? "" : "x" + item.count;
                text += maskListNode(i, "使用" + upgradeText + "兌換" + maskItem(item.product) + countText);
                if (selectedRedeem.canTradeBack) {
                    text += maskListNode(10000 + i, "使用" + maskItem(item.product) + countText + "換回" + upgradeText);
                }*/
            }
            cm.sendNext(text);
        }
        else if (status == 2) {
            if (selection >= 0) {
                var text = "請輸入要兌換的數量";
                selectionNode = selection;
                redeemProduct = selectedRedeem.options[selectionNode];
                var isEquip = Math.floor(redeemProduct.product / 1000000) == 1;
                cm.sendGetNumber(text, 1, 1, isEquip ? 1 : 10000);
            }
            else {
                cm.sendOk("請確認您的物品充足。");
                cm.dispose();
            }

        }
        else if (status == 3) {
            cnt = selection;
            if (selectionNode != null && itemCheck(redeemProduct.requirements, cnt)) {
                var text = "確定要兌換" + cnt + "組" + maskItem(redeemProduct.product) + "嗎？" + alertText("請確認詳細兌換資訊，操作不能被復原哦。\r\n");
                text += maskItemDescription(redeemProduct.requirements, cnt, true)
                cm.sendYesNo(text);
            }
            else {
                cm.sendOk("請確認您的物品充足。");
                cm.dispose();
            }

        }
        else if (status == 4) {
            if (mode == 1) {

                FileoutputUtil.logToFile("logs/硬幣商店.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 合成道具:" + cm.getItemName(redeemProduct.product) + redeemProduct.product + " 合成數量:" + cnt + "\r\n");
                var isOverflow = false;
                for (var i = 0; i < redeemProduct.requirements.length; i++) {
                    //cm.print(redeemProduct.requirements[i].count * cnt);
                    if (redeemProduct.requirements[i].count * cnt > 32767) {
                        isOverflow = true;
                    }
                }
                var count = redeemProduct.count == null ? 1 : redeemProduct.count;
                if (count * cnt > 32767) {
                    isOverflow = true;
                }
                if (isOverflow && false) {
                    cm.sendOk("物品兌換超過單次上限。單次扣除物品不能超過32767");
                    cm.dispose();
                    return;
                }
                else {
                    doCraftRedeem();
                    cm.sendOk(
                        "兌換" + maskItem(redeemProduct.product) + "完畢，請確認您的背包。");
                    cm.dispose();
                    return;
                }
            }
            else {
                cm.sendOk(
                    "此次兌換沒有執行。");
                cm.dispose();
                return;
            }

        }
    }
}



function doCraftRedeem() {
    for (var i = 0; i < redeemProduct.requirements.length; i++) {
        cm.gainItem(redeemProduct.requirements[i].id, -1 * redeemProduct.requirements[i].count * cnt);
    }
    var count = redeemProduct.count == null ? 1 : redeemProduct.count;
    cm.gainMeso(-1 * redeemProduct.meso * cnt);
    for (var i = 0; i < cnt; i++) {
        cm.gainItem(redeemProduct.product, count);
    }
}

function maskTitle(title){
    return "#d#e" + title + ":";
}

function maskItemDescription(requirements, bagCount, isDetail){
    var text = "#b#n    合成需求:";
    if(requirements.length >= 3){
        text += "\r\n";
    }
    for(var i = 0; i< requirements.length;i++){
        var reqItem = requirements[i];
        if(isDetail){
            text += maskItem(reqItem.id) + "x" + (reqItem.count * bagCount) + "\r\n";
        }
        else{
            text += "#i" + reqItem.id + ":#" + "x" + (reqItem.count * bagCount);
        }
    }
    return text + (!isDetail ? "\r\n":"");
}

