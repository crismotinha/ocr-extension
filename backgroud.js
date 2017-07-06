browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    var apiUrl = 'https://api.ocr.space/parse/imageurl';
    var apikey = 'helloworld';
    var imgUrl = 'http://i.imgur.com/fwxooMv.png';
    var queryString = apiUrl +'?apikey=' + apikey + '&url=' + imgUrl;
var myRequest = new Request(queryString, {method: 'GET'});

fetch(myRequest)
.then(function(response) { return response.json(); })
  .then(function(data) {
    console.log(data);
  })
}
});