export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51gJr7lhyxL._SX380_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41WdbPkuINL._SX331_BO1,204,203,200_.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
        // reject(new Error('Some'))
      }, 700)
    })
  }
}
