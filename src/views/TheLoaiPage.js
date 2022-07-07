import { Container, Row, Col } from "react-bootstrap"
import BannerComponent from "../components/BannerComponent";
import TruyenHayComponent from "../components/TruyenHayComponent";
import TruyenMoiDangComponent from "../components/TruyenMoiDangComponent";
const TheLoaiPage = () => {
    return (
        <>
            <Container className="homepage">
                <Row>
                    <BannerComponent />
                </Row>
                <Row class="mt-5">
                    <Col className="mt-3" md="8">
                        cac
                    </Col>
                    <Col className="mt-3" md="4">
                        <div className="toplist-sidebar">
                            <TruyenHayComponent />
                        </div>
                        <div className="newlist-sidebar mt-3">
                            <TruyenMoiDangComponent />
                        </div>
                        <div className="binhluan-sidebar mt-3">

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TheLoaiPage;