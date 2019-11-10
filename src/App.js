import * as React from 'react'
import { ethers } from 'ethers'
import { Helmet } from 'react-helmet'

import WalletNotify from './components/WalletNotify'
import WN from 'wallet-notify'

const EthCrypto = require('eth-crypto')

const NETWORK = 'goerli'

async function submitTxOld(to, imageInput, messageInput, actionInput) {


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

  const wallet = provider.getSigner()

  const balance = await wallet.getBalance()
  console.log('Balance:', ethers.utils.formatEther(balance))

  const note = JSON.stringify(notification)
  console.log({ note })

  const data = window.web3.toHex('!!' + EthCrypto.cipher.stringify(note))

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



async function submitTx(to, imageInput, messageInput, actionInput) {
  const notification = {
    t: messageInput,
    tu: imageInput,
    au: actionInput,
  }
  console.log('Version', ethers.version)

  const provider = new ethers.providers.Web3Provider(
    window.web3.currentProvider,
  )

  const gasPrice = await provider.getGasPrice()
  console.log('Gas Price:', gasPrice.toNumber())

  const txHash = await WN.send({
    to,
    notification,
    web3: window.web3,
    gasPrice,
    gasLimit: 210000,
  })

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
    submitTxOld(addressInput, imageInput, messageInput, actionInput)
    // const notification = {
    //   t: this.state.notificationInput,
    //   u: this.state.urlInput,
    //   a: '',
    // }
    // await submitTx(this.state.addressInput, notification)
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Wallet Notify</title>
      </Helmet>
      <WalletNotify sendNotification={sendNotification} />
    </React.Fragment>
  )
}
