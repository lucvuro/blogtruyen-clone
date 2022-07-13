import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../api/authAPI";
import { useEffect } from "react";
import {createAxios} from "../api/axiosClient";
const LoginComponent = (props) => {
  const user = useSelector(state => state.auth.login?.currentUser)
  const { setToken, setShow } = props;
  const authErr = useSelector((state) => state.auth.login.error);
  const dispatch = useDispatch();
  const axiosClient = createAxios(user,dispatch)
  const schema = yup.object().shape({
    username: yup.string().required("Vui lòng nhập tài khoản"),
    password: yup.string().required("Vui lòng nhập mẩu khẩu"),
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    const success = await loginUser(data, dispatch,axiosClient);
    if (success) {
      setShow(false)
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {authErr && <Alert variant="danger">
          Tài khoản hoặc mật khẩu không đúng
        </Alert>}
        <Form.Group className="mb-3" controlId="formUser">
          <Form.Label>Tài khoản</Form.Label>
          <Form.Control
            type="text"
            {...register("username")}
            isInvalid={errors.username}
            autoComplete="off"
          />
          {errors.username && (
            <Form.Control.Feedback type="invalid">
              {errors.username.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            {...register("password")}
            isInvalid={errors.password}
            autoComplete="off"
          />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          <span>Đăng nhập</span>
          {isSubmitting && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
      </Form>
    </div>
  );
};
export default LoginComponent;
