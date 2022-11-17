
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

    function Text(text) {
        this.text = text;
    }
    var output = [];
    var maList = [];
    var savedData = document.getElementById('ketsu-final-data');
    var parsedJson = JSON.parse(savedData.innerHTML);
    var emptyKeyValue = [new KeyValue('referer', 'https://mangas-origines.fr/')];
    var cherch = document.querySelectorAll('.reading-content .page-break.no-gaps');
    for (ch of cherch) {
      if(ch.querySelector('img').dataset.src){
          maList.push(ch.querySelector('img').dataset.src);
      }else{
          maList.push(ch.querySelector('img').src);
      }
    }
    for (item of maList){
          output.push(new ModuleRequest(item, 'get', emptyKeyValue, null));
      }
    if (output.length == 0) {
        eval(document.querySelector('#chapter_preloaded_images').textContent);
        for (image of chapter_preloaded_images) {
            output.push(new ModuleRequest(image, 'get', emptyKeyValue, null));
        }
    }
    let emptyExtra = new Extra([new Commands('', emptyKeyValue)], emptyKeyValue);
    var chaptersObject = new Chapters(new ModuleRequest('', '', emptyKeyValue, null), emptyExtra,
        new JavascriptConfig(false, false, ''), new Output(null, output, null));
    var finalJson = JSON.stringify(chaptersObject);
    savedData.innerHTML = finalJson;
