app.controller('contentCtrl', function ($scope) {
    //Nav
    $scope.navTitle = "Diseño e informatica";

    $scope.nav1 = "Relevamiento";
    $scope.nav2 = "Mapa de sitio";
    $scope.nav3 = "Wireframe";
    $scope.nav4 = "Elecciones";
    $scope.nav5 = "Volver al sitio";
    // Footer
    $scope.footerC = "Luis Paez 2017"
});

app.controller('indexCtrl', function ($scope) {
    $scope.intro = "Point Break";
    $scope.introP = "Presentacion de como fue realizada la pagina web de la materia";
    $scope.introP2 = "Esta misma fue realizada en NodeJs, AngularJs, y Bootstrap";
    $scope.botonIntro = "Ver el relevamiento";

});

app.controller('relevamientoCtrl', function ($scope) {
    $scope.title = "Relevamiento de datos";
    $scope.titleS = "Podra descargar el PDF con el relevamiento entero de datos"
    $scope.botonIntro = "Ver el relevamiento";
     //Preview
    $scope.titlePreview = "Preview de la descarga";
});

app.controller('mapaCtrl', function ($scope) {
    $scope.titleCtrl = "Mapa de sitio";
    $scope.titleS = "A continuacion podra descargar el Mapa de sitio junto en su respectivo PDF junto al wireframe.";
    $scope.titlePreview = "Preview del Mapa de sitio";
    $scope.title = "";
});

app.controller('eleccionesCtrl', function ($scope) {
    $scope.title = "Elecciones de estilos";
    $scope.titleS = "Cromaticas, Tipograficas";
    // small
    $scope.cromaticaTitle = "Las elecciones cromaticas";
    $scope.cromaticaS = "Fueron tomadas de la gama de colores de la pelicula, entre los Negros, Grises, y Naranjas. Cabe aclarar que esta web al ser una web aparte no respeta dichos colores";
    $scope.title = "Elecciones de estilos"
});
app.controller('wireCtrl', function ($scope) {
        $scope.titleWireframe = "Wireframe ";
    $scope.titleWireframeS = "Pagina 2 del pdf adjunto.";
    // small
    $scope.cromaticaTitle = "Las elecciones cromaticas";
    $scope.cromaticaS = "Fueron tomadas de la gama de colores de la pelicula, entre los Negros, Grises, y Naranjas. Cabe aclarar que esta web al ser una web aparte no respeta dichos colores";
    $scope.title = "Elecciones de estilos"
});