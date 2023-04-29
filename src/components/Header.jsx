import { Button, Layout, Row, Col } from 'antd';
import { useMetaMask } from '../hooks/useMetaMask';
import { formatAddress } from '../config/format';
import { getNumber } from 'ethers';

const { Header } = Layout;

const headerStyle = {
    height: '64px',
    paddingInline: 50,
    lineHeight: '64px',
    borderBottom: 'solid 1px #e3e3e3',
    backgroundColor: '#fff',
};

function MyHeader() {
    const { provider, account, connect, disconnect } = useMetaMask();

    return (
        <Header style={headerStyle}>
            <Row justify='space-around'>
                <Col span={4}>
                    <h3>ETH区块链数据系统</h3>
                </Col>
                <Col span={18}></Col>
                <Col span={2}>
                    {
                        provider ?
                            <Button onClick={() => { disconnect() }}>
                                {formatAddress(account?.address)}
                            </Button>
                            :
                            <Button onClick={() => { connect() }}>
                                {'Connect MetaMask'}
                            </Button>
                    }
                </Col>
            </Row>
        </Header>
    );
}

export default MyHeader;