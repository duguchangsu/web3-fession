import dayjs from 'dayjs';
import { Table, Tooltip } from 'antd';
import { format1 } from '../config/time';
import { getFetcher } from '../config/fetcher';
import usePaginationSWR from '../hooks/usePaginationSWR';

const columns = [
  {
    title: 'Hash地址',
    ellipsis: true,
    dataIndex: 'hash',
    width: 148,
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
  },
  {
    title: '区块高度',
    ellipsis: true,
    dataIndex: 'height',
    width: 48,
  },
  {
    title: '区块大小',
    ellipsis: true,
    dataIndex: 'blockSize',
    width: 48,
  },
  {
    title: '区块奖励',
    ellipsis: true,
    dataIndex: 'mineReward',
    width: 48,
  },
  {
    title: '交易条数',
    ellipsis: true,
    dataIndex: 'txnCount',
    width: 48,
  },
  {
    title: '出块时间',
    key: 'showTime',
    dataIndex: 'blockTime',
    render: (text) => dayjs(text * 1).format(format1),
    width: 88,
  },
];

export default function BlockList({ chain }) {
  const {
    data, isLoading, currentPage, onPageChange,
  } = usePaginationSWR(
    '/block/block-list',
    (url) => getFetcher(url, {
      chainShortName: 'eth',
    }),
    {},
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
