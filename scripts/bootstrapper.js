define(["require", "exports", './alerter'], function (require, exports, al) {
    "use strict";
    function run() {
        var alerter = new al.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
});
//# sourceMappingURL=bootstrapper.js.map