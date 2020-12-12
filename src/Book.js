import React, { Component } from 'react'

class Book extends Component {

    render(){

        const {book} = this.props

        let moveBookToShelf = (shelf) => (
            this.props.moveBookToShelf(book,shelf)
        )

        return (
            <div className='book'>
                <div className='book-top'>
                    {book.imageLinks ? <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                     : <div className='book-cover-unavailable'></div>}
                    <div className='book-shelf-changer'>
                        <select value={book.shelf}
                                onChange={(event) => moveBookToShelf(event.target.value)}>
                            <option value='moveTo' disabled>Move to...</option>
                            <option value='currentlyReading'>Currently Reading</option>
                            <option value='wantToRead'>Want to Read</option>
                            <option value='read'>Read</option>
                            <option value='none'>None</option>
                        </select>
                    </div>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>
                    {book.authors && book.authors.join(', ')}
                </div>
            </div>
        )
    }
}

export default Book
