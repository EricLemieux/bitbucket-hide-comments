const browser = require("webextension-polyfill");

function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
        browser.tabs.sendMessage(
            tab.id,
            {event: "toggle"}
        ).then(response => {
            console.log("Message from the content script:");
            console.log(response.response);
        }).catch(onError);
    }
}

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(onError);
});

function onError(error) {
    console.error(`Error: ${error}`);
}
