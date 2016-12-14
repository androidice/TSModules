require.config({
    baseUrl: 'scripts'
});
require(['bootstrapper'], function (boot) {
    console.log('running with bootstrap config');
    boot.run();
});
//# sourceMappingURL=main.js.map