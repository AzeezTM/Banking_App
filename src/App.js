import "bulma"  
import Header from "./components/Header";
import Banking from "./components/Banking";
import Balance from "./components/Balance";
import './App.css';
import AccountType from "./components/AccountType";
import LogIn from "./components/Login";

function App() {
  return (
    <div className="bodyme">
     <Header/>
     <Balance/>
     <Banking/>
      <AccountType/>
      <LogIn/>
     
    </div>
  );
}

export default App;
