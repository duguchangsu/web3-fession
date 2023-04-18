import React from 'react'
import { formatEther } from 'ethers'
import { background1 } from '../backgroud/1'
import { motion } from "framer-motion";

const titleStyle = { fontSize: '20px', width: "100px", color: "#e3e3e3" }

const valueStyle = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '48px',

    background: 'radial-gradient(104.56% 182.14% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.614729) 38.53%, rgba(151, 141, 156, 0) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
}

function AccountCard({ account }) {
    if (!account) {
        return ''
    }
    const { address, balance } = account

    return (
        <motion.div whileHover={{ scale: 1.01 }} style={{
            width: "680px",
            height: "300px",
            borderRadius: "20px",
            padding: "20px",
            border: '1px solid rgba(142, 140, 144, 0.4)',
            background: 'linear-gradient(135deg, #68AEFF 0%, #003EB7 100%), linear-gradient(180deg, #A8C0FF 0%, #3F2B96 100%)'
            // background: 'radial-gradient(54.05% 108.1% at 50% -8.1%, rgba(255, 184, 79, 0.336) 0%, rgba(247, 177, 0, 0) 100%), radial-gradient(129.29% 100% at 50% 0%, rgba(245, 131, 25, 0.3) 0%, rgba(245, 175, 25, 0) 100%), rgba(255, 255, 255, 0.1)'
        }}>
            <div style={titleStyle}>地址</div>
            <span style={valueStyle}>{address}</span>

            <div style={titleStyle}>余额</div>
            <div style={valueStyle}>
                {formatEther(balance)}
            </div>
        </motion.div >
    )
}

export default AccountCard