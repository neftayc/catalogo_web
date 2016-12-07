(function() {

    angular.module("pi.tableResponsive", []);

    var tableResponsive = angular.module("pi.tableResponsive");


    tableResponsive
        .directive("tableResponsive", function($compile, $filter) { //en construccion
            return {
                restrict: "A",
                compile: function(element, attrs) {
                    attrs.$addClass("table-responsive");
                    var header_text = [];
                    var header_order = [];
                    var headers = element[0].querySelectorAll("table thead tr:first-child  > th");
                    //console.log("headers.length:" + headers.length);
                    if (headers.length) {
                        var k = 0;
                        for (var i = 0; i < headers.length; i++) {
                            var current = headers[i];
                            var data_order = current.getAttribute("data-order");
                            if (data_order) {
                                console.log('data_order:' + data_order);
                                var x = 1;
                                angular.element(current).append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" aria-label="title" ng-click="elemAsc()"> <path style="fill: black" d="M11 7h-6l3-4z"/> <path style="fill: black" d="M5 9h6l-3 4z"/> </svg>');
                            }


                            var colspan = null;
                            if (current)
                                colspan = current.getAttribute("colspan");
                            var re = colspan ? parseInt(colspan) : 1;
                            if (re > 1)
                                for (var r = 1; r <= re; r++) {
                                    k++;
                                    var corresponding_th = element[0].querySelector('thead tr:not(:first-child) th:nth-of-type(' + (k) + ')');
                                    if (corresponding_th) {
                                        header_text.push(current.textContent + " " + corresponding_th.textContent + ":");
                                        data_order = corresponding_th.getAttribute("data-order");

                                        if (data_order) {
                                            console.log('data_order colspan:' + data_order);
                                            var x = 1;
                                            angular.element(corresponding_th).append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" aria-label="title" ng-click="elemAsc()"> <path style="fill: black" d="M11 7h-6l3-4z"/> <path style="fill: black" d="M5 9h6l-3 4z"/> </svg>');
                                        }

                                    } else {
                                        header_text.push(current.textContent + ":");
                                        //console.warn("use thead ");
                                    }
                                }
                            else {
                                header_text.push(current.textContent.replace(/\r?\n|\r/, "") + ":");
                            }
                        }
                        var rows = element[0].querySelectorAll("tbody > tr");
                        Array.prototype.forEach.call(rows, function(row) {
                            Array.prototype.forEach.call(row.querySelectorAll("td"), function(value, index) {
                                value.setAttribute("data-title", header_text[index]);
                            });
                        });
                    }
                }
            };
        });


})();
