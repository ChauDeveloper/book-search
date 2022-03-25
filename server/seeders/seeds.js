const faker = require('faker');

const db = require('../config/connection');
const { Book, User } = require('../models');

db.once('open', async () => {
 
  await User.deleteMany({});
  await Book.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    const bookCount = faker.random.number();
    const savedBook = faker.lorem.words();

    userData.push({ username, email, password, bookCount, savedBook });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create book data
const bookData = [];

for (let i = 0; i < 50; i += 1) {
    const author = faker.name.findName();
    const description = faker.lorem.paragraph ();
    const bookID = faker.random.number();
    const image = faker.image.image();
    const link = faker.internet.url();
    const title = faker.lorem.words();

    bookData.push({ author, description, bookID, image, link, title})
}

const createBooks = await Book.collection.insertMany(bookData);


  // create savedbooks
  for (let i = 0; i < 100; i += 1) {
    const randomBookIndex = Math.floor(Math.random() * createBooks.ops.length);
    const { _id: bookId } = createBooks.ops[randomBookIndex];

    let savedBookId = bookId ;

    while (savedBookId = bookId) {
      const randomBookIndex = Math.floor(Math.random() * createBooks.ops.length);
      friendId = createBooks.ops[randomBookIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { savedbooks: bookId  } });
  }


  console.log('all done!');
  process.exit(0);
});
