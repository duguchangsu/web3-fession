import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import useSWR from 'swr';
import dayjs from "dayjs";
import { format2 } from "../config/time";
import { getFetcher } from "../config/fetcher";

import { Segmented, Row, Col } from 'antd';


const PriceChart = () => {
    const [date, setDate] = useState(7);

    const { data, isLoading, mutate } = useSWR(`/deflation/gas?limit=${date}`, (url) =>
        getFetcher(url, {
            chainShortName: 'eth',
        })
    );
    console.log(data);

    const handleClick = (val) => {
        setDate(val)
    }

    const option = {
        title: {
            left: 'center',
            text: 'ETH的gas历史',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: data?.gasHistoryList?.map((d) => dayjs(d.time * 1).format(format2)),
        },
        legend: {
            data: ['当天平均gas费', '当天最大值gas费', '当天最小值gas费'],
            left: 'left',
        },
        yAxis: {
            type: "value",
        },
        tooltip: {
            trigger: "axis",
        },
        series: [
            {
                name: '当天平均gas费',
                data: data?.gasHistoryList?.map((d) => d.avgGasPrice),
                type: "line",
            },
            {
                name: '当天最大值gas费',
                data: data?.gasHistoryList?.map((d) => d.maxGasPrice),
                type: "line",
            },
            {
                name: '当天最小值gas费',
                data: data?.gasHistoryList?.map((d) => d.minGasPrice),
                type: "line",
            },
        ],
    };

    return <div style={{
        height: '500px',
        padding: "24px",
        background: '',
        borderRadius: '1rem',
        border: 'solid 1px'
    }} >
        <Row justify='end'>
            <Segmented
                options={[
                    { label: '一周', value: 7 },
                    { label: '一个月', value: 30 },
                    { label: '一个季度', value: 90 }
                ]}
                onChange={handleClick} />
        </Row>

        <ReactEcharts option={option} showLoading={isLoading} style={{
            height: 'calc(100% - 48px)',
        }} />
    </div>

};

export default PriceChart;