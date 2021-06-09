import {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Context from './tool/react-api'
import LoginIndex from './views/login/LoginIndex'
import AdminIndex from './views/admin/AdminIndex'

function App() {
  const [username, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  return (
    <Router>
      <div className="App">
          <Switch>
            <Context.Provider value={{username,setUserName,pwd,setPwd}}>
              <Route path='/login' exact  component={LoginIndex}></Route>
              <Route path='/admin'  exact component={AdminIndex}></Route>
            </Context.Provider>
            <Redirect exact from='/' to='/login'></Redirect>
          </Switch>
      </div>
    </Router>  
  );
}

export default App;
