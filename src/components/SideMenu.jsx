import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
// 将通用的配置项转换为菜单项
function createMenuItem({ key, label, icon,disable }) {
  if(disable){
    return 
  }
  return (
    <Menu.Item key={key} icon={icon} >
      <Link to={key}>{label}</Link>
    </Menu.Item>
  );
}

const SideMenu = ({ routes }) => {
  return <Menu mode="inline" style={{ height: '100%' }}>
    {routes.map((route) => {
      if (route.children) {
        return (
          <SubMenu key={route.key} title={route.label} icon={route.icon}>
            {route.children.map(createMenuItem)}
          </SubMenu>
        );
      } else {
        return createMenuItem(route);
      }
    })}
  </Menu>
};


export default SideMenu;