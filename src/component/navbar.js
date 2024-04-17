import { Dropdown, Nav, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ offCanvasShow, offCanvasHide }) => {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userdetails"));

  const handleLogout = () => {
    localStorage.removeItem("userdetails");
    navigate("/");
  };

  const navList = [
    {
      title: "Home",
      path: "/home",
      icon:"house"
    },
    {
      title: "Watchlists",
      path: "/watchlist",
      icon:"heart"
    },
  ];
  
  return (
    <Offcanvas show={offCanvasShow} onHide={offCanvasHide} responsive="lg">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h1 className="h4 fw-bold"><i className="text-danger bi bi-film me-1"></i> <span className="text-dark">Movie App</span></h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="text-white py-3 pe-3 w-100 ">
          <Nav variant="pills" className="top_navbar flex-column gap-2">
            {navList.map((nav, idx) => (
              <Nav.Item key={idx} className="border-1  rounded-1 ">
                <Nav.Link
                  as={NavLink}
                  to= {nav.path}
                  className={({ isActive }) =>
                    isActive ? "bg-danger text-white" : "" 
                  }
                  onClick={offCanvasHide}
                >
                  <i className={`bi bi-${nav.icon} me-1`} />
                  {nav.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <div className="position-absolute bottom-0 start-0  end-0 mt-auto">
            <div className="d-grid profile">
              <Dropdown align="end" className="pe-3">
                <Dropdown.Toggle  variant="light" className="border-4 m-4 text-center w-75 " size="sm" id="dropdown-basic">
                  {user}
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-1 shadow-sm p-2">
                  <Dropdown.Item onClick={handleLogout} className="fw-medium">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default NavBar;
