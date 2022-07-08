import BannerComponent from "../components/BannerComponent"
import TruyenHayComponent from "../components/TruyenHayComponent"
import TruyenMoiDangComponent from "../components/TruyenMoiDangComponent"
import { Container, Row, Col } from 'react-bootstrap'
import "./TruyenPage.scss"
import { useState } from "react"
import SideBarComponent from "../components/SideBarComponent"
const TruyenPage = () => {
    const [isSorted, setisSorted] = useState(false)
    return (
        <Container className="homepage">
            <Row>
                <BannerComponent />
            </Row>
            <Row class="mt-5">
                <Col className="mt-3" md="8">
                    <div className="truyen-info">
                        <Row>
                            <div className="tieude">
                                DETECTIVE CONAN
                            </div>
                        </Row>
                        <Row >
                            <Col md="12">
                                <div className="thumb">
                                    <img className="image-truyen" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="sumary">
                                    <div className="title">
                                        SƠ LƯỢC
                                    </div>
                                    <div className="content">
                                        <p>
                                            Một bộ truyện gối đầu giường và gắn bó với biết bao thế hệ. Mình sẽ tổng hợp lại truyện ở nhiều nguồn và up lại Full truyện.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="description">
                                    <p><span>Tên khác: </span><span style={{ color: "red" }}>Thám tử lừng danh conan</span> </p>
                                    <p>
                                        <span> Tác giả: </span>
                                        <span className="label bg-success text-info">Gosho Aoyama</span>
                                    </p>
                                    <p >
                                        <span> Nguồn: </span>
                                        <span className="label bg-danger text-info">Gosho Aoyama</span>
                                    </p>
                                    <p>
                                        <span> Thể loại: </span>
                                        <span><a className="category" href="#">Gosho Aoyama</a></span>
                                    </p>
                                    <p>
                                        <span> Đăng bởi: </span>
                                        <span><a className="text-info" href="#">Gosho Aoyama</a></span>
                                        <span> Trạng thái: </span>
                                        <span style={{ color: "red" }}>Đang tiến hành</span>
                                    </p>
                                    <p>
                                        <span>Số lượt xem: </span>
                                        <span style={{ color: "#f0f" }}> 223119</span>
                                        <span> Theo dõi: </span>
                                        <span style={{ color: "#f0f" }}> 60</span>
                                    </p>
                                </div>
                                <hr />
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="list-chapters">
                                    <div className="title">
                                        TỔNG HỢP (313 CHƯƠNG)
                                        <span className="pull-right icon" onClick={() => setisSorted(!isSorted)}><i class={isSorted ? "fa-solid fa-arrow-down-a-z" : "fa-solid fa-arrow-up-a-z"}></i></span>
                                    </div>
                                    <div className="chapters">
                                        <Row style={{ padding: "5px 0" }}>
                                            <Col md="8">
                                                <span>Tên chương</span>
                                            </Col>
                                            <Col md="4">
                                                <span>Ngày đăng</span>
                                            </Col>
                                        </Row>
                                        <div className="list-wrap">
                                            <Row className="item">
                                                <Col md="8">
                                                    <span style={{ color: "#02770c" }}>Detective Conan File 313: Quyết Định Dũng Cảm</span>
                                                </Col>
                                                <Col md="4">
                                                    <span> 07/09/2019 08:25 </span>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className="related-item">
                            <div className="title">
                                <span>CÁC TRUYỆN CÙNG NGƯỜI ĐĂNG</span>
                            </div>
                            <div className="related-item-list">
                                <Row>
                                    <Col md="3" xs="4">
                                        <img className="img-thumbnail image-related" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                    </Col>
                                    <Col md="3" xs="4">
                                        <img className="img-thumbnail image-related" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                    </Col>
                                    <Col md="3" xs="4">
                                        <img className="img-thumbnail image-related" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                    </Col>
                                    <Col md="3" xs="4">
                                        <img className="img-thumbnail image-related" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="mt-3" md="4">
                    <SideBarComponent/>
                </Col>
            </Row>
        </Container>
    )
}
export default TruyenPage