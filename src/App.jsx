import { useState } from 'react'
import { ConfigProvider } from "antd";
import { SWRConfig } from "swr";
import LayoutWarp from './layouts/Layout';
import './App.css'

function App() {
  return (
    <ConfigProvider>
      <SWRConfig value={{ }}>
        <LayoutWarp></LayoutWarp>
      </SWRConfig>
    </ConfigProvider>
  )
}

export default App
