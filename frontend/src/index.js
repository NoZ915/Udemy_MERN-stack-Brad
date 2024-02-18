import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider
} from "react-router-dom";

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';

//-----第一種寫法-----//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
        index: true
        //index為true代表當進入根路由"/"時，如果沒有其他子路由匹配，則顯示 <HomeScreen /> 元件
      }
    ]
  }
])

//-----第二種寫法-----//
// const router = createBrowserRouter(
//   <Router path="/" element={<App />}>
//     <Router index={true} paht="/" element={<HomeScreen />} />
//   </Router>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
