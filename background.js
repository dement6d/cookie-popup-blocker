chrome.runtime.onInstalled.addListener(async () => {
    let url = "https://snipesharp.xyz"
    let tab = await chrome.tabs.create({ url });
})