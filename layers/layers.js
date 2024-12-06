var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KotaPalu_1 = new ol.format.GeoJSON();
var features_KotaPalu_1 = format_KotaPalu_1.readFeatures(json_KotaPalu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPalu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaPalu_1.addFeatures(features_KotaPalu_1);
var lyr_KotaPalu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaPalu_1, 
                style: style_KotaPalu_1,
                popuplayertitle: "Kota Palu",
                interactive: true,
    title: 'Kota Palu<br />\
    <img src="styles/legend/KotaPalu_1_0.png" /> Mantikulore<br />\
    <img src="styles/legend/KotaPalu_1_1.png" /> Palu Barat<br />\
    <img src="styles/legend/KotaPalu_1_2.png" /> Palu Selatan<br />\
    <img src="styles/legend/KotaPalu_1_3.png" /> Palu Timur<br />\
    <img src="styles/legend/KotaPalu_1_4.png" /> Palu Utara<br />\
    <img src="styles/legend/KotaPalu_1_5.png" /> Tatanga<br />\
    <img src="styles/legend/KotaPalu_1_6.png" /> Tawaeli<br />\
    <img src="styles/legend/KotaPalu_1_7.png" /> Ulujadi<br />\
    <img src="styles/legend/KotaPalu_1_8.png" /> <br />'
        });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Titik_Mesjid_3 = new ol.format.GeoJSON();
var features_Titik_Mesjid_3 = format_Titik_Mesjid_3.readFeatures(json_Titik_Mesjid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Mesjid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Mesjid_3.addFeatures(features_Titik_Mesjid_3);
var lyr_Titik_Mesjid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Mesjid_3, 
                style: style_Titik_Mesjid_3,
                popuplayertitle: "Titik_Mesjid",
                interactive: true,
                title: '<img src="styles/legend/Titik_Mesjid_3.png" /> Titik_Mesjid'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_KotaPalu_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Titik_Mesjid_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_KotaPalu_1,lyr_Jalan_2,lyr_Titik_Mesjid_3];
lyr_KotaPalu_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Titik_Mesjid_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'ORIG_FID': 'ORIG_FID', });
lyr_KotaPalu_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Titik_Mesjid_3.set('fieldImages', {'OBJECTID': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', 'ORIG_FID': '', });
lyr_KotaPalu_1.set('fieldLabels', {'KDCPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'header label - visible with data', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Titik_Mesjid_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'inline label - always visible', 'SymbolID': 'inline label - always visible', 'AltMode': 'inline label - always visible', 'Base': 'inline label - always visible', 'Snippet': 'inline label - always visible', 'PopupInfo': 'inline label - always visible', 'HasLabel': 'inline label - always visible', 'LabelID': 'inline label - always visible', 'ORIG_FID': 'inline label - always visible', });
lyr_Titik_Mesjid_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});