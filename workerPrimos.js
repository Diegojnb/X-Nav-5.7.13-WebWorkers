var n = 1;
var max;

function workerPrimos(max) {
  primelist = "";

  search: while (n<max) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
    if (primelist.length > 10000) {
      return primelist;
    }
  }
  return primelist;
}

self.onmessage = function(event) {
  max = event.data
  while(n<max){
    salida = workerPrimos(max);
    self.postMessage(salida);
  }
}
