chrome.runtime.onInstalled.addListener(async () => {
    let url = "https://paypal.me/dement6d"
    await chrome.tabs.create({ url });
})