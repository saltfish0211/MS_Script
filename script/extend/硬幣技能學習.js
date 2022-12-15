

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
                    [4310266, 100],
                    [4319902, 20000],
                ]
            },
            {
                id: 80000582,
                level: 2,
                materials:[
                    [4310266, 200],
                    [4319902, 40000],
                    [4036458, 1],
                ]
            },
            {
                id: 80000582,
                level: 3,
                materials:[
                    [4310266, 300],
                    [4319902, 60000],
                    [4036458, 3],
                ]
            },
            {
                id: 80000582,
                level: 4,
                materials:[
                    [4310266, 400],
                    [4319902, 80000],
                    [4036458, 5],
                ]
            },
            {
                id: 80000582,
                level: 5,
                materials:[
                    [4310266, 500],
                    [4319902, 100000],
                    [4036458, 15],
                ]
            }
        ],
    },
    {
        id: 80000586, //名譽勇士
        maxLevel: 4,
        canRetrieve: true,
        skillList: [
            {
                id: 80000586,
                level: 1,
                materials:[
                    [4310269, 100],
                ]
            },
            {
                id: 80000586,
                level: 2,
                materials:[
                    [4310269, 100],
                ]
            },
            {
                id: 80000586,
                level: 3,
                materials:[
                    [4310269, 200],
                ]
            },
            {
                id: 80000586,
                level: 4,
                materials:[
                    [4310269, 200],
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
                    [4319902, 100000],
                ]
            },
            {
                id: 80000613,
                level: 1,
                materials:[
                    [4310272, 200],
                    [4319902, 200000],
                ]
            },
            {
                id: 80000614,
                level: 1,
                materials:[
                    [4310272, 400],
                    [4319902, 300000],
                ]
            },
            {
                id: 80000615,
                level: 1,
                materials:[
                    [4310272, 800],
                    [4319902, 400000],
                ]
            },
            {
                id: 80000616,
                level: 1,
                materials:[
                    [4310272, 2000],
                    [4319902, 500000],
                ]
            }
        ],
    },

]

var selectedOption;
var selectedSkill;
var currentSkillLevel;
var reqItem;
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
            var text = Logo + "#d#e此為技能學習系統（帳號共通），您想要做什麼？\r\n";
            text += maskListNode(0, "#d#e#s" + 80000582 + ":#【冒險技能】#b#n升級冒險勇士技能");
            text += maskListNode(1, "#d#e#s" + 80000583 + ":#【名譽技能】#b#n升級名譽勇士技能");
            //text += maskListNode(2, "#d#e#s" + 80000616 + ":#【GLORY技能】#b#n升級GLORY小隊技能");*/
            text += maskListNode(9, "#d#e#i" + 2280003 + ":#【找回技能】#b#n重新取得已經學習過的技能");
            cm.sendOk(text);
            break;
        case 1:
            var text = "";
            selectedOption = selection;
            if (selectedOption == 9) {
                text = "#d#e重新領取已經學會的技能無須材料，確定要繼續嗎？";
                cm.sendYesNo(text);
            }
            else {
                selectedSkill = skills[selection];
                currentSkillLevel =  cm.getPlayer().getCharacterSet("學習技能_" +selectedSkill.id + "_" + cm.getPlayer().getAccountID());
                if(currentSkillLevel == selectedSkill.maxLevel){
                    cm.sendOk("#d#e您的此技能已經到達最大等級！");
                    status = -1;
                }
                else{
                    text += "#d#e技能#s" + selectedSkill.id + "##q"+selectedSkill.id+"#：\r\n";
                    text += "您目前的技能等級為：" + currentSkillLevel + "\r\n";
                    text += "升級需要以下材料，確定要繼續嗎？\r\n#b#n";
                    reqItem = selectedSkill.skillList[currentSkillLevel].materials;
                    haveItem = true;
                    for (var i = 0; i < reqItem.length; i++) {
                        if (!cm.haveItem(reqItem[i][0], reqItem[i][1])) {
                            text += "#r" + maskItem(reqItem[i][0]) + "x" + reqItem[i][1] + "\r\n";
                            haveItem = false;
                        }
                        else {
                            text += "#b" + maskItem(reqItem[i][0]) + "x" + reqItem[i][1] + "\r\n";
                        }
                    }
                    cm.sendYesNo(text);
                }
            }
            break;
        case 2:
            if (selectedOption == 9) {
                var textN = "";
                for(var i =0;i<skills.length;i++){
                    var sklv = cm.getPlayer().getCharacterSet("學習技能_" + skills[i].id + "_" + cm.getPlayer().getAccountID());
                    if (sklv > 0 && skills[i].canRetrieve) {
                        for(var j=0;j<sklv;j++){
                            var skill = skills[i].skillList[j];
                            cm.teachSkill(skill.id, skill.level);
                            textN += "#s"+skill.id+"##q"+skill.id+"# 等級:"+skill.level + "\r\n"
                        }
                    }
                }
                var text = "#d#e學習技能成功，以下是重新學習的技能列表：\r\n#b#n" + textN;
                cm.sendNext(text);
                status = -1;
            }
            else{
                if (!haveItem) {
                    cm.sendOk("您的素材不足");
                    cm.dispose();
                    return;
                }
                else {
                    for (var i = 0; i < reqItem.length; i++) {
                        cm.gainItem(reqItem[i][0], -1 * reqItem[i][1]);
                    }
                    cm.teachSkill(selectedSkill.skillList[currentSkillLevel].id, selectedSkill.skillList[currentSkillLevel].level);
                    cm.getPlayer().setCharacterSet("學習技能_" +selectedSkill.id + "_" + cm.getPlayer().getAccountID(), currentSkillLevel+1);
                    var text = "#b#e學習技能#s"+selectedSkill.id+"##q"+selectedSkill.id+"#成功。";
                    cm.sendNext(text);
                    status = -1;
                }
            }
            break;
    }
}

