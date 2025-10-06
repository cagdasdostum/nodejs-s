// PROMISE

function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya çalışılıyor...");

    if (data) {
      resolve("Veriler alındı.");
    } else {
      reject("Veriler alınamadı.");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor...");

    if (receivedData) {
      resolve("Veriler düzenlendi.");
    } else {
      reject("Veriler düzenlenemedi.");
    }
  });
}
/*
getData(true)
  .then((result) => {
    // true olduğu için resolve çalıştı. .then
    console.log(result);
    return cleanData(true); // true olduğu için resolve çalıştı .then
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// ASYNC - AWAIT
/*
async function processData() {
    try {
        const receivedData = await getData(true); // önce bi getData()' yı tamamlaması lazım. çünkü async bir fonksiyon yaptık.
        console.log(receivedData);
        const cleanedData = await cleanData(false);
        console.log(cleanedData);

    } catch(error) {
        console.log(error);
    }
}

processData();
*/

const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    reject("BİR HATA OLUŞTU");
  });
  return promise1;
};

// promise
/*
addBook({ name: "Kitap 14", author: "Yazar 14" })
  .then(() => {
    console.log("yeni liste");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });
*/

// ASYNC AWAIT

async function showBooks() {
    
    try {
        await addBook({ name: "Javascript Kitabı", author: "cagdasdostum" });
        listBooks();
    } catch(error) {
        console.log(error);
    }
}

showBooks();