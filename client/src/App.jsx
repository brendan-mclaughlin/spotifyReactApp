//import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PlayingNow from "./PlayingNow";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  console.log("test");
  return (
    <div>
      {/* <div>
             <PlayingNow code={code}/>
             </div> */}
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;
