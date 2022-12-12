import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingListPage from './pages/BookingListPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/bookings" element={<BookingListPage />} />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
