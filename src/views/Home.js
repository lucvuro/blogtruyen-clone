import { Container, Row, Col } from "react-bootstrap";
import './Home.scss'
import BannerComponent from "../components/BannerComponent";
const Home = () => {
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
        </Container>
    )
}
export default Home