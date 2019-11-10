import React from 'react';
import './App.css';
import { ethers } from 'ethers'

import logo from './design/logo.png'


import style from './App.style.js'


const NETWORK = 'goerli'

async function submitTx(to, notification) {
  console.log("Version", ethers.version)

  const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

  const gasPrice = await provider.getGasPrice()
  console.log('Gas Price:', gasPrice.toNumber())

  const wallet = provider.getSigner();

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressInput: '',
      notificationInput: '',
      urlInput: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  sendNotification = async () => {
    console.log('test');
    console.log("state:", this.state);

    const notification = {
      t: this.state.notificationInput,
      u: this.state.urlInput,
      a: ''
    }
    await submitTx(this.state.addressInput, notification)
  }



  render() {
    return (
      <form>
        <div style={style.base}>

          <div style={style.logo}>

            <img src={logo} alt="Go back" />

          </div>

          <div style={style.address}>
            Address:
          <input
            name="addressInput"
            type="text"
            value={this.state.addressInput}
            onChange={this.handleInputChange} />
          </div>



        <div style={style.atachments}>

          <div style={style.atachments__icon}>

          </div>

          Attachments:
          <input
            name="notificationInput"
            type="text"
            value={this.state.notificationInput}
            onChange={this.handleInputChange} />

          URL:
          <input
            name="urlInput"
            type="text"
            value={this.state.urlInput}
            onChange={this.handleInputChange} />

        </div>


        <div style={style.button}>
          <button type="button" onClick={this.sendNotification}>Submit</button>
        </div>

        </div>

      </form>
    );
  }
}

export default App;