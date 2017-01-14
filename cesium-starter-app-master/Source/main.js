var viewer = new Cesium.Viewer("cesium");

viewer.dataSources.add(Cesium.KmlDataSource.load("test.kml"));
