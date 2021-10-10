/*
 * @Author: your name
 * @Date: 2021-08-17 12:26:01
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 18:34:10
 * @FilePath: /react-vblog/src/App.tsx
 */
import React from 'react';
// import Layout from './views/layout/Layout';
import DashBoard from '@/views/dashboard';
import Login from '@/views/login';
import { useAppSelector } from './hooks';
const App = ()=> {
  const token = useAppSelector(({user})=>user.token)
  // console.log('token',token);
  
  return (
        token?<DashBoard/>:<Login/>
  );
}

export default App;


