chrome.browserAction.onClicked.addListener(function (tab) {
    var url = prompt("设置以下链接为默认标签页？", tab.url)
    if (url != null) {
        localStorage.url = url
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