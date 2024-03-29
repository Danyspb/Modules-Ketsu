
/**
 * @enum { string }
 */
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

/**
 * @enum { string }
 */
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

/**
 * @enum { string }
 */
const Paging = {
        leading: 'leading',
        centered: 'centered',
        none: ''
};

/**
 * @enum { string }
 */
const Orientation = {
        horizontal: 'horizontal',
        vertical: 'vertical'
};

/**
 * @param {ModuleRequest} request
 * @param {Extra} extra  
 * @param {JavascriptConfig} javascriptConfig 
 * @param {Output[]} output 
 */
function MainPage ( request, extra, javascriptConfig, output ) {
        this.request = request;
        this.extra = extra;
        this.javascriptConfig = javascriptConfig;
        this.output = output;
}
/**
 * @param {string} url
 * @param {string} method  
 * @param {KeyValue[]} headers 
 * @param {string} [httpBody] 
 */
function ModuleRequest ( url, method, headers, httpBody ) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.httpBody = httpBody;
}
/**
 * @param {Commands[]} commands
 * @param {KeyValue[]} extraInfo 
 */
function Extra ( commands, extraInfo ) {
        this.commands = commands;
        this.extraInfo = extraInfo;
}
/**
 * @param {string} commandName
 * @param {KeyValue[]} params 
 */
function Commands ( commandName, params ) {
        this.commandName = commandName;
        this.params = params;
}
/**
 * @param {boolean} removeJavascript
 * @param {boolean} loadInWebView 
*/
function JavascriptConfig ( removeJavascript, loadInWebView ) {
        this.removeJavascript = removeJavascript;
        this.loadInWebView = loadInWebView;
        this.javaScript = "";
}
/**
 * @param {string} key
 * @param {string} value 

*/
function KeyValue ( key, value ) {
        this.key = key;
        this.value = value;
}
/**
 * @param {CellDesings} cellDesing - Example : CellDesings.normal1
 * @param {Orientation} orientation  - Example : Orientation.vertical
 * @param {DefaultLayouts} defaultLayout  - Example : DefaultLayouts.longDoubletsFull
 * @param {Paging} paging  - Example : Paging.centered
 * @param {Section} section
 * @param {Layout} [layout] - If you setted a default layout you can set this parameter to undefined
 * @param {Data[]} data 
 */
function Output ( cellDesing, orientation, defaultLayout, paging, section, layout, data ) {
        this.cellDesing = cellDesing;
        this.orientation = orientation;
        this.defaultLayout = defaultLayout;
        this.paging = paging;
        this.section = section;
        this.layout = layout;
        this.data = data;
}
/**
 * @param {string} sectionName
 * @param {boolean} separator 
 */
function Section ( sectionName, separator ) {
        this.sectionName = sectionName;
        this.separator = separator;
}
/**
 * @param {Insets} insets
 * @param {number} [visibleCellsWidthS]
 * @param {number} [visibleCellsWidthM]
 * @param {number} [visibleCellsWidthL]
 * @param {number} [visibleCellsHeight]
 * @param {number} heightForVisibleCells
 * @param {Insets} cellSize
 * @param {Ratio} [ratio]
 * @param {Size} constant
 * @param {number} horizontalSpacing
 * @param {number} verticalSpacing
 */
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
/**
 * @param {number} top
 * @param {number} bottom
 * @param {number} left
* @param {number} right
*/
function Insets ( top, bottom, left, right ) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
}
/**
 * @param {number} top
 * @param {number} bottom
 * @param {number} left
* @param {number} right
*/
function Size ( width, height ) {
        this.width = width;
        this.height = height;
}
/**
 * @param {RatioRelation} inRelation
 * @param {number} number1
 * @param {number} number2
 */
function Ratio ( inRelation, number1, number2 ) {
        this.inRelation = inRelation;
        this.number1 = number1;
        this.number2 = number2;
}
/**
 * @enum { string }
 */
const RatioRelation = {
width: 'width',
height: 'height'
}
/**
 * @param {ModuleRequest} image
 * @param {string} title
 * @param {string} description
 * @param {string} field1
 * @param {string} field2
 * @param {string} field3
 * @param {string} field4
 * @param {boolean} isChapter
 * @param {ModuleRequest} link
 * @param {boolean} [openInWebView]
 */
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

/*
CODE STARTS HERE: 

- What you need to do is to create a MainPage Object and save it as a json string on the div with the id: ketsu-final-data, to be more precise the one saved on the variable called savedData below this comment.

- Most of the code is already done, you just need to fill the output variable with an array of Output objects.
*/

