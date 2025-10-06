const args = process.argv.slice(2);
const [header, author] = args;

const posts = [
  { header: "POST 1", author: "cagdasdostum" },
  { header: "POST 2", author: "cagdasdostum" },
  { header: "POST 3", author: "cagdasdostum" },
];

async function createPost(post) {
  const promise = new Promise((resolve, reject) => {
    if (post) {
      posts.push(post);
      resolve(posts);
    } else {
      reject("Bir hata oluştu.");
    }
  });

  return promise;
}

function listPosts() {
  posts.map((post) => {
    console.log(post.header);
  });
}

async function showPosts() {
  try {
    await createPost({header, author});
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
