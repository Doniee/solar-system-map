

var map = L.map('map', {
    center: [60.1999096853, 24.854850769],
    zoom: 12
});

//owliver.k9k454j2

L.tileLayer('https://{s}.tiles.mapbox.com/v3/owliver.k9k454j2/{z}/{x}/{y}.png', {
	maxZoom: 18,
	minZoom: 5,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-i875mjb7'
}).addTo(map);

var pinMarker = L.icon({
    iconUrl: './img/marker.png',
    iconSize:     [40, 67], // size of the icon
    iconAnchor:   [8, 68], // point of the icon which will correspond to marker's location
    popupAnchor:  [13, -50] // point from which the popup should open relative to the iconAnchor
});
var SunMarker = L.icon({
    iconUrl: './img/sun.png',
    iconSize:     [90, 125], 
    iconAnchor:   [45, 125],
    popupAnchor:  [0, -115] 
});
var MercuryMarker = L.icon({
    iconUrl: './img/mercury.png',
    iconSize:     [66, 105], 
    iconAnchor:   [33, 105],
    popupAnchor:  [0, -95] 
});
var VenusMarker = L.icon({
    iconUrl: './img/venus.png',
    iconSize:     [66, 98], 
    iconAnchor:   [33, 98],
    popupAnchor:  [0, -85] 
});
var EarthMarker = L.icon({
    iconUrl: './img/earth.png',
    iconSize:     [66, 92], 
    iconAnchor:   [33, 92],
    popupAnchor:  [0, -82] 
});
var MarsMarker = L.icon({
    iconUrl: './img/mars.png',
    iconSize:     [66, 85], 
    iconAnchor:   [33, 85],
    popupAnchor:  [0, -78]
});
var JupiterMarker = L.icon({
    iconUrl: './img/jupiter.png',
    iconSize:     [66, 92], 
    iconAnchor:   [33, 92],
    popupAnchor:  [0, -85] 
});
var SaturnMarker = L.icon({
    iconUrl: './img/saturn.png',
    iconSize:     [130, 78], 
    iconAnchor:   [65, 78],
    popupAnchor:  [0, -75] 
});
var NeptuneMarker = L.icon({
    iconUrl: './img/neptune.png',
    iconSize:     [66, 92], 
    iconAnchor:   [33, 92],
    popupAnchor:  [0, -85] 
});
var UranusMarker = L.icon({
    iconUrl: './img/uranus.png',
    iconSize:     [66, 92], 
    iconAnchor:   [33, 92],
    popupAnchor:  [0, -85] 
});
var PlutoMarker = L.icon({
    iconUrl: './img/pluto.png',
    iconSize:     [66, 92], 
    iconAnchor:   [33, 92],
    popupAnchor:  [0, -85] 
});
var circle1 = L.circle([60.220994, 24.855376], 62, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle2 = L.circle([60.220994, 24.855376], 102, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle3 = L.circle([60.220994, 24.855376], 114, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle4 = L.circle([60.220994, 24.855376], 180, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle5 = L.circle([60.220994, 24.855376], 725, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle6 = L.circle([60.220994, 24.855376], 1390, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle7 = L.circle([60.220994, 24.855376], 2755, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle8 = L.circle([60.220994, 24.855376], 4480, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);
var circle9 = L.circle([60.220994, 24.855376], 6068, {
    color: '#fff',
    fillColor: '#fff',
    fillOpacity: 0
}).addTo(map);

var markers = [];
var marker1 = L.marker([60.220994, 24.855376],{icon: SunMarker, title:"The_Sun"}).addTo(map)
	.bindPopup('<h2>The Sun</h2><p>The model is placed on top of a 20 meter pole, located on a hill called Patterimäki in Pajamäki. It is made out of steel pipes. It can be seen from almost all of the planet model locations, or at least if you have binoculars.</p>\
        <p><strong>Diameter of the model:</strong> 140 cm</p>\
        <p><strong>Actual diameter:</strong> 1.4 million km</p>\
        <a href="./img/photos/sun.jpg" data-lightbox="sun"><img src="./img/photos/sun-thumb.jpg" alt="sun"></a>\
    ');
markers.push(marker1);
var marker2 = L.marker([60.220661, 24.856149],{icon: MercuryMarker, title:"Mercury"}).addTo(map)
	.bindPopup('<h2>Mercury</h2><p>Mercury\'s model can be found close to the Sun\'s model. Like most of the models, it is situated on a concrete stand. The model is only the size of a pinhead.</p>\
        <p><strong>Diameter of the model:</strong> 4.9 mm</p>\
        <p><strong>Actual diameter:</strong> 4 880 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 67.8 m</p>\
        <p><strong>Actual distance to the Sun:</strong> 58 million km (average)</p>\
        <a href="./img/photos/mercury.jpg" data-lightbox="mercury"><img src="./img/photos/mercury-thumb.jpg" alt="mercury"></a>\
    ');
markers.push(marker2);
var marker3 = L.marker([60.220340, 24.856674],{icon: VenusMarker, title:"Venus"}).addTo(map)
	.bindPopup('<h2>Venus</h2><p>Venus\'s model is located 50 m south from Mercury\'s model.</p>\
        <p><strong>Diameter of the model:</strong> 12 mm</p>\
        <p><strong>Actual diameter:</strong> 12 104 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 106 m</p>\
        <p><strong>Actual distance to the Sun:</strong> 108 millon km (average)</p>\
        <a href="./img/photos/venus.jpg" data-lightbox="venus"><img src="./img/photos/venus-thumb.jpg" alt="venus"></a>\
        ');
markers.push(marker3);
var marker4 = L.marker([60.219971, 24.855301],{icon: EarthMarker, title:"Earth"}).addTo(map)
	.bindPopup('<h2>Earth</h2><p>The Earth\'s model is executed differently than the other models. There is a steel plate with two holes, the bigger one represens the Earth and the smaller one represents the Moon. The distance between them is 38.4 cm (in space it would be 384 400 km).</p>\
        <p><strong>Diameter of the model:</strong> Earth 12.8 mm, Moon 3.5 mm</p>\
        <p><strong>Actual diameter:</strong> Earth 12 756 km, Moon 3474 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 150 m</p>\
        <p><strong>Actual distance to the Sun:</strong> 150 million km (average)</p>\
        <a href="./img/photos/earth.jpg" data-lightbox="earth"><img src="./img/photos/earth-thumb.jpg" alt="earth"></a>\
        ');
markers.push(marker4);
var marker5 = L.marker([60.219372, 24.855437],{icon: MarsMarker, title:"Mars"}).addTo(map)
.bindPopup('<h2>Mars</h2><p>The model of the Earth can be seen from Mars\' location, they are 57 m apart.</p>\
        <p><strong>Diameter of the model:</strong> 6.8 mm</p>\
        <p><strong>Actual diameter:</strong> 6 779 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 206 m</p>\
        <p><strong>Actual distance to the Sun:</strong> 228 million km (average)</p>\
        <a href="./img/photos/mars.jpg" data-lightbox="mars"><img src="./img/photos/mars-thumb.jpg" alt="mars"></a>\
        ');
markers.push(marker5);
var marker6 = L.marker([60.215506, 24.848236],{icon: JupiterMarker, title:"Jupiter"}).addTo(map)
.bindPopup('<h2>Jupiter</h2><p>The model of Jupiter is located on the eastern hillside of Talinhuippu. It is the biggest planet in the solar system.</p>\
        <p><strong>Diameter of the model:</strong> 14.3 cm</p>\
        <p><strong>Actual diameter:</strong> 142 800 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 817 m</p>\
        <p><strong>Actual distance to the Sun:</strong> 779 million km (average)</p>\
        <a href="./img/photos/jupiter.jpg" data-lightbox="jupiter"><img src="./img/photos/jupiter-thumb.jpg" alt="jupiter"></a>\
        ');
markers.push(marker6);
var marker7 = L.marker([60.214959, 24.877374],{icon: SaturnMarker, title:"Saturn"}).addTo(map)
.bindPopup('<h2>Saturn</h2><p>The model of Saturn is located on a street called Pitäjänmäentie, close to the Höyläämötie intersection.</p>\
        <p><strong>Diameter of the model:</strong> 12 cm</p>\
        <p><strong>Actual diameter:</strong> 120 000 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 1.4 km</p>\
        <p><strong>Actual distance to the Sun:</strong> 1.43 billion km (average)</p>\
        <a href="./img/photos/saturn.jpg" data-lightbox="saturn"><img src="./img/photos/saturn-thumb.jpg" alt="saturn"></a>\
    ');
markers.push(marker7);
var marker8 = L.marker([60.202101, 24.823096],{icon: UranusMarker, title:"Uranus"}).addTo(map)
.bindPopup('<h2>Uranus</h2><p>The model of Uranus can be found in an old pavilion close to Villa Elfvik. Sun\'s model is not visible from there, but it can be viewed from a close by pier.</p>\
        <p><strong>Diameter of the model:</strong> 5.3 cm</p>\
        <p><strong>Actual diameter:</strong> 52 600 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 2.9 km</p>\
        <p><strong>Actual distance to the Sun:</strong> 2.88 billion km (average)</p>\
        <a href="./img/photos/uranus.jpg" data-lightbox="uranus"><img src="./img/photos/uranus-thumb.jpg" alt="uranus"></a>\
    ');
markers.push(marker8);
var marker9 = L.marker([60.181118, 24.843937],{icon: NeptuneMarker, title:"Neptune"}).addTo(map)
.bindPopup('<h2>Neptune</h2><p>The model of Neptune is on the western shore of Lehtisaari, close to the bridge to Otaniemi.</p>\
        <p><strong>Diameter of the model:</strong> 4.9 cm</p>\
        <p><strong>Actual diameter:</strong> 48 600 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 4.5 km</p>\
        <p><strong>Actual distance to the Sun:</strong> 4.50 billion km (average)</p>\
        <a href="./img/photos/neptune.jpg" data-lightbox="neptune"><img src="./img/photos/neptune-thumb.jpg" alt="neptune"></a>\
    ');
markers.push(marker9);
var marker10 = L.marker([60.166995, 24.839942],{icon: PlutoMarker, title:"Pluto"}).addTo(map)
.bindPopup('<h2>Pluto</h2><p>The models of Pluto and its moon Charon are represented by pins in a sign located next to Länsiväylä, close to the Hanasaari junction. Pluto hasn\'t been a planet since 2006, but it is still included in the model for historical reasons.</p>\
        <p><strong>Diameter of the model:</strong> Pluto 2.2 mm, Charon 1.5 mm</p>\
        <p><strong>Actual diameter:</strong> Pluto 2 245 km, Charon 1 500 km</p>\
        <p><strong>Distance to the Sun\'s model:</strong> 6.1 km</p>\
        <p><strong>Actual distance to the Sun:</strong> 5.91 billion km (average)</p>\
        <a href="./img/photos/pluto.jpg" data-lightbox="pluto"><img src="./img/photos/pluto-thumb.jpg" alt="pluto"></a>\
    ');
markers.push(marker10);

function markerFunction(id){
    for (var i in markers){
        var markerID = markers[i].options.title;
        if (markerID == id){
            markers[i].openPopup();
        };
    }
}

$("a").click(function(){
	$('#modal').hide();
    markerFunction($(this)[0].id);
});


$('#locationList').click(function(){
	$('#modal').fadeIn(800);
});


$('body').on('click', '#close', function() {
		$('.modalDialog').fadeOut(500);
});

$(document).mouseup(function (e)
{
    var container = $(".modalCont");
    var lb = $(".lightbox");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0 && !lb.is(e.target) 
        && lb.has(e.target).length === 0)
    {
        $('.modalDialog').fadeOut(500);
    }
});


var myLines = [{
    "type": "LineString",
    "coordinates": [
        [24.855376, 60.220994], 
        [24.855650067329407, 60.220988174773396], 
        [24.856149, 60.220661], 
        [24.85682487487793, 60.22053790993469], 
        [24.856674, 60.220340],
        [24.85653519630432, 60.22015691177979],
        [24.8563152551651, 60.219882483792354],
        [24.85605239868164, 60.2197652517189],
        [24.855773448944092, 60.21973327926248],
        [24.855301, 60.219971], 
        [24.855467, 60.219734], 
        [24.855688, 60.218997], 
        [24.855220913887024, 60.2189606020845],
        [24.855049252510067, 60.21883270893315],
        [24.855161905288696, 60.21872346647135],
        [24.853756427764893, 60.21827317053059],
        [24.853563308715817, 60.21841705274606],
        [24.852270483970642, 60.21822787414688],
        [24.84984040260315, 60.21806800405721],
        [24.849443435668945, 60.21809997813749],
        [24.849132299423214, 60.21806533954913],
        [24.84859585762024, 60.21787615892071],
        [24.848306179046627, 60.2173885474801],
        [24.848504662513733, 60.21626674718309],
        [24.84856367111206, 60.21543003503955],
        [24.848499298095703, 60.21509694305405],
        [24.84878897666931, 60.2135833304554],
        [24.848660230636597, 60.21299971820489],
        [24.84828472137451, 60.21256000348486],
        [24.84710454940796, 60.2130343621444],
        [24.84650373458862, 60.21301570771999],
        [24.843038320541382, 60.21289578616675],
        [24.841933250427246, 60.21287180180348],
        [24.841225147247314, 60.21268259121162],
        [24.840517044067383, 60.21220556247989],
        [24.839685559272766, 60.211989698036156],
        [24.83854830265045, 60.21179515232027],
        [24.836708307266235, 60.21125414926312],
        [24.83533501625061, 60.21075311384227],
        [24.833940267562866, 60.2103959881789],
        [24.831740856170654, 60.210204098156794],
        [24.831300973892212, 60.2101987678624],
        [24.830882549285885, 60.21028938274967],
        [24.830453395843506, 60.21046528152209],
        [24.829916954040527, 60.2104492907636],
        [24.82856512069702, 60.20990026999256],
        [24.82939124107361, 60.20888215861068],
        [24.829176664352417, 60.20885017554222],
        [24.824423789978027, 60.20944718767789],
        [24.824423789978027, 60.209311261763055],
        [24.82479929924011, 60.20891680689963],
        [24.82578635215759, 60.20877288299808],
        [24.826161861419678, 60.208610301534875],
        [24.82652127742767, 60.20781337418279],
        [24.827234745025635, 60.206499334630195],
        [24.827492237091064, 60.20527320563017],
        [24.827342033386227, 60.204462869140464],
        [24.827685356140137, 60.20371648887658],
        [24.827148914337158, 60.20352455977847],
        [24.826247692108154, 60.203545885289245],
        [24.82577562332153, 60.203567210786176],
        [24.825453758239743, 60.203377946516525],
        [24.8246169090271, 60.20320200973742],
        [24.82435941696167, 60.20315669253544],
        [24.823908805847168, 60.202623544282915],
        [24.82362985610962, 60.202495587413175],
        [24.82264280319214, 60.2023836247428],
        [24.82258915901184, 60.202095718978896],
        [24.822160005569454, 60.20188511964432],
        [24.820985198020935, 60.20153056328073],
        [24.820743799209595, 60.20153056328073],
        [24.819563627243042, 60.20130663097179],
        [24.819027185440063, 60.20134395312943],
        [24.81765389442444, 60.20117866896624],
        [24.81713891029358, 60.20116267368045],
        [24.816237688064575, 60.20103471111349],
        [24.81539011001587, 60.200773452656385],
        [24.814424514770508, 60.20076278900171],
        [24.814016819000244, 60.20064015672382],
        [24.813566207885742, 60.20044287774985],
        [24.812482595443726, 60.20009097177034],
        [24.811774492263794, 60.20007497595433],
        [24.811431169509888, 60.200165618808626],
        [24.810926914215088, 60.20042688210537],
        [24.809467792510986, 60.19970173803368],
        [24.809564352035522, 60.19956310572476],
        [24.809564352035522, 60.19931249967997],
        [24.80866312980652, 60.198107431119475],
        [24.808255434036255, 60.197894140039175],
        [24.807558059692383, 60.19767551524318],
        [24.807440042495728, 60.197478218445276],
        [24.80753660202026, 60.19652371178095],
        [24.80764389038086, 60.196059779521626],
        [24.80789065361023, 60.19554251398291],
        [24.80790138244629, 60.19474260276836],
        [24.807987213134766, 60.19456128684936],
        [24.808545112609863, 60.19426264668153],
        [24.808598756790158, 60.19410265975954],
        [24.808459281921387, 60.1937293539088],
        [24.808212518692017, 60.193462704273045],
        [24.8081374168396, 60.1928920667742],
        [24.808351993560787, 60.19208675772382],
        [24.808351993560787, 60.19153742961917],
        [24.8086416721344, 60.19112676085613],
        [24.80887770652771, 60.19023607198749],
        [24.808684587478634, 60.18954803829285],
        [24.808673858642578, 60.18926535360312],
        [24.80886697769165, 60.18915867950268],
        [24.809553623199463, 60.18910000859969],
        [24.80986475944519, 60.188998667702094],
        [24.81057286262512, 60.18891332775621],
        [24.81133460998535, 60.18891866150934],
        [24.811999797821045, 60.18892932901295],
        [24.81266498565674, 60.18883865512158],
        [24.813544750213623, 60.18852396143795],
        [24.81526136398315, 60.18876931609445],
        [24.81735348701477, 60.18915334578856],
        [24.821913242340084, 60.18795323807807],
        [24.82237458229065, 60.18784122578664],
        [24.82288956642151, 60.18768654151781],
        [24.823050498962402, 60.18786256149069],
        [24.82308268547058, 60.188155926014915],
        [24.82372641563415, 60.18895066400984],
        [24.824627637863156, 60.18959070746854],
        [24.82488512992859, 60.1896813792827],
        [24.8256254196167, 60.1897080474157],
        [24.826247692108154, 60.18962804295176],
        [24.827427864074703, 60.18928135468828],
        [24.8276424407959, 60.189329357896995],
        [24.827803373336792, 60.18956937288762],
        [24.828929901123047, 60.19024140552569],
        [24.829412698745728, 60.19057741668555],
        [24.829745292663574, 60.19064141842129],
        [24.83009934425354, 60.1905934171312],
        [24.830753803253174, 60.191004092566736],
        [24.83104348182678, 60.19146276295349],
        [24.831697940826412, 60.191740095427],
        [24.832116365432736, 60.19179876161151],
        [24.832749366760254, 60.19177209517701],
        [24.833157062530518, 60.191590762847824],
        [24.833393096923828, 60.191574762888315],
        [24.834573268890377, 60.191830761304345],
        [24.835495948791504, 60.19199609255358],
        [24.83587145805359, 60.19204409179255],
        [24.836161136627197, 60.192022758806125],
        [24.836643934249878, 60.19217742264364],
        [24.83705163002014, 60.19234808534272],
        [24.83729839324951, 60.19238541768987],
        [24.838210344314575, 60.191969426279385],
        [24.8385751247406, 60.19170276234589],
        [24.838714599609375, 60.19156942956675],
        [24.83886480331421, 60.191004092566736],
        [24.839165210723877, 60.19088142381893],
        [24.839884042739868, 60.19082275599489],
        [24.84009861946106, 60.19074275424766],
        [24.84036684036255, 60.19034274258693],
        [24.840388298034668, 60.189873389356585],
        [24.840441942214966, 60.18960670839511],
        [24.84054923057556, 60.18950536906171],
        [24.840399026870728, 60.189094674876046],
        [24.840484857559204, 60.18877998364661],
        [24.839894771575928, 60.18834261116542],
        [24.83931541442871, 60.18797990761496],
        [24.83887553215027, 60.187606532127255],
        [24.8386287689209, 60.18745184675263],
        [24.83829617500305, 60.187291826632595],
        [24.837899208068848, 60.186987786255706],
        [24.837684631347656, 60.1868811047544],
        [24.83738422393799, 60.18676908880495],
        [24.837234020233154, 60.1865343874811],

        [24.83738422393799, 60.18628901612132],
        [24.8374593257904, 60.18351512538635],
        [24.837421774864197, 60.18336575538992],
        [24.837207198143002, 60.18320038067273],
        [24.835742712020874, 60.18242951011419],
        [24.834664463996884, 60.18137320134487],
        [24.834213852882385, 60.181146463972446],
        [24.834160208702087, 60.18108244372504],
        [24.834583997726437, 60.18019948508216],
        [24.834830760955807, 60.17999408042317],
        [24.83505606651306, 60.17993272553557],
        [24.834954142570496, 60.17982068587985],
        [24.835206270217896, 60.17956459380282],
        [24.83530282974243, 60.17937252343447],
        [24.835200905799866, 60.178953699430416],
        [24.835179448127747, 60.17871894223868],
        [24.83536720275879, 60.17777722890957],
        [24.83536720275879, 60.177574476898194],
        [24.835157990455624, 60.1773610523761],
        [24.834798574447632, 60.17726501088869],
        [24.834299683570862, 60.17715829779552],
        [24.834954142570496, 60.1763312595673],
        [24.83424603939056, 60.17619786435436],        
        [24.83430504798889, 60.17610982321702],
        [24.833242893218994, 60.175904392978865],
        [24.831676483154297, 60.175589575315456],
        [24.831756949424744, 60.17544817317954],
        [24.83163893222809, 60.175416157517084],
        [24.8320734500885, 60.17487455449799],
        [24.831756949424744, 60.174517038252375],
        [24.83153164386749, 60.17452504239],
        [24.83134388923645, 60.174477017534926],
        [24.831279516220093, 60.174359623149165],
        [24.83132779598236, 60.17426890901826],
        [24.83139216899872, 60.17422088378871],
        [24.831483364105225, 60.174207543434704],
        [24.831199049949646, 60.173860692328965],
        [24.829675555229187, 60.17355385945167],
        [24.830684065818787, 60.17231849460811],
        [24.828522205352783, 60.17186756152553],
        [24.830158352851868, 60.16983161498716],
        [24.82972919940948, 60.16933528385892],
        [24.829798936843872, 60.16918851784155],
        [24.830909371376038, 60.16912981125105],
        [24.83234167098999, 60.168862961790246],
        [24.83380615711212, 60.168588104579726],
        [24.834176301956177, 60.16835861039009],
        [24.83436405658722, 60.16829189666214],
        [24.83484148979187, 60.16819849721545],
        [24.83681559562683, 60.16771281581259],
        [24.838188886642456, 60.16729117448729],

        [24.839594364166256, 60.166917563728404],
        [24.83987331390381, 60.166901551743805],
        [24.840436577796936, 60.16699495487732],
        [24.840790629386902, 60.166981611588774],
        [24.842534065246582, 60.16653060524958],
        [24.842888116836548, 60.16634379607705],
        [24.843247532844543, 60.166213029024355],
        [24.845382571220398, 60.16569262437241],
        [24.848150610923767, 60.16520156832261],
        [24.84881579875946, 60.16507880316354],
        [24.8493093252182, 60.16507079672419],
        [24.85503315925598, 60.16408598980734],
        [24.85552668571472, 60.16408598980734],
        [24.85532283782959, 60.16456638711237],
        [24.855977296829224, 60.16510816009112],
        [24.858192801475525, 60.16535635852165],
        [24.860059618949887, 60.165543173308],
        [24.859142303466797, 60.16785958842209],
        [24.85902428627014, 60.16794498309315],
        [24.859206676483154, 60.168147794547465],
        [24.85997915267944, 60.16881492865713],
        [24.860258102416992, 60.169247224327165],
        [24.860064983367916, 60.16942868007404],
        [24.860107898712158, 60.16959412414628],
        [24.860419034957886, 60.16984495711831],
        [24.86134171485901, 60.17037863792087],
        [24.861449003219604, 60.17057076088754],
        [24.86121296882629, 60.17084293316708],
        [24.861148595809937, 60.17092832008423],
        [24.861170053482056, 60.17104039007619],
        [24.861502647399902, 60.171952945779545],
        [24.86121296882629, 60.17235851795542],
        [24.860751628875732, 60.17294018509884],
        [24.860140085220333, 60.17338309904384],
        [24.8595929145813, 60.17359654941494],
        [24.858874082565308, 60.17377798113987],
        [24.85709309577942, 60.17414084158342],
        [24.855773448944092, 60.17441298428561],
        [24.855172634124756, 60.17458373933973],
        [24.85398173332214, 60.175058647166416],
        [24.853702783584595, 60.175218726909],
        [24.85334873199463, 60.17560291510816],
        
        [24.851256608963013, 60.175485524746286],
        [24.85131025314331, 60.17565627422488],
        [24.850956201553345, 60.17593907609624],
        [24.8500657081604, 60.17631792007039],
        [24.848381280899048, 60.1768781742763],
        [24.84780192375183, 60.17726767871157],
        [24.8474907875061, 60.17764650736137],
        [24.84773755073547, 60.178249422820976],
        [24.847630262374878, 60.1788363210443],
        [24.846782684326172, 60.17930583207163],
        [24.84599947929382, 60.179631284640195],
        [24.844658374786377, 60.18013279539867],
        [24.844357967376705, 60.18030885586995],
        [24.844250679016113, 60.18048491539733],
        [24.84434723854065, 60.18092772761188],
        [24.84429359436035, 60.18113579393986],
        [24.844400882720947, 60.181167804027154],
        [24.84452962875366, 60.18103442845757],
        [24.848735332489014, 60.18156792748568],
        [24.849293231964108, 60.181679961180414],
        [24.850183725357056, 60.18180266431225],
        [24.850634336471558, 60.18185067845642],
        
        [24.851900339126587, 60.18197338095037],
        [24.852833747863766, 60.1821014178465],
        [24.85377788543701, 60.182352155322015],
        [24.85447525978088, 60.182629564766145],
        [24.854958057403564, 60.18290163713685],
        [24.85532283782959, 60.183173707253225],
        [24.85583782196045, 60.183680498518356],
        [24.85630989074707, 60.18406458774031],
        [24.85706090927124, 60.184475344853176],
        [24.85781192779541, 60.18474206749946],
        [24.858638048171997, 60.18493410646315],
        [24.859861135482788, 60.18502479113892],
        [24.861652851104736, 60.18526483760106],
        [24.8625648021698, 60.18548354507196],
        [24.863712787628174, 60.18591562140308],
        [24.86533284187317, 60.18651305091394],
        [24.86651301383972, 60.18677975700709],
        [24.868905544281006, 60.187158475936734],
        [24.870718717575073, 60.187409174796876],
        [24.8720920085907, 60.18762253402097],
        [24.873497486114502, 60.18786256149069],
        [24.87383008003235, 60.18796390589544],
        [24.873948097229004, 60.18782522399954],
        [24.874666929244995, 60.188001243228854],
        [24.8750638961792, 60.18817192764082],
        [24.8760187625885, 60.18871597828163],

        [24.87679123878479, 60.18927068729905],
        [24.877188205718994, 60.190076065438404],
        [24.877821207046505, 60.19156942956675],
        [24.8779821395874, 60.191841427861675],
        [24.878239631652832, 60.192113423902704],
        [24.878625869750977, 60.19231608615422],
        [24.878979921340942, 60.19240141725422],

        [24.879376888275143, 60.19242274999457],
        [24.879666566848755, 60.19242808317749],
        [24.88119006156921, 60.192268087313],
        [24.881490468978882, 60.19227875372825],
        [24.88181233406067, 60.192326752553875],
        [24.88203763961792, 60.19241741681076],
        [24.882874488830566, 60.192844068775244],
        [24.88303542137146, 60.19296139709322],

        [24.88304615020752, 60.19304405997452],
        [24.883459210395813, 60.19348670282899],
        [24.884923696517944, 60.19474793557435],
        [24.88528311252594, 60.195313208094746],
        [24.885395765304565, 60.19548118814649],
        [24.885385036468502, 60.19554251398291],
        [24.885138273239132, 60.19564116834883],
        [24.88472521305084, 60.195939795973395],
        [24.884703755378723, 60.196065112113594],
        [24.884870052337646, 60.19622775575222],
        [24.88477349281311, 60.19624108716228],
        [24.88374888896942, 60.19649704918505],
        [24.883636236190796, 60.19647571909273],
        [24.881270527839657, 60.196944977921206],
        [24.876844882965088, 60.197840817052494],
        [24.876126050949097, 60.1979847889177],
        [24.875868558883667, 60.197920801500025],
        [24.87533211708069, 60.198043443940925],
        [24.876136779785156, 60.19873129957155],
        [24.87680196762085, 60.199307167615665],

        [24.87701117992401, 60.19951778349672],
        [24.876930713653564, 60.20064548857152],
        [24.876437187194824, 60.20069347516183],
        [24.872703552246094, 60.20250091895938],
        [24.87251043319702, 60.20265553342239],
        [24.872124195098877, 60.20344458898954],

        [24.8720383644104, 60.203631187193814],
        [24.872370958328247, 60.2036525126353],
        [24.872628450393677, 60.2037324829174],
        [24.87257480621338, 60.20388176025582],
        [24.87225830554962, 60.20409234677472],
        [24.87200617790222, 60.2046467959549],
        [24.871866703033447, 60.20515858688148],
        [24.870922565460205, 60.20546512449877],
        [24.870740175247192, 60.205582407699104],
        [24.870010614395138, 60.20669657719028],
        [24.870922565460205, 60.20695778848515],
        [24.87134099006653, 60.207224328478745],
        [24.871383905410767, 60.208354433993556],

        [24.87282156944275, 60.208871497591325],
        [24.873604774475098, 60.209010090572605],
        [24.87425923347473, 60.20932458785805],
        [24.872703552246094, 60.209804323671776],
        [24.872639179229733, 60.210268061622244],
        [24.872446060180664, 60.21062518867846],
        [24.87233877182007, 60.2108383970076],
        [24.87233877182007, 60.21095566099787],
        [24.871652126312252, 60.21165923613541],
        [24.872317314147946, 60.212224217365126],
        [24.87253189086914, 60.21278918886241],
        [24.87401247024536, 60.21336481018978],

        [24.87402319908142, 60.213503384185664],
        [24.874216318130493, 60.2135193734552],
        [24.875171184539795, 60.213935091727],
        [24.875396490097046, 60.21396706983733],
        [24.876362085342407, 60.21395641047067],
        [ 24.876490831375122, 60.21394042141421],
        [24.876641035079956, 60.21399904791649],
        [24.87679123878479, 60.21460662549581],
        [ 24.87716674804687, 60.21466525080714],
        [ 24.877370595932007, 60.21462794380296],
        [24.877617359161377, 60.2148251374871],
        [24.875975847244263, 60.21530479284989],

        [24.875900745391846, 60.2153687463682],
        [24.874151945114136, 60.215893693450674],
        [24.873620867729187, 60.21604291545294],
        [24.872885942459103, 60.21629072906357],
        [24.872639179229733, 60.21611219686602],
        [24.872708916664124, 60.216074891507944],
        [24.872488975524902, 60.21608821485496],
        [24.87200617790222, 60.21624010062867],
        [24.870675802230835, 60.215416711425085],
        [24.870375394821167, 60.215656535657104],
        [24.86907720565796, 60.215256827629325],
        [24.869002103805542, 60.21504897752947],
        [24.8685622215271, 60.214851785191314],
        [24.86782193183899, 60.21521952129815],
        [24.86709237098694, 60.215352758000314],
        [24.86658811569214, 60.21562988860684],
        [24.86672759056091, 60.21572048848945],
        [24.866502285003662, 60.215725817886515],
        [24.86552596092224, 60.216120190865794],

        [24.860515594482422, 60.21337013996968],
        [24.859721660614014, 60.21398838856021],
        [24.859646558761593, 60.21409498196682],

        [24.858734607696533, 60.21481980794368],
        [24.85829472541809, 60.21548066472513],
        [24.858337640762326, 60.215752464858845],
        [24.85755443572998, 60.21607222683788],
        [24.857200384140015, 60.21658916877559],
        [24.85709309577942, 60.21683431365001],
        [24.85679268836975, 60.2175803954695],
        // [24.855676889419556, 60.21751644626441],

        [24.855682253837585, 60.21745782605019],  
        [24.855639338493347, 60.21757240182569],
        [24.85545694828033, 60.21820922267657],
        [24.855419397354126, 60.21823053864176],
        [24.855220913887024, 60.218734124288524]
    ] 
}];

var myStyle = {
    "color": "#FFD726",
    "weight": 5,
    "opacity": 0.5
};

L.geoJson(myLines, {
    style: myStyle
}).addTo(map);

/* function onMapClick(e) {
    console.log(e.latlng.lng + ", " + e.latlng.lat);
}

map.on('click', onMapClick);
*/


L.control.locate().addTo(map);


