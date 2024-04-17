import React, { useState } from "react";
import NavBar from "../component/navbar";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Layout = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="bg-white shadow-sm d-flex align-items-center justify-content-between py-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            <Link to="/home" className="text-decoration-none "><h1 className="h4 fw-bold"><i className="text-danger bi bi-film me-1"></i> <span className="text-dark">Movie App</span></h1></Link>
            </div>
            <div className="col-auto ms-auto">
              <Button
                variant="primary"
                onClick={() => setShow(true)}
                className=" d-lg-none d-inline-block"
              >
               <i className={`bi bi-${show ? 'x':'list'}`}/>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12">
            <aside className="sticky-top" style={{borderRight: '1px solid #f1f1f1'}}>
              <NavBar
                offCanvasShow={show}
                offCanvasHide={() => setShow(false)}
              />
            </aside>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
