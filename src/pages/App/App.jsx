import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WantToReadPage from '../WantToReadPage/WantToReadPage';
import ReadBooksPage from '../ReadBooksPage/ReadBooksPage';
import CurrentlyReadingPage from '../CurrentlyReadingPage/CurrentlyReadingPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      {user ? (

        <>
          <NavBar user={user} setUser={setUser} />
          <h1>Welcome, {user.name}!</h1>
          <br />
          <Routes>
            <Route path="/books" element={< CurrentlyReadingPage user={user} />} />
            <Route path="/books/wanttoread" element={<WantToReadPage user={user} />} />
            <Route path="/books/read" element={<ReadBooksPage user={user} />} />
          </Routes>



        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>

  );


}


