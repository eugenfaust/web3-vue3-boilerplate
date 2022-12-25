/* eslint-disable no-undef */
import Web3 from 'web3/dist/web3.min';
// import WalletConnectProvider from '@walletconnect/web3-provider';
// Fix for ReferenceError: global is not defined
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min';

export default class Web3Service {
  static infuraId = import.meta.env.VITE_INFURA_KEY;

  static async walletConnect() {
    console.log(this.infuraId);
    //  Create WalletConnect Provider
    const provider = new WalletConnectProvider({
      infuraId: this.infuraId,
    });
    //  Enable session (triggers QR Code modal)
    await provider.enable();
    //  Create Web3 instance
    const web3 = this.getProvider(provider);
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  }

  static getProvider(_provider = Web3.givenProvider) {
    return new Web3(_provider);
  }

  static async getWallet() {
    if (typeof window.ethereum !== 'undefined') {
      let accounts = await ethereum.request({ method: 'eth_accounts' });

      if (!accounts[0]) {
        const provider = new WalletConnectProvider({
          infuraId: this.infuraId,
          qrcode: false,
        });
        await provider.enable();
        accounts = provider.accounts;
      }
      return accounts[0] ? accounts[0] : '';
    }
    return undefined;
  }

  static async connectWallet(walletType = 'metamask') {
    if (walletType === 'injected') {
      return this.getWallet();
    }
    if (typeof window.ethereum !== 'undefined') {
      if (walletType === 'walletconnect') {
        return this.walletConnect();
      }
      let provider = window.ethereum;
      if (walletType !== 'injected') {
        if (
          !(provider.isMetaMask && walletType === 'metamask')
          && !(provider.isCoinbaseWallet && walletType === 'coinbase')
        ) {
          provider = undefined;
        }
        // edge case if MM and CBW are both installed
        if (window.ethereum.providers?.length) {
          window.ethereum.providers.forEach(async (p) => {
            if (p.isMetaMask && walletType === 'metamask') provider = p;
            else if (p.isCoinbaseWallet && walletType === 'coinbase') {
              provider = p;
            }
          });
        }
      }

      if (provider === undefined) {
        return undefined;
      }
      const account = (
        await provider.request({ method: 'eth_requestAccounts' })
      )[0];
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: '0x61',
            },
          ],
        });
      } catch (switchError) {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x61',
              chainName: 'BSC Testnet',
              rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
              nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18,
              },
            },
          ],
        });
      }
      return account;
    }
    return undefined;
  }

  static async getBalance(account) {
    const balance = await ethereum.request({
      method: 'eth_getBalance',
      params: [account, 'latest'],
    });
    return Web3.utils.fromWei(balance, 'ether');
  }
}
