import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDatatour } from './redux/tourSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const tourData = useSelector(state => state.tour);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/tour`);
        const resData = await res.json();
        console.log(resData);
        dispatch(setDatatour(resData));
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
