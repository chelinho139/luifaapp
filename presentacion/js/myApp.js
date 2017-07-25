var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./content/indexcontent.html",
            controller: "indexCtrl",
        })
        .when("/relevamiento", {
            templateUrl: "./content/relevamiento.html",
            controller: "relevamientoCtrl",
        })
        .when("/mapa", {
            templateUrl: "./content/mapa.html",
            controller: "mapaCtrl",
        })
        .when("/wire", {
            templateUrl: "./content/wire.html",
            controller: "wireCtrl",
        })
        .when("/elecciones", {
            templateUrl: "./content/elecciones.html",
            controller: "eleccionesCtrl",
        });
});