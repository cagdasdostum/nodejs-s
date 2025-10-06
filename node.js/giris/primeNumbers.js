// console.log("NODE.JS'DEN MERHABA");

// iki sayı gircez iki sayı arasındaki asal sayıları ekrana yazdırcaz.

const argumentss = process.argv.slice(2); //terminalde node primeNumbers yanına yazdığımız şeyleri bir dizide string tutuyor. biz de node primenumbers kısmını almayıp 3.elemandan başlayacak şekilde ayarladık.

function showPrimeNumbers(lownumber, highnumber) {
  for (let i = lownumber; i <= highnumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
        if(i % j === 0 && j !== i) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(i);
    }
  }
}

showPrimeNumbers(argumentss[0] *1, argumentss[1] *1);   //elemanlar string oldugu için 1 ile çarparak number dönüştürdük.

// console.log(process.argv.slice(2));
console.log(process.argv[1]);