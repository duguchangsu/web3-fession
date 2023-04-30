import React from 'react'
import useSWR from 'swr'
import { parasSearch } from '../../config/url';
import { useLocation } from "react-router-dom";
import { getFetcher } from '../../config/fetcher';
import { Spin, Descriptions, Table } from 'antd';

function TransactionDetail() {
  const { search } = useLocation();

  const { txid } = parasSearch(search)

  const { data, isLoading } = useSWR(`/transaction/transaction-fills`, (url) =>
    getFetcher(url, {
      chainShortName: 'eth',
      txid
    })
  );

  const fillData = data?.[0];

  const detailData = [
    {
      title: '交易哈希',
      valueIndex: 'txid',
      span: 2
    },
    {
      title: '交易数量',
      valueIndex: 'amount'
    },
    {
      title: '手续费',
      valueIndex: 'txfee'
    },
    {
      title: '确认数',
      valueIndex: 'confirm'
    },
    {
      title: 'gas限额',
      valueIndex: 'gasLimit'
    },
    {
      title: 'gas消耗',
      valueIndex: 'gasUsed'
    },
    {
      title: 'gas价格',
      valueIndex: 'gasPrice'
    },
    {
      title: '发起者地址发起的第几笔交易',
      valueIndex: 'nonce'
    },
  ]

  const columns = [
    {
      title: '索引',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '代币名称',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '代币合约地址',
      dataIndex: 'tokenContractAddress',
      key: 'tokenContractAddress',
    },
    {
      title: '转出代币地址',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: '接收代币地址',
      dataIndex: 'to',
      key: 'to',
    },
  ];
  const columns2 = [
    {
      title: '索引',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '转账数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '转出代币地址',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: '接收代币地址',
      dataIndex: 'to',
      key: 'to',
    },
  ];
  const columns1 = [
    {
      title: '发起交易的hash地址',
      dataIndex: 'inputHash',
      key: 'inputHash',
    },
    {
      title: '发起交易地址的标签',
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: '交易数量',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];


  return (<Spin spinning={isLoading}>

    <Descriptions title="交易信息" >
      {
        detailData.map((item, index) => {
          return <Descriptions.Item key={index} span={item?.span} label={item.title}>{fillData?.[item.valueIndex]} </Descriptions.Item>
        })
      }
    </Descriptions>

    <div style={{
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 1.5
    }}>代币转账明细</div>
    <Table dataSource={fillData?.tokenTransferDetails} columns={columns} scroll={{ x: 1300 }}></Table>

    <div style={{
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 1.5
    }}>合约调用转账明细</div>
    <Table dataSource={fillData?.contractDetails} columns={columns2} scroll={{ x: 1300 }
    } />


  </Spin >
  )
}

export default TransactionDetail