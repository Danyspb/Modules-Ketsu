function Chapters(request, extra, javascriptConfig, output) {
    this.request = request;
    this.extra = extra;
    this.javascriptConfig = javascriptConfig;
    this.output = output;
}

function ModuleRequest(url, method, headers, httpBody) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.httpBody = httpBody;
}

function Extra(commands, extraInfo) {
    this.commands = commands;
    this.extraInfo = extraInfo;
}

function Commands(commandName, params) {
    this.commandName = commandName;
    this.params = params;
}

function JavascriptConfig(removeJavascript, loadInWebView, javaScript) {
    this.removeJavascript = removeJavascript;
    this.loadInWebView = loadInWebView;
    this.javaScript = javaScript;
}

function KeyValue(key, value) {
    this.key = key;
    this.value = value;
}

function Output(videos, images, text) {
    this.videos = videos;
    this.images = images;
    this.text = text;
}

function Videos(needsResolver, rawVideo) {
    this.needsResolver = needsResolver;
    this.rawVideo = rawVideo;
}

function NeedsResolver(resolverIdentifier, link) {
    this.resolverIdentifier = resolverIdentifier;
    this.link = link;
}

function RawVideo(video) {
    this.video = video;
}

function Video(videoQuality, videoLink) {
    this.videoQuality = videoQuality;
    this.videoLink = videoLink;
}

function getFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', url, false);
    xhr.send();
    return xhr.responseText;
}

function Text(text) {
    this.text = text;
}
var output = [];
var savedData = document.getElementById('ketsu-final-data');
var parsedJson = JSON.parse(savedData.innerHTML);
var emptyKeyValue = [new KeyValue('', '')];
var divservers = document.querySelectorAll('#content > div > div.post-wrapper > center:nth-child(1) > div');
for (server of divservers) {
    if (server.className == 'spoiler' || server.className == 'spoil') {
        continue;
    }
    var nameServer = server.querySelectorAll('titre6')[1].textContent.split('Host : ').pop().toUpperCase().replace('VIEWSB', 'WATCHSB').replaceAll('\\n', '');
    var scripts = server.querySelector('p[type=\"text/javap\"]');
    if (scripts.innerHTML.includes('unescape')) {
        var test = scripts.innerHTML.replace('document.write(', '').replace(/\\);$/gm, '');
        var html = eval(test);
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var link = doc.querySelector('iframe').src;
    }
    
    output.push(new NeedsResolver(nameServer, new ModuleRequest(link, 'get', emptyKeyValue, null)));
}
let emptyExtra = new Extra([new Commands('', emptyKeyValue)], emptyKeyValue);
var chaptersObject = new Chapters(new ModuleRequest('', '', emptyKeyValue, null), emptyExtra, new JavascriptConfig(false, false, ''), new Output(new Videos(output, null), null, null));
var finalJson = JSON.stringify(chaptersObject);
savedData.innerHTML = finalJson;