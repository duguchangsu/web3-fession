export const routes = [
    {
        key: '/',
        label: 'Home',
        // icon: <HomeOutlined />,
        component: () => import('../pages/Home'),
    },
    {
        key: '/about',
        label: 'About',
        // icon: <InfoCircleOutlined />,
        component: () => import('../pages/About'),
        children: [
            {
                key: '/about/index',
                label: 'AboutPage',
                exact: true, // 此处添加了 exact 属性
                component: () => import('../pages/AboutPage'),
            },
            {
                key: '/about/team',
                label: 'Team',
                exact: true, // 此处添加了 exact 属性
                component: () => import('../pages/Team'),
            },
            {
                key: '/about/history',
                label: 'History',
                exact: true, // 此处添加了 exact 属性
                component: () => import('../pages/History'),
            },
        ],
    },
];