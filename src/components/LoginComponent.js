import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Spinner } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { setUser } from "../slices/userSlice";
const LoginComponent = (props) => {
  const { setToken } = props;
  const dispatch = useDispatch()
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
      const url = `https://reqres.in/api/login`
      let res = await axios.post(url,{
        email: data.username,
        password: data.password
      })
      const action = setUser({
        token: res.data.token
      })
      dispatch(action)
      localStorage.setItem('user',JSON.stringify(res.data))
      
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
