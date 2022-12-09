function ItemEdit (ItemId,EditStatus,Num)
	if (ItemId > 0 && Num != 0){	//這裡if篩選可以擋掉沒寫物品id和數量不為0的情況,但是不知道數量為負數時如何運作
		var info = cm.getItemInfo();
		var toDrop = info.getEquipById(ItemId).copy();//copy是為了修改副本避免全部一起改掉?,而且也不清楚為什麼是先獲得物品訊息再取得物品id
		if (EditStatus["全屬"]){
			toDrop.setStr(EditStatus["全屬"]);
			toDrop.setDex(EditStatus["全屬"]);
			toDrop.setInt(EditStatus["全屬"]);
			toDrop.setLuk(EditStatus["全屬"]);
		}else{
			toDrop.setStr(EditStatus["力"] || toDrop.getStr());//這裡or的篩選不確定是不是為了在沒有輸入改屬的情況下返回原本數值
			toDrop.setDex(EditStatus["敏"] || toDrop.getDex());
			toDrop.setInt(EditStatus["智"] || toDrop.getInt());
			toDrop.setLuk(EditStatus["幸"] || toDrop.getLuk());
		}
		toDrop.setHp(EditStatus["血"] || toDrop.getHp());
		toDrop.setMp(EditStatus["魔"] || toDrop.getMp());
		toDrop.setPad(EditStatus["物攻"] || toDrop.getPad());
		toDrop.setMad(EditStatus["魔攻"] || toDrop.getMad());
		
	}
