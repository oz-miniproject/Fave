// popup.js
document.getElementById("fetchButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "fetchData" }, response => {
        if (response.error) {
            alert("Error: " + response.error);
        } else {
            console.log("Fetched data:", response);
        }
    });
});
