import { Form, Button,Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ListAuthorComponent = (props) => {
  const { user } = props;
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Danh sách tác giả</h1>
          </div>
          <div className="card-body">
            <div className="fields">
              <div className="fields__info">
                <div className="fields__inputs">
                  <Form.Control
                    type="text"
                    placeholder="Nhập tác giả cần tìm..."
                  />
                </div>
                <div className="fields_label">
                  <Button variant="success" style={{ marginLeft: "10px" }}>
                    <i class="fa-solid fa-plus"></i>
                  </Button>
                </div>
              </div>
              <div className="fields__info">
                <div className="fields__list">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Tên tác giả</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td><Button variant="danger">Xóa</Button></td>
                        <td><Button variant="success">Sửa</Button></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAuthorComponent;
