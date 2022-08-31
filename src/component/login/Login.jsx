import {
  Button,
  Stack,
  InputBase,
  Typography,
  Checkbox,
  Box,
  Tabs,
  Tab,
  FormControl
} from "@mui/material";
import { borderBottom } from "@mui/system";
import { useState } from "react";

import "./Login.scss";
const Login = () => {
    const [tab,setTab] = useState(1);
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        password:"",
        email:"",
        checked:false
    })
    const onFirstNameChangeHandler = e =>{
        setData({
            ...data,
            firstName:e.target.value
        })
    }
    const onLastNameChangeHandler = e =>{
        setData({
            ...data,
            lastName:e.target.value
        })
    }
    const onUserNameChangeHandler = e =>{
        setData({
            ...data,
            userName:e.target.value
        })
    }
    const onEmailChangeHandler = e =>{
        setData({
            ...data,
            email:e.target.value
        })
    }
    const onPasswordChangeHandler = e =>{
        setData({
            ...data,
            password:e.target.value
        })
    }

    const onCheck = e =>{
        setData({
            ...data,
            checked:e.target.checked
        })

    }

    const onSubmit = () =>{
        if(data.firstName.length===0 ||data.lastName.length===0 ||data.userName.length===0||data.password.length===0||data.email.length===0 || data.checked === false ){
            alert("please fill all field");
            return
        }
        if(tab===1){
            fetch("https://wren.in:3200/api/sign-up/fan",{
                method:"POST",
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                },
                body:JSON.stringify({
                    first_name:data.firstName,
                    last_name:data.lastName,
                    username:data.userName,
                    email:data.email,
                    password:data.password
                })
            }).then(res=>{
                alert("form submitted successfully");
                setData({
                    firstName:"",
                    lastName:"",
                    userName:"",
                    password:"",
                    email:"",
                    checked:false
                })
            }).catch(err=>{
                alert(err);
            })

        }else{
            fetch("https://wren.in:3200/api/sign-up/talent",{
                method:"POST",
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                },
                body:JSON.stringify({
                    first_name:data.firstName,
                    last_name:data.lastName,
                    username:data.userName,
                    email:data.email,
                    password:data.password
                })
            }).then(res=>{
                alert("form submitted successfully");
                setData({
                    firstName:"",
                    lastName:"",
                    userName:"",
                    password:"",
                    email:"",
                    checked:false
                })
            }).catch(err=>{
                alert(err);
            })

        }
    }



  return (
    <div className="login-container">
      <Box className="tab-container">
       <Button variant="contained" className={`${tab===1?"active-tab":""}`} onClick={()=>setTab(1)}>
           Fan SingUp
       </Button>
       <Button variant="contained"className={`${tab===2?"active-tab":""}`} onClick={()=>setTab(2)}>
           Talent SingUp
       </Button>
      </Box>
      <Typography variant="h5" className="title">
        Create Your Fan Account
      </Typography>
      <form>
      <Stack direction="column" spacing={2}>
        <Stack direction="column">
          <Typography variant="subtitle2" className="input-title">
            Full Name<sup>*</sup>
          </Typography>
          <InputBase
            hiddenLabel
            id="filled-hidden-label-small"
            required={true}
            variant="filled"
            size="small"
            onChange={onFirstNameChangeHandler}
            //style={{ width: "32rem" }}
            placeholder="First name"
          />
        </Stack>
        <Stack direction="column">
          <Typography variant="subtitle2" className="input-title">
            Last Name<sup>*</sup>
          </Typography>
          <InputBase
            hiddenLabel
            id="filled-hidden-label-small"
            //defaultValue={name}
            variant="filled"
            size="small"
            onChange={onLastNameChangeHandler}
            required={true}
            placeholder="Last name"
          />
        </Stack>
        <Stack direction="column">
          <Typography variant="subtitle2" className="input-title">
            Username<sup>*</sup>
          </Typography>
          <InputBase
            hiddenLabel
            id="filled-hidden-label-small"
            required={true}
            variant="filled"
            size="small"
            onChange={onUserNameChangeHandler}
            placeholder="username"
          />
        </Stack>
        <Stack direction="column">
          <Typography variant="subtitle2" className="input-title">
            Email<sup>*</sup>
          </Typography>
          <InputBase
            hiddenLabel
            id="filled-hidden-label-small"
            required={true}
            variant="filled"
            size="small"
            onChange={onEmailChangeHandler}
            placeholder="email"
          />
        </Stack>
        <Stack direction="column">
          <Typography variant="subtitle2" className="input-title">
            Password<sup>*</sup>
          </Typography>
          <InputBase
            hiddenLabel
            id="filled-hidden-label-small"
            required={true}
            variant="filled"
            size="small"
            onChange={onPasswordChangeHandler}
            placeholder="Password"
          />
        </Stack>
        <Stack direction="row" spacing={1} className="checkbox-container">
          <Checkbox size="small" onChange={onCheck}/>
          <div>I agree to the <a href="https://www.google.com/">Terms and Conditions.</a></div>
        </Stack>
        <Stack className="btn-container">
          <Button variant="contained" className="btn" size="small" onClick={onSubmit}>
            Sign Up
          </Button>
        </Stack>
      </Stack>
      </form>
     
    </div>
  );
};

export default Login;
