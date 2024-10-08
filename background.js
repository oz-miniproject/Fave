// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchData") {
        someAsyncFunction()
            .then(result => {
                sendResponse(result);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                sendResponse({ error: "Failed to fetch data" });
            });
        return true; // 비동기 응답을 알리기 위해 true 반환
    }
});
