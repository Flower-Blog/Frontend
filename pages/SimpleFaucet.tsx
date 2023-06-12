import { AlertProps, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import * as React from "react";
import Web3 from "web3";

import { FaucetFunction } from "@/helper/contract/FaucetFunction";

import Mining from "./loading/mining";

export default function SimpleFaucet() {
  // TODO: Handle funtion
  const [address, setAddress] = useState("");
  const [ETH, setETH] = useState("");

  useEffect(() => {
    const connect = async () => {
      // TODO: 拿取帳號
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const web3 = new Web3(window && window.ethereum);
      setAddress(accounts[0]);
      if (accounts[0]) {
        // TODO: 拿取ETH
        const ethBalance = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]));
        setETH(ethBalance);
      }
    };
    connect();
  }, []);
  const takemoney = async () => {
    setIsLoading(true); // 啟用 loading 狀態
    const web3 = new Web3(window && window.ethereum);
    if (web3) {
      const FaucetContractabi = FaucetFunction();
      const FaucetContract = new web3.eth.Contract(FaucetContractabi, process.env.NEXT_PUBLIC_FaucetContractAddress);

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      // 導入超級帳號
      const SupperAccounts = await web3.eth.accounts.privateKeyToAccount(`${process.env.NEXT_PUBLIC_UserKey}`);
      web3.eth.accounts.wallet.add(SupperAccounts);

      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = 3000000;
      await FaucetContract.methods
        .requestTokens(accounts[0])
        .send({
          from: SupperAccounts.address,
          gasPrice: gasPrice,
          gas: gasLimit,
        })
        .then(async () => {
          setalertTakeMoneySucess(true);
          setIsLoading(false);
          // TODO: 更新ETH
          const ethBalance = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]));
          setETH(ethBalance);
        })
        .catch(() => {
          setalertTakeMoneyFail(true);
          setIsLoading(false);
        });
    }
  };
  // TODO: UI funtion
  const [isLoading, setIsLoading] = useState(false);
  const [alertJoinCoinFail, setalertJoinCoinFail] = useState(false);
  const [alertTakeMoneyFail, setalertTakeMoneyFail] = useState(false);
  const [alertJoinCoinSucess, setalertJoinCoinSucess] = useState(false);
  const [alertTakeMoneySucess, setalertTakeMoneySucess] = useState(false);
  // TODO: 領錢
  const [transfermoney] = useState(true);

  const alertHandleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setalertTakeMoneySucess(false);
    setalertJoinCoinSucess(false);
    setalertTakeMoneyFail(false);
    setalertJoinCoinFail(false);
  };

  //material ui toast
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className="page5-container">
      {/* TODO: 加入錢幣到metamask */}
      <div className="text-blue-900 dark:text-blue-600 m-2 text-5xl">
        獲取 <span className="font-semibold">ETH</span> 代幣
      </div>
      <div className="my-5 mx-2 text-base ">
        <div className="my-1">錢包地址</div>

        <div className="border-slate-200 bg-gray-200 text-slate-600 hover:border-blue-300 my-1 w-24 min-w-fit rounded-md border py-3 px-2 hover:border-2 hover:border-solid hover:ring">
          {address}
        </div>
        <br></br>
        <div className="my-1">目前擁有</div>

        <div className="border-slate-200 bg-gray-200 text-slate-600 hover:border-blue-300 my-1 w-24 min-w-fit rounded-md border py-3 px-2 hover:border-2 hover:border-solid hover:ring">
          {ETH}
        </div>
        <br></br>
        {/* TODO: 領錢 */}
        {isLoading ? (
          <Mining />
        ) : (
          <button className="button" onClick={takemoney}>
            領取10個ETHER
          </button>
        )}
        {transfermoney ? null : <h1>轉帳成功</h1>}
      </div>
      <Snackbar open={alertTakeMoneySucess} autoHideDuration={6000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="success" sx={{ width: "100%" }}>
          領錢成功
        </Alert>
      </Snackbar>
      <Snackbar open={alertJoinCoinSucess} autoHideDuration={6000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="success" sx={{ width: "100%" }}>
          加入 AC 成功
        </Alert>
      </Snackbar>
      <Snackbar open={alertTakeMoneyFail} autoHideDuration={6000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="error" sx={{ width: "100%" }}>
          領錢失敗
        </Alert>
      </Snackbar>
      <Snackbar open={alertJoinCoinFail} autoHideDuration={6000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="error" sx={{ width: "100%" }}>
          加入 AC 失敗
        </Alert>
      </Snackbar>
    </div>
  );
}