import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book'
import {books} from './books'
// const title = "I Will Teach You to Be Rich"
// const author = "Ramit Sethi"








function Booklist() {
   
    return (
      
      <div className='wrapper'>

        <div className='header'>
          <h1>Best Sellers</h1>
       </div>
      
        <section className="booklist">
          {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index}/>;
          })}
       </section>
      </div>
    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)