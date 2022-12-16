function ItemEdit (ItemId,EditType,status,Num){//type1全屬,2力,3敏,4智,5幸,6血,7魔,8ad,9ap
    if(ItemId > 0 && Num != 0){
    	var info = cm.getItemInfo();
	    var toDrop = info.getEquipById(ItemId).copy();
            if(EditType == 1 ){//全屬
                toDrop.setStr(status);
                toDrop.setDex(status);
                toDrop.setInt(status);
                toDrop.setLux(status);
            }else if(EditType == 2 ){
                toDrop.setStr(status);
            }else if(EditType == 3 ){
                toDrop.setDex(status);
            }else if(EditType == 4 ){
                toDrop.setInt(status);
            }else if(EditType == 5 ){
                toDrop.setLux(status);
            }else if(EditType == 6 ){
                toDrop.setHp(status);
            }else if(EditType == 7 ){
                toDrop.setMp(status);
            }else if(EditType == 8 ){
                toDrop.setPad(status);
            }else if(EditType == 9 ){
                toDrop.setMad(status);
            }else{
                cm.sendok("欸恭喜,debug時間到了")
            }
        cm.addByItem(toDrop);
    }else{
        cm.sendok("你沒輸入裝備id或沒輸入數量喔");
        cm.dispose();
    }

}
//草稿
