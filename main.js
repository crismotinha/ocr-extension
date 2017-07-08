const img = document.getElementsByTagName("IMG");

for (let i = 0; i < img.length; i++){
    if (img[i].src) {
        const apiUrl = 'https://api.ocr.space/parse/imageurl';
        const apikey = '538df4ddfd88957';
        const imgUrl = img[i].src;
        const queryString = apiUrl +'?apikey=' + apikey + '&url=' + imgUrl;
        const myRequest = new Request(queryString, {method: 'GET'});

        fetch(myRequest)
        .then(function(response) { return response.json(); })
        .then(function(data) {
            const text = data.ParsedResults[0].ParsedText;
            img[i].setAttribute('alt', text);
        })
    }    
}

