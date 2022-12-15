/*
糖果NPC腳本
要用來讓新手升到10等並送去自由市場
要給他萬能選單
*/

var status;

function start(){
  status = -1;
  action(1,0,0);
}

function action(mode,type,selection){
  if (mode == 1){
    status++;
  }else{
  status--;
  }
  if(status == 0){
    cm.sendNext("你需要我幫你傳送到自由市場之後並領取新手禮包就點下一頁");
  }else if(status == 1){
    cm.sendOk("高歌離席~");
    cm.warp();
    dm.gainItem();
    cm.setLevel();
    cm.dispose();
  }
}
