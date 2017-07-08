# ocr-extension

It's a Firefox extension, designed to help blind programmers to understand example codes that were included in the tutorial as an image, and does not have an alt tag or a description;
it uses the [OCR Space](https://ocr.space/) API to 'read' the image.

## How to use
1. Download the repository on master branch
2. Create your own ApiKey on [OCR Space website](http://space.us11.list-manage1.com/subscribe?u=ce17e59f5b68a2fd3542801fd&id=252aee70a1) and insert it on ```const apikey = 'yourapikey'``` on main.js
3. Open ```about:debugging``` on Firefox and click on Enable add-on debugging and Load Temporary Add-on
4. Select the manifest.json file and click ok.

That's it!

## Future plans
### Today
* Be approved on FAC (Yes, this is a university project for Fundamentals of Computer Architecture at UFF/RJ)
### Next months
* Make the extension smart, using machine learning to better understand the images
* Put this project on Firefox add-on pages

## Special thanks
* To André Garzia (@soapdog) who helped me through promise of promise on JavaScript for Firefox Extensions
* To all my group, even those who didn't help by coding, but by making an awesome presentation of what we've done:
Bruno (@bnbelizario), Emilly (@EmillyLeao), Letícia and Pedro.

