import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Header from "./components/Header";
import LikedSongs from "./LikedSongs"
import Home from "./components/home";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  console.log("test");
  return (

          <div className= "App">
            <div>
                {code ? <Dashboard code={code} /> : <Login />}
            </div>
                        
          </div>
  );
}

export default App;
