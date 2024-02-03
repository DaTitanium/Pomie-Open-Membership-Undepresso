function sendMessageToChangeMood(mood) {
  console.log("request mood to " + mood);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTabId = tabs[0].id;
    chrome.tabs.sendMessage(activeTabId, { action: "setMood", payload: mood });
  });
}

var selectedButton = null;

function clickMoodButton(button, mood) {
  if (selectedButton) selectedButton.classList.remove("clicked");

  button.classList.add("clicked");
  selectedButton = button;
  chrome.storage.sync.set({ selectedButton: button.id });
  sendMessageToChangeMood(mood);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("popup buttons readied");
  chrome.storage.sync.get(["selectedButton"], (result) => {
    if (result.selectedButton) {
      selectedButton = document.getElementById(result.selectedButton);
      selectedButton.classList.add("clicked");
    }
  });

  document
    .getElementById("scary-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_scared"));
  document
    .getElementById("song-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_song_cover"));
  document
    .getElementById("blush-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_blush"));
  document
    .getElementById("sleepy-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_sleepy"));
  document
    .getElementById("neutral-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_neutral"));
  document
    .getElementById("angry-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_angry"));
  document
    .getElementById("cry-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_cry"));
  document
    .getElementById("cool-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_cool"));
  document
    .getElementById("huh-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_huh"));
  document
    .getElementById("hotdog-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_hotdog"));
  document
    .getElementById("choochoo-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_choochoo"));
  document
    .getElementById("cat-button")
    .addEventListener("click", (e) => clickMoodButton(e.target, "_cat"));
});
