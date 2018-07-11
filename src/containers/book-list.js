import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }
}

// take the state and return as props inside of BookList

// whenever the state changes...
// the books container will re render!
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// stuff that is returned will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, result should be passed to all the reducers!

    return bindActionCreators( {
        selectBook: selectBook
    }, dispatch);
}

// Promote BookList from a component to a container.
// this is how selectBook is introduced.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);