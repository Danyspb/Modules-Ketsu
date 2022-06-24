
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
    var episodes = [];
    if (!parsedJson.request.url.includes('film')) {
        var type = 'Serie';
        var status = document.querySelector('.ClFx .Info .Date.AAIco-date_range').textContent.trim();
        var duree = document.querySelector('.ClFx .Info .Time.AAIco-access_time').textContent.trim();
        var genres = [];
        var test = [];
        test = document.querySelectorAll('#MvTb-Info ul li');
        for (let i = 0; i < test.length; i++) {
            var ok = test[i];
            if (ok.textContent.includes('Titre')) {
                var title = document.querySelector('#MvTb-Info ul li').textContent.replace('Titre Original: ', '');
            }
            if (ok.textContent.includes('Genre:')) {
                genres = Array.from(ok.querySelectorAll('a')).map(g => g.textContent.trim());
            }
        }
        var desc = document.querySelector('.TPost.Single header p').textContent.replaceAll('\\n', '');
        var image = 'https:' + document.querySelector('.TPost.Single header img').src;
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        var check = document.querySelectorAll('.Wdgt.AABox');
        for (ch of check) {
            var sais = 'S' + ch.querySelector('div:nth-child(1) span').textContent.trim();
            var me = ch.querySelectorAll('.TPTblCn.AA-cont tbody tr');
            for (m of me) {
                var link = m.querySelector('.MvTbTtl a').href;
                var epis = m.querySelector('.MvTbTtl a').textContent.replaceAll('\\n', '').trim();
                if (epis.includes(':')) {
                    var piso = sais + epis.split(':')[1];
                }
                if (epis.includes('-')) {
                    var piso = sais + epis.split('-')[1];
                } else {
                    var piso = sais + ' ' + epis;
                }
                var chapitre = new Chapter(piso, new ModuleRequest(link, 'get', emptyKeyValue, null), false);
                episodes.push(chapitre);
            }
        }
    }else{
          var type = 'Film';
          var status = document.querySelector('.ClFx .Info .Date.AAIco-date_range').textContent.trim();
          var duree = document.querySelector('.ClFx .Info .Time.AAIco-access_time').textContent.trim();
          var genres = [];
          var test = [];
          test = document.querySelectorAll('#MvTb-Info ul li');
          for (let i = 0; i < test.length; i++) {
              var ok = test[i];
              if (ok.textContent.includes('Titre')) {
                  var title = document.querySelector('#MvTb-Info ul li').textContent.replace('Titre Original: ', '');
              }
              if (ok.textContent.includes('Genre:')) {
                  genres = Array.from(ok.querySelectorAll('a')).map(g => g.textContent.trim());
              }
          }
          var desc = document.querySelector('.TPost.Single header p').textContent.replaceAll('\\n', '');
          var image = 'https:' + document.querySelector('.TPost.Single header img').src;
          image = new ModuleRequest(image, 'get', emptyKeyValue, null);
          var chapitre = new Chapter(title, new ModuleRequest(parsedJson.request.url, 'get', emptyKeyValue, null), false);
          episodes.push(chapitre);
          
        }
    let infoPageObject = new Info(new ModuleRequest('', '', emptyKeyValue, null), new Extra([new Commands('',
        emptyKeyValue)], emptyKeyValue), new JavascriptConfig(false, false, ''), new Output(image, title,
        parsedJson.request, desc, genres, status, duree, type, 'Eps: ' + episodes.length, episodes));
    var finalJson = JSON.stringify(infoPageObject);
    savedData.innerHTML = finalJson;
