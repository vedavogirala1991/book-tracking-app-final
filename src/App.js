import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import PageNotFound from './PageNotFound'
import * as BooksAPI from './utils/BooksAPI'
import './App.css';

class BooksApp extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    moveBookToShelf = (book,shelf) => {
        if (book.shelf !== shelf) {
          BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf

            this.setState(state => ({
              books: state.books.filter(b => b.id !== book.id).concat([ book ])
            }))
          })
        }
    }

    render() {
        return (
            <div className='app'>
                <Switch>
                    <Route exact path='/' render= {() => (
                        <ListBooks books= {this.state.books}
                                   moveBookToShelf= {(book,shelf) => this.moveBookToShelf(book,shelf)}/>
                    )}></Route>
                    <Route path='/search' render= {() => (
                        <SearchBooks myBooks= {this.state.books}
                                     moveBookToShelf= {(book,shelf) => this.moveBookToShelf(book,shelf)}/>
                    )}></Route>
                    <Route component = {PageNotFound}/>
                </Switch>
            </div>
        )
    }
}

export default BooksApp;
