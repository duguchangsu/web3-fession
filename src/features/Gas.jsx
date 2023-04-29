import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import useSWR from 'swr';
import dayjs from "dayjs";
import { format2 } from "../config/time";
import { getFetcher } from "../config/fetcher";

import { Segmented, Row, Col } from 'antd';


const GasChart = () => {
    const [date, setDate] = useState(7);

    const { data, isLoading, mutate } = useSWR(`/deflation/gas?limit=${date}`, (url) =>
        getFetcher(url, {
            chainShortName: 'eth',
        })
    );
    const handleClick = (val) => {
        setDate(val)
    }

    const option = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '20px',
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: data?.[0]?.gasHistoryList?.map((d) => dayjs(d.time * 1).format(format2)),
        },
        legend: {
            data: ['当天平均gas费', '当天最大值gas费', '当天最小值gas费'],
            bottom: '-5px',
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
                data: data?.[0]?.gasHistoryList?.map((d) => d.avgGasPrice),
                type: "line",
            },
            {
                name: '当天最大值gas费',
                data: data?.[0]?.gasHistoryList?.map((d) => d.maxGasPrice),
                type: "line",
            },
            {
                name: '当天最小值gas费',
                data: data?.[0]?.gasHistoryList?.map((d) => d.minGasPrice),
                type: "line",
            },
        ],
    };

    return <div style={{
        height: '500px',
        width: "100%",
        padding: "24px",
        background: '',
        borderRadius: '1rem',
        border: 'solid 1px #ebebeb'
    }} >
        <Row justify='space-between' >

            <div style={{ lineHeight: '28px', height: '24px', fontSize: '18px' }}>ETH的gas历史</div>

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

export default GasChart;