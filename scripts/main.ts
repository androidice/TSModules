/// <reference path="../typings/require.d.ts" />
require.config({
  baseUrl: 'scripts'
});

require(['bootstrapper'],(boot: any)=>{
  console.log('running with bootstrap config')
  boot.run();
});
