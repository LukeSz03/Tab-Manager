var tabmanager
tabmanager = document.getElementById('main');
chrome.tabs.query({}, loadTabs);


function loadTabs(tabs) {
    tabs.forEach(element => console.log(element));
}

function close() {

}











