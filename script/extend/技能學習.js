

load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
importPackage(Packages.client.inventory);
load("scripts/霞光共通.js");

var skills = [
    {
        id: 80000582,  //冒險勇士
        maxLevel: 5,
        canRetrieve: true,
        skillList: [
            {
                id: 80000582,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000582,
                level: 2,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000582,
                level: 3,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000582,
                level: 4,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000582,
                level: 5,
                materials:[
                    [4310272, 100],
                ]
            }
        ],
    },
    {
        id: 80000583, //名譽勇士
        maxLevel: 4,
        canRetrieve: true,
        skillList: [
            {
                id: 80000583,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000583,
                level: 2,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000583,
                level: 3,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000583,
                level: 4,
                materials:[
                    [4310272, 100],
                ]
            }
        ],
    },
    {
        id: 80000616, //GLORY小隊
        maxLevel: 5,
        canRetrieve: true,
        skillList: [
            {
                id: 80000612,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000613,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000614,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000615,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            },
            {
                id: 80000616,
                level: 1,
                materials:[
                    [4310272, 100],
                ]
            }
        ],
    },

]

var selectedOption;
var selectedSkill;
var haveItem;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }
    else {
        cm.sendOk("等你想好的時候再來找我吧。");
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var text = Logo + "#d#e此為技能學習系統，您想要做什麼？\r\n";
            text += maskListNode(1, "#d#e#s" + 80000582 + ":#【冒險技能】#b#n升級冒險勇士技能");
            text += maskListNode(2, "#d#e#s" + 80000583 + ":#【名譽技能】#b#n升級名譽勇士技能");
            text += maskListNode(3, "#d#e#s" + 80000616 + ":#【GLORY技能】#b#n升級GLORY小隊技能");
            text += maskListNode(9, "#d#e#i" + 2280003 + ":#【找回技能】#b#n重新取得已經學習過的技能");
            cm.sendOk(text);
            break;
        case 1:
            var text = "";
            selectedOption = selection;
            if (selectedOption == 9) {
                text = "#d#e重新領取已經學會的技能無須材料，確定要繼續嗎？";
            }
            else {
                selectedSkill = skills[selection];
                text += "#d#e學技能#s" + selectedSkill[id] + "#";
                text += "需要以下材料，確定要繼續嗎？\r\n#n";
                haveItem = true;
                for (var i = 0; i < reqItem[selection - 1].length; i++) {
                    if (!cm.haveItem(reqItem[selection - 1][i][0], reqItem[selection - 1][i][1])) {
                        text += "#r" + maskItem(reqItem[selection - 1][i][0]) + "x" + reqItem[selection - 1][i][1] + "\r\n";
                        haveItem = false;
                    }
                    else {
                        text += "#b" + maskItem(reqItem[selection - 1][i][0]) + "x" + reqItem[selection - 1][i][1] + "\r\n";
                    }
                }
            }
            cm.sendYesNo(text);
            break;
        case 2:
            if (selectedOption == 9) {
                for(var i =0;i<skills.length;i++){
                    var skid = cm.getPlayer().getCharacterSet("學習技能_" + skills[i].id + "_" + cm.getPlayer().getId());
                    if (skid > 0) {
                        cm.teachSkill(skills[i].id, skid);
                    }
                }
                var text = "#b#e學習技能成功。\r\n";
                cm.sendNext(text);
                status = -1;
            }
            if (!haveItem) {
                cm.sendOk("您的素材不足");
                cm.dispose();
                return;
            }
            else {
                for (var i = 0; i < reqItem[selectedOption - 1].length; i++) {
                    cm.gainItem(reqItem[selectedOption - 1][i][0], -1 * reqItem[selectedOption - 1][i][1]);
                }
                cm.getPlayer().setCharacterSet("創世技能_" + cm.getPlayer().getId(), 1);
                cm.teachSkill(80002632, 1);
                cm.teachSkill(80002633, 1);
                var text = "#b#e學習技能成功。\r\n";
                cm.sendNext(text);
                status = -1;
            }
            break;
    }
}


function is封印創世(itemid) {
    for (var i = 0; i < equips.length; i++) {
        if (itemid == equips[i][0]) {
            return true;
        }
    }
    return false;
}

function is創世(itemid) {
    for (var i = 0; i < equips.length; i++) {
        if (itemid == equips[i][1]) {
            return true;
        }
    }
    return false;
}
