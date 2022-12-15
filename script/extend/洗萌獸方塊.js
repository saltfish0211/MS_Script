var familiar = null;
function action(mode, type, selection) {
    if (mode != 1) {
        dispose();
        return;
    }
    if (familiar == null) {
        familiar = cm.getPlayer().getTempValues().get("resetOptionsFamiliar");
        if (familiar == null) {
            cm.getPlayer().dropMessage(1, "發生未知錯誤");
            dispose();
            return;
        }
    }
    if (!cm.haveItem(5743003)) {
        cm.sendOk("#t5743003#不足, 無法進行。");
        dispose();
        return;
    }
    cm.gainItem(5743003, -1);

    familiar.initOptions();
    cm.getPlayer().setFamiliarsChanged(true);
    cm.getPlayer().updateFamiliars();
    cm.sendYesNo("是否需要繼續洗萌獸卡?");
}

function dispose() {
    cm.getPlayer().getTempValues().remove("resetOptionsFamiliar");
    cm.dispose();
}