import { useEffect, useContext, useState } from "react";
import { Form, Button, Table, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ListAuthorComponent = (props) => {
  const { user, listAuthors } = props;
  const [showAddModal, setShowAddModal] = useState(false);
  const handleCloseAddModal = () => setShowAddModal(false);
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  const handleDelete = (item) => {
    console.log(item);
  };
  return (
    <>
      {/*Login modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>TRUYENCC.VN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Nhập tác giả cần tìm..." />
          <Button
            variant="success"
            style={{ marginTop: "10px", textAlign: "center" }}
            onClick={() => setShowAddModal(true)}
          >
            Add
          </Button>
        </Modal.Body>
      </Modal>
      {/*Login modal */}
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
                  <Button
                    variant="success"
                    style={{ marginLeft: "10px" }}
                    onClick={() => setShowAddModal(true)}
                  >
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
                      {listAuthors.map((item, index) => {
                        return (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                              <Button
                                variant="danger"
                                onClick={() => handleDelete(item)}
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
