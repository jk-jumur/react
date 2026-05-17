 import Book from './book';
 
 export default function Library({books}){
      return(
          <div>
              <h1>Library  Of Oxford</h1>
              <p>books collection: {books.length}</p>
              <p>Address: </p>
            
                <ul>
                { 
                     books.map(book => <Book  key={book.id} book={book}></Book> )
                }
                  
              </ul>
             
              
          </div>
      )
}
