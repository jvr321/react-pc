// import React from "react";
import {unmountComponentAtNode} from 'react-dom'
// class SumNum extends React.Component{
//     state = {count:1,tets:111}
//     timer =null
//     addF=()=>{
//         this.setState((state, poprs)=>({
//             count: state.count +1
//         }))
       
//         console.log(this.state.count);
//     }
//     destoryF = ()=>{
//         unmountComponentAtNode(document.querySelector('#root'))
//     }
//     // componentDidMount(){
//     //     console.log(this);
//     //     this.timer = setInterval(()=>{
//     //         this.setState((state, poprs)=>({
//     //             count: state.count +1
//     //         }))
//     //     },1000)
//     // }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     render(){
        
//         return (
//             <div>
//                 <p>当前的值为{this.state.count}</p>
//                 <button onClick={this.addF}>＋1</button>
//                 <button onClick={this.destoryF}>卸载组件</button>
//             </div>
//         )
//     }
// }
import {useState, useEffect, useRef} from 'react'

let  Conten = function({onClick}){
    let num = useRef(0)
    console.log('num'+num.current++);
    return (
    
    <button onClick={onClick}>哈哈哈</button>
)}
function SumNum(){
  
    let [count, setCount]  = useState(0)
   
    useEffect( ()=>{
        console.log('useEffect');
        // let timer = setInterval(()=>{
        //     setCount(count=>count+1)
           
        // },1000)
        // return ()=>{
        //     console.log('xiio');
        //     clearInterval(timer)
        // }
    },[])
    
    let addF = ()=>{
        setCount(count+1)
        // setCount(oldCount=>oldCount+1)
    }
    let destoryF = ()=>{
        unmountComponentAtNode(document.querySelector('#root'))
    }
    return (
        <div>
            <p>当前的值为{count}</p>   
            {/* <button onClick={addF}>＋1</button> */}
            <Conten onClick={addF}></Conten>
            <button onClick={destoryF}>卸载组件</button>  
        </div>
    )
}
export default SumNum




// export default function LikeShop(){
//     function addF  (e){
//         e.preventDefault()
//         console.log(this);
//     }
//     return (
//         <div className='lis'>
//             <a  href='baidu.com' onClick={addF}>
//                dsdsdfsdf
//             </a>
//         </div> 
//     )
// }