import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Layout, Spin } from "antd";
import SideMenu from "../components/SideMenu";
import { routes } from "../routes";

const { Content, Sider } = Layout;

function NotFound() {
  return <h1>404 Not Found</h1>;
}

// 渲染子级路由
function renderRoutes(routes) {
  return routes.map(({ component, key, children, exact }) => {
    const LazyComponent = lazy(component);

    if (children && children.length > 0) {
      // 当该路由存在子路由时，递归调用 renderRoutes 渲染子路由
      return (
        <Route
          key={key}
          path={key}
          exact={exact}
          element={
            <Suspense fallback={<Spin />}>
              <Outlet />
            </Suspense>
          }
        >
          {renderRoutes(children)}
        </Route>
      );
    } else {
      // 当该路由不存在子路由时，直接渲染组件
      return (
        <Route
          key={key}
          path={key}
          exact={exact}
          element={
            <Suspense fallback={<Spin />}>
              <LazyComponent />
            </Suspense>
          }
        />
      );
    }
  });
}
const LayoutWarp = () => {


  <Router>
    <div style={{ display: 'flex' }}>
      <SideMenu routes={routes}></SideMenu>

      <div style={{ flexGrow: 1 }}>
        <Routes>
          {renderRoutes(routes)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </Router>


  return (
    <Router pathname="/">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <SideMenu routes={routes}></SideMenu>
        </Sider>
        <Layout >
          <Content style={{ margin: '16px', width: "calc(100vw - 200px)" }}>
            <Routes>
              {renderRoutes(routes)}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default LayoutWarp;
