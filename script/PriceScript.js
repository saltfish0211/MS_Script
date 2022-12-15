function getPriceName(type) {
    switch(type) {
        case 0:
            return "楓幣";
        case 1:
            return "樂豆點";
        case 2:
            return "楓葉點數";
        case 3:
            return "里程點數";
        default:
            return ("#v" + type + "#");
    }
}

function getPrice(type) {
    switch(type) {
        case 0:
            return cm.getMeso();
        case 1:
            return cm.getNX(1);
        case 2:
            return cm.getNX(2);
        case 3:
            return cm.getPlayer().getMileage();
        default:
            return cm.getItemQuantity(type);
    }
}

function gainPrice(type, amount) {
    if (type == 0) {
        if (amount >= 0 || cm.getMeso() >= -amount) {
            cm.gainMeso(amount);
        } else {
            return false;
        }
    } else if (type == 1) {
        if (amount >= 0 || cm.getNX(1) >= -amount) {
           cm.gainNX(1, amount);
        } else {
            return false;
        }
    } else if (type == 2) {
       if (amount >= 0) {
           cm.gainNX(1, amount);
       } else if (cm.getNX(1) + cm.getNX(2) >= -amount) {
           if (cm.getNX(2) >= -amount) {
               cm.gainNX(2, amount);
           } else {
               if (cm.getNX(2) > 0) {
                   amount += cm.getNX(2);
                   cm.gainNX(2, -cm.getNX(2));
               }
               cm.gainNX(1, amount);
           }
       } else {
           return false;
       }
   } else if (type == 3) {
        if (amount >= 0 || cm.getPlayer().getMileage() >= -amount) {
           cm.getPlayer().modifyMileage(amount);
        } else {
            return false;
        }
   } else if (type >= 1000000) {
        if (amount >= 0 || (type >= 2000000 && cm.haveItem(type, -amount))) {
           cm.gainItem(type, amount);
        } else if (amount < 0 && type < 2000000) {
            var slots = Array();
            cm.getInventory(1).listById(type).forEach(function(item){
                if ((item.getAttribute() & 0x1400) == 0 && !item.isMvpEquip()) {
                    slots.push(item.getPosition());
                    return;
                }
            });
            if (slots.length < -amount) {
                return false;
            }
            var i = 0;
            for each (slot in slots) {
                cm.removeItem(slot, 1, 1);
                i++;
                if (-amount <= i) {
                    break;
                }
            }
        } else {
            return false;
        }
   } else {
        return false;
   }
   return true;
}