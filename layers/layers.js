var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_1127075_CBs_1 = new ol.format.GeoJSON();
var features_1127075_CBs_1 = format_1127075_CBs_1.readFeatures(json_1127075_CBs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1127075_CBs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1127075_CBs_1.addFeatures(features_1127075_CBs_1);
var lyr_1127075_CBs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1127075_CBs_1, 
                style: style_1127075_CBs_1,
                interactive: true,
                title: '<img src="styles/legend/1127075_CBs_1.png" /> 1127075_CBs'
            });
var format_Kirulaentities_2 = new ol.format.GeoJSON();
var features_Kirulaentities_2 = format_Kirulaentities_2.readFeatures(json_Kirulaentities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirulaentities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirulaentities_2.addFeatures(features_Kirulaentities_2);
var lyr_Kirulaentities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kirulaentities_2, 
                style: style_Kirulaentities_2,
                interactive: true,
                title: 'Kirula — entities'
            });
var format_Buildings_confidence_065_070_kirula_3 = new ol.format.GeoJSON();
var features_Buildings_confidence_065_070_kirula_3 = format_Buildings_confidence_065_070_kirula_3.readFeatures(json_Buildings_confidence_065_070_kirula_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_confidence_065_070_kirula_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_confidence_065_070_kirula_3.addFeatures(features_Buildings_confidence_065_070_kirula_3);
var lyr_Buildings_confidence_065_070_kirula_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_confidence_065_070_kirula_3, 
                style: style_Buildings_confidence_065_070_kirula_3,
                interactive: true,
                title: '<img src="styles/legend/Buildings_confidence_065_070_kirula_3.png" /> Buildings_confidence_065_070_kirula'
            });
var format_Buildings_confidence_070_075_kirula_4 = new ol.format.GeoJSON();
var features_Buildings_confidence_070_075_kirula_4 = format_Buildings_confidence_070_075_kirula_4.readFeatures(json_Buildings_confidence_070_075_kirula_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_confidence_070_075_kirula_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_confidence_070_075_kirula_4.addFeatures(features_Buildings_confidence_070_075_kirula_4);
var lyr_Buildings_confidence_070_075_kirula_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_confidence_070_075_kirula_4, 
                style: style_Buildings_confidence_070_075_kirula_4,
                interactive: true,
                title: '<img src="styles/legend/Buildings_confidence_070_075_kirula_4.png" /> Buildings_confidence_070_075_kirula'
            });
var format_Buildings_confidence_075_kirula_5 = new ol.format.GeoJSON();
var features_Buildings_confidence_075_kirula_5 = format_Buildings_confidence_075_kirula_5.readFeatures(json_Buildings_confidence_075_kirula_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_confidence_075_kirula_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_confidence_075_kirula_5.addFeatures(features_Buildings_confidence_075_kirula_5);
var lyr_Buildings_confidence_075_kirula_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_confidence_075_kirula_5, 
                style: style_Buildings_confidence_075_kirula_5,
                interactive: true,
                title: '<img src="styles/legend/Buildings_confidence_075_kirula_5.png" /> Buildings_confidence_075_kirula'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1127075_CBs_1.setVisible(true);lyr_Kirulaentities_2.setVisible(true);lyr_Buildings_confidence_065_070_kirula_3.setVisible(true);lyr_Buildings_confidence_070_075_kirula_4.setVisible(true);lyr_Buildings_confidence_075_kirula_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1127075_CBs_1,lyr_Kirulaentities_2,lyr_Buildings_confidence_065_070_kirula_3,lyr_Buildings_confidence_070_075_kirula_4,lyr_Buildings_confidence_075_kirula_5];
