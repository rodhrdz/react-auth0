import './App.css';
import { Loginbutton } from './components/Loginbutton';
import { ProfileUser } from './components/ProfileUser';
import { Logoutbutton } from './components/Logoutbutton';
function App() {
  return (
    <div className="App">    
    <h1>Application</h1>  
    <Loginbutton></Loginbutton>
    <ProfileUser></ProfileUser>
    <Logoutbutton></Logoutbutton>
    
    </div>
  );
}

export default App;
