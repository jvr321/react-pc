import {useContext, useEffect} from 'react'
import {
    useHistory
  } from "react-router-dom";
import Context from '../../tool/react-api'

export default function Admin(){
    let history = useHistory()
    let {username,setUserName, pwd, setPwd} = useContext(Context)
    useEffect(()=>{
        console.log(1);
        return ()=>{
            //卸载组件后， 清空登录组件的输入框数据
            setUserName('')
            setPwd('')
        }
    })
    
    const methods = {
        backPre:()=>{
            history.go(-1)
        }
    }
    return (
        <div>
            管理员页面
            <p>用户名：{username}</p>
            <p>密码：{pwd}</p>
            <button onClick={methods.backPre}>返回上一级</button>
        </div>
    )
}