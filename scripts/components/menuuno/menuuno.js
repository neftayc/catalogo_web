﻿(function() {

    angular.module("pi.menuuno", []);

    var menuuno = angular.module("pi.menuuno");

    menuuno


    // =========================================================================
    // SUBMENU TOGGLE permite cerrar y expandir los menuitems manteniendo activo
    // el menu actual
    // =========================================================================
    /* Usage
    <nav>
    <ul class="nav">
    <div ng-repeat="section in menu.sections">
            
            <div ng-repeat="menu in section.menu">
                <li ng-if="menu.type === 'toggle'" ng-class="{'active toggled':$state.includes('{{menu.state}}')}">
                    <a md-ink-ripple toggle-submenu class="inherit">
                        <span class="pull-right  ">
                          <ng-md-icon icon="keyboard_arrow_down"></ng-md-icon>
                        </span>
                        <i class="icon mdi-action-subject i-20"></i>
                        <span class="font-normal">{{menu.title}}</span>
                    </a>
                    <ul class="nav nav-sub" ng-repeat="menu_item in menu.menu_items">
                        <li ui-sref-active="active">
                            <a md-ink-ripple ui-sref="{{menu_item.state}}">{{menu_item.title}}</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active" ng-if="menu.type === 'link'">
                    <a md-ink-ripple ui-sref="{{menu.state}}">
                        <span>{{menu.title}}</span>
                    </a>
                </li>
            </div>
            <li ui-sref-active="active" ng-if="section.type === 'link'">
                <a md-ink-ripple ui-sref="{{section.state}}">
                    <span>{{section.title}}</span>
                </a>
            </li>
        </div>
            </ul>
</nav>
    */
        .directive('toggleSubmenu', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind("click", function(e) {
                    element.parent().toggleClass('toggled');
                    var li = angular.element(this).parent();
                    li.toggleClass('active');
                });
            }
        };
    });


})();
