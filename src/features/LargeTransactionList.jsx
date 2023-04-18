import dayjs from 'dayjs';
import { Table, Tooltip } from 'antd';
import { format1 } from '../config/time';
import { getFetcher } from '../config/fetcher';
import usePaginationSWR from '../hooks/usePaginationSWR';
import numeral from 'numeral';

const columns = [
  {
    title: '交易哈希',
    ellipsis: true,
    dataIndex: 'txid',
    width: 148,
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
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
    render:(text)=>{
      return numeral(text).format('0.000')
    }
  },
  {
    title: '输入',
    ellipsis: true,
    dataIndex: 'input',
    width: 48,
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
  },
  {
    title: '输出',
    ellipsis: true,
    dataIndex: 'output',
    width: 48,
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
  },
  {
    title: '交易数量',
    ellipsis: true,
    dataIndex: 'amount',
    width: 48,
    render:(text)=>{
      return numeral(text).format('0.000')
    }
  },
  {
    title: '交易时间',
    key: 'showTime',
    dataIndex: 'transactionTime',
    render: (text) => dayjs(text * 1).format(format1),
    width: 88,
  },
];

export default function LargeTransactionList({ chain }) {
  const {
    data, isLoading, currentPage, onPageChange,
  } = usePaginationSWR(
    '/transaction/large-transaction-list',
    (url) => getFetcher(url, {
      chainShortName: 'eth',
    }),
    { refreshInterval: 2000 },
  );
  return (
    <Table
      loading={isLoading}
      columns={columns}
      rowKey="hash"
      dataSource={data?.transactionList}
      pagination={{
        current: currentPage,
        pageSize: 20,
        total: data?.totalPage || 0,
        onChange: onPageChange,
      }}
    />
  );
}
