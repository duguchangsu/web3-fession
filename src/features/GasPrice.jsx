import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import useSWR from 'swr';
import dayjs from "dayjs";
import { format2 } from "../config/time";
import { getFetcher } from "../config/fetcher";

import { Segmented, Row, Col, Card, Statistic, Spin } from 'antd';

const GasPrice = () => {

    const { data, isLoading } = useSWR(`/blockchain/fee`, (url) =>
        getFetcher(url, {
            chainShortName: 'eth',
        }),
        { refreshInterval: 2000 },
    );

    const aaa = [
        {
            title: '推荐Gas费',
            valueIndex: 'recommendedGasPrice'
        },
        {
            title: '快速Gas费',
            valueIndex: 'rapidGasPrice'
        },
        {
            title: '标准Gas费',
            valueIndex: 'standardGasPrice'
        },
        {
            title: '缓慢Gas费',
            valueIndex: 'slowGasPrice'
        },
    ]


    return <Spin spinning={isLoading}>

        <Row gutter={24}>
            {
                aaa.map((item, index) => {
                    return <Col span={12} key={index} style={{
                        marginBottom: "16px"
                    }}>
                        <Card bordered={false}>
                            <Statistic
                                title={item.title}
                                value={data?.[0]?.[item.valueIndex]}
                                precision={2}
                                suffix="Gwei"
                            />
                        </Card>
                    </Col>
                })
            }

        </Row>


    </Spin >

};

export default GasPrice;