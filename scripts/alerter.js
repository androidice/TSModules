define(["require", "exports", './dataservice'], function (require, exports, ds) {
    "use strict";
    var dataService = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
            this.name = 'John Smith';
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataService.getMessage();
            alert(msg + ' ' + this.name);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
//# sourceMappingURL=alerter.js.map