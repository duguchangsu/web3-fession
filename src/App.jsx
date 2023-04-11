import { useState } from 'react'
import { ConfigProvider } from "antd";
import { SWRConfig } from "swr";
import LayoutWarp from './layouts/Layout';
import './App.css'

function App() {
  return (
    <ConfigProvider>
      <SWRConfig value={{ refreshInterval: 3000 }}>
        <LayoutWarp></LayoutWarp>
      </SWRConfig>
    </ConfigProvider>
  )
}

export default App
// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
// import { Menu, Spin } from 'antd';
// import { routes } from './routes';
// import SideMenu from './components/SideMenu';





// // 使用 Routes 来渲染路由
// function App() {


//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <SideMenu routes={routes}></SideMenu>

//         <div style={{ flexGrow: 1 }}>
//           <Routes>
//             {renderRoutes(routes)}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// // 定义 NotFound 组件用于处理 404 页面


// export default App;