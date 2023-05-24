import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Loginbutton } from './components/Loginbutton';
import { ProfileUser } from './components/ProfileUser';
import { Logoutbutton } from './components/Logoutbutton';
function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if(isLoading) return <h1>Loading...</h1>
  return (
    <div className="App">    
    <h1>Application</h1>  
    { isAuthenticated ?    <Logoutbutton></Logoutbutton>:    <Loginbutton></Loginbutton>

 }
    <ProfileUser></ProfileUser>
    
    </div>
  );
}

export default App;
