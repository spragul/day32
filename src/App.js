import React from 'react';
import { Route } from 'react-router-dom';
import DarkExample from './Admin/admin';
import { BookIssued } from './Admin/bookissued';
import './App.css';
import { AddBook } from './BookComponent/AddBook';
import { BookDetails } from './BookComponent/bookDetails';
import ListOfBooks from './BookComponent/Books';
import { EditBook } from './BookComponent/EditBook';
import { Dashboard } from './Pages/Dashboard';
import { Login} from './Pages/Login';
import { ListIssuedBook } from './Admin/issudebook';



function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Dashboard/>
      </Route>
   
        <Route exact path="/book">
          <ListOfBooks/>
        </Route>

        <Route path="/book/detail/:id">
          <BookDetails/>
        </Route  >
          
        <Route path="/add/book">
          <AddBook/>
        </Route>

        <Route path="/edit/book/:id">
          <EditBook/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        
        <Route path="/admin">
          <DarkExample/>
        </Route>

        <Route path="/issued/Book/:id">
          <BookIssued/>
        </Route>
        <Route path="/book/issued">
          <ListIssuedBook/>
        </Route>
  
    </div>
  );
}

export default App;