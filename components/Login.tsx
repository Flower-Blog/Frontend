import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";

import {
  _apiAuthLogin,
  _apiAuthLogout,
  apiAutGethEmail,
  apiAuthTakeNonce,
  apiAuthTakeToken,
  apiUserGetEmail,
  apiUserGetName,
  apiUserGetUserData,
  apiUserRegister,
} from "@/components/api";
import { LoginFunction } from "@/helper/users/loginFuction";
import { setLogin, setLogout } from "@/store/UserSlice";

interface Flower {
  id: number;
  name: string;
  language: string;
  img: string;
}

export default function Login() {
  // TODO: Handle funcion
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [selectedFlowerId, setSelectedFlowerId] = useState<number>(0);
  const [IsManager, setIsManager] = useState(false);
  const User = useSelector((state: any) => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    const connect = async () => {
      //TODO: 登入狀態
      LoginFunction().then(userData => {
        if (userData != null) {
          dispatch(setLogin(userData));
          const userDataF = JSON.parse(userData);
          const adminValue = userDataF[0]?.admin;
          if (adminValue) setIsManager(true);
        }
      });
      if (typeof window.ethereum === "undefined") {
        // TODO: 未安裝MetaMask導向官網
        window.alert("Please download MetaMask");
        window.open("https://metamask.io/download/", "_blank");
      }
    };
    connect();
  }, [dispatch]);

  //拿取flower假資料
  useEffect(() => {
    fetch("/api/flower/flower")
      .then(res => res.json())
      .then(data => setFlowers(data));
  }, []);

  //選擇花
  const handleFlowerClick = (flowerId: number) => {
    setSelectedFlowerId(flowerId);
  };

  //選擇完後確認到第三步註冊
  const handleConfirmClick = () => {
    registerSetOpen3(false);
    registerSetOpen2(true);
  };

  async function connectMetaMask() {
    if (typeof window.ethereum !== "undefined") {
      try {
        // 拿取錢包地址
        const addresses = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAddress(addresses[0]);
        // 是否為會員
        apiAuthTakeNonce(addresses[0])
          .then((res: any) => {
            // 是會員進行認證
            GetSignature(res.data.nonce, addresses[0]);
          })
          .catch((error: any) => {
            // 不是會員跳轉註冊
            console.log(error);
            registerSetOpen(true);
          });
      } catch (error) {
        alertRejectSetOpen(true);
      }
    } else {
      window.alert("Please download MetaMask");
      window.open("https://metamask.io/download/", "_blank");
    }
  }

  async function GetSignature(nonce: string, address: string) {
    // 拿Nonce簽名
    const web3 = new Web3(window.ethereum);
    const signer = web3.eth.personal;
    const signature = await signer.sign(nonce, address, "");
    // alert(signature);
    // 索取jwt
    const data = { address, signature };

    apiAuthTakeToken(data).then((res: any) => {
      const jwt = res.data.token;
      // 將JWT塞入 Cookie中
      _apiAuthLogin({ jwt });

      apiUserGetUserData(jwt).then((res: any) => {
        // 將傳回來的會員資料轉成json的字串模式
        const UserData = JSON.stringify(res.data.userdata);
        // 透過redux儲存會員資料
        dispatch(setLogin(UserData));
        // 將會員資料存在localStroage
        localStorage.setItem("UserData", UserData);
      });
    });
  }

  function sendVerificationCode() {
    //先檢查信箱
    apiUserGetEmail(email)
      .then(() => {
        //確認無誤後發送信箱
        //FIXME: 需要 Alert
        console.log("信箱確認");
      })
      .catch((error: any) => {
        if (error.response && error.response.data.error) {
          const errorMess = error.response.data.error;
          //FIXME: 需要 Alert 或是寫到輸入框裡
          console.log(errorMess);
        }
      });
  }

  function checkVerificationCode() {
    //確認驗證碼是否正確
    apiAutGethEmail(email, verificationCode)
      .then(() => {
        //FIXME: 需要 Alert
        console.log("電子郵件驗證碼正確");
        registerSetOpen(false);
        registerSetOpen3(true);
      })
      .catch((error: any) => {
        //FIXME: 需要 Alert 或是寫到輸入框裡
        console.log(error);
      });
  }

  function Register() {
    apiUserGetName(username)
      .then(() => {
        //FIXME: 需要 Alert
        console.log("名稱確認");
        const data = { address, name: username, email, flowerId: selectedFlowerId };
        apiUserRegister(data)
          .then(() => {
            registerSetOpen(false);
            registerSetOpen2(false);
            alertRegisterSetOpen(true);
          })
          .catch((error: any) => {
            console.log(error);
            if (error.response && error.response.data.error) {
              const errorMess = error.response.data.error;
              for (let i = 0; i < errorMess.length; i++) {
                if (errorMess[i].includes("username")) {
                  seterrorMessageUsername(JSON.stringify(errorMess[i]));
                }
              }
            }
          });
      })
      .catch(() => {
        //FIXME: 需要 Alert
        console.log("名稱錯誤");
      });
  }

  // TODO: UI function
  const [registerOpen, registerSetOpen] = useState(false);
  const [registerOpen2, registerSetOpen2] = useState(false);
  const [registerOpen3, registerSetOpen3] = useState(false);
  const [alertRejectOpen, alertRejectSetOpen] = useState(false);
  const [alertRegisterOpen, alertRegisterSetOpen] = useState(false);
  const [errorMessageUsername, seterrorMessageUsername] = useState("");
  const [errorMessageEmail, seterrorMessageEmail] = useState("");
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  //material ui toast
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const registerHandleClose = () => {
    registerSetOpen(false);
  };

  const alertHandleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    alertRejectSetOpen(false);
    alertRegisterSetOpen(false);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      {!User.profile.login ? (
        <Button
          className="navbar-view2 button"
          onClick={() => {
            connectMetaMask();
          }}
        >
          連線
        </Button>
      ) : (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton className="button navbar-view2" onClick={e => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
              <Avatar className="mx-1" src={`${User.profile.picture}`} alt="png" />
              <span className="navbar-text01 mx-2">{User.profile.name}</span>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <MenuItem onClick={() => setAnchorElUser(null)}>
              <Typography textAlign="center">
                <a href={"/" + User.profile.name} className="no-underline">
                  {User.profile.name}
                </a>
              </Typography>
            </MenuItem>
            {IsManager ? (
              <MenuItem onClick={() => setAnchorElUser(null)}>
                <Typography textAlign="center">
                  <a href={"/" + User.profile.name + "/backstage"}>管理後台</a>
                </Typography>
              </MenuItem>
            ) : null}
            <MenuItem
              onClick={() => {
                _apiAuthLogout();
                localStorage.removeItem("UserData");
                dispatch(setLogout());
                if (localStorage.getItem("UserData")) {
                  localStorage.removeItem("UserData");
                }
              }}
            >
              <Typography textAlign="center">登出</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}
      <Dialog
        fullScreen={fullScreen}
        open={registerOpen}
        onClose={registerHandleClose}
        onSubmit={checkVerificationCode}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="page2-container02">
          <DialogTitle className="text-center font-bold" id="responsive-dialog-title">
            註冊
          </DialogTitle>
          <DialogContent>
            <div className="flex flex-col">
              <div className="flex flex-row font-semibold">
                <span>錢包地址：</span>
                <DialogContentText className="font-semibold" onChange={handleAddressChange}>
                  {address}
                </DialogContentText>
              </div>
              {errorMessageEmail === "" ? (
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="信箱"
                  type="email"
                  placeholder="name@company.com"
                  fullWidth
                  variant="standard"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              ) : (
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue={email}
                  helperText={errorMessageEmail}
                  variant="standard"
                  onChange={() => seterrorMessageEmail("")}
                />
              )}
              <div className="flex flex-row">
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="驗證碼"
                  placeholder="輸入六碼"
                  multiline
                  variant="standard"
                  value={verificationCode}
                  onChange={e => setVerificationCode(e.target.value)}
                />
                <Button className="page2-button button" onClick={sendVerificationCode} color="primary">
                  發送驗證碼
                </Button>
              </div>
            </div>
          </DialogContent>

          <button className="page2-button1 button" onClick={checkVerificationCode}>
            <span className="page2-text2"> 下一步</span>
          </button>
        </div>
      </Dialog>

      <Dialog open={registerOpen3} onClose={() => registerSetOpen3(false)}>
        <div className="component3-container">
          <div className="component3-container1">
            <div className="component3-container2">
              <h1 className="w-full text-center text-3xl font-bold">選擇第一朵自己的花</h1>
              <h1 className="w-full text-center text-2xl font-bold">選擇一種</h1>
            </div>
            <div className="component3-form">
              <div className="component3-container3">
                <div className="component3-container5">
                  {/*FIXME: 做點動畫已選擇哪一朵 */}
                  {flowers.map(flower => (
                    <button
                      className="focus:ring-red-500 focus:outline-none focus:ring-4"
                      key={flower.id}
                      onClick={() => handleFlowerClick(flower.id)}
                    >
                      <img alt="" src={flower.img} className="component3-image" />
                    </button>
                  ))}
                </div>
                你選擇了 {selectedFlowerId}
                <div className="component3-container8">
                  <button className="component3-button button" onClick={handleConfirmClick}>
                    <span>確認</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={registerOpen2}
        onClose={registerHandleClose}
        onSubmit={Register}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="page2-container07">
          <div className="page2-container08">
            <h1 className="page2-text3">註冊</h1>
          </div>
          <div className="page2-form1">
            <div className="page2-container09">
              {errorMessageUsername === "" ? (
                <div className="page2-container10">
                  <label className="page2-text4">名稱:</label>
                  <input
                    type="text"
                    placeholder={username}
                    className="page2-textinput2 input"
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
              ) : (
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue={username}
                  helperText={errorMessageUsername}
                  variant="standard"
                  onChange={() => seterrorMessageUsername("")}
                />
              )}
              <button className="page2-button2 button" onClick={Register}>
                <span className="page2-text5"> 註冊</span>
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <Snackbar open={alertRejectOpen} autoHideDuration={6000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="error" sx={{ width: "100%" }}>
          用戶拒絕了授權!
        </Alert>
      </Snackbar>
      <Snackbar open={alertRegisterOpen} autoHideDuration={6000} onClose={alertHandleClose}>
        <Alert onClose={alertHandleClose} severity="success" sx={{ width: "100%" }}>
          註冊成功!
        </Alert>
      </Snackbar>
      <style>
        {`
          .component3-container {
            width: 100%;
            height: 594px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component3-container1 {
            width: 479px;
            height: auto;
            display: flex;
            box-shadow: 10px 10px 0px 0px #8c8585;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #ffcf77;
          }
          .component3-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .component3-form {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
          }
          .component3-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .component3-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .component3-image {
            width: 100px;
            object-fit: cover;
          }
          .component3-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .component3-button {
            width: 94px;
            align-self: center;
            background-color: var(--dl-color-threefish-orange);
          }
        `}
      </style>
    </div>
  );
}
