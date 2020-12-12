import React, { Component} from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

    booksOnShelves = (books,shelf) => {
        let filteredBooks = books.filter((newBooks) => newBooks.shelf === shelf)
        return filteredBooks
    }

    render() {

        const {books} = this.props

        const wantToRead = books.filter(book => book.shelf === 'wantToRead')
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
        const read = books.filter(book => book.shelf === 'read')

        return (
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>My Reads</h1>
                </div>
                <div className='list-books-content'>
                    <div>
                          <BookShelf shelfName='Currently Reading'
                                   booksOnShelf={currentlyReading}
                                   moveBookToShelf={(book,shelf)=>this.props.moveBookToShelf(book,shelf)}/>
                          <BookShelf shelfName='Want to Read'
                                     booksOnShelf={wantToRead}
                                     moveBookToShelf={(book,shelf)=>this.props.moveBookToShelf(book,shelf)}/>
                          <BookShelf shelfName='Read'
                                     booksOnShelf={read}
                                     moveBookToShelf={(book,shelf)=>this.props.moveBookToShelf(book,shelf)}/>
                    </div>
                </div>
                <div className='open-search'>
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
