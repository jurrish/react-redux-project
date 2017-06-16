'use strict';
//a container(aka a "smart component") is a react component that has access to the application contained in Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//take our application state as an argument (array of books and the active book)
function mapStateToProps(state) {
  //whatever is returned from here will return as props inside of
  //BookList
  return {
    //will be available as the props available to BookList
    //this.props.books!
    books: state.books
  };
}

//export the container! connect creates one. whenever the application state changes, the the object in the state function will be assigned as props to the component.
export default connect(mapStateToProps)(BookList);
