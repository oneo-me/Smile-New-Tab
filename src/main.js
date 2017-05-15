chrome.browserAction.onClicked.addListener(function (tab) {
    if (window.confirm("确定设置新的默认标签页？\n\n" + tab.url)) {
        localStorage.url = tab.url
    }
})

chrome.tabs.onCreated.addListener(onCreated)

function onCreated(tab) {
    if (tab.url == "chrome://newtab/") {
        chrome.tabs.update(tab.id, { url: localStorage.url || "https://www.google.com", selected: true })
    }
}

chrome.tabs.query({}, function (tabs) {
    tabs.forEach(onCreated)
})