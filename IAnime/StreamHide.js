try {

    /* JAVASCRIPT STARTS */ 
function Resolver ( request, extra, javascriptConfig, output ) {
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

function Output ( video ) {
      this.video = video;
}

function Video ( videoQuality, videoLink ) {
      this.videoQuality = videoQuality;
      this.videoLink = videoLink;
}

function getNext ( match, array ) {
      for ( var x = 0; x < array.length; x++ ) {
              let mMatch = array[ x ];
              if ( mMatch.includes( match ) ) {
                      return array[ x + 1 ];
              }
      }
}
    function unPack(code) {
    function indent(code) {
        try {
            var tabs = 0,
                old = -1,
                add = '';
            for (var i = 0; i < code.length; i++) {
                if (code[i].indexOf('{') != -1) tabs++;
                if (code[i].indexOf('}') != -1) tabs--;
                if (old != tabs) {
                    old = tabs;
                    add = '';
                    while (old > 0) {
                        add += '\\t';
                        old--;
                    }
                    old = tabs;
                }
                code[i] = add + code[i];
            }
        } finally {
            tabs = null;
            old = null;
            add = null;
        }
        return code;
    }
    var env = {
        eval: function (c) {
            code = c;
        },
        window: {},
        document: {}
    };
    eval('with(env) {' + code + '}');
    code = (code + '').replace(/;/g, ';\\n').replace(/{/g, '\\n{\\n').replace(/}/g, '\\n}\\n').replace(/\\n;\\n/g, ';\\n').replace(/\\n\\n/g, '\\n');
    code = code.split('\\n');
    code = indent(code);
    code = code.join('\\n');
    return code;
}
var savedData = document.getElementById('ketsu-final-data');
var parsedJson = JSON.parse(savedData.innerHTML);
var emptyKeyValue = [new KeyValue('Referer', parsedJson.request.url)];
var videos = [];
var scripts = document.querySelectorAll('script');
for (script of scripts) {
    if (script.innerHTML.includes('eval(function(p,a,c,k,e,d)')) {
        var unpack = unPack(script.innerText);
        break;
    }
}
var videoLink = unpack.match(/(http.*?\\)/gm)[0];
var link = videoLink.substring(0, videoLink.length - 2);
videos.push( new Video( 'normal', new ModuleRequest( link, 'get', emptyKeyValue, null ) ) );
let emptyExtra = new Extra( [ new Commands( '', emptyKeyValue ) ], emptyKeyValue );
var chaptersObject = new Resolver( new ModuleRequest( '', 'get', emptyKeyValue, null ), emptyExtra, new JavascriptConfig( false, false, '' ), new Output( videos ) );
var finalJson = JSON.stringify( chaptersObject );
savedData.innerHTML = finalJson;
/* JAVASCRIPT ENDS */

} catch (e) {
    console.error(e.message);

    if (typeof KETSU_ASYNC !== 'undefined') {
        window.webkit.messageHandlers.EXECUTE_KETSU_ASYNC.postMessage('');
    }

}