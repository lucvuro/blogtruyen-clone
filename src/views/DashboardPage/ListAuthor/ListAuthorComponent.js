import { Form, Button } from "react-bootstrap";
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
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Tac gia 1</td>
                        <td>Otto</td>
                      </tr>
                      <tr>
                        <td>Jacob Jacob Jacob Jacob Jacob Jacob </td>
                        <td>Thornton</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                      </tr>
                    </tbody>
                  </table>
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
