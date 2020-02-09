const browser = require("webextension-polyfill");

function hideComments() {
    Array.from(document.querySelectorAll("[^id=comment-"))
        .forEach(node => node.parentNode.parentNode.parentNode.style.display = "none");
}

browser.runtime.onMessage.addListener(request => {
    if (request.event === "toggle") {
        hideComments();
    }
});
