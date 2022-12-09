function ItemEdit (ItemId,EditStatus,Num)
	if (ItemId > 0 && Num != 0){
		var info = cm.getItemInfo();
		var toDrop = info.getEquipById(ItemId).copy();//copy是為了修改副本避免全部一起改掉?
		if (EditStatus["全屬"]){
			toDrop.setStr(EditStatus["全屬"]);
			toDrop.setDex(EditStatus["全屬"]);
			toDrop.setInt(EditStatus["全屬"]);
			toDrop.setLuk(EditStatus["全屬"]);
		}else{
			toDrop.setStr(EditStatus["力"] || toDrop.getStr());
			toDrop.setDex(EditStatus["敏"] || toDrop.getDex());
			toDrop.setInt(EditStatus["智"] || toDrop.getInt());
			toDrop.setLuk(EditStatus["幸"] || toDrop.getLuk());
		}
		
	}
