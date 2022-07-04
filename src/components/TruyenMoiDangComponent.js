import { useState } from "react"
import { Row, Col } from 'react-bootstrap'
import './TruyenMoiDangComponent.scss'
const TruyenMoiDangComponent = () => {
    const [showsideBar, setshowsideBar] = useState(true)
    return (
        <>
            <div className="sidebar-new-tieude" style={{ backgroundColor: "#0f0" }}>
                <span className="tieude">Truyện mới đăng</span>
                <span className='pull-right icon' onClick={() => setshowsideBar(!showsideBar)}><i class={showsideBar ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i></span>
            </div>
            {showsideBar && <div className="sidebar-new-content mt-3">
                <Row>
                    <Col md="4">
                        <img className="img-thumbnail image-truyen" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                    </Col>
                    <Col md="4">
                        <img className="img-thumbnail image-truyen" src="https://i7.xem-truyen.com/manga/30/30600/601f31b5-154a-4fd1-adf0-8c068795f0d5.thumb_500x.png" />
                    </Col>
                    <Col md="4">
                        <img className="img-thumbnail image-truyen" src="https://i7.xem-truyen.com/manga/19/19736/biatruyen.thumb_500x.jpg" />
                    </Col>
                    <Col md="4">
                        <img className="img-thumbnail image-truyen" src="https://i7.xem-truyen.com/manga/30/30605/004.thumb_500x.jpg" />
                    </Col>
                </Row>
            </div>}
        </>
    )
}
export default TruyenMoiDangComponent