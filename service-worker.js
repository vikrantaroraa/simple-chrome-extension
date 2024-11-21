// We don't actually need this code, it was just to understand how to run a script in the background on clicking
// the extension icon.

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: {
//       tabId: tab.id,
//     },
//     func: () => {
//       alert("Hello from my extension!");
//     },
//   });
// });