var savedData = document.getElementById( 'ketsu-final-data' );
var parsedJson = JSON.parse( savedData.innerHTML );
let emptyKeyValue = [ new KeyValue( '', '' ) ];
let output = [ ]; // Array of Output Objects
let dm = 'https://watch-free.tv';
let donnes = [];
let tradMove = [];
let tradShow = [];
let don = document.querySelectorAll('.carousel-inner .carousel-item ');
for (d of don){
        let image = d.querySelector('.slide.media.media-slide').style.backgroundImage.match(/https.*(jpg|png|jpeg)/gm)[0];
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        let title = d.querySelector('.title').textContent.trim();
        let type = d.querySelector('.category').textContent.trim();
        let descri = d.querySelector('.depion').textContent.trim();
        let sr =d.querySelector('a').href ;
        let link = `${dm}${sr}`;
        link = new ModuleRequest(link, 'get', emptyKeyValue, null);
        donnes.push(new Data(image, descri, '',title,type,'','',false,link));
}
let tm = document.querySelectorAll('.row.row-cols-5 ')[0];
let ok = tm.querySelectorAll('.list-item');
for (i of ok){
        let image = i.querySelector('.media.media-cover').style.backgroundImage.match(/https.*(jpg|png|jpeg)/gm)[0];
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        let title  = i.querySelector('.list-title').textContent.trim();
        let date = i.querySelector('.list-year').textContent.trim();
        let sa = i.querySelector('a').href;
        let link = `${dm}${sa}`;
        link = new ModuleRequest(link, 'get', emptyKeyValue, null);
        tradMove.push(new Data(image, title, '',date,'','','',false,link));
}
let ts = document.querySelectorAll('.app-section.mb-3.pt-2 .list-item');
for (i of ts){
        let image = i.querySelector('.media.media-cover').style.backgroundImage.match(/https.*(jpg|png|jpeg)/gm)[0];
        image = new ModuleRequest(image, 'get', emptyKeyValue, null);
        let title  = i.querySelector('.list-title').textContent.trim();
        let date = i.querySelector('.list-year').textContent.trim();
        let se = i.querySelector('a').href;
        let link = `${dm}${se}`;
        link = new ModuleRequest(link, 'get', emptyKeyValue, null);
        tradShow.push(new Data(image, title, '',date,'','','',false,link));
}
 
/*
// Sample Output array, if you uncomment this code and execute you will see the result on the KETSU app.
let sampleData = []

for (var x = 0; x < 20; x++) {
        sampleData.push(new Data(new ModuleRequest('https://d1fdloi71mui9q.cloudfront.net/1JBIg7XxQ3WqZ8AAZPiz_GydL9KJ3v5AKUN1B','GET',emptyKeyValue,undefined),
        "This is the title",
        "Description",
        "Field 1",
        "Field 2",
        "Feild 3",
        "Field 4",
        false,
new ModuleRequest('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png,','GET',emptyKeyValue,undefined),
        false))
}

output = [
new Output(CellDesings.wide11, Orientation.horizontal, DefaultLayouts.wideFull, Paging.leading, new Section('', true), null, sampleData),
new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsConstant, Paging.leading, new Section('Popular', true), null, sampleData),
new Output(CellDesings.normal7, Orientation.vertical, DefaultLayouts.longTripletsFullConstant, Paging.leading, new Section('Sample Section 3', true), null, sampleData)
]
*/
let layout = new Layout(new Insets(0, 0, 0, 0), 1, 1, 1, 1, 0, new Size(430, 105), new Ratio('width', 6, 10), new Size(0, 0), 0, 0);

output.push(new Output(CellDesings.Special3, Orientation.horizontal, DefaultLayouts.wideStrechedFull, Paging.leading,new Section('', true), layout, donnes));
output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging.leading, new Section('Movies', true), null, tradMove));
output.push(new Output(CellDesings.normal1, Orientation.horizontal, DefaultLayouts.longTripletsDouble, Paging.leading, new Section('Shows', true), null, tradShow));
let mainPageObject = new MainPage( new ModuleRequest( '', 'get', emptyKeyValue, null ), new Extra( [ new Commands( '', emptyKeyValue ) ], emptyKeyValue ), new JavascriptConfig( true, false), output );
var finalJson = JSON.stringify( mainPageObject );
savedData.innerHTML = finalJson;