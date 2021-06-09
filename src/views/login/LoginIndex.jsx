import {
    useHistory
  } from "react-router-dom";
import {useContext} from 'react'
import '../../styles/login/LoginIndex.css'
import Context from '../../tool/react-api'

export default function Login(){
    const history = useHistory()
    let {username,setUserName,pwd,setPwd} = useContext(Context)
   
    const methods = {
        handleUserName: (e)=>setUserName(e.target.value),
        handlePwd: (e)=>setPwd(e.target.value),
        registerFn: ()=>{
            history.push('/admin')
        }
    }
    return (
        <div id='register'>
            <div className='content'>
                <div className='item'> 
                    <label htmlFor="username">用户名</label>
                    <input type="text" value={username} onChange={methods.handleUserName}/>
                </div>
                <div className='item'>
                    <label htmlFor="pwd">密码</label>
                    <input type="text" value={pwd} onChange={methods.handlePwd}/>
                </div>
                <div className='btns'>
                    <button onClick={methods.registerFn}>注册</button>
                </div>
            </div>
        </div>
    )
}