chrome.browserAction.onClicked.addListener(function(tab) {
	var url = prompt('设置以下链接为默认标签页？', tab.url || tab.pendingUrl)
	if (url != null) {
		localStorage.url = url
	}
})

chrome.tabs.onCreated.addListener(onCreated)

function onCreated(tab) {
	var url = tab.url || tab.pendingUrl
	if (url === 'chrome://newtab/' || url === 'edge://newtab/') {
		chrome.tabs.update(tab.id, {
			url: localStorage.url || 'https://www.google.com/ncr',
			selected: true
		})
	}
}

chrome.tabs.query({}, function(tabs) {
	tabs.forEach(onCreated)
})
