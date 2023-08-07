 

// SCROLL TO LINE 100 TO START CODING.

function getFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, false);
    xhr.send();
    return xhr.responseText;
}
/**
* @param {ModuleRequest} request
* @param {Extra} extra  
* @param {JavascriptConfig} javascriptConfig 
* @param {Output} output 
*/
function Info ( request, extra, javascriptConfig, output ) {
this.request = request;
this.extra = extra;
this.javascriptConfig = javascriptConfig;
this.output = output;
}
/**
* @param {string} url
* @param {string} method  
* @param {KeyValue[]} headers 
* @param {string} [httpBody] 
*/
function ModuleRequest ( url, method, headers, httpBody ) {
this.url = url;
this.method = method;
this.headers = headers;
this.httpBody = httpBody;
}
/**
* @param {Commands[]} commands
* @param {KeyValue[]} extraInfo 
*/
function Extra ( commands, extraInfo ) {
this.commands = commands;
this.extraInfo = extraInfo;
}
/**
* @param {string} commandName
* @param {KeyValue[]} params 
*/
function Commands ( commandName, params ) {
this.commandName = commandName;
this.params = params;
}
/**
* @param {boolean} removeJavascript
* @param {boolean} loadInWebView 

*/
function JavascriptConfig ( removeJavascript, loadInWebView ) {
this.removeJavascript = removeJavascript;
this.loadInWebView = loadInWebView;
this.javaScript = "";
}
/**
* @param {string} key
* @param {string} value 
*/
function KeyValue ( key, value ) {
this.key = key;
this.value = value;
}
/**
* @param {string} chapName
* @param {ModuleRequest} link
* @param {boolean} openInWebView
*/
function Chapter ( chapName, link, openInWebView ) {
this.chapName = chapName;
this.link = link;
this.openInWebView = openInWebView;
}
/**
* @param {ModuleRequest} image
* @param {ModuleRequest} link -This needs to be the url of the first request. If you only have one requests you can do parsedJson.request
* @param {string} title
* @param {string} description
* @param {string[]} genres
* @param {string} field1
* @param {string} field2
* @param {string} field3
* @param {string} field4
* @param {Chapter[]} chapters
*/
function Output ( image, title, link, description, genres, field1, field2, field3, field4, chapters ) {
this.image = image;
this.link = link;
this.title = title;
this.description = description;
this.genres = genres;
this.field1 = field1;
this.field2 = field2;
this.field3 = field3;
this.field4 = field4;
this.chapters = chapters;
}

/*
CODE STARTS HERE: 

- What you need to do is to create a Info Object and save it as a json string on the div with the id: ketsu-final-data, to be more precise the one saved on the variable called savedData below this comment.

- Most of the code is already done, you just need to fill the output variable with an Output object.
*/


var savedData = document.getElementById( 'ketsu-final-data' );
var parsedJson = JSON.parse( savedData.innerHTML );
var emptyKeyValue = [ new KeyValue( '', '' ) ];
var output;  // type : Output'
let episodes = [];
let genres = [];
let verife = document.querySelector('.list-media-attr .category').textContent.trim();

if(verife.includes('movie')){
genres = Array.from(document.querySelectorAll('.text a')).map(g => g.textContent.trim());
var image = document.querySelector('.app-player.mt-3').style.backgroundImage.match(/https.*(jpg|png|jpeg)/gm)[0];
image = new ModuleRequest(image, 'get', emptyKeyValue, null);
var title = document.querySelector('.caption-content h1').textContent;
var duree = document.querySelectorAll('.media-attr .text')[3].textContent.trim();
var release = document.querySelectorAll('.media-attr .text')[4].textContent.trim();
var description = document.querySelectorAll('.media-attr .text')[5].textContent.trim();
var link = parsedJson.request.url;
link = new ModuleRequest(link, 'get', emptyKeyValue, null);
var chapitre = new Chapter(title, new ModuleRequest(parsedJson.request.url, 'get', emptyKeyValue, null), false);
episodes.push(chapitre);
}
else{
var image = document.querySelector('.app-player.mt-3').style.backgroundImage.match(/https.*(jpg|png|jpeg)/gm)[0];
image = new ModuleRequest(image, 'get', emptyKeyValue, null);
var title = document.querySelector('.caption-content h1').textContent;
var duree ='unknow';
var release = document.querySelectorAll('.media-attr .text')[4].textContent.trim();
var description = document.querySelectorAll('.media-attr .text')[5].textContent.trim();
var allepisodes = document.querySelectorAll('.dropdown.episodes .dropdown-item');
for (epis of allepisodes){
    var id = epis.dataset.key;
    var dm = 'https://watch-free.tv/fetch/';
    var token = window._token;
    var id = document.querySelector('#video_key').value;
    var reqApi = `${dm}${id}?_token=${token}`;
    var content = getFile(reqApi);
    var dons = JSON.parse(content);
    var link  = dons.source;
    var title= epis.textContent.trim();
    var chapitre = new Chapter(title, new ModuleRequest(link, 'get', emptyKeyValue, null), false);
    episodes.push(chapitre);
    console.log(episodes);
}
}


/*
// This is an example of code, if you uncomment this and execute it the data needed will be filled and it will display Info page completed on the KETSU app.

output = new Output(
new ModuleRequest('https://d1fdloi71mui9q.cloudfront.net/1JBIg7XxQ3WqZ8AAZPiz_GydL9KJ3v5AKUN1B','GET',[],undefined),
'This is the title', 
parsedJson.request,
'This is the description',
['genre','another one'],
"field 1",
'field2',
'field 3',
'field 4',
[new Chapter('Chapter example',new ModuleRequest('','GET',[],undefined),false)])
*/

let infoPageObject = new Info(new ModuleRequest('', '', emptyKeyValue, null), new Extra([new Commands('', emptyKeyValue)], emptyKeyValue), new JavascriptConfig(false, false, ''),
new Output(image, title, link, description, genres, duree, release, 'ENG', 'Eps: ' + episodes.length, episodes));
var finalJson = JSON.stringify( infoPageObject );
savedData.innerHTML = finalJson;
