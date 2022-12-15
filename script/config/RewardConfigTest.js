
load("scripts/config/CommonItemConfig.js");

var rewardArray = [
    //每日活動
    {
        category: "GM",
        name: "補領",
        id: "preOrderReward",
        requiredDonate: 54000,
        items: [
            {
                id: 1032223,
                count: 1,
                isCustomEquip: true,
                allStat: 100,
                MAD: 100,
                PAD: 100,
                ignorePDR: 30,
                bossDamage: 30,
                tuc: 10,
                customNote: "+100全屬性 Boss傷害30% 無視30% 卷數10",
            },
            {
                id: 1182285,
                isCustomEquip: true,
                customNote: "+150全屬性 +30BOSS傷害 +30總傷害 +30%全屬",
                allStat: 150,
                MAD: 150,
                PAD: 150,
                bossDamage: 30,
                totalDamage: 30,
                allStatPercentage: 30,
                count: 1
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線60分鐘",
        requiredTime: 60,
        id: "minute_60",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 5
            },
            {
                id: 常用道具.閃耀方塊,
                count: 20
            },
            {
                id: 常用道具.萌獸方塊,
                count: 10
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線120分鐘",
        requiredTime: 120,
        id: "minute_120",
        items: [
            {
                id: 常用道具.黃金蘋果,
                count: 2
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 2
            },
            {
                id: 2436422,
                count: 1
            }
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線180分鐘",
        requiredTime: 180,
        id: "minute_180",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 5
            },
            {
                id: 常用道具.閃耀方塊,
                count: 20
            },
            {
                id: 常用道具.萌獸方塊,
                count: 10
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線240分鐘",
        requiredTime: 240,
        id: "minute_240",
        items: [
            {
                id: 常用道具.黃金蘋果,
                count: 3
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 3
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線360分鐘",
        requiredTime: 360,
        id: "minute_360",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 5
            },
            {
                id: 常用道具.閃耀方塊,
                count: 20
            },
            {
                id: 常用道具.萌獸方塊,
                count: 10
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線480分鐘",
        requiredTime: 480,
        id: "minute_480",
        items: [
            {
                id: 常用道具.黃金蘋果,
                count: 5
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 5
            },
            {
                id: 2436422,
                count: 1
            }
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線600分鐘",
        requiredTime: 600,
        id: "minute_600",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 5
            },
            {
                id: 常用道具.閃耀方塊,
                count: 10
            },
            {
                id: 常用道具.萌獸方塊,
                count: 5
            },
            {
                id: 常用道具.閃炫方塊,
                count: 5
            },
            {
                id: 常用道具.結合方塊,
                count: 5
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線720分鐘",
        requiredTime: 720,
        id: "minute_720",
        items: [
            {
                id: 常用道具.黃金蘋果,
                count: 5
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 5
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線840分鐘",
        requiredTime: 840,
        id: "minute_840",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 5
            },
            {
                id: 常用道具.閃耀方塊,
                count: 10
            },
            {
                id: 常用道具.萌獸方塊,
                count: 5
            },
            {
                id: 常用道具.閃炫方塊,
                count: 5
            },
            {
                id: 常用道具.結合方塊,
                count: 5
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "在線960分鐘",
        requiredTime: 960,
        id: "minute_960",
        items: [
            {
                id: 常用道具.黃金蘋果,
                count: 5
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 5
            },
            {
                id: 2436422,
                count: 1
            }
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "每日FB推文",
        needVerify: true,
        verifyID: "臉書推文",
        id: "dailyPushFB",
        items: [
            {
                id: 1202193,
                period: 1,
                isCustomEquip: 1,
                star: 15,
                count: 1
            },
            {
                id: 常用道具.閃耀方塊,
                count: 10
            },
            {
                id: 常用道具.萌獸方塊,
                count: 20
            },
            {
                id: 常用道具.黃金蘋果,
                count: 10
            },
            {
                id: 常用道具.魔法豎琴,
                count: 10
            },
            {
                id: 2436422,
                count: 1
            }
        ]
    },
    {
        category: "每日活動",
        isDaily: true,
        name: "每日論壇推文",
        needVerify: true,
        verifyID: "論壇推文",
        id: "dailyPushForum",
        items: [
            {
                id: 1113220,
                period: 1,
                isCustomEquip: 1,
                star: 15,
                count: 1
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
            {
                id: 常用道具.結合方塊,
                count: 3
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 10
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 10
            },
            {
                id: 2436422,
                count: 1
            }
        ]
    },
    {
        category: "每日月卡",
        isDaily: true,
        name: "霞光谷高級服務",
        id: "mvpMonthlyCard",
        requirements: [
            {
                id: 5420008,
                count: 1
            }
        ],
        items: [
            {
                id: 常用道具.真實1個,
                period: 10,
                count: 20
            },
            {
                id: 2450134,
                period: 10,
                count: 5
            },
        ]
    },
    {
        category: "每日月卡",
        isDaily: true,
        name: "霞光谷月卡",
        id: "smallMonthlyCard",
        requirements: [
            {
                id: 5429901,
                count: 1
            }
        ],
        items: [
            {
                id: 常用道具.商城加倍200,
                period: 10,
                count: 2
            },
            {
                id: 常用道具.商城加倍225,
                period: 10,
                count: 2
            },
            {
                id: 常用道具.商城加倍250,
                period: 10,
                count: 2
            },
            {
                id: 常用道具.MVP天氣,
                period: 10,
                count: 4
            },
            {
                id: 常用道具.閃耀方塊,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.附加方塊,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.萌獸方塊,
                period: 10,
                count: 20
            },
            {
                id: 常用道具.黃金蘋果,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.祕法1個,
                period: 10,
                count: 10
            }
        ]
    },
    {
        category: "每日月卡",
        isDaily: true,
        name: "霞光谷大月卡",
        id: "bigMonthlyCard",
        requirements: [
            {
                id: 5429902,
                count: 1
            }
        ],
        items: [
            {
                id: 常用道具.商城加倍200,
                count: 4
            },
            {
                id: 常用道具.商城加倍225,
                count: 4
            },
            {
                id: 常用道具.商城加倍250,
                count: 4
            },
            {
                id: 常用道具.MVP天氣,
                count: 8
            },
            {
                id: 2022530,
                period: 10,
                count: 3
            },
            {
                id: 常用道具.全日掉寶加倍,
                period: 1,
                count: 1
            },
            {
                id: 常用道具.閃炫方塊,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.結合方塊,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.萌獸方塊,
                period: 10,
                count: 40
            },
            {
                id: 常用道具.附加方塊,
                period: 10,
                count: 20
            },
            {
                id: 常用道具.黃金蘋果,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.魔法豎琴,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.艾比米修斯箱子,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.潘朵拉箱子,
                period: 10,
                count: 10
            },
            {
                id: 常用道具.幸運的寶箱,
                period: 10,
                count: 3
            },
            {
                id: 常用道具.祕法1個,
                period: 10,
                count: 20
            }
        ]
    },

    //贊助滿額

    {
        category: "贊助滿額",
        name: "累積1000 - 進化晶片",
        requiredDonate: 1000,
        id: "new_donate_chip_1000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 5
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積3000 - 進化晶片",
        requiredDonate: 3000,
        id: "new_donate_chip_3000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 10
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積5000 - 進化晶片",
        requiredDonate: 5000,
        id: "new_donate_chip_5000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 20
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積10000 - 進化晶片",
        requiredDonate: 10000,
        id: "new_donate_chip_10000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 30
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積15000 - 進化晶片",
        requiredDonate: 15000,
        id: "new_donate_chip_15000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 30
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積20000 - 進化晶片",
        requiredDonate: 20000,
        id: "new_donate_chip_20000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 40
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積25000 - 進化晶片",
        requiredDonate: 25000,
        id: "new_donate_chip_25000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 40
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積30000 - 進化晶片",
        requiredDonate: 30000,
        id: "new_donate_chip_30000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 50
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積35000 - 進化晶片",
        requiredDonate: 35000,
        id: "new_donate_chip_35000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 50
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積40000 - 進化晶片",
        requiredDonate: 40000,
        id: "new_donate_chip_40000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 60
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積45000 - 進化晶片",
        requiredDonate: 45000,
        id: "new_donate_chip_45000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 60
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積50000 - 進化晶片",
        requiredDonate: 50000,
        id: "new_donate_chip_50000",
        items: [
            {
                id: 常用道具.進化晶片選擇卷,
                count: 100
            },
        ]
    },

    {
        category: "贊助滿額",
        name: "累積7500 - 造型自選",
        requiredDonate: 7500,
        id: "new_donate_7500_chair",
        items: [
            {
                id: 常用道具.椅子自選箱,
                count: 1
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積10000 - 造型自選",
        requiredDonate: 10000,
        id: "new_donate_10000_chair",
        items: [
            {
                id: 常用道具.騎寵自選箱,
                count: 1
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積15000 - 造型自選",
        requiredDonate: 15000,
        id: "new_donate_15000_chair",
        items: [
            {
                id: 常用道具.字型自選箱,
                count: 1
            },
            {
                id: 常用道具.騎寵自選箱,
                count: 1
            },
            {
                id: 常用道具.椅子自選箱,
                count: 1
            },
        ],
    },

    {
        category: "贊助滿額",
        name: "累積500",
        requiredDonate: 500,
        id: "new_donate_500",
        items: [
            {
                id: 1114400,
                count: 1
            },
            {
                id: 2431938,
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.傳說卷軸,
                count: 5
            },
            {
                id: 常用道具.黃金蘋果,
                count: 30
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 30
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積1000",
        requiredDonate: 1000,
        id: "new_donate_1000",
        items: [
            {
                id: 2434340,
                customNote: "航海師武器自選箱，可選波賽頓刀",
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.X卷箱,
                count: 10
            },
            {
                id: 常用道具.白金槌子,
                count: 30
            },
            {
                id: 常用道具.傳說卷軸,
                count: 5
            },
            {
                id: 常用道具.星力17強化卷,
                count: 3
            },
            {
                id: 常用道具.閃炫方塊,
                count: 30
            },
            {
                id: 常用道具.結合方塊,
                count: 30
            },
            {
                id: 常用道具.黃金蘋果,
                count: 30
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 30
            },
            {
                id: 常用道具.魔法豎琴,
                count: 30
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 30
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 10
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 1
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積2000",
        requiredDonate: 2000,
        id: "new_donate_2000",
        items: [
            {
                id: 常用道具.字型自選箱,
                count: 1
            },
            {
                id: 常用道具.祕法1個,
                count: 100
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 50
            },
            {
                id: 常用道具.白金槌子,
                count: 100
            },
            {
                id: 常用道具.閃炫方塊,
                count: 200
            },
            {
                id: 常用道具.附加方塊,
                count: 200
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 100
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積3000",
        requiredDonate: 3000,
        id: "new_donate_3000",
        items: [
            {
                id: 1112918,
                isCustomEquip: true,
                allStat: 30,
                MAD: 30,
                PAD: 30,
                customNote: "+30全屬性",
                count: 1
            },
            {
                id: 2431525,
                customNote: "每件均有 星力: 12 全屬性: 18%",
                count: 1
            },
            {
                id: 常用道具.騎寵自選箱,
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.X卷箱,
                count: 20
            },
            {
                id: 常用道具.白金槌子,
                count: 30
            },
            {
                id: 常用道具.傳說卷軸,
                count: 5
            },
            {
                id: 常用道具.閃炫方塊,
                count: 50
            },
            {
                id: 常用道具.結合方塊,
                count: 50
            },
            {
                id: 常用道具.黃金蘋果,
                count: 50
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 50
            },
            {
                id: 常用道具.魔法豎琴,
                count: 50
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 50
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 15
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 50
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積5000",
        requiredDonate: 5000,
        id: "new_donate_5000",
        items: [
            {
                id: 1113211,
                isCustomEquip: true,
                allStat: 50,
                MAD: 50,
                PAD: 50,
                customNote: "+50全屬性",
                count: 1
            },
            {
                id: 2432840,
                count: 2
            },
            {
                id: 1114400,
                isCustomEquip: true,
                star: 15,
                mvpItem: true,
                allStat: 50,
                MAD: 50,
                PAD: 50,
                customNote: "MVP +50全屬性",
                count: 1
            },
            {
                id: 常用道具.椅子自選箱,
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.X卷箱,
                count: 30
            },
            {
                id: 常用道具.白金槌子,
                count: 100
            },
            {
                id: 常用道具.傳說卷軸,
                count: 5
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.閃炫方塊,
                count: 50
            },
            {
                id: 常用道具.結合方塊,
                count: 50
            },
            {
                id: 常用道具.黃金蘋果,
                count: 50
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 50
            },
            {
                id: 常用道具.魔法豎琴,
                count: 50
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 50
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 15
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 1
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 50
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積7500",
        requiredDonate: 7500,
        id: "new_donate_7500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 100
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 50
            },
            {
                id: 常用道具.白金槌子,
                count: 100
            },
            {
                id: 常用道具.萌獸方塊,
                count: 200
            },
            {
                id: 常用道具.覺醒的輪迴星火,
                count: 100
            },
            {
                id: 常用道具.混沌傳播者,
                count: 100
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 100
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積10000",
        requiredDonate: 10000,
        id: "new_donate_10000",
        items: [
            {
                id: 1182158,
                isCustomEquip: true,
                bossDamage: 30,
                totalDamage: 30,
                customNote: "+30Boss傷害 30總傷害",
                count: 1
            },
            {
                id: 2432840,
                count: 6
            },
            {
                id: 1202193,
                isCustomEquip: true,
                star: 15,
                mvpItem: true,
                allStat: 50,
                MAD: 50,
                PAD: 50,
                customNote: "MVP +50全屬性",
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.X卷箱,
                count: 50
            },
            {
                id: 常用道具.白金槌子,
                count: 100
            },
            {
                id: 常用道具.傳說卷軸,
                count: 10
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.閃炫方塊,
                count: 100
            },
            {
                id: 常用道具.結合方塊,
                count: 100
            },
            {
                id: 常用道具.黃金蘋果,
                count: 100
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 100
            },
            {
                id: 常用道具.魔法豎琴,
                count: 100
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 100
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 30
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 2
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 100
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積12500",
        requiredDonate: 12500,
        id: "new_donate_12500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 150
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 75
            },
            {
                id: 常用道具.白金槌子,
                count: 150
            },
            {
                id: 常用道具.閃炫方塊,
                count: 300
            },
            {
                id: 常用道具.附加方塊,
                count: 300
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 150
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積15000",
        requiredDonate: 15000,
        id: "new_donate_15000",
        items: [
            {
                id: 1113196,
                count: 1,
                isCustomEquip: true,
                allStat: 100,
                MAD: 100,
                PAD: 100,
                totalDamage: 30,
                tuc: 10,
                customNote: "+100全屬性 總傷害30% 卷數10",
            },
            {
                id: 1113220,
                isCustomEquip: true,
                star: 15,
                mvpItem: true,
                allStat: 50,
                MAD: 50,
                PAD: 50,
                customNote: "MVP +50全屬性",
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.V卷箱,
                count: 20
            },
            {
                id: 常用道具.傳說卷軸,
                count: 10
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.閃炫方塊,
                count: 100
            },
            {
                id: 常用道具.結合方塊,
                count: 100
            },
            {
                id: 常用道具.黃金蘋果,
                count: 100
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 100
            },
            {
                id: 常用道具.魔法豎琴,
                count: 100
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 100
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 30
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 2
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 100
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積17500",
        requiredDonate: 17500,
        id: "new_donate_17500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 150
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 75
            },
            {
                id: 常用道具.白金槌子,
                count: 150
            },
            {
                id: 常用道具.萌獸方塊,
                count: 300
            },
            {
                id: 常用道具.覺醒的輪迴星火,
                count: 150
            },
            {
                id: 常用道具.混沌傳播者,
                count: 150
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 150
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積20000",
        requiredDonate: 20000,
        id: "new_donate_20000",
        items: [
            {
                id: 1033000,
                isCustomEquip: true,
                star: 25,
                mvpItem: true,
                customNote: "冷卻90秒 MVP +100全屬性",
                count: 1
            },
            {
                id: 2630782,
                count: 1
            },
            {
                id: 常用道具.燃燒星力,
                count: 30
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.V卷箱,
                count: 20
            },
            {
                id: 常用道具.白金槌子,
                count: 200
            },
            {
                id: 常用道具.傳說卷軸,
                count: 10
            },
            {
                id: 常用道具.星力20強化卷,
                count: 2
            },
            {
                id: 常用道具.追加1星100,
                count: 3
            },
            {
                id: 常用道具.閃炫方塊,
                count: 150
            },
            {
                id: 常用道具.結合方塊,
                count: 150
            },
            {
                id: 常用道具.黃金蘋果,
                count: 150
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 150
            },
            {
                id: 常用道具.魔法豎琴,
                count: 150
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 150
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 50
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 3
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 150
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積22500",
        requiredDonate: 22500,
        id: "new_donate_22500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 200
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 100
            },
            {
                id: 常用道具.白金槌子,
                count: 200
            },
            {
                id: 常用道具.閃炫方塊,
                count: 400
            },
            {
                id: 常用道具.附加方塊,
                count: 400
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 200
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積25000",
        requiredDonate: 25000,
        id: "new_donate_25000",
        items: [
            {
                id: 1032223,
                count: 1,
                isCustomEquip: true,
                allStat: 100,
                MAD: 100,
                PAD: 100,
                ignorePDR: 30,
                bossDamage: 30,
                tuc: 10,
                customNote: "+100全屬性 Boss傷害30% 無視30% 卷數10",
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.V卷箱,
                count: 30
            },
            {
                id: 常用道具.傳說卷軸,
                count: 10
            },
            {
                id: 常用道具.星力20強化卷,
                count: 2
            },
            {
                id: 常用道具.閃炫方塊,
                count: 150
            },
            {
                id: 常用道具.結合方塊,
                count: 150
            },
            {
                id: 常用道具.黃金蘋果,
                count: 150
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 150
            },
            {
                id: 常用道具.魔法豎琴,
                count: 150
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 150
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 50
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 3
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 150
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積27500",
        requiredDonate: 27500,
        id: "new_donate_27500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 200
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 100
            },
            {
                id: 常用道具.V卷箱,
                count: 30
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 5
            },
            {
                id: 常用道具.覺醒的輪迴星火,
                count: 200
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 200
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積30000",
        requiredDonate: 30000,
        id: "new_donate_30000",
        items: [
            {
                id: 2630783,
                count: 3
            },
            {
                id: 常用道具.燃燒星力,
                count: 50
            },
            {
                id: 1114402,
                isCustomEquip: true,
                customNote: "+100全屬性",
                allStat: 100,
                MAD: 100,
                PAD: 100,
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.B卷箱,
                count: 10
            },
            {
                id: 常用道具.白金槌子,
                count: 300
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.追加1星100,
                count: 3
            },
            {
                id: 常用道具.閃炫方塊,
                count: 200
            },
            {
                id: 常用道具.結合方塊,
                count: 200
            },
            {
                id: 常用道具.黃金蘋果,
                count: 200
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 200
            },
            {
                id: 常用道具.魔法豎琴,
                count: 200
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 200
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 100
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 3
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 200
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積32500",
        requiredDonate: 32500,
        id: "new_donate_32500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 300
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 150
            },
            {
                id: 常用道具.白金槌子,
                count: 250
            },
            {
                id: 常用道具.閃炫方塊,
                count: 500
            },
            {
                id: 常用道具.附加方塊,
                count: 500
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 250
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積35000",
        requiredDonate: 35000,
        id: "new_donate_35000",
        items: [
            {
                id: 常用道具.幽暗星力,
                count: 30
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.B卷箱,
                count: 30
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.閃炫方塊,
                count: 200
            },
            {
                id: 常用道具.結合方塊,
                count: 200
            },
            {
                id: 常用道具.黃金蘋果,
                count: 200
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 200
            },
            {
                id: 常用道具.魔法豎琴,
                count: 200
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 200
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 100
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 3
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 200
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積37500",
        requiredDonate: 37500,
        id: "new_donate_37500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 300
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 100
            },
            {
                id: 常用道具.B卷箱,
                count: 30
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 5
            },
            {
                id: 常用道具.覺醒的輪迴星火,
                count: 250
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 250
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積40000",
        requiredDonate: 40000,
        id: "new_donate_40000",
        items: [
            {
                id: 2630783,
                count: 3
            },
            {
                id: 常用道具.輪迴星力,
                count: 30
            },
            {
                id: 1182285,
                isCustomEquip: true,
                customNote: "+150全屬性 +30BOSS傷害 +30總傷害 +30%全屬",
                allStat: 150,
                MAD: 150,
                PAD: 150,
                bossDamage: 30,
                totalDamage: 30,
                allStatPercentage: 30,
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.B卷箱,
                count: 30
            },
            {
                id: 常用道具.白金槌子,
                count: 400
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.追加1星100,
                count: 5
            },
            {
                id: 常用道具.閃炫方塊,
                count: 300
            },
            {
                id: 常用道具.結合方塊,
                count: 300
            },
            {
                id: 常用道具.黃金蘋果,
                count: 300
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 300
            },
            {
                id: 常用道具.魔法豎琴,
                count: 300
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 300
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 150
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 5
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 300
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積42500",
        requiredDonate: 42500,
        id: "new_donate_42500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 400
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 200
            },
            {
                id: 常用道具.白金槌子,
                count: 400
            },
            {
                id: 常用道具.閃炫方塊,
                count: 800
            },
            {
                id: 常用道具.附加方塊,
                count: 800
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 400
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積45000",
        requiredDonate: 45000,
        id: "new_donate_45000",
        items: [
            {
                id: 常用道具.輪迴星力,
                count: 50
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.B卷箱,
                count: 50
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.閃炫方塊,
                count: 300
            },
            {
                id: 常用道具.結合方塊,
                count: 300
            },
            {
                id: 常用道具.黃金蘋果,
                count: 300
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 300
            },
            {
                id: 常用道具.魔法豎琴,
                count: 300
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 300
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 150
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 5
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 300
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積47500",
        requiredDonate: 47500,
        id: "new_donate_47500",
        items: [
            {
                id: 常用道具.祕法1個,
                count: 400
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 200
            },
            {
                id: 常用道具.B卷箱,
                count: 40
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 8
            },
            {
                id: 常用道具.覺醒的輪迴星火,
                count: 400
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 400
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積50000 - 內面耀光",
        requiredDonate: 50000,
        id: "new_donate_50000_內面",
        items: [
            {
                id: 1032261,
                isCustomEquip: true,
                allStat: 150,
                MAD: 200,
                PAD: 200,
                customNote: "+150全屬性 200雙攻",
                count: 1
            },
        ]
    },
    {
        category: "贊助滿額",
        name: "累積50000",
        requiredDonate: 50000,
        id: "new_donate_50000",
        items: [
            {
                id: 1202160,
                isCustomEquip: true,
                allStat: 400,
                MAD: 400,
                PAD: 400,
                allStatPercentage: 30,
                customNote: "+400全屬性 30全屬性%",
                count: 1
            },
            {
                id: 常用道具.幽暗星力,
                count: 50
            },
            {
                id: 1672075,
                isCustomEquip: true,
                allStat: 200,
                MAD: 200,
                PAD: 200,
                ignorePDR: 30,
                bossDamage: 30,
                totalDamage: 30,
                tuc: 20,
                customNote: "+200全屬性 30無視防禦 30BOSS傷害 30總傷害 20卷",
                count: 1
            },
            {
                id: 常用道具.P寵箱,
                customNote: "可從月光寵物中自選一隻",
                count: 1
            },
            {
                id: 常用道具.B卷箱,
                count: 100
            },
            {
                id: 常用道具.白金槌子,
                count: 500
            },
            {
                id: 常用道具.星力20強化卷,
                count: 5
            },
            {
                id: 常用道具.追加1星100,
                count: 10
            },
            {
                id: 常用道具.閃炫方塊,
                count: 500
            },
            {
                id: 常用道具.結合方塊,
                count: 500
            },
            {
                id: 常用道具.黃金蘋果,
                count: 500
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 500
            },
            {
                id: 常用道具.魔法豎琴,
                count: 500
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 500
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 500
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 10
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 500
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積52500",
        requiredDonate: 52500,
        id: "new_donate_52500",
        items: [
            {
                id: 常用道具.真實1個,
                count: 300
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 5
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 100
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積55000",
        requiredDonate: 55000,
        id: "new_donate_55000",
        items: [
            {
                id: 常用道具.克伯威水滴石,
                count: 2
            },
            {
                id: 常用道具.太初水滴石,
                count: 30
            },
            {
                id: 常用道具.蝴蝶翅膀水滴石,
                count: 150
            },
            {
                id: 常用道具.榮耀卷箱,
                count: 100
            },
            {
                id: 常用道具.恢復卡,
                count: 100
            },
            {
                id: 常用道具.追加1星100,
                count: 3
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積57500",
        requiredDonate: 57500,
        id: "new_donate_57500",
        items: [
            {
                id: 常用道具.真實1個,
                count: 300
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 5
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 100
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積60000",
        requiredDonate: 60000,
        id: "new_donate_60000",
        items: [
            {
                id: 常用道具.克伯威水滴石,
                count: 2
            },
            {
                id: 常用道具.太初水滴石,
                count: 30
            },
            {
                id: 常用道具.蝴蝶翅膀水滴石,
                count: 150
            },
            {
                id: 常用道具.榮耀卷箱,
                count: 100
            },
            {
                id: 常用道具.恢復卡,
                count: 100
            },
            {
                id: 常用道具.追加1星100,
                count: 3
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積60000_追加",
        requiredDonate: 60000,
        id: "new_donate_60000_bonus",
        items: [
            {
                id: 4319962,
                count: 1
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積62500",
        requiredDonate: 62500,
        id: "new_donate_62500",
        items: [
            {
                id: 常用道具.真實1個,
                count: 500
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 8
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 150
            },
            {
                id: 常用道具.星力20強化卷,
                count: 4
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積65000",
        requiredDonate: 65000,
        id: "new_donate_65000",
        items: [
            {
                id: 常用道具.克伯威水滴石,
                count: 3
            },
            {
                id: 常用道具.太初水滴石,
                count: 50
            },
            {
                id: 常用道具.蝴蝶翅膀水滴石,
                count: 250
            },
            {
                id: 常用道具.榮耀卷箱,
                count: 150
            },
            {
                id: 常用道具.恢復卡,
                count: 150
            },
            {
                id: 常用道具.追加1星100,
                count: 4
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積67500",
        requiredDonate: 67500,
        id: "new_donate_67500",
        items: [
            {
                id: 常用道具.真實1個,
                count: 500
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 8
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 150
            },
            {
                id: 常用道具.星力20強化卷,
                count: 4
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積70000",
        requiredDonate: 70000,
        id: "new_donate_70000",
        items: [
            {
                id: 常用道具.克伯威水滴石,
                count: 3
            },
            {
                id: 常用道具.太初水滴石,
                count: 50
            },
            {
                id: 常用道具.蝴蝶翅膀水滴石,
                count: 250
            },
            {
                id: 常用道具.榮耀卷箱,
                count: 150
            },
            {
                id: 常用道具.恢復卡,
                count: 150
            },
            {
                id: 常用道具.追加1星100,
                count: 4
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積70000_追加",
        requiredDonate: 70000,
        id: "new_donate_70000_bonus",
        items: [
            {
                id: 4319963,
                count: 1
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積72500",
        requiredDonate: 72500,
        id: "new_donate_72500",
        items: [
            {
                id: 常用道具.真實1個,
                count: 800
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 10
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 180
            },
            {
                id: 常用道具.星力20強化卷,
                count: 5
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積75000",
        requiredDonate: 75000,
        id: "new_donate_75000",
        items: [
            {
                id: 常用道具.克伯威水滴石,
                count: 5
            },
            {
                id: 常用道具.太初水滴石,
                count: 80
            },
            {
                id: 常用道具.蝴蝶翅膀水滴石,
                count: 400
            },
            {
                id: 常用道具.榮耀卷箱,
                count: 200
            },
            {
                id: 常用道具.恢復卡,
                count: 200
            },
            {
                id: 常用道具.追加1星100,
                count: 5
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積77500",
        requiredDonate: 77500,
        id: "new_donate_77500",
        items: [
            {
                id: 常用道具.真實1個,
                count: 800
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 10
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 180
            },
            {
                id: 常用道具.星力20強化卷,
                count: 5
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積80000",
        requiredDonate: 80000,
        id: "new_donate_80000",
        items: [
            {
                id: 常用道具.克伯威水滴石,
                count: 5
            },
            {
                id: 常用道具.太初水滴石,
                count: 80
            },
            {
                id: 常用道具.蝴蝶翅膀水滴石,
                count: 400
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 20
            },
            {
                id: 常用道具.榮耀卷箱,
                count: 300
            },
            {
                id: 常用道具.恢復卡,
                count: 300
            },
            {
                id: 常用道具.追加1星100,
                count: 15
            },
            {
                id: 常用道具.星力20強化卷,
                count: 10
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 250
            },
        ],
    },
    {
        category: "贊助滿額",
        name: "累積80000_追加",
        requiredDonate: 80000,
        id: "new_donate_80000_bonus",
        items: [
            {
                id: 4319964,
                count: 1
            },
        ],
    },

    //新手禮包

    {
        category: "新手禮包",
        name: "新手獎勵",
        id: "newbieReward",
        items: [
            {
                id: 1202193,
                count: 1
            },
            {
                id: 1113220,
                count: 1
            },
            {
                id: 2000054,
                count: 1
            },
            {
                id: 2432845,
                count: 1
            },
            {
                id: 常用道具.全日經驗加倍,
                period: 10,
                count: 1
            },
            {
                id: 2435516,
                count: 1
            },
            {
                id: 1022250,
                count: 1
            },
            {
                id: 常用道具.紫色蘋果,
                count: 100
            },
            {
                id: 5530241,
                count: 10
            },
            {
                id: 5530242,
                count: 10
            },
            {
                id: 5530243,
                count: 10
            },
            {
                id: 5530244,
                count: 10
            },
            {
                id: 1053215,
                count: 1
            },
            {
                id: 1005001,
                count: 1
            },
            {
                id: 1702746,
                count: 1
            },
            {
                id: 1082229,
                count: 1
            },
            {
                id: 1022048,
                count: 1
            },
            {
                id: 1012289,
                count: 1
            },
            {
                id: 1072153,
                count: 1
            },
            {
                id: 1102039,
                count: 1
            },
            {
                id: 1115170,
                count: 1
            },
            {
                id: 1115081,
                count: 1
            },
            {
                id: 1032024,
                count: 1
            }
        ]
    },
    {
        category: "人數獎勵",
        name: "200人獎勵",
        id: "people_200",
        items: [
            {
                id: 常用道具.星力17強化卷,
                count: 1
            },
            {
                id: 常用道具.傳說卷軸,
                count: 3
            },
            {
                id: 常用道具.時裝潛能硬幣,
                count: 50
            },
            {
                id: 常用道具.祕法1個,
                count: 50
            },
            {
                id: 常用道具.閃炫方塊,
                count: 50
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 50
            },
            {
                id: 常用道具.強力的輪迴星火,
                count: 50
            },
        ]
    },
    {
        category: "人數獎勵",
        name: "250人獎勵",
        id: "people_250",
        items: [
            {
                id: 常用道具.星力18強化卷,
                count: 1
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 1
            },
            {
                id: 常用道具.傳說卷軸,
                count: 3
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 50
            },
            {
                id: 常用道具.閃炫方塊,
                count: 300
            },
            {
                id: 常用道具.附加方塊,
                count: 100
            },
        ]
    },
    {
        category: "選美活動",
        name: "參加獎",
        needVerify: true,
        verifyID: "選美參加",
        id: "beautyJoin",
        items: [
            {
                id: 常用道具.椅子自選箱,
                count: 1
            },
            {
                id: 5860002,
                count: 5
            },
            {
                id: 常用道具.閃炫方塊,
                count: 100
            },
            {
                id: 常用道具.附加方塊,
                count: 100
            },
            {
                id: 5152300,
                count: 1
            },
            {
                id: 2432946,
                count: 1
            },
            {
                id: 5010128,
                count: 1
            },
        ]
    },
    {
        category: "新手禮包",
        name: "事前預約",
        needVerify: true,
        verifyID: "事前預約",
        id: "preOrderReward",
        items: [
            {
                id: 1032230,
                isCustomEquip: true,
                star: 5,
                count: 1
            },
            {
                id: 1052730,
                isCustomEquip: true,
                star: 15,
                count: 1
            },
            {
                id: 1672070,
                count: 1
            },
            {
                id: 1662072,
                count: 1
            },
        ]
    },
    {
        category: "新手禮包",
        name: "事前推文",
        needVerify: true,
        verifyID: "事前推文",
        id: "prePushReward",
        items: [
            {
                id: 5000932,
                isPet: true,
                count: 1
            },
            {
                id: 1202265,
                count: 1
            },
            {
                id: 5044010,
                count: 1
            }
        ]
    },

    //等級獎勵

    {
        category: "等級獎勵",
        name: "10等獎勵",
        id: "level_10",
        requiredLevel: 10,
        items: [
            {
                id: 1114330,
                count: 1
            },
            {
                id: 1114330,
                count: 1
            },
            {
                id: 1114330,
                count: 1
            },
            {
                id: 1114330,
                count: 1
            },
            {
                id: 常用道具.商城加倍200,
                count: 10
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
            {
                id: 2439902,
                count: 15
            },
            {
                id: 2120000,
                count: 100
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "30等獎勵",
        id: "level_30",
        requiredLevel: 30,
        items: [
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
                id: 4001832,
                count: 30000
            },
            {
                id: 2439902,
                count: 25
            },
            {
                id: 4001208,
                count: 2
            },
            {
                id: 常用道具.紫色蘋果,
                count: 10
            },
            {
                id: 1672080,
                count: 1
            },
            {
                id: 1662111,
                count: 1
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "60等獎勵",
        id: "level_60",
        requiredLevel: 60,
        items: [
            {
                id: 1162024,
                count: 1
            },
            {
                id: 1182057,
                count: 1
            },
            {
                id: 2439902,
                count: 30
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "100等獎勵",
        id: "level_100",
        requiredLevel: 100,
        items: [
            {
                id: 1152127,
                isCustomEquip: true,
                PAD: 25,
                MAD: 25,
                star: 8,
                customNote: "雙攻+25",
                count: 1
            },
            {
                id: 1012743,
                count: 1
            },
            {
                id: 1022305,
                count: 1
            },
            {
                id: 1032325,
                count: 1
            },
            {
                id: 1113149,
                count: 1
            },
            {
                id: 1122000,
                count: 1
            },
            {
                id: 常用道具.稀有潛能卷,
                count: 5
            },
            {
                id: 4001209,
                count: 1
            },
            {
                id: 2049506,
                count: 1
            },
            {
                id: 2439902,
                count: 30
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "120等獎勵",
        id: "level_120",
        requiredLevel: 120,
        items: [
            {
                id: 常用道具.藍色加倍,
                count: 5
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
                id: 常用道具.黃金鐵鎚,
                count: 5
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "140等獎勵",
        id: "level_140",
        requiredLevel: 140,
        items: [
            {
                id: 2430192,
                count: 1
            },
            {
                id: 5060048,
                count: 3
            },
            {
                id: 常用道具.萌獸方塊,
                count: 5
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "170等獎勵",
        id: "level_170",
        requiredLevel: 170,
        items: [
            {
                id: 2644021,
                count: 1
            },
            {
                id: 2434588,
                count: 15
            },
            {
                id: 2048307,
                count: 5
            },
            {
                id: 2048225,
                count: 1
            },
            {
                id: 2590012,
                count: 1
            },
            {
                id: 2591003,
                count: 1
            },
            {
                id: 常用道具.永遠的輪迴星火,
                count: 5
            },
            {
                id: 常用道具.強力的輪迴星火,
                count: 10
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "200等卷軸支援",
        id: "level_200_support",
        requiredLevel: 200,
        items: [
            {
                id: 常用道具.颱風卷軸箱,
                count: 20
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "200等方塊支援",
        id: "level_200_support_cube",
        requiredLevel: 200,
        items: [
            {
                id: 常用道具.閃耀方塊,
                count: 400
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "200等裝備支援",
        id: "level_200_support_eqp",
        requiredLevel: 200,
        items: [
            {
                id: 2431938,
                count: 1
            },
            {
                id: 2431960,
                count: 4
            },
            {
                id: 常用道具.傳說卷軸,
                count: 2
            }
        ]
    },
    {
        category: "等級獎勵",
        name: "200等獎勵",
        id: "level_200",
        requiredLevel: 200,
        items: [
            {
                id: 2644024,
                count: 1
            },
            {
                id: 常用道具.藍色加倍,
                count: 20
            },
            {
                id: 常用道具.紫色蘋果,
                count: 30
            },
            {
                id: 常用道具.寵物強化箱,
                count: 5
            },
            {
                id: 常用道具.祕法10個,
                count: 5
            },
            {
                id: 4132001,
                count: 1
            },
            {
                id: 常用道具.閃炫方塊,
                count: 5
            },
            {
                id: 常用道具.閃耀方塊,
                count: 5
            },
            {
                id: 常用道具.附加方塊,
                count: 5
            },
            {
                id: 4001209,
                count: 2
            },
            {
                id: 5060029,
                count: 5
            },
            {
                id: 5060048,
                count: 5
            },
            {
                id: 常用道具.核心寶石,
                count: 50
            }
        ]
    },
    {
        category: "等級獎勵",
        name: "210等獎勵",
        id: "new_level_210",
        requiredLevel: 210,
        items: [
            {
                id: 1202116, //拉尼亞的美味便當
                isCustomEquip: true,
                customNote: "+50全屬",
                allStat: 50,
                MAD: 50,
                PAD: 50,
                count: 1
            },
            {
                id: 常用道具.祕法10個,
                count: 10
            },
            {
                id: 常用道具.霞光硬幣,
                count: 3
            },
            {
                id: 常用道具.時裝潛能硬幣,
                count: 20
            },
            {
                id: 常用道具.星力17強化卷,
                count: 2
            },
            {
                id: 常用道具.經驗核心寶石,
                count: 100
            },
            {
                id: 常用道具.艾比米修斯箱子,
                count: 20
            },
            {
                id: 常用道具.魔法豎琴,
                count: 20
            },
            {
                id: 常用道具.強力的輪迴星火,
                count: 20
            }
        ]
    },
    {
        category: "等級獎勵",
        name: "220等獎勵",
        id: "new_level_220",
        requiredLevel: 220,
        items: [
            {
                id: 1114401, //苦行的戒指
                count: 1
            },
            {
                id: 常用道具.祕法10個,
                count: 10
            },
            {
                id: 常用道具.時裝潛能硬幣,
                count: 50
            },
            {
                id: 常用道具.經驗核心寶石,
                count: 100
            },
            {
                id: 常用道具.萌獸卡牌包,
                count: 20
            },
            {
                id: 常用道具.萌獸方塊,
                count: 50
            },
            {
                id: 常用道具.強力的輪迴星火,
                count: 20
            }
        ]
    },
    {
        category: "等級獎勵",
        name: "230等獎勵",
        id: "new_level_230",
        requiredLevel: 230,
        items: [
            {
                id: 常用道具.X卷箱,
                count: 10
            },
            {
                id: 常用道具.祕法10個,
                count: 10
            },
            {
                id: 常用道具.時裝潛能硬幣,
                count: 80
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.經驗核心寶石,
                count: 100
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 50
            },
            {
                id: 常用道具.黃金蘋果,
                count: 30
            },
            {
                id: 常用道具.潘朵拉箱子,
                count: 30
            },
            {
                id: 常用道具.寵物強化箱,
                count: 10
            }
        ]
    },
    {
        category: "等級獎勵",
        name: "240等獎勵",
        id: "new_level_240",
        requiredLevel: 240,
        items: [
            {
                id: 1113211,
                count: 1
            },
            {
                id: 常用道具.祕法10個,
                count: 20
            },
            {
                id: 常用道具.時裝潛能硬幣,
                count: 80
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.經驗核心寶石,
                count: 100
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 200
            },
            {
                id: 常用道具.幸運的寶箱,
                count: 10
            },
            {
                id: 常用道具.萌獸卡牌包,
                count: 20
            }
        ]
    },
    {
        category: "等級獎勵",
        name: "250等獎勵",
        id: "new_level_250",
        requiredLevel: 250,
        items: [
            {
                id: 3014005,
                count: 1
            },
            {
                id: 常用道具.X卷箱,
                count: 10
            },
            {
                id: 常用道具.祕法10個,
                count: 20
            },
            {
                id: 常用道具.霞光硬幣,
                count: 5
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.經驗核心寶石,
                count: 100
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "260等獎勵",
        id: "new_level_260",
        requiredLevel: 260,
        items: [
            {
                id: 1033000, //露耳
                count: 1
            },
            {
                id: 常用道具.真實1個,
                count: 200
            },
            {
                id: 常用道具.霞光硬幣,
                count: 20
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 100
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 30
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 200
            },
            {
                id: 常用道具.X卷箱,
                count: 10
            },
            {
                id: 常用道具.追加1星30,
                count: 3
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "270等獎勵",
        id: "new_level_270",
        requiredLevel: 270,
        items: [
            {
                id: 常用道具.X卷箱,
                count: 20
            },
            {
                id: 常用道具.V卷箱,
                count: 10
            },
            {
                id: 常用道具.真實1個,
                count: 300
            },
            {
                id: 常用道具.霞光硬幣,
                count: 30
            },
            {
                id: 常用道具.星力20強化卷,
                count: 1
            },
            {
                id: 常用道具.追加1星50,
                count: 3
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 50
            },
            {
                id: 常用道具.時裝潛能硬幣,
                count: 100
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 300
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "275等獎勵",
        id: "new_level_275",
        requiredLevel: 275,
        items: [
            {
                id: 常用道具.榮耀卷箱,
                count: 20
            },
            {
                id: 常用道具.恢復卡,
                count: 20
            },
            {
                id: 常用道具.B卷箱,
                count: 10
            },
            {
                id: 常用道具.真實1個,
                count: 500
            },
            {
                id: 常用道具.霞光硬幣,
                count: 50
            },
            {
                id: 常用道具.星力20強化卷,
                count: 2
            },
            {
                id: 常用道具.霞光谷錢袋,
                count: 200
            },
            {
                id: 常用道具.追加1星100,
                count: 2
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 500
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 2
            },
            {
                id: 常用道具.時裝高級潛能硬幣,
                count: 100
            },
        ]
    },

    {
        category: "等級獎勵",
        name: "280等獎勵 - 追加",
        id: "new_level_280_extra",
        requiredLevel: 280,
        items: [
            {
                id: 常用道具.榮耀卷箱,
                count: 30
            },
            {
                id: 常用道具.恢復卡,
                count: 30
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 1000
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "280等獎勵",
        id: "new_level_280",
        requiredLevel: 280,
        items: [
            {
                id: 2632972,
                count: 1
            },
            {
                id: 4001890,
                count: 1
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 2
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.不穩定進化晶片,
                count: 20
            },
            {
                id: 常用道具.真實1個,
                count: 300
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "285等獎勵",
        id: "new_level_285",
        requiredLevel: 285,
        items: [
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 1
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.追加1星100,
                count: 3
            },
            {
                id: 常用道具.不穩定進化晶片,
                count: 20
            },
            {
                id: 常用道具.真實1個,
                count: 300
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "285等獎勵 - 追加",
        id: "new_level_285_extra",
        requiredLevel: 285,
        items: [
            {
                id: 常用道具.B卷箱,
                count: 20
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 1500
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "290等獎勵",
        id: "new_level_290",
        requiredLevel: 290,
        items: [
            {
                id: 4001890,
                count: 2
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 2
            },
            {
                id: 常用道具.星力20強化卷,
                count: 3
            },
            {
                id: 常用道具.不穩定進化晶片,
                count: 30
            },
            {
                id: 常用道具.真實1個,
                count: 300
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "290等獎勵 - 追加",
        id: "new_level_290_extra",
        requiredLevel: 290,
        items: [
            {
                id: 常用道具.榮耀卷箱,
                count: 40
            },
            {
                id: 常用道具.恢復卡,
                count: 40
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 2000
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "295等獎勵",
        id: "new_level_295",
        requiredLevel: 295,
        items: [
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 1
            },
            {
                id: 常用道具.星力20強化卷,
                count: 5
            },
            {
                id: 常用道具.追加1星100,
                count: 5
            },
            {
                id: 常用道具.不穩定進化晶片,
                count: 30
            },
            {
                id: 常用道具.真實1個,
                count: 300
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "295等獎勵 - 追加",
        id: "new_level_295_extra",
        requiredLevel: 295,
        items: [
            {
                id: 常用道具.B卷箱,
                count: 30
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 2500
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "300等獎勵",
        id: "new_level_300",
        requiredLevel: 300,
        items: [
            {
                id: 4001890,
                count: 3
            },
            {
                id: 常用道具.時裝自選潛能硬幣,
                count: 2
            },
            {
                id: 常用道具.星力20強化卷,
                count: 5
            },
            {
                id: 常用道具.追加1星100,
                count: 5
            },
            {
                id: 常用道具.不穩定進化晶片,
                count: 50
            },
            {
                id: 常用道具.進化晶片選擇卷,
                count: 50
            },
            {
                id: 常用道具.真實1個,
                count: 500
            },
        ]
    },
    {
        category: "等級獎勵",
        name: "300等獎勵 - 追加",
        id: "new_level_300_extra",
        requiredLevel: 300,
        items: [
            {
                id: 常用道具.榮耀卷箱,
                count: 50
            },
            {
                id: 常用道具.恢復卡,
                count: 50
            },
            {
                id: 常用道具.B卷箱,
                count: 50
            },
            {
                id: 常用道具.霞光谷鑽石,
                count: 5000
            },
        ]
    },
]


