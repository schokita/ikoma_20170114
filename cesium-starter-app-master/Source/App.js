var cesiumWidget = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://schokita.github.io/ikoma_20170114/test.kml'));
