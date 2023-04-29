import dayjs from 'dayjs';
import { Table, Tooltip } from 'antd';
import { format1 } from '../config/time';
import { getFetcher } from '../config/fetcher';
import { Link, useNavigate } from 'react-router-dom';
import usePaginationSWR from '../hooks/usePaginationSWR';



export default function TransactionList({ chain }) {


    const columns = [
        {
            title: '交易Hash',
            ellipsis: true,
            dataIndex: 'txid',
            width: 148,
            render: (text, record) => <Tooltip title={text}>
                <Link to={`/transaction/detail?txid=${record.txid}`}>{text}</Link>
            </Tooltip >
        },
        {
            title: '来源',
            ellipsis: true,
            dataIndex: 'from',
            width: 148,
            render: (text) => <Tooltip title={text}>{text}</Tooltip>,
        },
        {
            title: '去处',
            ellipsis: true,
            dataIndex: 'to',
            width: 148,
            render: (text) => <Tooltip title={text}>{text}</Tooltip>,
        },
        {
            title: '交易时间',
            key: 'transactionTime',
            dataIndex: 'transactionTime',
            render: (text) => dayjs(text * 1).format(format1),
            width: 88,
        },
    ];
    const {
        data, isLoading, currentPage, onPageChange,
    } = usePaginationSWR(
        '/block/transaction-list',
        (url) => getFetcher(url, {
            chainShortName: 'eth',
            height: 17074181
        }),
        { refreshInterval: 2000 },
    );

    return (
        <Table
            // title={<>"区块列表"</>}
            loading={isLoading}
            columns={columns}
            rowKey="hash"
            dataSource={data?.blockList}
            pagination={{
                current: currentPage,
                pageSize: 20,
                total: data?.totalPage || 0,
                onChange: onPageChange,
            }}
        />
    );
}
