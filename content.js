// content.js
chrome.runtime.sendMessage({ action: "fetchData" }, response => {
    if (response.error) {
        console.error("Error:", response.error);
    } else {
        console.log("Received data:", response);
    }
});
