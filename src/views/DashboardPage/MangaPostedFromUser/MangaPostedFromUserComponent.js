import { useEffect, useContext, useState } from "react";
import { Form, Button, Table, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link , useRouteMatch} from "react-router-dom";
const MangaPostedFromUserComponent = (props) => {
  const { listMangaFromUser} = props
  const {path} = useRouteMatch()
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Danh sách truyện đã đăng</h1>
          </div>
          <div className="card-body">
            <div className="fields">
              <div className="fields__info">
                <div className="fields__inputs">
                  <Form.Control
                    type="text"
                    placeholder="Nhập truyện cần tìm..."
                  />
                </div>
              </div>
              <div className="fields__info">
                <div className="fields__list">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Tên truyện</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listMangaFromUser?.map((item, index) => {
                        return (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td><Link to={`${path}/${item._id}`}>{item.name}</Link></td>
                            <td>
                              <Button
                                variant="danger"
                                onClick={() => {}}
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

export default MangaPostedFromUserComponent;
