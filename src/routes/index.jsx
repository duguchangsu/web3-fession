export const routes = [
    {
        key: '/',
        label: '列表',
        children: [
            {
                key: '',
                label: '区块列表',
                component: () => import('../pages/List/Block'),
            },
            {
                key: '/transaction',
                label: '交易列表',
                component: () => import('../pages/List/transaction'),
            },
            {
                key: '/richAddress',
                label: '富豪地址',
                component: () => import('../pages/List/RichAddress'),

            },

            {
                key: '/largeTransaction',
                label: '大额交易',
                component: () => import('../pages/List/LargeTransaction'),
            },
            {
                key: '/transaction/detail',
                label: '交易详情',
                component: () => import('../pages/Detail/TransactionDetail'),
                disable: true
            },
        ]
    },
    {
        key: '/contract',
        label: '312312',
        component: () => import('../pages/Contact'),
    },
    {
        key: '/chart',
        label: '可视化图',
        children: [
            {
                key: '/chart/gas',
                label: 'Gas相关',
                exact: true, // 此处添加了 exact 属性
                component: () => import('../pages/Chart/Gas'),
            },
        ],
    },
    {
        key: '/my',
        label: '我的',
        component: () => import('../pages/My'),
    },
];