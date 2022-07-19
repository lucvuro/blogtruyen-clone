import { Editor } from "@tinymce/tinymce-react";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const AddMangaComponent = (props) => {
  const { user } = props;
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
    sumary: yup.string().required("Vui lòng nhập nội dung truyện")
  });

  const [contentEditor, setContentEditor] = useState();
  const { register, handleSubmit, control } = useForm({
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
  const onSubmit = (data) => {
    console.log(data);
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
                <span className="fields__label">Tên truyện: </span>
                <span className="fields__inputs">
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên truyện"
                    {...register("name")}
                  />
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Image: </span>
                <span className="fields__inputs">
                  <Form.Control type="file" {...register("fileImage")} />
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Tên khác: </span>
                <span className="fields__inputs">
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên khác"
                    {...register("anotherName")}
                  />
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Tác giả: </span>
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
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Nguồn: </span>
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
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Thể loại: </span>
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
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Nội dung: </span>
                <span className="fields__inputs">
                  <Controller
                    name="sumary"
                    control={control}
                    render={({ field: { value, onChange,ref } }) => (
                      <Editor
                        tinymceScriptSrc={`${process.env.REACT_APP_PUBLIC_URL}/tinymce/tinymce.min.js`}
                        init={{
                          plugins: ["link", "image"],
                          statusbar: false,
                          height: 300,
                        }}
                        value={value}
                        onEditorChange={onChange}
                        ref={ref}
                      />
                    )}
                  />
                </span>
              </div>
              <div className="fields__info">
                <span className="fields__label">Trạng thái: </span>
                <span className="fields__inputs">
                  <Select
                    name="status"
                    options={list}
                    menuPosition={"fixed"}
                    styles={customStyles}
                  />
                </span>
              </div>
              <div className="fields__info">
                <Button variant="success" type="submit">
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
