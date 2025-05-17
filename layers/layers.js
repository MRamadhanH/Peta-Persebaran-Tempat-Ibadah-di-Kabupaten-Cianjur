ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.119494, -6.839785, 107.181170, -6.806127]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Data_1 = new ol.format.GeoJSON();
var features_Data_1 = format_Data_1.readFeatures(json_Data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_1.addFeatures(features_Data_1);
var lyr_Data_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_1, 
                style: style_Data_1,
                popuplayertitle: 'Data',
                interactive: true,
    title: 'Data<br />\
    <img src="styles/legend/Data_1_0.png" /> Gereja Katolik St.Petrus<br />\
    <img src="styles/legend/Data_1_1.png" /> Masjid Agung Cianjur<br />\
    <img src="styles/legend/Data_1_2.png" /> Masjid Al-Azhar<br />\
    <img src="styles/legend/Data_1_3.png" /> Masjid Assakinah<br />\
    <img src="styles/legend/Data_1_4.png" /> Masjid Darussalam Bihbu<br />\
    <img src="styles/legend/Data_1_5.png" /> Masjid Jami Al-Hidayah<br />\
    <img src="styles/legend/Data_1_6.png" /> Masjid Jami Darul Falah<br />\
    <img src="styles/legend/Data_1_7.png" /> Masjid Jamil Al Ikhlas<br />\
    <img src="styles/legend/Data_1_8.png" /> Masjid Kubro<br />\
    <img src="styles/legend/Data_1_9.png" /> Masjid LP Cianjur<br />\
    <img src="styles/legend/Data_1_10.png" /> Mesjid Attaqwa<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Data_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Data_1];
lyr_Data_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-cord': 'X-cord', 'Y-cord': 'Y-cord', 'Deskripsi': 'Deskripsi', 'Gambar URL': 'Gambar URL', });
lyr_Data_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-cord': 'TextEdit', 'Y-cord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar URL': 'TextEdit', });
lyr_Data_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-cord': 'inline label - visible with data', 'Y-cord': 'inline label - visible with data', 'Deskripsi': 'header label - visible with data', 'Gambar URL': 'inline label - visible with data', });
lyr_Data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});