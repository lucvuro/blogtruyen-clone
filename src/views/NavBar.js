import { queryAllByAltText } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavItem, InputGroup, FormControl, Button, NavDropdown } from "react-bootstrap";
import './Nav.scss'
const NavBar = () => {
    const [suggestions, setSuggestions] = useState([])
    const [suggestionIsActive, setsuggestionIsActive] = useState(false)
    const [suggestionIndex, setSuggestionIndex] = useState(0)
    const [value, setValue] = useState('')

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {
        let query = value.toLowerCase()
        if (query.length >= 1) {
            let filterSuggestions = suggestions.map((suggestion) => suggestion.toLowerCase().indexOf(query) > -1)
            setSuggestions(filterSuggestions)
            setsuggestionIsActive(true)
        } else {
            setsuggestionIsActive(false)
        }
    }, [value])
    return (<>
        <Navbar collapseOnSelect expand="lg">
            <Container fluid="sm">
                <Navbar.Brand >TRUYENCC.VN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Đăng nhập</Nav.Link>
                        <Nav.Link href="/">Đăng ký</Nav.Link>
                        <Nav.Link href="/">List truyện</Nav.Link>
                        <NavDropdown title="Liên hệ">
                            <NavDropdown.Item href="/">Liên hệ quảng cáo</NavDropdown.Item>
                            <NavDropdown.Item href="/">RSS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <InputGroup size="sm">
                        <FormControl
                            placeholder="Nhập tên truyện..."
                            aria-label="Nhập tên truyện..."
                            aria-describedby="input_timkiem"
                            value={value}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <Button className="ml-3">Tìm</Button>
                    </InputGroup>
                    {suggestionIsActive && <div className="autocomplete">
                        {suggestions.map((item, index) => {
                            return (
                                <div className="autocomplete-item" key={index}>
                                    {item.name}
                                </div>
                            )
                        })}


                    </div>}
                </Nav>
            </Container>
        </Navbar>
    </>
    )
}
export default NavBar;