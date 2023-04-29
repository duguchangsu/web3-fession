import React from 'react'
import useSWR from 'swr'
import { parasSearch } from '../../config/url';
import { useLocation } from "react-router-dom";
import { getFetcher } from '../../config/fetcher';


const Card = ({ title, value }) => {
  console.log(title);

  const container = 'w-80 h-40 m-5 rounded-lg p-5 border-solid border-1 border-gray-500	bg-gradient-to-r from-sky-500 to-indigo-500'
  const valueClass = 'text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-emerald-50'
  const titleClass = 'text-3xl text-center my-5'

  return <div className={container}>
    <div className={titleClass}>
      {title}
    </div>
    <div className={valueClass}>
      {value}
    </div>
  </div>
}

function TransactionDetail() {
  const { search } = useLocation();

  const { txid } = parasSearch(search)

  const { data, isLoading } = useSWR(`/transaction/transaction-fills`, (url) =>
    getFetcher(url, {
      chainShortName: 'eth',
      txid
    })
  );

  console.log(data);
  const fillData = data?.[0];
  console.log(fillData);



  return (
    <div className='flex flex-wrap justify-between align-middle'>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
      <Card title='交易数量' value={fillData?.amount}></Card>
    </div>
  )
}

export default TransactionDetail