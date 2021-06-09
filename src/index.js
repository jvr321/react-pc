import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import ReactDOM from 'react-dom';


// import LikeSho from './shop/home/LikeShop.jsx'
// import City1a from './shop/home/City.jsx'

let Home = ()=>(
    <div>
        <h1>首页页面内容</h1>
    </div>
)
let C = ()=>(
    <Router>
      <div>
      <Route path="/home" component={Home}></Route>
      <Link to='/home'>点击条状</Link>
      
      </div>
    </Router>
)


ReactDOM.render(<C/> , document.querySelector('#root'))
