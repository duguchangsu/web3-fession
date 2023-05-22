import React from 'react'
import useSWR from 'swr'
import { parasSearch } from '../../config/url';
import { useLocation } from "react-router-dom";
import { getFetcher } from '../../config/fetcher';
import { Spin, Tooltip, Table } from 'antd';
import usePaginationSWR from '../../hooks/usePaginationSWR';
import { Link } from 'react-router-dom';

function AddressDetail() {
    const { search } = useLocation();

    const { address, height } = parasSearch(search)

    const {
        data, isLoading, currentPage, onPageChange,
    } = usePaginationSWR(
        '/block/transaction-list',
        (url) => getFetcher(url, {
            chainShortName: 'eth', address, height
        }),
        { refreshInterval: 2000 },
    );

    const columns = [
        {
            title: '交易哈希',
            ellipsis: true,
            dataIndex: 'txid',
            width: 100,
            render: (text, record) => <Tooltip title={text}>
                <Link to={`/list/transaction/detail?txid=${record.txid}`}>{text}</Link>
            </Tooltip >
        },
        {
            title: '交易发生的区块',
            ellipsis: true,
            dataIndex: 'height',
            width: 48,
        },
        {
            title: '手续费',
            ellipsis: true,
            dataIndex: 'txfee',
            width: 48,
        },
    ]

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

export default AddressDetail