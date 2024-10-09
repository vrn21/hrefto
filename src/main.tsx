import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginPage from './LoginPage.tsx'
import SignUp from './SignUp.tsx'
import UserDashboard from './UserDashboard.tsx'
import './index.css'



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
     {/* <LoginPage/>     */}
    {/* <SignUp/>    */}
     {/* <UserDashboard/>  */}
    <App />
    {/* <Test /> */}
  </React.StrictMode>,
);
