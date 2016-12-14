import al = require('./alerter.js');
export function run(){
  var alerter = new al.Alerter();
  alerter.showMessage();
}
