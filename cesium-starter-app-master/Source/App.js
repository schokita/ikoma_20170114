var cesiumWidget = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('生駒サンプル.kml.kmz'));
