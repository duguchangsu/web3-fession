import React from 'react'
import { formatEther } from 'ethers'
import { background1 } from '../backgroud/1'
import { motion } from "framer-motion";

const titleStyle = { fontSize: '20px', width: "100px", color: "#e3e3e3" }

const container = 'w-1/2 h-80 rounded-lg p-5 border-solid border-1 border-gray-500	bg-gradient-to-r from-sky-500 to-indigo-500'
const valueClass = 'text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-emerald-50'

function AccountCard({ account }) {
    if (!account) {
        return ''
    }
    const { address, balance } = account;

    const values = [
        {
            label: '地址',
            value: address
        },
        {
            label: '余额',
            value: formatEther(balance)
        },
    ]

    return (
        <motion.div whileHover={{ scale: 1.01 }}
            className={container}
        >
            {
                values.map(item => {
                    return <>
                        <div style={titleStyle}>余额</div>
                        <div className={valueClass}>
                            {formatEther(balance)}
                        </div>
                    </>
                })
            }
        </motion.div >
    )
}

export default AccountCard