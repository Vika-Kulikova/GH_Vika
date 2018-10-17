(function () {

  function timeSwitch(num) {
    switch (num) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        console.log('switch');
    }
  }

  function timeIf(num) {
    if (num == 0) {
    }
    else if (num == 1) {
    }
    else if (num == 2) {
    }
    else if (num == 3) {
    }
    else if (num == 4) {
    }
    else if (num == 5) {
    }
    else {
      console.log('if')
    }
  }

  function measure(fun, log) {
    console.time(log);
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 7; j++) {
        fun(j);
      }
    }
    console.timeEnd(log);
  }

  measure(timeSwitch, 'timer switch: ');
  measure(timeIf, 'timer if: ');

})();