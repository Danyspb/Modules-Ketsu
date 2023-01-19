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

var output = [];
var savedData = document.getElementById('ketsu-final-data');
var parsedJson = JSON.parse(savedData.innerHTML);
var extraInfo = [new KeyValue('count', '0')];
var emptyKeyValue = [ new KeyValue('Content-Type', 'application/x-www-form-urlencoded')];
let servers = document.querySelectorAll('#playeroptionsul li');
let nextRequest = '';
let post_link = 'https://spacemov.site/wp-admin/admin-ajax.php';
for (let x = 0; x < servers.length; x++) {
    let server = servers[x];
    let id = server.dataset.post;
    let type = server.dataset.type;
    let nume = server.dataset.nume;
    if(!(nume =='trailer')){
        let action = 'doo_player_ajax';
        let request = post_link +`?action=${action}&post=${id}&nume=${nume}&type=${type}`;
        if (nextRequest == '') {
            nextRequest = request;
        } else {
            extraInfo.push(new KeyValue(`${x}`, `${request}`));
        }
    }
}

let emptyExtra = new Extra([new Commands('', emptyKeyValue)], extraInfo);
var chaptersObject = new Chapters(new ModuleRequest(nextRequest.split('?')[0], 'post', emptyKeyValue,nextRequest.split('?')[1].replace('?','')), emptyExtra, new JavascriptConfig(false, false, ''), new Output(new Videos(null, null), null, null));
var finalJson = JSON.stringify(chaptersObject);
savedData.innerHTML = finalJson;
