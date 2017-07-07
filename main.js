const img = document.getElementsByTagName("IMG");

if (img[0].src) {
    const apiUrl = 'https://api.ocr.space/parse/imageurl';
    const apikey = 'helloworld';
    const imgUrl = img[0].src;
    const queryString = apiUrl +'?apikey=' + apikey + '&url=' + imgUrl;
    const myRequest = new Request(queryString, {method: 'GET'});

    fetch(myRequest)
    .then(function(response) { return response.json(); })
        .then(function(data) {
            const text = data.ParsedResults[0].ParsedText;
            img[0].setAttribute('alt', text);
       })
}