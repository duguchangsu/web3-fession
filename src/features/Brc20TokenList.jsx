import dayjs from "dayjs";
import { Table, Tooltip } from "antd";
import { format1 } from "../config/time";
import { getFetcher } from "../config/fetcher";
import usePaginationSWR from "../hooks/usePaginationSWR";
import { Link } from "react-router-dom";

// /address/detail
const columns = [
  {
    title: "tick",
    ellipsis: true,
    dataIndex: "token",
    width: 48,
    // render: (text) => <Tooltip title={text}>{text}</Tooltip>,
    // render: (text, record) => (
    //   <Tooltip title={text}>
    //     <Link
    //       to={`/list/address/detail?address=${record.hash}&height=${record.height}`}
    //     >
    //       {text}
    //     </Link>
    //   </Tooltip>
    // ),
  },
  {
    title: "部署时间",
    key: "showTime",
    dataIndex: "deployTime",
    render: (text) => dayjs(text * 1).format(format1),
    width: 88,
  },
  {
    title: "ID",
    ellipsis: true,
    dataIndex: "inscriptionId",
    width: 48,
  },
  {
    title: "总供应量",
    ellipsis: true,
    dataIndex: "totalSupply",
    width: 48,
  },
  {
    title: "mintAmount",
    ellipsis: true,
    dataIndex: "已经铸造数量",
    width: 48,
  },
  {
    title: "总交易次数",
    ellipsis: true,
    dataIndex: "transactionCount",
    width: 48,
  },
  {
    title: "holder",
    ellipsis: true,
    dataIndex: "holder",
    width: 48,
  },
  {
    title: "mintRate",
    ellipsis: true,
    dataIndex: "mintRate",
    width: 48,
  },
];

export default function Brc20TokenList({ chain }) {
  const { data, isLoading, currentPage, onPageChange } = usePaginationSWR(
    "btc/token-list",
    (url) =>
      getFetcher(url, {
        chainShortName: "eth",
      }),
    { refreshInterval: 2000 }
  );

  return (
    <Table
      // title={<>"区块列表"</>}
      loading={isLoading}
      columns={columns}
      rowKey="token"
      dataSource={data?.tokenList}
      pagination={{
        current: currentPage,
        pageSize: 20,
        total: data?.totalPage || 0,
        onChange: onPageChange,
      }}
    />
  );
}
