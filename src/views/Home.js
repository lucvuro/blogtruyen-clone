import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react'
import './Home.scss'
import BannerComponent from "../components/BannerComponent";
import TruyenHayComponent from "../components/TruyenHayComponent";
import TruyenMoiDangComponent from "../components/TruyenMoiDangComponent";
import SideBarComponent from "../components/SideBarComponent";
const Home = () => {
    const [isListType, setListType] = useState(true)
    return (
        <Container className="homepage">
            <Row>
                <BannerComponent />
            </Row>
            <Row className="mt-5">
                <div>
                    <div className="tieudiem ">
                        <Col md="12" xs="12"><h3>TIÊU ĐIỂM TRUYỆN HÔM NAY</h3></Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                        <Col md="2" xs="3" className="tieudiem-item">
                            <img className="img-thumbnail" src="https://i7.xem-truyen.com/manga/22/22969/01.thumb_300x300.jpg" />
                        </Col>
                    </div>
                </div>
            </Row>
            <Row>
                <Col className="mt-3" md="8">
                    <div className="listtruyen-container">
                        <div className="type">
                            <span className={isListType ? "pull-right icon active" : "pull-right icon"}
                                style={{ margin: "7px" }}
                                onClick={() => setListType(true)}>
                                <i className="fa-solid fa-list"></i>
                            </span>
                            <span className={isListType ? "pull-right icon" : "pull-right icon active"}
                                style={{ margin: "7px" }}
                                onClick={() => setListType(false)}>
                                <i className="fa-solid fa-border-all"></i>
                            </span>
                        </div>
                        {isListType && <div className="listtruyen mt-3">
                            <div className="listtruyen-list">
                                <div className="truyen">
                                    <Container>
                                        <Row>
                                            <Col md="4" xs="12">
                                                <img className="img-thumbnail story-img mt-3" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                            </Col>
                                            <Col md="8" xs="12">
                                                <div className="story-tieude mt-2">
                                                    <h6>DETECTIVE CONAN</h6>
                                                </div>
                                                <div className="story-noidung">
                                                    <p>Bạn muốn vượt qua kẻ ác để thoát khỏi cái chết một cách bình thường, nhưng tại sao nam chính và nữ chính lại cãi nhau? Đối tượng mà họ giành được có phải là tôi không? Tình địch quái gở lại tăng thêm rồi!     </p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className="truyen-footer">
                                                <Container>
                                                    <Row className="mt-3">
                                                        <Col md="3">
                                                            Tac gia
                                                        </Col>
                                                        <Col md="3">
                                                            03/07/2022 23:44
                                                        </Col>
                                                        <Col md="3">
                                                            105 chuong
                                                        </Col>
                                                        <Col md="3">
                                                            So binh luan
                                                        </Col>
                                                    </Row>
                                                    <Row className="mt-3">
                                                        <Col md="12">
                                                            Action Adventure Manhwa Shounen Fantasy
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            <div className="listtruyen-grid">

                            </div>
                        </div>}
                        {!isListType && <div className="grid-truyen mt-3">
                            <div className="gridtruyen-list">
                                <Container>
                                    <Row>
                                        <Col md="6">
                                            <div className="truyen mt-3">
                                                <Row>
                                                    <Col md="3">
                                                        <img className="img-thumbnail story-img" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                                    </Col>
                                                    <Col md="9">
                                                        <div className="story-tieude">
                                                            DETECTIVE CONAN
                                                        </div>
                                                        <div>Thoi gian</div>
                                                        <div>Luot xem</div>
                                                        <div>1 chuong - 0 binh luan</div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </Container>
                            </div>
                        </div>}

                    </div>
                </Col>
                <Col className="mt-3" md="4">
                    <SideBarComponent/>
                </Col>
            </Row>
        </Container>
    )
}
export default Home