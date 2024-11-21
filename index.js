const sayHello = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Hello from my extension!");
      console.log("function is called");
    },
  });
};

document.getElementById("myButton").addEventListener("click", sayHello);
