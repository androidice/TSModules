interface IAlerter {
  name: string;
  showMessage():void
}

class Alerter implements  IAlerter {
  name = 'John Smith';
  showMessage(){

  }
}