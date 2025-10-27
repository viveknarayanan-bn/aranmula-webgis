var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ARANMULAWARD_2 = new ol.format.GeoJSON();
var features_ARANMULAWARD_2 = format_ARANMULAWARD_2.readFeatures(json_ARANMULAWARD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARANMULAWARD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARANMULAWARD_2.addFeatures(features_ARANMULAWARD_2);
var lyr_ARANMULAWARD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARANMULAWARD_2, 
                style: style_ARANMULAWARD_2,
                popuplayertitle: 'ARANMULAWARD',
                interactive: true,
                title: '<img src="styles/legend/ARANMULAWARD_2.png" /> ARANMULAWARD'
            });
var format_ARANMULATRANSFORMER_3 = new ol.format.GeoJSON();
var features_ARANMULATRANSFORMER_3 = format_ARANMULATRANSFORMER_3.readFeatures(json_ARANMULATRANSFORMER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARANMULATRANSFORMER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARANMULATRANSFORMER_3.addFeatures(features_ARANMULATRANSFORMER_3);
var lyr_ARANMULATRANSFORMER_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARANMULATRANSFORMER_3, 
                style: style_ARANMULATRANSFORMER_3,
                popuplayertitle: 'ARANMULATRANSFORMER',
                interactive: true,
                title: '<img src="styles/legend/ARANMULATRANSFORMER_3.png" /> ARANMULATRANSFORMER'
            });
var format_ARANMULAROAD_4 = new ol.format.GeoJSON();
var features_ARANMULAROAD_4 = format_ARANMULAROAD_4.readFeatures(json_ARANMULAROAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARANMULAROAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARANMULAROAD_4.addFeatures(features_ARANMULAROAD_4);
var lyr_ARANMULAROAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARANMULAROAD_4, 
                style: style_ARANMULAROAD_4,
                popuplayertitle: 'ARANMULAROAD',
                interactive: true,
                title: '<img src="styles/legend/ARANMULAROAD_4.png" /> ARANMULAROAD'
            });
var format_ARANMULARATIONSHOP_5 = new ol.format.GeoJSON();
var features_ARANMULARATIONSHOP_5 = format_ARANMULARATIONSHOP_5.readFeatures(json_ARANMULARATIONSHOP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARANMULARATIONSHOP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARANMULARATIONSHOP_5.addFeatures(features_ARANMULARATIONSHOP_5);
var lyr_ARANMULARATIONSHOP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARANMULARATIONSHOP_5, 
                style: style_ARANMULARATIONSHOP_5,
                popuplayertitle: 'ARANMULARATIONSHOP',
                interactive: true,
                title: '<img src="styles/legend/ARANMULARATIONSHOP_5.png" /> ARANMULARATIONSHOP'
            });
var format_AFRANMULALOCATION_6 = new ol.format.GeoJSON();
var features_AFRANMULALOCATION_6 = format_AFRANMULALOCATION_6.readFeatures(json_AFRANMULALOCATION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFRANMULALOCATION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFRANMULALOCATION_6.addFeatures(features_AFRANMULALOCATION_6);
var lyr_AFRANMULALOCATION_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFRANMULALOCATION_6, 
                style: style_AFRANMULALOCATION_6,
                popuplayertitle: 'AFRANMULALOCATION',
                interactive: true,
                title: '<img src="styles/legend/AFRANMULALOCATION_6.png" /> AFRANMULALOCATION'
            });
var format_ARANMULAANGANVADI_7 = new ol.format.GeoJSON();
var features_ARANMULAANGANVADI_7 = format_ARANMULAANGANVADI_7.readFeatures(json_ARANMULAANGANVADI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARANMULAANGANVADI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARANMULAANGANVADI_7.addFeatures(features_ARANMULAANGANVADI_7);
var lyr_ARANMULAANGANVADI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARANMULAANGANVADI_7, 
                style: style_ARANMULAANGANVADI_7,
                popuplayertitle: 'ARANMULAANGANVADI',
                interactive: true,
                title: '<img src="styles/legend/ARANMULAANGANVADI_7.png" /> ARANMULAANGANVADI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ARANMULAWARD_2.setVisible(true);lyr_ARANMULATRANSFORMER_3.setVisible(true);lyr_ARANMULAROAD_4.setVisible(true);lyr_ARANMULARATIONSHOP_5.setVisible(true);lyr_AFRANMULALOCATION_6.setVisible(true);lyr_ARANMULAANGANVADI_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_ARANMULAWARD_2,lyr_ARANMULATRANSFORMER_3,lyr_ARANMULAROAD_4,lyr_ARANMULARATIONSHOP_5,lyr_AFRANMULALOCATION_6,lyr_ARANMULAANGANVADI_7];
lyr_ARANMULAWARD_2.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_ARANMULATRANSFORMER_3.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_ARANMULAROAD_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_ARANMULARATIONSHOP_5.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_AFRANMULALOCATION_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_ARANMULAANGANVADI_7.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_ARANMULAWARD_2.set('fieldImages', {'gml_parent': '', 'gml_pare_1': '', 'gml_id': '', 'geom': '', 'District': '', 'LSGD': '', 'Ward_Name': '', 'Ward_No': '', 'Lsgd_Type': '', 'Created_Da': '', 'Surveyor': '', 'Mob_No': '', 'Remarks': '', '_distLsgd': '', 'OBJECTID': '', '_result': '', '_ulid': '', '_distLsgd2': '', });
lyr_ARANMULATRANSFORMER_3.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_ARANMULAROAD_4.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_ARANMULARATIONSHOP_5.set('fieldImages', {'id': '', 'AssetName': '', 'Location': '', 'Date': '', 'LULC': '', 'Remarks': '', 'Photo': '', 'Surveyor': '', 'layer': '', 'path': '', });
lyr_AFRANMULALOCATION_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_ARANMULAANGANVADI_7.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ARANMULAWARD_2.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_ARANMULATRANSFORMER_3.set('fieldLabels', {'id': 'no label', 'AssetName': 'inline label - visible with data', 'Location': 'no label', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ARANMULAROAD_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'highway': 'inline label - visible with data', 'waterway': 'inline label - visible with data', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'inline label - visible with data', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_ARANMULARATIONSHOP_5.set('fieldLabels', {'id': 'no label', 'AssetName': 'inline label - visible with data', 'Location': 'no label', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AFRANMULALOCATION_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'barrier': 'no label', 'highway': 'inline label - visible with data', 'ref': 'no label', 'address': 'inline label - visible with data', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_ARANMULAANGANVADI_7.set('fieldLabels', {'id': 'no label', 'AssetName': 'inline label - visible with data', 'Location': 'header label - visible with data', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ARANMULAANGANVADI_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});