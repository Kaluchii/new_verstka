function initializePopup (config) {
    const alreadyInit = easyPopup.popupsList[config.id];

    if (!alreadyInit) {
        const popups = [config];

        easyPopup.addPopups(popups);
    }
}