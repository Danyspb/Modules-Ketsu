
try {
   
     /* JAVASCRIPT STARTS */
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
    
    function getValueFromKey(keys, key) {
       
        n
        for (var x = 0; x < keys.length; x++) {
           
            n
            let tKey = keys[x];
            n
            if (tKey.key == key) {
               
                n
                return tKey.value;
                n
            }
            
        }
        
    }
    
    var savedData = document.getElementById('ketsu-final-data');
    var parsedJson = JSON.parse(savedData.innerHTML);
    var extraInfo = parsedJson.extra.extraInfo;
    var emptyKeyValue = parsedJson.request.headers;
    var output = parsedJson.output.videos;
    var actualCount = getValueFromKey(extraInfo, 'count');
    var nextCount = parseInt(actualCount) + 1;
    var nextRequest = getValueFromKey(extraInfo, nextCount);
    if (actualCount == 0) {
       
       output = new Videos([], []);
        
    }
    var fixedLink = document.querySelector('iframe').src.replace('https://streamtape.com/', 'https://streamta.pe/').replace('https://viewsb.com', 'https://watchsb.com').replace('?ov-ignore=true', '');
    
    if (!fixedLink.includes('https')) {
       fixedLink = 'https://' + fixedLink;
    }
   output.needsResolver.push(new NeedsResolver('', new ModuleRequest(fixedLink, 'get', emptyKeyValue, null)));
   extraInfo[0].value = '' + (nextCount);
    if (nextRequest == undefined) {
       
       extRequest = '';
        
    }
    
    let emptyExtra = new Extra([new Commands('', emptyKeyValue)], extraInfo);
    var chaptersObject = new Chapters(new ModuleRequest(nextRequest, 'get', emptyKeyValue, parsedJson.request.httpBody), emptyExtra, new JavascriptConfig(true, false, ''), new Output(output, null, null));
    var finalJson = JSON.stringify(chaptersObject);
   savedData.innerHTML = finalJson;
   /* JAVASCRIPT ENDS */ 
} catch (e) {
   
   console.error(e.message);
    
    if (typeof KETSU_ASYNC !== 'undefined') {
       
       window.webkit.messageHandlers.EXECUTE_KETSU_ASYNC.postMessage('');
        
    }
    
}
