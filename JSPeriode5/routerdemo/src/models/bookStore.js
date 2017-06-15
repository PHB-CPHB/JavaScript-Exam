import { observable, action } from "mobx";

class BookStore {

  @observable _books = [];

  constructor() {
    this.fetchBooks();
  }



  get books() {
    return this._books;
  }

  @action
  changeBooks(book_id) {
    this._books.replace(book_id)
  }

  @action
  newBook(title, info, moreInfo){
   let book = {"id": this._books.length + 1, "title" : title, "info" : info, "moreInfo" : moreInfo}
   this.addBook(book);
 }

  @action
  addBook(book) {
    this._books.push(book)
  }

  @action
  removeBook(book_id) {
    this._books.splice(this._books.findIndex((book) => {return book.id === book_id}), 1)
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = () => {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this._books.replace(response);
        console.log("Got books from server");
      })
  }
}


let store = new BookStore();


window.store = store;


export default store;
