import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/ContextApiProducts";
const showErr = {
  checked: "",
  component: "",
};
const Login = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState(showErr);
  const { responLogin } = useContext(AuthContext);
  console.log(responLogin);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    console.log(form);
    if (form.email == "" || form.password == "") {
      setMessage({
        checked: true,
        component: (
          <Alert severity="success">Vui lòng nhập đầy đủ thông tin</Alert>
        ),
      });
    } else {
      new Promise((resolve, reject) => {
        resolve();
      })
        .then(() => responLogin(form))
        .then(() => nav("/main"));
    }
  };
  // console.log(form);
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, textAlign: "center" }}
        variant="h5"
        component="div"
      >
        ĐĂNG NHẬP
      </Typography>
      <TextField
        fullWidth
        label="Email"
        name="email"
        helperText="Nhập emmail của bạn"
        onChange={handleInput}
      />
      <TextField
        sx={{ mt: 2, textAlign: "center" }}
        fullWidth
        label="Mật khẩu"
        name="password"
        helperText="Nhập mật khẩu của bạn"
        onChange={handleInput}
      />

      <Button fullWidth onClick={handleSubmit} variant="outlined" type="submit">
        LOGIN
      </Button>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <Typography style={{ fontSize: "14px" }} variant="h5">
          Bạn đã có tài khoản ?
        </Typography>
        <Link
          style={{ textDecoration: "none" }}
          to="/Register"
          state={{ some: "value" }}
        >
          <Typography style={{ fontSize: "14px" }} variant="h5">
            ĐĂNG KÝ
          </Typography>
        </Link>
      </Box>
      <Box sx={{ mt: 2 }}>{message.component}</Box>
    </Box>
  );
};

export default Login;
