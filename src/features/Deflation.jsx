import React, { useState } from "react";
import useSWR from 'swr';
import { getFetcher } from "../config/fetcher";

import { Row, Col,Card, Statistic, Spin } from 'antd';

const Deflation = () => {

    const { data, isLoading } = useSWR(`/deflation/supply`, (url) =>
        getFetcher(url, {
            chainShortName: 'eth',
        }),
        { refreshInterval: 2000 },
    );

    const aaa = [
        {
            title: '总流通量',
            valueIndex: 'circulatingSupply'
        },
        {
            title: '总毁量量',
            valueIndex: 'totalBurnt'
        },
        {
            title: '质押年华收益率',
            valueIndex: 'stakingApy'
        },
        {
            title: '总质押数量',
            valueIndex: 'stakingAmount'
        },
        {
            title: '年化通胀率',
            valueIndex: 'inflationRate'
        },
    ]


    return <Spin spinning={isLoading}>

        <Row gutter={24}>
            {
                aaa.map((item, index) => {
                    return <Col span={12} key={index} style={{
                        margin: "16px"
                    }}>
                        <Card bordered={false}>
                            <Statistic
                                title={item.title}
                                value={data?.[0]?.[item.valueIndex]}
                                precision={2}
                            />
                        </Card>
                    </Col>
                })
            }
        </Row>


    </Spin >

};

export default Deflation;