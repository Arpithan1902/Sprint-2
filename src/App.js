import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchAllUsers from './components/FetchAllUsers';
import FetchUser from './components/FetchUser';

import Dashboard from './components/Dashboard';
import UpdateUser from './components/UpdateUser';
import AddUser from './components/AddUser';

import DeleteUser from './components/DeleteUser';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import Login from './components/Login';

import FetchBookingByUserId from './components/FetchBookingByUserId';
import NavBarDashboard from './navbars/NavBarDashboard';
import Logout from './components/Logout';
import FetchAllCars from './components/FetchAllCars';
import FetchAllBookings from './components/FetchAllBookings';





function App() {
  return (
    <div className="App">
       {/* <header className="App-header"> */}
      
        
        
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/navbar" element={<NavBarDashboard/>}/> 
            
            
            <Route path='/user/all' element={<FetchAllUsers/>}/>
            <Route path='/user/get/:id' element={<FetchUser/>}/>
            <Route path='/user/update/:id' element={<UpdateUser/>}/>
            <Route path='/user/add' element={<AddUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/user/delete/:id' element={<DeleteUser/>}/>  
            <Route path='/forgetPassword' element={<ForgetPassword/>}/>
            <Route path='/user/booking/:id' element={<FetchBookingByUserId/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/car/all' element={<FetchAllCars/>}/>
            <Route path='/booking/all' element={<FetchAllBookings/>}/>
            
           
          </Routes>

        </Router>
        {/* </header> */}
     
    </div>
  );
}

export default App;
