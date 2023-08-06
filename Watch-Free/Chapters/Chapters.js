 

// SCROLL TO LINE 123 TO START CODING.


/**
 * @param {ModuleRequest} request
 * @param {Extra} extra  
 * @param {JavascriptConfig} javascriptConfig 
 * @param {Output} output 
 */
function Chapters ( request, extra, javascriptConfig, output ) {
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
 * @param {Videos} [videos]
 * @param {ModuleRequest[]} [images] 
 * @param {Text} [text]
*/
function Output ( videos, images, text ) {
        this.videos = videos;
        this.images = images;
        this.text = text;
}
/**
 * @param {NeedsResolver[]} [needsResolver]
 * @param {RawVideo[]} [rawVideo] 
*/
function Videos ( needsResolver, rawVideo ) {
        this.needsResolver = needsResolver;
        this.rawVideo = rawVideo;
}
/**
 * @param {String} resolverIdentifier - You can leave the identifier to "" and KETSU will find it through the url. This is used to select the resolver that will be used to get the video.
 * @param {ModuleRequest} link
*/
function NeedsResolver ( resolverIdentifier, link ) {
        this.resolverIdentifier = resolverIdentifier;
        this.link = link;
}
/**
 * @param {Video[]} [video]
 * @param {Subtitles[]} [subs]
*/
function RawVideo ( video,subs ) {
        this.video = video;
        this.subs = subs;
}
/**
 * @param {ModuleRequest} link
 * @param {String} language
*/
function Subtitles(link,language) {
        this.link = link;
        this.language = language;
}
/**
 * @param {ModuleRequest} videoLink
 * @param {String} videoQuality
*/
function Video ( videoQuality, videoLink ) {
        this.videoQuality = videoQuality;
        this.videoLink = videoLink;
}
/**
 * @param {String} text
*/
function Text ( text ) {
        this.text = text;
}

 function getFile(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, false);
        xhr.send();
        return xhr.responseText;
    }


/*
CODE STARTS HERE: 

- What you need to do is to create a Chapters Object and save it as a json string on the div with the id: ketsu-final-data, to be more precise the one saved on the variable called savedData below this comment.

- Most of the code is already done, you just need to fill the output variable with an Output object, depending on the type of module you are making you need to fill either the Video, Images or Text part of the Output object.
*/

var savedData = document.getElementById( 'ketsu-final-data' );
var parsedJson = JSON.parse( savedData.innerHTML );
var emptyKeyValue = [ new KeyValue( '', '' ) ];
let emptyExtra = new Extra( [ new Commands( '', emptyKeyValue ) ], emptyKeyValue );

var output;  // Type Output
var rawVidSub = [];
var dm = 'https://watch-free.tv/fetch/';
    var token = window._token;
    var id = document.querySelector('#video_key').value;
    var reqApi = `${dm}${id}?_token=${token}`;
    var content = getFile(reqApi);
    var dons = JSON.parse(content);
    console.log(reqApi);
    var url  = dons.source;
    var  trak = dons.tracks;
     var souTitrage = t.map(g=>g.match(/https.*(vtt)/gm)[0]);
     var language = t.map(g=>g.split(']')[0].replace('[',''))
   var video = new Video('default', new ModuleRequest(link , 'get', emptyKeyValue, null));
 rawVidSub.push(new RawVideo([video]));

       

//This examples of code shows you how to fill the output variable depending on the type of module you are making (Video, Image or Text), if you uncomment any of this code and execute it you will see the result on the module creator of KETSU.

/*
// Video Module: 
output = new Output(new Videos([
        new NeedsResolver("",new ModuleRequest("https://streamtape.com/something",'GET',[],undefined))
],[
new RawVideo([
        new Video("720p",new ModuleRequest("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",'GET',[],undefined))
],undefined)
]),undefined,undefined)
*/

/*
//Image Module:
output = new Output(undefined,[
        new ModuleRequest('https://d1fdloi71mui9q.cloudfront.net/1JBIg7XxQ3WqZ8AAZPiz_GydL9KJ3v5AKUN1B','GET',[],undefined),
        new ModuleRequest('https://d1fdloi71mui9q.cloudfront.net/1JBIg7XxQ3WqZ8AAZPiz_GydL9KJ3v5AKUN1B','GET',[],undefined)
])
*/

/*
// Text Module:
output = new Output(undefined,undefined,new Text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only"))
*/

var chaptersObject = new Chapters('', emptyExtra, new JavascriptConfig(true, false, ''), new Output(new Videos(rawVidSub, null), null, null));
var finalJson = JSON.stringify(chaptersObject);
savedData.innerHTML = finalJson;
 