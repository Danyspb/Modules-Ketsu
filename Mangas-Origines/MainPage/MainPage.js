const DefaultLayouts = {
    ultraWideFull: 'ultraWideFull',
    ultraWide: 'ultraWide',
    wideFull: 'wideFull',
    wide: 'wide',
    wideStrechedFull: 'wideStrechedFull',
    wideStrechedFullDouble: 'WideStrechedFullDouble',
    wideStreched: 'wideStreched',
    wideStrechedDouble: 'wideStrechedDouble',
    wideStrechedFullList: 'wideStrechedFullList',
    wideStrechedList: 'wideStrechedList',
    doublets: 'doublets',
    doubletsDouble: 'doubletsDouble',
    doubletsFull: 'doubletsFull',
    doubletsFullDouble: 'doubletsFullDouble',
    doubletsConstant: 'doubletsConstant',
    doubletsDoubleConstant: 'doubletsDoubleConstant',
    doubletsFullConstant: 'doubletsFullConstant',
    doubletsFullDoubleConstant: 'doubletsFullDoubleConstant',
    longDoublets: 'longDoublets',
    longDoubletsDouble: 'longDoubletsDouble',
    longDoubletsFull: 'longDoubletsFull',
    longDoubletsFullDouble: 'longDoubletsFullDouble',
    longDoubletsConstant: 'longDoubletsConstant',
    longDoubletsDoubleConstant: 'longDoubletsDoubleConstant',
    longDoubletsFullConstant: 'longDoubletsFullConstant',
    longDoubletsFullDoubleConstant: 'longDoubletsFullDoubleConstant',
    triplets: 'triplets',
    tripletsDouble: 'tripletsDouble',
    tripletsFull: 'tripletsFull',
    tripletsFullDouble: 'tripletsFullDouble',
    tripletsConstant: 'tripletsConstant',
    tripletsDoubleConstant: 'tripletsDoubleConstant',
    tripletsFullConstant: 'tripletsFullConstant',
    tripletsFullDoubleConstant: 'tripletsFullDoubleConstant',
    longTriplets: 'longTriplets',
    longTripletsDouble: 'longTripletsDouble',
    longTripletsFull: 'longTripletsFull',
    longTripletsFullDouble: 'longTripletsFullDouble',
    longTripletsConstant: 'longTripletsConstant',
    longTripletsDoubleConstant: 'longTripletsDoubleConstant',
    longTripletsFullConstant: 'longTripletsFullConstant',
    longTripletsFullDoubleConstant: 'longTripletsFullDoubleConstant',
    none: ''
};
const CellDesings = {
    Special1: 'Special1',
    Special2: 'Special2',
    Special3: 'Special3',
    CELLHelperText: 'CELLHelperText',
    small1: 'small1',
    small2: 'small2',
    normal1: 'normal1',
    normal2: 'normal2',
    normal3: 'normal3',
    normal4: 'normal4',
    normal5: 'normal5',
    normal6: 'normal6',
    normal7: 'normal7',
    wide1: 'wide1',
    wide2: 'wide2',
    wide3: 'wide3',
    wide4: 'wide4',
    wide5: 'wide5',
    wide6: 'wide6',
    wide7: 'wide7',
    wide8: 'wide8',
    wide9: 'wide9',
    wide10: 'wide10',
    wide11: 'wide11'
};
const Paging = {
    leading: 'leading',
    centered: 'centered',
    none: ''
};
const Orientation = {
    horizontal: 'horizontal',
    vertical: 'vertical'
};

function MainPage ( request, extra, javascriptConfig, output ) {
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

function Output ( cellDesing, orientation, defaultLayout, paging, section, layout, data ) {
    this.cellDesing = cellDesing;
    this.orientation = orientation;
    this.defaultLayout = defaultLayout;
    this.paging = paging;
    this.section = section;
    this.layout = layout;
    this.data = data;
}

function Section ( sectionName, separator ) {
    this.sectionName = sectionName;
    this.separator = separator;
}

function Layout ( insets, visibleCellsWidthS, visibleCellsWidthM, visibleCellsWidthL, visibleCellsHeight, heightForVisibleCells, cellSize, ratio, constant, horizontalSpacing, verticalSpacing ) {
    this.insets = insets;
    this.visibleCellsWidthS = visibleCellsWidthS;
    this.visibleCellsWidthM = visibleCellsWidthM;
    this.visibleCellsWidthL = visibleCellsWidthL;
    this.visibleCellsHeight = visibleCellsHeight;
    this.heightForVisibleCells = heightForVisibleCells;
    this.cellSize = cellSize;
    this.ratio = ratio;
    this.constant = constant;
    this.horizontalSpacing = horizontalSpacing;
    this.verticalSpacing = verticalSpacing;
}

function Insets ( top, bottom, left, right ) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
}

function Size ( width, height ) {
    this.width = width;
    this.height = height;
}

