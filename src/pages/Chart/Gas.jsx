import React from 'react'
import PriceChart from '../../features/Gas'
import GasPrice from '../../features/GasPrice'
function Gas() {
  return (
    <div>
      <GasPrice />
      <PriceChart></PriceChart>
    </div>
  )
}

export default Gas