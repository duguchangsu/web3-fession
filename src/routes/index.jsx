export const routes = [
    {
        key: '',
        label: 'ETH看板',
        component: () => import('../pages/My'),
    },
    {
        key: '/list',
        label: '列表',
        children: [
            {
                key: '/list/block',
                label: '区块列表',
                component: () => import('../pages/List/Block'),
            },
            {
                key: '/list/transaction',
                label: '交易列表',
                component: () => import('../pages/List/transaction'),
            },
            {
                key: '/list/richAddress',
                label: '富豪地址',
                component: () => import('../pages/List/RichAddress'),

            },

            {
                key: '/list/largeTransaction',
                label: '大额交易',
                component: () => import('../pages/List/LargeTransaction'),
            },
            {
                key: '/list/transaction/detail',
                label: '交易详情',
                component: () => import('../pages/Detail/TransactionDetail'),
                disable: true
            },
            {
                key: '/list/address/detail',
                label: '地址详情',
                component: () => import('../pages/Detail/AddressDetail'),
                disable: true
            },
        ]
    },
    // {
    //     key: '/contract',
    //     label: '312312',
    //     component: () => import('../pages/Contact'),
    // },
    {
        key: '/chart',
        label: '可视化图',
        children: [
            {
                key: '/chart/gas',
                label: 'Gas费用历史',
                exact: true, // 此处添加了 exact 属性
                component: () => import('../pages/Chart/Gas'),
            },
        ],
    },

];