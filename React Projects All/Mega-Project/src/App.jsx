
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { logIn, logOut } from './store/authSlice';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrnetAccount()
      .then(userData => {
        if (userData) {
          dispatch(logIn({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .catch((error) => console.log('Error', error))
      .finally(() => setLoding(false))
  }, []);


  return !loding ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
    <div className="w-full block">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>) : (<div className='w-full text-3xl text-red-600'>Loding State...</div>);
}

export default App
