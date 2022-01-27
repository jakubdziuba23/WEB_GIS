require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    ], (Map, SceneView, FeatureLayer, GraphicsLayer) => {

    const template = {
        title: "Trzęsienia ziemi",
        content: "Moc: {MAGNITUDE} stopni magnitudy"
    };

    const layer = new FeatureLayer({
        url: "https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Earthquakes/FeatureServer/0",
        popupTemplate: template,
    });

    let graphLayer = new GraphicsLayer({
        popupTemplate: template,
    });

    const map1 = new Map({
        basemap: "streets-night-vector",
        layers: [layer, graphLayer]
    });

    const view = new SceneView({
        map: map1,
        container: "mapDiv",
        zoom: 4,
        center:[-98.95056194045077,40.43187429596253]
    });

    let query = layer.createQuery();
    query.where = "MAGNITUDE > 4";
    query.outFields = ['*'];
    query.returnGeometry = true;

    layer.queryFeatures(query)
    .then(response => {
        console.log(response);
        getResults(response.features)
    });

    function getResults(features) {
        const symbol = {
            type: 'simple-marker',
            color: "blue",
            size: 15
        };

        features.map(elem => {
            elem.symbol = symbol
        });

        graphLayer.addMany(features);
    }

    let simpleRender = {
        type: "simple", 
        symbol: {
            type: "point-3d",
            symbolLayers: [
            {
                type: "object", 
                resource: { primitive: "cylinder" }, 
                width: 5000
            }
        ]
        },
        visualVariables: [
            {
            type: "color",
            field: "MAGNITUDE", 
            stops: [{ value: 0, color: "green" }, { value: 4, color: "red" }]
            },
            {
            type: "size",
            field: "DEPTH", 
            stops: [{ value: 1, size: 1 }, { value: 20, size: 500000 }],
            axis: "height"
            },
            {
            type: "size",
            axis: "width-and-depth",
            useSymbolValue: true 
            }
        ]
    };

    layer.renderer = simpleRender;

});
