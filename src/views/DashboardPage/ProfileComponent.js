import { Container, Col, Row, Button } from "react-bootstrap";
import "./ProfileComponent.scss";
const ProfileComponent = (props) => {
  const { user } = props;
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Profile of {user.username} </h1>
          </div>
          <div className="card-body">
            <Container>
              <div className="profile-container">
                <Row>
                  <Col md="6" className="avatar">
                    <div>
                      <img
                        className="img-thumbnail image"
                        src="https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg"
                        alt="avatar"
                      />
                    </div>
                    <Button variant="success" className="mt-3">Change Avatar</Button>
                  </Col>
                  <Col md="6" className="info">
                  <div className="item">
                      ID:{" "}
                      <span style={{ color: "red" }}>{user._id}</span>
                    </div>
                    <div className="item">
                      Username:{" "}
                      <span style={{ color: "red" }}>{user.username}</span>
                    </div>
                    <div className="item">
                      Email:{" "}
                      <span style={{ color: "red" }}>lucvuro@gmail.com</span>
                    </div>
                    <div className="item">
                      Số điện thoại:{" "}
                      <span style={{ color: "red" }}>0924352419</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
