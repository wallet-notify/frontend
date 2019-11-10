import * as React from 'react'
import { ethers } from 'ethers'

import WalletNotify from './components/WalletNotify'
import WN from 'wallet-notify'

const NETWORK = 'goerli'

async function submitTx(to, imageInput, messageInput, actionInput) {

  const notification = {
    t: messageInput,
    tu: imageInput,
    au: actionInput
  }
  console.log('Version', ethers.version)

  const provider = new ethers.providers.Web3Provider(
    window.web3.currentProvider,
  )

  const gasPrice = await provider.getGasPrice()
  console.log('Gas Price:', gasPrice.toNumber())

  const txHash = await WN.send({ to, notification, web3: window.web3, gasPrice, gasLimit: 210000 })

  console.log(`Sent TX: https://${NETWORK}.etherscan.io/tx/${txHash}`)
  console.log('TX Data:', txHash)
}

export default function App() {
  const sendNotification = async ({
    addressInput,
    imageInput,
    messageInput,
    actionInput,
  }) => {
    submitTx(addressInput, imageInput, messageInput, actionInput)
    // const notification = {
    //   t: this.state.notificationInput,
    //   u: this.state.urlInput,
    //   a: '',
    // }
    // await submitTx(this.state.addressInput, notification)
  }

  return <WalletNotify sendNotification={sendNotification} />
}
