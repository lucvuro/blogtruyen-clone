import { Navbar, Container, Nav, Row, Col,NavDropdown } from 'react-bootstrap'
import './BannerComponent.scss'
const BannerComponent = () => {
    return (
        <div className="banner">
            <img className="img-fluid mt-3" src="https://4.bp.blogspot.com/-0sEMrAZhKBE/WJ2lW-CwYKI/AAAAAAABOsk/85xbHPtisJE/s0/" />
            <Navbar collapseOnSelect expand="lg" className="banner-navbar mt-3">
                <Container fluid="sm">
                    <Navbar.Toggle aria-controls="responsive-navbar-banner" />
                    <Navbar.Collapse id="responsive-navbar-banner">
                        <Nav className="navbar-navv">
                            <Nav.Link className="item" href="/">Tìm nâng cao</Nav.Link>
                            <Nav.Link className="item" href="/">Mini Forum</Nav.Link>
                            {/* <Nav.Link className="item" href="/">Thể loại</Nav.Link> */}
                            <NavDropdown className="dropdown" title="Thể loại">
                                <NavDropdown.Item href="/">Liên hệ quảng cáo</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                                <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="item" href="/">Đủ bộ</Nav.Link>
                            <Nav.Link className="item" href="/">Hướng dẫn</Nav.Link>
                        </Nav>
                        <Nav className="navbar-navv ms-auto">
                            <Nav.Link className="item" href="/">Mini game</Nav.Link>
                            <Nav.Link className="item" href="/">Tin game</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default BannerComponent