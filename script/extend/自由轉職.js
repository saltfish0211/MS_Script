/*自由轉職*///夜海撰寫


load('nashorn:mozilla_compat.js');
importPackage(Packages.tools);
load("scripts/霞光共通.js");
load("scripts/config/CommonItemConfig.js");

var status = -1;
var 目前職業;
var 目前職業分類;
var 目前職業名稱;
var 目標職業;
var 目標職業名稱;
var 是否是可轉職職業;
var price = 100000;
var currentSet = "自由轉職_" + getToday();
var jobData = new Array(
    [1,112,"英雄"],
    [1,122,"聖騎士"],
    [1,132,"黑騎士"],
    [1,1112,"聖魂劍士"],
    [1,2112,"狂狼勇士"],
    [1,3112,"惡魔殺手"],
    [1,3122,"惡魔復仇者"],
    [1,3712,"爆拳槍神"],
    [1,4112,"劍豪"],
    [1,5112,"米哈逸"],
    [1,6112,"凱薩"],
    [1,15112,"阿戴爾"],
    
    [2,312,"箭神"],
    [2,322,"神射手"],
    [2,332,"開拓者"],
    [2,1312,"破風使者"],
    [2,3312,"狂豹獵人"],
    [2,2312,"精靈遊俠"],
    [2,6312,"凱殷"],
    
    [3,212,"火毒大魔導"],
    [3,222,"冰雷大魔導"],
    [3,232,"神聖大魔導"],
    [3,1212,"烈焰巫師"],
    [3,2217,"龍魔導士"],
    [3,3212,"煉獄巫師"],
    [3,2712,"夜光"],
    [3,4212,"陰陽師"],
    [3,14212,"凱內西斯"],
    [3,15212,"伊利恩"],
    [3,11200,"幻獸師"],

    [4,412,"夜使者"],
    [4,422,"暗影神偷"],
    [4,434,"影武者"],
    [4,1412,"暗夜使者"],
    [4,2412,"幻影俠盜"],
    [4,6412,"卡蒂娜"],
    [4,16412,"虎影"],

    [5,512,"拳霸"],
    [5,522,"槍神"],
    [5,532,"重砲指揮官"],
    [5,1512,"閃雷悍將"],
    [5,3512,"機甲戰神"],
    [5,3612,"傑諾"],
    [5,2512,"隱月"],
    [5,15512,"亞克"],
	[5,6512,"天使破壞者"],
	[5,17512,"墨玄"]
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendSimple("請您回心轉意時隨時來找我。");
        cm.dispose()
        return;
    }

    if(status == 0){
        var text = "#d#e歡迎來到自動轉職系統\r\n";
        text += "我可以將您變換為任何您想要成為的職業，但是每次需要收您#r10萬楓點#d。\r\n";
        text += "轉職收費後不得退費，請謹慎選擇想要的職業，即使如此還是要繼續嗎？";
        cm.sendYesNo(text);
    }
    else if(status == 1){
        if (cm.getPlayer().getCSPoints(2) < price) {
            cm.sendSimple("轉職需要"+price+"楓點，您的楓點不夠。");
            cm.dispose()
            return;
        }
        else{
            var text = "#r#e請詳細閱讀以下注意事項：\r\n";
            text += "#b自由轉職目的為提供玩家玩法多樣性的變化，請確實確認以下項目是否已檢查完成，若因未檢查完成即進行轉職造成損失，GM團隊不予補償。\r\n";
            text += "#k1. 我已確定主、副武器均已拔除\r\n";
            text += "#k2. 我已確定V核心全數技能、傳授所有技能均已拿下來\r\n";
            text += "#k3. 我清楚轉職後ARC的主要屬性不會改變，需要由祕法銀行存入後再取出才會拿到正確屬性。\r\n";
            text += "#k4. 我清楚轉職後技能書需要重新購買。\r\n";
            text += "#k5. 我清楚轉職後#r騎寵技能會不見！\r\n";
            text += "#k5. 我清楚轉職後#r騎寵技能會不見！！\r\n";
            text += "#k5. 我清楚轉職後#r騎寵技能會不見！！！\r\n";
            text += "#b以上事項是否已充分閱讀？很重要要說三次（1/3）\r\n";
            cm.sendYesNo(text);
        }
    }
    else if(status == 2){
        var text = "#r#e請詳細閱讀以下注意事項：\r\n";
        text += "#b自由轉職目的為提供玩家玩法多樣性的變化，請確實確認以下項目是否已檢查完成，若因未檢查完成即進行轉職造成損失，GM團隊不予補償。\r\n";
        text += "#k1. 我已確定主、副武器均已拔除\r\n";
        text += "#k2. 我已確定V核心全數技能、傳授所有技能均已拿下來\r\n";
        text += "#k3. 我清楚轉職後ARC的主要屬性不會改變，需要由祕法銀行存入後再取出才會拿到正確屬性。\r\n";
        text += "#k4. 我清楚轉職後技能書需要重新購買。\r\n";
        text += "#k5. 我清楚轉職後#r騎寵技能會不見！\r\n";
        text += "#k5. 我清楚轉職後#r騎寵技能會不見！！\r\n";
        text += "#k5. 我清楚轉職後#r騎寵技能會不見！！！\r\n";
        text += "#b以上事項是否已充分閱讀？很重要要說三次（2/3）\r\n";
        cm.sendYesNo(text);
    }
    else if(status == 3){
        var text = "#r#e請詳細閱讀以下注意事項：\r\n";
        text += "#b自由轉職目的為提供玩家玩法多樣性的變化，請確實確認以下項目是否已檢查完成，若因未檢查完成即進行轉職造成損失，GM團隊不予補償。\r\n";
        text += "#k1. 我已確定主、副武器均已拔除\r\n";
        text += "#k2. 我已確定V核心全數技能、傳授所有技能均已拿下來\r\n";
        text += "#k3. 我清楚轉職後ARC的主要屬性不會改變，需要由祕法銀行存入後再取出才會拿到正確屬性。\r\n";
        text += "#k4. 我清楚轉職後技能書需要重新購買。\r\n";
        text += "#k5. 我清楚轉職後#r騎寵技能會不見！\r\n";
        text += "#k5. 我清楚轉職後#r騎寵技能會不見！！\r\n";
        text += "#k5. 我清楚轉職後#r騎寵技能會不見！！！\r\n";
        text += "#b以上事項是否已充分閱讀？很重要要說三次（3/3）\r\n";
        cm.sendYesNo(text);
    }
    else if (status == 4) {
        目前職業 = cm.getJob();
        是否是可轉職職業 = false;
        for(var i=0;i<jobData.length;i++){
            if( 目前職業==jobData[i][1]){
                是否是可轉職職業 = true;
                目前職業分類 = jobData[i][0];
                目前職業名稱 = jobData[i][2];
                break;
            }
        }
        if(!是否是可轉職職業){
            if(cm.getPlayer().getJob() == 11212 || cm.getPlayer().getJob() == 11211 || cm.getPlayer().getJob() == 11210){
                是否是可轉職職業 = true;
                目前職業名稱 = "幻獸師";
                目前職業分類 = cm.getPlayer().getJob();
            }
            else{
                cm.sendOk("您的職業不能自由轉職喔! \r\n#r幻獸師請先轉為熊型態後再嘗試。職業代碼：" + cm.getPlayer().getJob());
                cm.dispose();
                return;
            }
        }
        
        var str = "";
        for(var i=0;i<jobData.length;i++){
                str += "#L"+i+"#轉職成為 #b"+jobData[i][2]+"#k#l\r\n";
        }        
        cm.sendSimple(str);
    } else if (status == 5) {
        目標職業 = jobData[selection][1];
        目標職業名稱 = jobData[selection][2];
        var text = "#b#e確定要轉職為"+目標職業名稱+"嗎？\r\n";
        cm.sendYesNo(text);
    } else if (status == 6) {
        cm.getPlayer().modifyCSPoints(2, -1 * price);
        FileoutputUtil.logToFile("logs/自由轉職.txt", "紀錄時間:" + FileoutputUtil.NowTime() + " 角色名稱:" + cm.getPlayer().getName() + " 目前職業:" + 目前職業名稱+ " 目標職業:" + 目標職業名稱 +"\r\n");
        cm.getPlayer().changeJob(目標職業);
        cm.clearSkills();
        var text = "#b#e您已經轉職為"+目標職業名稱+"。\r\n";
        cm.sendSimple(text);
        cm.dispose();
        return;
    } 
}