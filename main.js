const imgs = Array.from(document.getElementsByTagName("IMG")),
  apiUrl = 'https://api.ocr.space/parse/imageurl',
  apikey = '538df4ddfd88957';

imgs.forEach(img => {
  if (img.src) {
    let imgUrl = img.src;
    let queryString = `${apiUrl}?apikey=${apikey}&url=${imgUrl}`;
    let myRequest = new Request(queryString, {method: 'GET'});

    fetch(myRequest)
    .then(response => response.json())
    .then(data => {
      let text = data.ParsedResults[0].ParsedText;
      img.setAttribute('alt', text);
    });
  }
});

