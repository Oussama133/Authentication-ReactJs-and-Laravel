// import React, { useEffect } from 'react'
// import { Redirect, Route } from 'react-router-dom'
// import MasterLayout from './layouts/admin/MasterLayout'
// import axios from 'axios'
// import { cleanup } from '@testing-library/react'

// export default function AdminPrivateRoute({...rest}) {

// useEffect(()=>{
//   axios.get('api/checkingAuthenticated').then(res => {
  
//   })
//   return()=>{
//     cleanup
//   }
// })

//   return (
//     <Route {...rest} 
//       render={({props,location})=>
//           localStorage.getItem('auth-token') ?
//           ( <MasterLayout {...props} /> ) :
//           (<Redirect to={{pathname:'/login',state:{from:location}}} />)
//       }
//     />
//   )
// }
