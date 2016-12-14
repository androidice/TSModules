var dataService = new DataService();
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
//# sourceMappingURL=alerter.js.map