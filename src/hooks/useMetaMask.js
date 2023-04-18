import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const useMetaMask = () => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [signer, setSigner] = useState(null);

  const detectEthereumProvider = async () => {
    if (!window.ethereum) return null;
    console.log(1222222,provider);
    if (!provider) {
        console.log(1212);
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        console.log(provider);

        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const { address } = signer;
        const balance = await provider.getBalance(address);

        provider.on("network", (newNetwork) => {
          setNetwork(newNetwork);
        });
        setSigner(signer);

        setAccount({
          balance,
          address,
        });

        return provider;
      } catch (error) {
        console.error(error);
      }
    }
    return provider;
  };

  const destroyEthereumProvider = async () => {
    if (!window.ethereum) return null;

    setProvider(null);
    setAccount(null);
    setSigner(null);
  };

  const handleConnectMetaMask = async () => {
    console.log(111);
    const provider = await detectEthereumProvider();
    if (provider) {
      // 连接成功后的逻辑
    } else {
      console.error("请安装并授权 MetaMask");
    }
  };

  const handleDisConnectMetaMask = async () => {
    await destroyEthereumProvider();
  };

  useEffect(() => {
    handleConnectMetaMask();
  }, []);

  return {
    provider,
    signer,
    account,
    connect: handleConnectMetaMask,
    disconnect: handleDisConnectMetaMask,
  };
};
