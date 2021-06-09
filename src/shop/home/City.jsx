// import React from 'react'
// import '../../index.css'
// const MyContext = React.createContext()

// export default class A extends React.Component{
//     state = {
//         username:'小明'
//     }
//     render(){
//         const {username} = this.state
//         return (
//             <div className='parent'>
//                <p>A组件</p>
//                <p>我的用户名是{username}</p>
//                <MyContext.Provider value={{username, age:20}}>
//                    <B></B>
//                </MyContext.Provider>
//             </div>
//         )
//     }
   
  
// }
// class B extends React.Component{
//     static contextType = MyContext
//     render(){
//         console.log(this);
//         return (
//             <div className='child'>
//                 <p>B组件</p>
//                 <C ></C>
//             </div>
//         )
//     }
// }
// // class C extends React.Component{
// //     static contextType = MyContext
// //     render(){
       
// //         console.log(this);
// //         return (
// //             <div className='grand'>
// //                 <p>C组件</p>
// //                 <p>从A组件接收到的用户名{this.context[0]}</p>
// //             </div>
// //         )
// //     }
// // }
// function C(){
   
//     return (
//         <div className='grand'>
//             <p>C组件</p>
//             <p>从A组件接收到的用户名
//             <MyContext.Consumer>
//                 {
//                     value=>{
//                         console.log(value);
//                         return value.age+' '+value
//                     }
//                 }
//             </MyContext.Consumer>
//             </p>
//         </div>
//     )
// }

