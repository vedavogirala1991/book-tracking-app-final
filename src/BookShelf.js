import React, { Component} from 'react'
import Book from './Book'

class BookShelf extends Component{
    render(){

        const {shelfName,booksOnShelf} = this.props

        return(
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{shelfName}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        <li>
                            {booksOnShelf.map((book) => (
                                <Book key={book.id} book={book}
                                              moveBookToShelf={(book,shelf)=>this.props.moveBookToShelf(book,shelf)}/>))}
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
