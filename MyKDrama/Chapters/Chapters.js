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

  function RawVideo ( video ) {
          this.video = video;
  }

  function Video ( videoQuality, videoLink ) {
          this.videoQuality = videoQuality;
          this.videoLink = videoLink;
  }

 function getFile(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, false);
        xhr.send();
        return xhr.responseText;
    }

  function Text ( text ) {
          this.text = text;
  }
  var output = [ ];
  let rec =  [];
  var savedData = document.getElementById( 'ketsu-final-data' );
  var parsedJson = JSON.parse( savedData.innerHTML );
  var emptyKeyValue = [ new KeyValue( '', '' ) ];
  var serveur = document.querySelectorAll('.mobius .mirror option');
  for (serv of serveur){
        if(serv.value !== ""){
                rec.push(serv.value);
        }else{
                continue;
        }
  }
  for (let i = 0; i < rec.length; i++) {
        let url = rec[i];
        var content = getFile(url);
        var parser = new DOMParser();
        var doc = parser.parseFromString(content, 'text/html');
        var link = doc.querySelector('.video-content iframe').src;
        output.push(new NeedsResolver('', new ModuleRequest(link, 'get', emptyKeyValue, null)));
  }
  
  let emptyExtra = new Extra( [ new Commands( '', emptyKeyValue ) ], emptyKeyValue );
  var chaptersObject = new Chapters( new ModuleRequest( '', '', emptyKeyValue, null ), emptyExtra, new JavascriptConfig( false, false, '' ), new Output( new Videos( output, null ), null, null ) );
  var finalJson = JSON.stringify( chaptersObject );
  savedData.innerHTML = finalJson;
