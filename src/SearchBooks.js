import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'

const MAX_RESULTS = 14

class SearchBooks extends Component {

    state = {
        books: []
    }

    searchBooks = (query,myBooks) => {
        if(query){
            BooksAPI.search(query.trim(), MAX_RESULTS).then((books) => {
                if(books.error){
                    this.setState({books: []})
                } else {
                    books.filter(b => {
                          let filteredBook = myBooks.filter(book => book.id===b.id)
                          if(filteredBook && filteredBook[0]){
                              b.shelf = filteredBook[0].shelf
                          } else {
                              b.shelf = 'none'
                          }
                          return b
                    })
                    this.setState(state =>({books : books}))
                }

            })
        } else{
            this.setState({books: []})
        }
    }

    render(){

        const {myBooks} = this.props

        return(
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Close</Link>
                    <div className='search-books-input-wrapper'>
                        <input type='text'
                               placeholder='Search by title or author'
                               onChange = {(event) => this.searchBooks(event.target.value,myBooks)}/>
                    </div>
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        <li>
                            {this.state.books.map((book,i) =>
                                (<Book key={i} book={book}
                                               moveBookToShelf={(book,shelf)=>this.props.moveBookToShelf(book,shelf)}/>)
                            )}
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks
