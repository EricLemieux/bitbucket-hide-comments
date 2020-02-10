const browser = require("webextension-polyfill");

const none = "none";

function toggleComments() {
  Array.from(document.querySelectorAll("[id^=comment-]"))
    .forEach(node => {
      const commentBlock = node.parentNode.parentNode.parentNode;
      const display = commentBlock.style.display;

      commentBlock.style.display = display === none ? null : none;
    });
}

browser.runtime.onMessage.addListener(request => {
  if (request.event === "toggle") {
    toggleComments();
  }
});
