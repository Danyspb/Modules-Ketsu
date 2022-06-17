
        function Info(request, extra, javascriptConfig, output) {
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
        function Info(request, extra, javascriptConfig, output) {
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

        function Chapter(chapName, link, openInWebView) {
        this.chapName = chapName;
        this.link = link;
        this.openInWebView = openInWebView;
        }

        function Output(image, title, link, description, genres, field1, field2, field3, field4, chapters) {
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

        function getStuff(array, match) {
            for (var x = 0; x < array.length; x++) {
                let data = array[x].innerText;
                if (data.includes(match)) {
                    return data.replace(match, '').trim();
                }
            }
        }

        function getHtmlStuff(array, match) {
            for (var x = 0; x < array.length; x++) {
                let data = array[x].innerText;
                if (data.includes(match)) {
                    return array[x];
                }
            }
        }
        var savedData = document.getElementById('ketsu-final-data');
        var parsedJson = JSON.parse(savedData.innerHTML);
        let emptyKeyValue = [new KeyValue('', '')];
        var type = 'Drama';
        var status = 'Unknown';
        var genres = [];
        var lang = 'Vostfr';
        var allepisode = [];
          
        var synap = document.querySelectorAll('.filmaltiaciklama');
        for (s of synap){
            if(s.querySelector('p').innerText.includes('Depion\\n')){
                var av = s.querySelector('p').innerText;
                var desc = av.replace('Depion\\n: ','');
            }
        }
        var image = document.querySelector('.filmaltiimg > img ').src;
        image = new ModuleRequest(image,'get',emptyKeyValue,null);
        var title = document.querySelector('.filmaltiimg > img').alt;

        var check = document.querySelectorAll('.filmaltiaciklama > p');
        var ok = check[2];
        synap = ok.innerText;
        genres = Array.from(synap.replace('Genre\\n: ', '').split(','));
    
        var saison = document.querySelectorAll('.keremiya_part.clearfix span.post-page-numbers.current ,.keremiya_part.clearfix a');
        for (var x = 0; x < saison.length; x++) {
            var sai = saison[x];
            if(x==0){
                var epis = sai.querySelector('span').innerText;
                var link = parsedJson.request.url;
                var chapitre = new Chapter(epis, new ModuleRequest(link, 'get', emptyKeyValue, null), false);
                allepisode.push(chapitre);
            }else{
                var link = sai.href;
                var epis = sai.querySelector('span').innerText;
                var chapitre = new Chapter(epis, new ModuleRequest(link, 'get', emptyKeyValue, null), false);
                allepisode.push(chapitre);}
        }
        let infoPageObject = new Info(new ModuleRequest('', '', emptyKeyValue, null), new Extra([new Commands('', emptyKeyValue)], emptyKeyValue), new JavascriptConfig(false, false, ''),
        new Output(image, title, parsedJson.request, desc, genres, status, type, lang, 'Eps: ' + allepisode.length, allepisode));
        var finalJson = JSON.stringify(infoPageObject);
        savedData.innerHTML = finalJson;


 