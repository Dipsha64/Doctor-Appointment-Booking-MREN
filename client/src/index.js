import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { persistor, store } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Protected from "./store/protected";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import Doctors from './pages/Doctors/Doctors';
import DoctorDetails from './pages/Doctors/DoctorDetails';
import Contact from './pages/Contact';
import MyAccount from './pages/Dashboard/UserAccount/MyAccount';
import DoctorDashboard from './pages/Dashboard/DoctorAccount/DoctorDashboard';
import CheckoutSession from './pages/CheckoutSession';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index path='/' element={<Home/>}></Route>
      <Route path='doctors' element={<Doctors/>}></Route>
      <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Signup/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/profile/me' element={<Protected allowedRoles={['patient']}><MyAccount/></Protected>}/>
      <Route path='doctor/profile/me' element={<Protected allowedRoles={['doctor']}><DoctorDashboard/></Protected>}/>
      <Route path='checkout-success' element={<CheckoutSession/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
        </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);