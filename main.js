function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}


function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.id, tab.url);
  }
}

var querying = browser.tabs.query({});
querying.then(logTabs, onError);

var makeItGreen = 'document.body.style.border = "15px solid green"';

var executing = browser.tabs.executeScript(5,{
  code: makeItGreen
});
executing.then(onExecuted, onError);