function Ratio ( inRelation, number1, number2 ) {
    this.inRelation = inRelation;
    this.number1 = number1;
    this.number2 = number2;
}

function Data ( image, title, description, field1, field2, field3, field4, isChapter, link, openInWebView ) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.field1 = field1;
    this.field2 = field2;
    this.field3 = field3;
    this.field4 = field4;
    this.isChapter = isChapter;
    this.link = link;
    this.openInWebView = openInWebView;
}

function quickData ( link, image, title, field1 ) {
    return new Data( image, title, 'unknown', field1, 'unknown', 'unknown', 'unknown', false, link );
}

function getFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', url, false);
    xhr.send();
    return xhr.responseText;
}

function shuffle ( a ) {
    var j, x, i;
    for ( i = a.length - 1; i > 0; i-- ) {
            j = Math.floor( Math.random( ) * ( i + 1 ) );
            x = a[ i ];
            a[ i ] = a[ j ];
            a[ j ] = x;
    }
    return a;
}
var savedData = document.getElementById('ketsu-final-data');
    var parsedJson = JSON.parse(savedData.innerHTML);
    let output = [];
    let emptyKeyValue = [new KeyValue('', '')];
    let url = 'https://mangas-origines.fr';
    const rien = new ModuleRequest('', 'get', emptyKeyValue, null);
    var lien = new ModuleRequest('https://discord.gg/BN8ZbtKp', 'get', emptyKeyValue, null);
    var contact = new Data(rien,
        'En cas de probléme du module veuillez le signaler au niveau du serveur Discord de Ketsu.\nVous pouvez y accéder en cliquant sur ce texte.\nAllez bonne lecture .\nDanyspb',
        '', '', '', '', '', false, lien, false);

    var sortie = [];
    var content = getFile(url);
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, 'text/html');
    var slid = doc.querySelectorAll('.site-content .widget-content rs-slide');
    for (ok of slid) {
        var types = ok.querySelector('.slider__thumb_item >span').textContent;
        var link = ok.querySelector('.slider__thumb_item > a').href;
        link = new ModuleRequest(link, 'get', emptyKeyValue, null);
        var image = ok.querySelector('.slider__thumb_item a img').src;
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        var title = ok.querySelector('.slider__content .post-title.font-title > h4').textContent.replace('', '');
        var hii = new Data(image, '', '', title, types, '', '', false, link);
        sortie.push(hii);
    }
    var nouv = [];
    var reg = document.querySelectorAll('.popular-slider.style-3 .slider__item');
    for (r of reg) {
        var link = r.querySelector('a').href;
        link = new ModuleRequest(link, 'get', emptyKeyValue, null);
        var image = r.querySelector('.slider__thumb_item.c-image-hover a img').src.replace('-125x180', '');
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        var title = r.querySelector('.slider__content .post-title.font-title > h4').textContent.replace('', '');
        var hooo = new Data(image, title, '', '', '', '', '', false, link);
        nouv.push(hooo);
    }
    var sortie2 = [];
    var recup = document.querySelectorAll('.page-item-detail.manga');
    for (re of recup) {
        var title = re.querySelector('.item-thumb.hover-details.c-image-hover a').title;
        var link = re.querySelector('.item-thumb.hover-details.c-image-hover a').href;
        link = new ModuleRequest(link, 'get', emptyKeyValue, null);
        var image = re.querySelector('.item-thumb.hover-details.c-image-hover a img').src.replace('-175x238', '');
        
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        var haha = new Data(image, title, '', '', '', '', '', false, link);
        sortie2.push(haha);
    }
    let layout = new Layout(new Insets(0, 0, 0, 0), 1, 1, 1, 1, 0, new Size(400, 105), new Ratio('width', 4, 10),new Size(0, 0), 0, 0);
    let layout1 = new Layout(new Insets(0, 0, 10, 10), 1, 1, 1, 1, 0, new Size(400, 105), new Ratio('width', 4,10), new Size(0, 0), 0, 0);
    output.push(new Output(CellDesings.Special3, Orientation.horizontal, DefaultLayouts.wideStrechedFull, Paging.leading, new Section('', true), layout, sortie));
    output.push(new Output('CELLHelperText', Orientation.horizontal, DefaultLayouts.wideFull, Paging.centered,new Section('', true), layout1, [contact]));
    output.push(new Output(CellDesings.Special1, Orientation.horizontal, DefaultLayouts.triplets, Paging.leading,new Section('Nouveauté :', true), null, nouv));
    output.push(new Output(CellDesings.normal1, Orientation.vertical, DefaultLayouts.longTripletsDouble, Paging.leading, new Section('Dernière mise a jour :', true), null, sortie2));
    let MainPageObject = new MainPage(new ModuleRequest('', 'get', emptyKeyValue, null), new Extra([new Commands('', emptyKeyValue)], emptyKeyValue), new JavascriptConfig(true, false, ''), output);
    var finalJson = JSON.stringify(MainPageObject);
    savedData.innerHTML = finalJson;
