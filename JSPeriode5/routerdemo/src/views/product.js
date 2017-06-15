import React from "react";
import { Link } from "react-router";
import {observer} from "mobx-react";
import Modal from "react-modal";

@observer
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    //This will read books from the server each time user navigates to
    //The product page (a simple way to ensure "updated data")
    this.props.route.bookStore.fetchBooks();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    const books = this.props.route.bookStore.books;
    const bookStore = this.props.route.bookStore;
    return (
      <div>
        <h3>All our great books </h3>
        <button onClick={() => this.openModal()}>Add new book</button>
        <ul>
          {books.map((book) => <li key={book.id}>
            {book.title} <Link to={`products/details/${book.id}`}>(details)</Link>
            <button onClick={() => bookStore.removeBook(book.id)} >Remove</button></li>)}
        </ul>
        <div>
              <Modal isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Add Book">
              <h2> Add Book</h2>
              
              <div> Please fill all the inputs to make a new book</div>
                  <input id="bookTitle" type="text" placeholder="Title"/>
                  <input id="bookInfo" type="text" placeholder="Info"/>
                  <input id="moreInfo" type="text" placeholder="More info"/>
                  <button onClick={() => bookStore.newBook(document.getElementById("title"),document.getElementById("bookInfo"),document.getElementById("moreInfo"))}>Add new Book</button>
              <button onClick={this.closeModal}>Close</button>
              </Modal>
              </div>
          </div>
    )
  }
}