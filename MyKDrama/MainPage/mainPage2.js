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

function MainPage(request, extra, javascriptConfig, output) {
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

function Output(cellDesing, orientation, defaultLayout, paging, section, layout, data) {
    this.cellDesing = cellDesing;
    this.orientation = orientation;
    this.defaultLayout = defaultLayout;
    this.paging = paging;
    this.section = section;
    this.layout = layout;
    this.data = data;
}

function Section(sectionName, separator) {
    this.sectionName = sectionName;
    this.separator = separator;
}

function Layout(insets, visibleCellsWidthS, visibleCellsWidthM, visibleCellsWidthL, visibleCellsHeight,
    heightForVisibleCells, cellSize, ratio, constant, horizontalSpacing, verticalSpacing) {
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

function Insets(top, bottom, left, right) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
}

function Size(width, height) {
    this.width = width;
    this.height = height;
}

function Ratio(inRelation, number1, number2) {
    this.inRelation = inRelation;
    this.number1 = number1;
    this.number2 = number2;
}

function Data(image, title, description, field1, field2, field3, field4, isChapter, link, openInWebView) {
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

function quickData(link, image, title, field1) {
    return new Data(image, title, 'unknown', field1, 'unknown', 'unknown', 'unknown', false, link);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
var savedData = document.getElementById('ketsu-final-data');
var parsedJson = JSON.parse(savedData.innerHTML);
let output = parsedJson.output;
let emptyKeyValue = [new KeyValue('', '')];
let meilleur = [];
var check = document.querySelectorAll('.listupd > article');
for (c of check){
    var link = c.querySelector('.bsx > a').href;
    link = new ModuleRequest(link, 'get', emptyKeyValue, null);
    var title = c.querySelector('.bsx > a').title;
    var image = c.querySelector('.bsx .limit > img').src;
    var inf = c.querySelector('.bsx .limit .bt > span').textContent;
    if(c.querySelector('.bsx .limit .bt > span').textContent.includes('Ongoing')){
       var inf = 'En Cours';
    }else{
        var inf = 'Complete';
    }
    image = new ModuleRequest(image, 'get', emptyKeyValue, null);
    var donnes = new Data(image, title,'', inf, '', '', '', false, link);
    meilleur.push(donnes);
}
output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging.leading, new Section('Derniers Episodes Ajoutés', true), null, meilleur));
let MainPageObject = new MainPage(new ModuleRequest('https://mykdrama.co/genres/action/', 'get', emptyKeyValue, null),
new Extra([new Commands('', emptyKeyValue)], emptyKeyValue), new JavascriptConfig(true, false, ''), output);
var finalJson = JSON.stringify(MainPageObject);
savedData.innerHTML = finalJson;
