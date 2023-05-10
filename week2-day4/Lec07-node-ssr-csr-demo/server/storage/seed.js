const path = require('path');
const fs = require('fs/promises');

const users = {};
for (let i = 1; i <= 5; i++) {
  const user = {
    id: `${i}`,
    name: `User${i}`,
    username: `username_${i}`,
    posts: []
  };

  for (let j = 1; j <= 10; j++) {
    const userPost = {
      id: `${i}${j}`,
      title: `User ${i} Post ${j}`,
      likes: i * j,
      comments: i * j
    };
    user.posts.push(userPost);
  }
  users[i] = user;
}

console.log("\x1b[46m%s\x1b[0m", "Running 'seed.js'");
(async function createUsers() {
  try {
    const filePath = path.join(__dirname, '/users.json');
    await fs.writeFile(filePath, JSON.stringify(users));
  } catch (e) {
    console.error(e);
  }
})();
console.log("\x1b[46m%s\x1b[0m", "Finished 'seed.js'");

