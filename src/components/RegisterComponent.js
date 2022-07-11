import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const RegisterComponent = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Vui lòng nhập tài khoản"),
    password: yup.string().max(16,"Mật khẩu chỉ nằm trong từ 8 - 16 ký tự").min(8,"Mật khẩu quá ngắn").required("Vui lòng nhập mẩu khẩu"),
    confirmpassword: yup.string().required("Vui lòng xác nhận mật khẩu").oneOf([yup.ref("password"),null],"Mật khẩu không trùng khớp")
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formUser">
          <Form.Label>Tài khoản</Form.Label>
          <Form.Control
            type="text"
            {...register("username")}
            isInvalid={errors.username}
            autoComplete = "off"
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
            autoComplete = "off"
          />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Nhập lại mật khẩu</Form.Label>
          <Form.Control
            type="password"
            {...register("confirmpassword")}
            isInvalid={errors.confirmpassword}
            autoComplete = "off"
          />
          {errors.confirmpassword && (
            <Form.Control.Feedback type="invalid">
              {errors.confirmpassword.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng ký
        </Button>
      </Form>
    </div>
  );
};
export default RegisterComponent;
