import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

export const ViewDetailsModal = ({ show, onHide }) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMoviesDetails();
  }, [show.emdId]);

  const getMoviesDetails = () => {
    axios
      .get(`http://www.omdbapi.com/?i=${show.emdId}&apikey=aab08961`)
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show.show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-danger text-center">
        <i className="bi bi-film me-2"></i>
          Movie Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row gy-4">
          <div class="col-12">
            <div className="img_area text-center">
              <img
                height={100}
                src={movieDetail.Poster}
                className="img-fluid rounded mx-auto"
                alt={movieDetail.Poster}
              />
            </div>
            <div className="content mt-4">
              <h5 className="mb-4 fw-bold ">
                {movieDetail.Title}({movieDetail.Year})
              </h5>
              <Table striped borderless size="sm">
                <tbody>
                  <tr>
                    <td className="fw-bold">Genre:</td>
                    <td>{movieDetail.Genre}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Cast:</td>
                    <td>{movieDetail.Actors}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Duration:</td>
                    <td>{movieDetail.Runtime}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Writer & Director:</td>
                    <td>{movieDetail.Director}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Plot:</td>
                    <td>{movieDetail.Plot}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