lyr_1127075_CBs_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SN': 'SN', 'Pro_Code': 'Pro_Code', 'Pro_Name': 'Pro_Name', 'A1_D_CODE': 'A1_D_CODE', 'A1_D_NAME': 'A1_D_NAME', 'DSD_UID': 'DSD_UID', 'A2_DS_CODE': 'A2_DS_CODE', 'A2_DS_NAME': 'A2_DS_NAME', 'A3_GN_CODE': 'A3_GN_CODE', 'A3_GN_NAME': 'A3_GN_NAME', 'GND_UID': 'GND_UID', 'A4_SEC_C': 'A4_SEC_C', 'A4_SEC_N': 'A4_SEC_N', 'A5_EST_C': 'A5_EST_C', 'A5_EST_N': 'A5_EST_N', 'A6_LGD_C': 'A6_LGD_C', 'A6_LGD_N': 'A6_LGD_N', 'A7_POLD_C': 'A7_POLD_C', 'A7_POLD_N': 'A7_POLD_N', 'A9_WARD_N': 'A9_WARD_N', 'N_UNI_TOT': 'N_UNI_TOT', 'N_UNI_HOU': 'N_UNI_HOU', 'N_NON_HOU': 'N_NON_HOU', 'CB_LETTER': 'CB_LETTER', 'CB_CODE': 'CB_CODE', 'A10_CB_UID': 'A10_CB_UID', 'A0_MRCBN': 'A0_MRCBN', 'C_CER_NO': 'C_CER_NO', 'WARD_UID': 'WARD_UID', 'GND_NUM': 'GND_NUM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kirulaentities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Buildings_confidence_065_070_kirula_3.set('fieldAliases', {'id': 'id', 'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', });
lyr_Buildings_confidence_070_075_kirula_4.set('fieldAliases', {'id': 'id', 'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', });
lyr_Buildings_confidence_075_kirula_5.set('fieldAliases', {'id': 'id', 'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', });
lyr_1127075_CBs_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SN': 'TextEdit', 'Pro_Code': 'TextEdit', 'Pro_Name': 'TextEdit', 'A1_D_CODE': 'TextEdit', 'A1_D_NAME': 'TextEdit', 'DSD_UID': 'TextEdit', 'A2_DS_CODE': 'TextEdit', 'A2_DS_NAME': 'TextEdit', 'A3_GN_CODE': 'TextEdit', 'A3_GN_NAME': 'TextEdit', 'GND_UID': 'TextEdit', 'A4_SEC_C': 'TextEdit', 'A4_SEC_N': 'TextEdit', 'A5_EST_C': 'TextEdit', 'A5_EST_N': 'TextEdit', 'A6_LGD_C': 'TextEdit', 'A6_LGD_N': 'TextEdit', 'A7_POLD_C': 'TextEdit', 'A7_POLD_N': 'TextEdit', 'A9_WARD_N': 'TextEdit', 'N_UNI_TOT': 'Range', 'N_UNI_HOU': 'Range', 'N_NON_HOU': 'Range', 'CB_LETTER': 'TextEdit', 'CB_CODE': 'TextEdit', 'A10_CB_UID': 'TextEdit', 'A0_MRCBN': 'TextEdit', 'C_CER_NO': 'TextEdit', 'WARD_UID': 'TextEdit', 'GND_NUM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kirulaentities_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Buildings_confidence_065_070_kirula_3.set('fieldImages', {'id': '', 'area_in_me': '', 'confidence': '', 'full_plus_': '', });
lyr_Buildings_confidence_070_075_kirula_4.set('fieldImages', {'id': '', 'area_in_me': '', 'confidence': '', 'full_plus_': '', });
lyr_Buildings_confidence_075_kirula_5.set('fieldImages', {'id': 'TextEdit', 'area_in_me': 'TextEdit', 'confidence': 'TextEdit', 'full_plus_': 'TextEdit', });
lyr_1127075_CBs_1.set('fieldLabels', {'OBJECTID': 'no label', 'SN': 'no label', 'Pro_Code': 'no label', 'Pro_Name': 'no label', 'A1_D_CODE': 'no label', 'A1_D_NAME': 'no label', 'DSD_UID': 'no label', 'A2_DS_CODE': 'no label', 'A2_DS_NAME': 'no label', 'A3_GN_CODE': 'no label', 'A3_GN_NAME': 'no label', 'GND_UID': 'no label', 'A4_SEC_C': 'no label', 'A4_SEC_N': 'no label', 'A5_EST_C': 'no label', 'A5_EST_N': 'no label', 'A6_LGD_C': 'no label', 'A6_LGD_N': 'no label', 'A7_POLD_C': 'no label', 'A7_POLD_N': 'no label', 'A9_WARD_N': 'no label', 'N_UNI_TOT': 'no label', 'N_UNI_HOU': 'no label', 'N_NON_HOU': 'no label', 'CB_LETTER': 'no label', 'CB_CODE': 'no label', 'A10_CB_UID': 'no label', 'A0_MRCBN': 'no label', 'C_CER_NO': 'no label', 'WARD_UID': 'no label', 'GND_NUM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kirulaentities_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Buildings_confidence_065_070_kirula_3.set('fieldLabels', {'id': 'no label', 'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', });
lyr_Buildings_confidence_070_075_kirula_4.set('fieldLabels', {'id': 'no label', 'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', });
lyr_Buildings_confidence_075_kirula_5.set('fieldLabels', {'id': 'no label', 'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', });
lyr_Buildings_confidence_075_kirula_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});