let itemId = 0
let store = {
  items: [],
  users: []
}

class Item {
  constructor (price, name, user) {
    this.id = ++itemId
    this.name = name
    this.price = price
    if (user) {
      this.userId = user.id
    }

    store.items.push(this)
  }
  setUser (user) {
    this.userId = user.id
  }
}

class User {
  constructor (name) {
    this.id = ++userId
    this.name = name

    store.users.push(this)
  }
}

let bobby = new User('bobby')
let trousers = new Item (24, 'trousers', bobby)

store
