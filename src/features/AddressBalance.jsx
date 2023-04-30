import React, { useState } from 'react'
import { Input, message } from 'antd'
const { Search } = Input;
import { useMetaMask } from '../hooks/useMetaMask';
import { formatEther } from 'ethers';


function AddressBalance() {
    const { provider } = useMetaMask();
    const [balance, setBalance] = useState()

    const onSearch = async (val) => {
        try {
            const a = await provider.getBalance(val)
            console.log(11223123312132132, a);
            if (a) {
                setBalance(formatEther(a));
            } else {
                message.error('地址不符')
            }

        } catch (error) {
            message.error(error)
        }

    }
    return (
        <div style={{ margin: "24px 0" }} >
            <Search
                placeholder="请输入ETH地址/以太坊域名"
                onSearch={onSearch}
                // enterButton="Search"
                size="large" />
            {balance && <div>地址余额:{balance}</div>}
        </div>
    )
}

export default AddressBalance