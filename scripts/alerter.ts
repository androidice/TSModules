///<reference path="./dataservice.ts"/>

interface IAlerter {
  name: string;
  showMessage():void
}

var dataService: IDataService = new DataService();

class Alerter implements  IAlerter {
  name = 'John Smith';
  showMessage(){
    var msg = dataService.getMessage();
    alert(msg);
  }
}