class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
    }, 1000);

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigit = '';
    if(value < 10){
      twoDigit += `0${value}`;
    }else{
      twoDigit += `${value}`;
    }

    return twoDigit.slice(0,2);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${this.computeTwoDigitNumber(min)}:${this.computeTwoDigitNumber(sec)}`;
  }
}
