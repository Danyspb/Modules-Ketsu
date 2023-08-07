function Chapters ( request, extra, javascriptConfig, output ) {
        this.request = request;
        this.extra = extra;
        this.javascriptConfig = javascriptConfig;
        this.output = output;
}

function ModuleRequest ( url, method, headers, httpBody ) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.httpBody = httpBody;
}

function Extra ( commands, extraInfo ) {
        this.commands = commands;
        this.extraInfo = extraInfo;
}

function Commands ( commandName, params ) {
        this.commandName = commandName;
        this.params = params;
}

function JavascriptConfig ( removeJavascript, loadInWebView, javaScript ) {
        this.removeJavascript = removeJavascript;
        this.loadInWebView = loadInWebView;
        this.javaScript = javaScript;
}

function KeyValue ( key, value ) {
        this.key = key;
        this.value = value;
}

function Output ( videos, images, text ) {
        this.videos = videos;
        this.images = images;
        this.text = text;
}

function Videos ( needsResolver, rawVideo ) {
        this.needsResolver = needsResolver;
        this.rawVideo = rawVideo;
}

function NeedsResolver ( resolverIdentifier, link ) {
        this.resolverIdentifier = resolverIdentifier;
        this.link = link;
}

function RawVideo ( video, subs ) {
        this.video = video;
        this.subs = subs;
}

function Video ( videoQuality, videoLink ) {
        this.videoQuality = videoQuality;
        this.videoLink = videoLink;
}

function Text ( text ) {
        this.text = text;
}

function Subtitles( link,language ) {
        this.language = language;
        this.link = link;
}

function getFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
}


var savedData = document.getElementById( 'ketsu-final-data' );
var parsedJson = JSON.parse( savedData.innerHTML );
var emptyKeyValue = [ new KeyValue( '', '' ) ];

var output;  // Type Output 
var subs = [];

var dm = 'https://watch-free.tv/fetch/';
    var token = window._token;
    var id = document.querySelector('#video_key').value;
    var reqApi = `${dm}${id}?_token=${token}`;
    var content = getFile(reqApi);
    var dons = JSON.parse(content);
    var urlm3u  = dons.source;
    var  trak = dons.tracks;
    for(i = 0; i < trak.length; i++){
        var t = trak[i];
        var linksub = t.match(/https.*(vtt)/gm)[0];
        var lang = t.split(']')[0].replace('[','');
        var sub = new Subtitles(new ModuleRequest(linksub,'get',emptyKeyValue,null),lang);
        subs.push(sub);
}

output = {};
const video = new Video( 'Normal', new ModuleRequest( urlm3u, 'get', emptyKeyValue, null ) );
output.rawVideo = [ new RawVideo( [ video ], subs ) ];


let emptyExtra = new Extra( [ new Commands( '', emptyKeyValue ) ], emptyKeyValue );
var chaptersObject = new Chapters( new ModuleRequest('', '', emptyKeyValue, null), emptyExtra, new JavascriptConfig( true, false, '' ), new Output( output, null, null ) );
var finalJson = JSON.stringify( chaptersObject );
savedData.innerHTML 