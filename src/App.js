import * as React from 'react'
import { ethers } from 'ethers'

import WalletNotify from './components/WalletNotify'

const NETWORK = 'goerli'

async function submitTx(to, notification) {
  console.log('Version', ethers.version)

  const provider = new ethers.providers.Web3Provider(
    window.web3.currentProvider,
  )

  const gasPrice = await provider.getGasPrice()
  console.log('Gas Price:', gasPrice.toNumber())

  const wallet = provider.getSigner()

  const balance = await wallet.getBalance()
  console.log('Balance:', ethers.utils.formatEther(balance))

  const note = JSON.stringify(notification)
  console.log({ note })

  const data = ethers.utils.toUtf8Bytes('!!' + note)
  console.log('Tx Data:', data.toString())

  const tx = await wallet.sendTransaction({
    gasLimit: 210000,
    gasPrice,
    to,
    data,
  })
  console.log(`Sent TX: https://${NETWORK}.etherscan.io/tx/${tx.hash}`)
  console.log('TX Data:', tx.data)
}

export default function App() {
  const sendNotification = async () => {
    debugger
    // console.log('test')
    // console.log('state:', this.state)

    // const notification = {
    //   t: this.state.notificationInput,
    //   u: this.state.urlInput,
    //   a: '',
    // }
    // await submitTx(this.state.addressInput, notification)
  }

  return <WalletNotify sendNotification={sendNotification} />
}
