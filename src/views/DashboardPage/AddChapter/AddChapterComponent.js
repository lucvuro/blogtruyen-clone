import { useForm, Controller } from "react-hook-form";
import { Form, Button, Spinner } from "react-bootstrap";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const AddChapterComponent = (props) => {
  const { listManga, handleonSubmit } = props;
  const yupSchema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên chương"),
    fileImage: yup
      .mixed()
      .test("required", "Vui lòng chọn ảnh truyện", (file) => {
        return file[0] && file[0].size;
      }),
    manga: yup.mixed().required("Vui lòng chọn truyện bạn cần thêm chương mới"),
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
  const onSubmit = async (data) => {
    await handleonSubmit(data);
    // history.push(`${path}`);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Thêm chương mới</h1>
          </div>
          <div className="card-body">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="fields">
                <div className="fields__info">
                  <span className="fields__label">
                    Truyện<sup style={{ color: "red" }}>*</sup>{" "}
                  </span>
                  <span className="fields__inputs">
                    <Controller
                      name="manga"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={listManga}
                          menuPosition={"fixed"}
                          styles={customStyles}
                          placeholder="Chọn truyện"
                        />
                      )}
                    />
                    {errors.manga && (
                      <span className="fields__text fields__text--danger">
                        {errors.manga.message}
                      </span>
                    )}
                  </span>
                </div>
                <div className="fields__info">
                  <span className="fields__label">
                    Tên chương<sup style={{ color: "red" }}>*</sup>{" "}
                  </span>
                  <span className="fields__inputs">
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên chương"
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
                      multiple
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
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting}
                  >
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
    </>
  );
};

export default AddChapterComponent;
