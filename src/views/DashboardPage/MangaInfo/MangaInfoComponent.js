import { useForm, Controller } from "react-hook-form";
import { Form, Button, Table } from "react-bootstrap";
import Select from "react-select";
import { Link, useRouteMatch } from "react-router-dom";
const MangaInfoComponent = (props) => {
  const customStyles = {
    ///.....
    menuPortal: (provided) => ({ ...provided, zIndex: 999 }),

    ///.....
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { manga, chapters, deleteChapter,path } = props;
  const handledeleteChapter = async (chapter) => {
    await deleteChapter(chapter);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Thông tin của truyện {manga?.name}</h1>
          </div>
          <div className="card-body">
            <div className="fields">
              <div className="fields__info">
                <span className="fields__label">
                  Tên truyện<sup style={{ color: "red" }}>*</sup>{" "}
                </span>
                <span className="fields__inputs">
                  <Form.Control
                    type="text"
                    defaultValue={manga?.name}
                    disabled
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
                    disabled
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
                    defaultValue={manga?.anotherName}
                    disabled
                    type="text"
                    placeholder="Nhập tên khác"
                    {...register("anotherName")}
                  />
                </span>
              </div>
              <div className="fields_info">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tên chương</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapters?.length <= 0 && (
                      <tr>
                        <td colSpan={2}>Chưa có chương nào.</td>
                      </tr>
                    )}
                    {chapters?.length > 0 &&
                      chapters.map((item, index) => {
                        return (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                              <Button
                                variant="danger"
                                onClick={() => {
                                  deleteChapter(item);
                                }}
                              >
                                Xóa
                              </Button>
                            </td>
                            <td>
                              <Button variant="success">Sửa</Button>
                            </td>
                          </tr>
                        );
                      })}
                    <tr>
                      <td colSpan={2}>
                        <Link to={`${path}/truyendadang/themchuongmoi`}>
                          <Button variant="success" type="button">
                            Thêm
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangaInfoComponent;
