import ds = require('./dataservice.js');
export interface IAlerter {
  name: string;
  showMessage():void
}

var dataService: ds.IDataService = new ds.DataService();

export class Alerter implements  IAlerter {
  name = 'John Smith';
  showMessage(){
   var msg = dataService.getMessage();
   alert(msg+' '+this.name);
  }
}