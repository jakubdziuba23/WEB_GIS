require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/LayerList",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Measurement",
    "esri/widgets/Search",
    "esri/widgets/Legend",
    "esri/PopupTemplate",
    ], (Map, MapView, FeatureLayer, LayerList, Expand, BasemapGallery, Measurement, Search, Legend, PopupTemplate) => {
    const map1 = new Map({
        basemap: "streets-relief-vector"
    });

    const view = new MapView({
        map: map1,
        container: "mapDiv",
        zoom: 12,
        center:[25.829711359132663,53.594977528372304]
    });

    const template = {
        title: "Miejsce zamieszkania Adama Mickiewicza",
        content: "{nazwa}"
    };

    const layer = new FeatureLayer({
        url: "https://services9.arcgis.com/XzFo5ArWiIwKyBgo/arcgis/rest/services/Miejsca_pobytu_Adama_Mickiewicza/FeatureServer",
        popupTemplate: template,
    });

    map1.add(layer);

    const layerList = new LayerList ({
        view: view,
    });

    const legend = new Legend ({
        view: view,
    });

    let basemapGallery = new BasemapGallery({
        view: view
    });

    let measurement = new Measurement({
        view: view,
        activeTool: ""
    });

    const searchWidget = new Search({
        view: view
    });

    layerListExpand = new Expand({
        expandIconClass: "esri-icon-layer-list",
        view: view,
        content: layerList
    });
    view.ui.add(layerListExpand, "top-right");

    legendExpand = new Expand({
        expandIconClass: "esri-icon-legend",
        view: view,
        content: legend
    });
    view.ui.add(legendExpand, "top-right");

    basemapGalleryExpand = new Expand({
        expandIconClass: "esri-icon-basemap",
        view: view,
        content: basemapGallery
    });
    view.ui.add(basemapGalleryExpand, "top-right");

    //measurementExpand = new Expand({
        //expandIconClass: "esri-icon-measure",
        //view: view,
        //content: measurement,
    //});
    
    //view.ui.add(measurementExpand, "top-right");

    searchExpand = new Expand({
        expandIconClass: "esri-icon-search",
        view: view,
        content: searchWidget
    });
    view.ui.add(searchExpand, "top-right");

    let przycisk1 = document.getElementById("nowogrodek")
    przycisk1.addEventListener("click", () => {
        view.center = [25.829711359132663,53.594977528372304]
        view.zoom = 12
    })

    let przycisk2 = document.getElementById("wilno")
    przycisk2.addEventListener("click", () => {
        view.center = [25.281161808750973,54.67932660330432]
        view.zoom = 11
    })

    let przycisk3 = document.getElementById("kowno")
    przycisk3.addEventListener("click", () => {
        view.center = [23.921762934310316,54.90529312950637]
        view.zoom = 11
    })
    59.915823058012336, 30.344515286855252
    let przycisk4 = document.getElementById("petersburg")
    przycisk4.addEventListener("click", () => {
        view.center = [30.344515286855252,59.915823058012336]
        view.zoom = 11
    })

    let przycisk5 = document.getElementById("odessa")
    przycisk5.addEventListener("click", () => {
        view.center = [30.73375147682556,46.47738442284034]
        view.zoom = 11
    })

    let przycisk6 = document.getElementById("moskwa")
    przycisk6.addEventListener("click", () => {
        view.center = [37.627113949875906,55.73259128329471]
        view.zoom = 10
    })

    let przycisk7 = document.getElementById("symferopol")
    przycisk7.addEventListener("click", () => {
        view.center = [34.11607762188299,44.9557664661024]
        view.zoom = 11
    })

    let przycisk8 = document.getElementById("drezno")
    przycisk8.addEventListener("click", () => {
        view.center = [13.742365324008217,51.043519550987924]
        view.zoom = 11
    })

    let przycisk9 = document.getElementById("paryz")
    przycisk9.addEventListener("click", () => {
        view.center = [2.34943616730025,48.85996291412641]
        view.zoom = 10
    })

    let przycisk10 = document.getElementById("stambul")
    przycisk10.addEventListener("click", () => {
        view.center = [29.02450146679773,41.0557426326952]
        view.zoom = 11
    })

    let x = 0;
    let przyciskPomiar = document.getElementById("pomiar")
    przyciskPomiar.addEventListener("click", () => {
        measurement.clear();
        if(x == 0){
            measurement.activeTool = "distance";
            x = 1;
        }
        else{
            measurement.activeTool = "";
            x = 0;
        }
    });
});