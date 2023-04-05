import {
    FaBookReader,
} from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";

function Homepagebar({ children }) {

    const menuItem = [
        {
            path: "/book",
            name: "Book List",
            icon: <FaBookReader />
        }
    ]
    return (
        <div className="sid-container">

            <div className="sidebar">
                <div className="top_section">
                    <div className="icon"><FaBookReader /></div>
                    <div className="link d-none d-sm-inline">BOOK </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-deactron" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="ms-3 d-none d-sm-inline">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>
                <NavScrollExample />
                {children}
                <Footer />
            </main>

        </div>
    );
};

export default Homepagebar;

function NavScrollExample() {
    const history = useHistory()
    return (
        <div>
            <Navbar className="nav-clr" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="title">Ragullibrary</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <button class="btn btn-outline-warning me-2" type="button" onClick={() => history.push("/")}>Home</button>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button class="btn btn-outline-warning me-2">Search</Button>
                        </Form>
                        <button class="btn btn-outline-warning me-2" type="button" onClick={() => history.push("/login")}>Login</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

function Footer() {
    return (
        <div>
            <footer>
                contact us
                <div>email : Ragullibrary23@gmail.com</div>
                <div>phone : 9788652355</div>
            </footer>
        </div>
    )
}