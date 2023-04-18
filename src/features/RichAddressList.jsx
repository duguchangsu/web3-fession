import dayjs from 'dayjs';
import { Table, Tooltip } from 'antd';
import { format1 } from '../config/time';
import { getFetcher } from '../config/fetcher';
import numeral from 'numeral';
import useSWR from 'swr'

const columns = [
    {
        title: '排名',
        ellipsis: true,
        dataIndex: 'rank',
        width: 48,
    },
    {
        title: '区块地址',
        ellipsis: true,
        dataIndex: 'address',
        width: 148,
        render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    },
    {
        title: '交易次数',
        ellipsis: true,
        dataIndex: 'transactionCount',
        width: 48,
    },
    {
        title: '持仓数量',
        ellipsis: true,
        dataIndex: 'amount',
        width: 48,
        render: (text) => {
            return numeral(text).format('0.000')
        }
    },
    {
        title: '余额占比流通量',
        ellipsis: true,
        dataIndex: 'holdRatio',
        width: 48,
        render: (text) => {
            return numeral(text).format('0.000%')
        }
    },
];

export default function RichAddressList({ chain }) {
    const {
        data, isLoading
    } = useSWR(
        '/address/rich-list',
        (url) => getFetcher(url, {
            chainShortName: 'eth',
        }),
        { refreshInterval: 2000 },
    );
    console.log(data);

    return (
        <Table
            loading={isLoading}
            columns={columns}
            rowKey="rank"
            dataSource={data}
            pagination={{
                // current: currentPage,
                pageSize: 20,
                // total: data?.totalPage || 0,
                // onChange: onPageChange,
            }}
        />
    );
}
