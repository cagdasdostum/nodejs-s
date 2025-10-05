// Dairenin Alanı = π x r2

const argumentos = process.argv.slice(2); // baştaki 'node daire_alani' kısmını kestik

function daire_alani(r /* yarıçap */) {
  alan = Math.PI * r * r;
  return alan;
}

console.log(daire_alani(argumentos[0]));    // girilen daire alanını seçmek için argumentos[0]

// Örnek çıktı 
// node daire_alani 3
// 28.274333882308138