var cesiumWidget = new Cesium.Viewer('cesiumContainer');

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
○kmlの読み込み
//’’内は読み込むkmlのパス
viewer.dataSources.add(Cesium.KmlDataSource.load('doc.kml'));
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
