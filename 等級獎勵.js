//等級獎勵

var status ;
function start () {
    status = -1;
    action(1,0,0);
  }
  
  var PlayerLevel = cm.getlevel();//玩家等級
  var selectionNode = 0;
  WLevel = "等級未達條件";
  RMessage = "你已經領過了哦";
function action (mode,type,selection) {
  if(mode == 1){
    status++;
  }else{
    cm.dispose();
    return;
  }
  var text = "";
  if(status == 0){
      text += "#d#e                等級獎勵" + rn;
      text += "" + c + "#b#e#L2# 10等獎勵" + rn;
      text += "" + c + "#b#e#L2# 30等獎勵" + rn;
      cm.sendsimple(text);
  }else if(status == 1){
      selectionNode = selection;
      switch(selectionNode){
          case 0:
              if(PlayerLevel < 10){
                  text = WLevel;
              }else if(PlayerLevel > 10 && cm.getaddpqlog("10等獎勵") == 0){//需要想一個條件來避免重複領取
                  cm.gainitem();
              }else{
                  text = RMessage;
              }
      }
  }
  cm.sendok(text);
  cm.dispose();

}
