import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Table, Tooltip, Input } from 'antd';
import { format1 } from '../config/time';
import { getFetcher } from '../config/fetcher';
import { Link, useNavigate } from 'react-router-dom';
import usePaginationSWR from '../hooks/usePaginationSWR';
import useSWR from "swr"



export default function TransactionList({ chain }) {

    const [height, setHeight] = useState(17315529)
    const columns = [
        {
            title: '交易Hash',
            ellipsis: true,
            dataIndex: 'txid',
            width: 148,
            render: (text, record) => <Tooltip title={text}>
                <Link to={`/list/transaction/detail?txid=${record.txid}`}>{text}</Link>
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

    const { data: blockData } = useSWR(`/blockchain/block`, (url) =>
        getFetcher(url, {
            chainShortName: 'eth',
        }),
        { refreshInterval: 1000 },
    );
    // console.log(1111, blockData);
    useEffect(() => {
        console.log();
        setHeight(blockData?.[0]?.lastHeight)
    }, [blockData])

    const {
        data, isLoading, currentPage, onPageChange,
    } = usePaginationSWR(
        '/block/transaction-list',
        (url) => getFetcher(url, {
            chainShortName: 'eth',
            height
        }),
        { refreshInterval: 2000 },
    );

    return (

        <Table
            loading={isLoading}
            columns={columns}
            rowKey="txid"
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
