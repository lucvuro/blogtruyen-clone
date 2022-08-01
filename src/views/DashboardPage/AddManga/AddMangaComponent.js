import { Editor } from "@tinymce/tinymce-react";
import { Button, Form, Spinner } from "react-bootstrap";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const AddMangaComponent = (props) => {
  const { user, handleonSubmit, path } = props;
  const history = useHistory();
  const yupSchema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên truyện"),
    fileImage: yup
      .mixed()
      .test("required", "Vui lòng chọn ảnh truyện", (file) => {
        return file[0] && file[0].size;
      })
      .test("FILE_SIZE", "File không được quá 5MB", (file) => {
        return file[0] && file[0].size <= 5000000;
      }),
    authors: yup.mixed().required("Vui lòng chọn tác giả"),
    sources: yup.mixed().required("Vui lòng chọn nhóm dịch, nguồn"),
    categories: yup.mixed().required("Vui lòng chọn thể loại truyện"),
    sumary: yup.string().required("Vui lòng nhập nội dung truyện"),
    status: yup.mixed().required("Vui lòng nhập tình trạng"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });
  const customStyles = {
    ///.....
    menuPortal: (provided) => ({ ...provided, zIndex: 999 }),

    ///.....
  };
  const list = [
    {
      value: "Quynh",
      label: "Xuan Quynh",
    },
    { value: "Huu", label: "To Huu" },
  ];
  const onSubmit = async (data) => {
    await handleonSubmit(data);
    history.push(`${path}`);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Thêm truyện mới</h1>
        </div>
        <div className="card-body">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="fields">
              <div className="fields__info">
                <span className="fields__label">
                  Tên truyện<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên truyện"
                    {...register("name")}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Control.Feedback type="invalid">
                      {errors.name.message}
                    </Form.Control.Feedback>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">
                  Image<sup style={{ color: "red" }}>*</sup>
                </span>
                <span className="fields__inputs">
                  <Form.Control
                    type="file"
                    isInvalid={errors.fileImage}
                    {...register("fileImage")}
                  />
                  {errors.fileImage && (
                    <Form.Control.Feedback type="invalid">
                      {errors.fileImage.message}
                    </Form.Control.Feedback>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Tên khác </span>
                <span className="fields__inputs">
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên khác"
                    {...register("anotherName")}
                  />
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">
                  Tác giả<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Controller
                    name="authors"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        options={list}
                        menuPosition={"fixed"}
                        styles={customStyles}
                        placeholder="Chọn tác giả..."
                      />
                    )}
                  />
                  {errors.authors && (
                    <span className="fields__text fields__text--danger">
                      {errors.authors.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">
                  Nguồn<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Controller
                    name="sources"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        options={list}
                        menuPosition={"fixed"}
                        styles={customStyles}
                        placeholder="Chọn nguồn, nhóm dịch..."
                      />
                    )}
                  />
                  {errors.sources && (
                    <span className="fields__text fields__text--danger">
                      {errors.sources.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">
                  Thể loại<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Controller
                    name="categories"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isMulti
                        options={list}
                        menuPosition={"fixed"}
                        styles={customStyles}
                        placeholder="Chọn thể loại..."
                      />
                    )}
                  />
                  {errors.categories && (
                    <span className="fields__text fields__text--danger">
                      {errors.categories.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">
                  Nội dung<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Controller
                    name="sumary"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Editor
                        tinymceScriptSrc={`${process.env.REACT_APP_PUBLIC_URL}/tinymce/tinymce.min.js`}
                        init={{
                          plugins: ["link", "image"],
                          statusbar: false,
                          height: 300,
                        }}
                        value={value}
                        onEditorChange={onChange}
                      />
                    )}
                  />
                  {errors.sumary && (
                    <span className="fields__text fields__text--danger">
                      {errors.sumary.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">
                  Tình trạng<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={list}
                        menuPosition={"fixed"}
                        styles={customStyles}
                        placeholder="Chọn tình trạng..."
                      />
                    )}
                  />
                  {errors.status && (
                    <span className="fields__text fields__text--danger">
                      {errors.status.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="fields__info">
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  {isSubmitting && (
                    <Spinner animation="border" size="sm"></Spinner>
                  )}
                  Thêm
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default AddMangaComponent;
