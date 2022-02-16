import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';
const code = new URLSearchParams(window.location.search).get("code")

function App() {
    
    return (
        console.log('xxxx'),
    
            <div>
            {code ? (
                <Dashboard 
                code={code} /> ):( <Login/> )}
            </div>
        )
}

export default App
