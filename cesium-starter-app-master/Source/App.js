var cesiumWidget = new Cesium.Viewer('cesiumContainer');

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
//’’内は読み込むkmlのパス
viewer.dataSources.add(Cesium.KmlDataSource.load('doc.kml'));
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
