app

    .controller("MainCtrl", function($scope, $mdSidenav, $timeout, $rootScope, $window,
    $log, toastr, oauth2Service, appsUrl, apiUrl, menuService) {

    //toastr.success('Consumer sig in successfully', 'Message');

    $scope.menu = menuService;

    $scope.app = {
        name: 'Catálogo App',
        version: '1.0.1',

        setting: {
            theme: {
                primary: 'indigo',
                accent: 'purple',
                warn: 'amber'
            },
            asideFolded: false
        },
        search: {
            content: '',
            show: false
        }
    };

    $scope.setTheme = function(theme) {
        $scope.dynamicTheme = theme;
        $scope.app.setting.theme = theme;
    };

    $scope.logIn = function() {
        console.log("logIn");
        oauth2Service.createLoginUrl().then(function(url) {
                console.log("urla=" + url);
                $window.location = url;
            })
            .catch(function(error) {
                console.log("createLoginUrl error");
                console.log(error);
                throw error;
            });
    };

    $scope.logOut = function() {
        console.log("logOut");
        oauth2Service.logOut();
        $window.location = apiUrl + "/accounts/logout/";

    };

    $scope.showApps = function() {
        console.log("showApps");
        //oauth2Service.logOut();
        $window.location = appsUrl;
    };

    $rootScope.$on('$stateChangeSuccess', openPage);

    function openPage() {
        $scope.closeAside();
    }

    $scope.goBack = function() {
        $window.history.back();
    };

    $scope.openAside = function() {
        $timeout(function() { $mdSidenav('aside').open(); });
    };
    $scope.closeAside = function() {
        //$timeout(function() { $document.find('#aside').length && $mdSidenav('aside').close(); });
        $timeout(function() { document.getElementById('aside') && $mdSidenav('aside').close(); });
    };

});
