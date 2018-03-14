let itemId = 0
let userId = 0
let store = {items: [], users: []}

class Item {
  constructor (price, name, user) {
    this.id = ++itemId
    this.name = name
    this.price = price
    if (user) {
      this.userId = user.id
    }
    //insert the item into the store
    store.items.push(this)
  }
  setUser (user) {
    this.userId = user.id
  }

  user () {
    return store.users.find (function (user) {
      return user.id === this.userId
    })
  }
}

class User {
  constructor (name) {
    this.id = ++userId
    this.name = name

    //insert the user into the store
    store.users.push(this)
  }
  items () {
    return store.items.filter (item => {
      return item.userId === this.id
    })
  }
}

let bobby = new User('Bobby')
let sally = new User('Sally')
let user = new User('Freddie')

let trousers = new Item (24, 'trousers', bobby)
let tshirt = new Item(8, 'tshirt', bobby)
let socks = new Item(3, 'socks', sally)
let item = new Item(3, 'socks', freddie)

purpleSocks.freddie()


store
