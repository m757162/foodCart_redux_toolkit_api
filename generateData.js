const fs = require('fs')
const { faker } = require('@faker-js/faker')

// Generate fake users
const generateUsers = (num) => {
  const users = []
  for (let i = 0; i < num; i++) {
    users.push({
      id: i + 1,
      name: faker.person.firstName('male'),
      phone: faker.phone.imei(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      
    })
  }
  return users
}
// Generate fake users address
const generateUsersAddress = (num,userId) => {
  const users = []
  for (let i = 0; i < num; i++) {
    users.push({
      id: i + 1,
      user_id: faker.helpers.arrayElements(userId, 1),
      company_name: faker.company.name(),
      country: faker.location.country(),
      street_address: faker.location.streetAddress(),
      street_address_2nd: faker.location.secondaryAddress(),
      City: faker.location.cityName(),
      zip_code: faker.location.zipCode(),
      
    })
  }
  return users
}

// Generate fake posts
const generatePosts = (num, userIds) => {
  const posts = []
  for (let i = 0; i < num; i++) {
    posts.push({
      id: i + 1,
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(),
      // userId: faker.random.arrayElement(userIds),
    })
  }
  return posts
}
// Generate fake category
const generateCategory = (num) => {
  const posts = []
  for (let i = 0; i < num; i++) {
    posts.push({
      id: i + 1,
      title: faker.word.conjunction(5),    
      image: faker.image.food(50,30),
    })
  }
  return posts
}

// Helper function to generate multiple image URLs
const generateImages = (numImages) => {
  const images = [];
  for (let i = 0; i < numImages; i++) {
    images.push(faker.image.food(250, 250));
  }
  return images;
};

// Generate fake product info
const generateProducts = (num,categoryId) => {
  const posts = []
  for (let i = 0; i < num; i++) {
    posts.push({
      id: i + 1,
      title: faker.lorem.sentence(),
      price: faker.number.int(100),
      image: generateImages(5),
      short_description: faker.lorem.paragraphs(),
      stocks: faker.number.int({ min: 10, max: 100 }),
      description: faker.lorem.paragraphs(),
      additional_info: faker.lorem.paragraphs(),
      category_id: faker.helpers.arrayElements(categoryId, { min: 1, max: 3 }),
      
      // userId: faker.random.arrayElement(userIds),
    })
  }
  return posts
}
// Generate fake product info
const generateBlogs = (num) => {
  const posts = []
  for (let i = 0; i < num; i++) {
    posts.push({
      id: i + 1,
      title: faker.lorem.sentence(),
      date: faker.date.recent(),
      image: faker.image.food(2200,700),
      body: faker.lorem.paragraphs(),
      category_type: faker.word.adjective()
      // userId: faker.random.arrayElement(userIds),
    })
  }
  return posts
}
const generateTags = (num) => {
  const posts = []
  for (let i = 0; i < num; i++) {
    posts.push(
      faker.word.adjective(),
    )
  }
  return posts
}
// Generate fake brand
const generateBrands = (num) => {
  const posts = []
  for (let i = 0; i < num; i++) {
    posts.push({
      id: i + 1,
      category: faker.word.conjunction(5),    
      title: faker.word.conjunction(15),    
      image: faker.image.food(250,225),
    })
  }
  return posts
}
// Generate fake brand
const generateCarts = (num) => {
  const posts = []
 
  return posts
}
// Generate fake wishList
const generateWishList = (num) => {
  const posts = []
 
  return posts
}
// Generate fake wishList
const generateComment = (num) => {
  const posts = []
 
  return posts
}
const generateOrder = (num) => {
  const posts = []
  return posts
}
const generateOrderItem = (num) => {
  const posts = []
  return posts
}
const generateNewsletterSubscriptions = (num) => {
  const posts = []
 
  return posts
}



// Number of fake users and posts
const numUsers = 3
const num10 = 10


const users = generateUsers(numUsers)
const userIds = users.map(user => user.id)
const usersAddress = generateUsersAddress(numUsers,userIds)
const posts = generatePosts(num10, userIds)
const category = generateCategory(num10)
const categoryIds = users.map(category => category.id)
const products = generateProducts(num10,categoryIds)
const blogs = generateBlogs(num10)
const tags = generateTags(num10)
const brands = generateBrands(num10)
const carts = generateCarts()
const wishList = generateWishList()
const comments = generateComment()
const order = generateOrder()
const orderItem = generateOrderItem()
const NewsletterSubscriptions = generateNewsletterSubscriptions()

// Combine users and posts into one object
const data = { users,usersAddress,category,brands,products,blogs,tags,carts,wishList,comments,order,orderItem,NewsletterSubscriptions}

// Write fake data to db.json
fs.writeFileSync('db.json', JSON.stringify(data, null, 2))
