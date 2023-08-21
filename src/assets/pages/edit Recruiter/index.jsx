import React, { Fragment } from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "./editReqruiter.css";
import { CiLocationOn } from "react-icons/ci";
import recruiter from "../../images/imgrecruiter.png";
import { BsPencilFill } from "react-icons/bs";
const Index = () => {
  return (
    <Fragment>
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <div className="rounded p-3" style={{ backgroundColor: "white" }}>
              <div className="d-flex justify-content-center">
                <label
                  htmlFor="addImage"
                  style={{ cursor: "pointer" }}
                  className="d-flex flex-column"
                >
                  <img
                    className="picture"
                    src={recruiter}
                    alt=""
                    width={150}
                    height={150}
                  />
                  <div className="d-flex text-center justify-content-center gap-2 mt-2">
                    <BsPencilFill size={18} />
                    <p className="m-0">Edit</p>
                  </div>
                </label>
                <span>
                  <input className="input-edit" type="file" id="addImage" />
                </span>
              </div>
              <div>
                <h4> PT Mencari Pintu Taubat </h4>
                <h6>Financial</h6>
                <div className="d-flex mt-">
                  <CiLocationOn size={20} />
                  <p>Purwokerto, Jawa Tengah</p>
                </div>
              </div>
            </div>
            <div className="my-3">
              <button
                style={{ backgroundColor: " #5E50A1" }}
                className=" text-white border border-0 w-100 p-2 fw-bold rounded  "
              >
                {" "}
                Simpan
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  borderColor: "#5E50A1",
                  color: "#5e50a1",
                }}
                className=" w-100 p-2 fw-bold rounded mt-3"
              >
                Batal
              </button>
            </div>
          </Col>
          <Col md={8}>
            <div style={{ backgroundColor: "white" }} className="p-5 rounded">
              <h2 className="fw-bold"> Data diri</h2>
              <hr />
              <form>
                <div className="mt-4">
                  <Form.Label>Nama Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan Nama Perusahaan"
                  />
                </div>
                <div className="mt-4">
                  <Form.Label>Bidang</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                  />
                </div>
                <div className="mt-4">
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan Provinsi"
                  />
                </div>

                <div className="mt-4">
                  <Form.Label>Kota</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan Kota"
                  />
                </div>

                <div className="mb-3 mt-4">
                    <Form.Label>Deskripsi Singkat</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Masukan Deskripsi Pekerjaan"
                      style={{ height: "200px" }}
                      className="form-focus"
                    />
                  </div>

                <div className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan email"
                  />
                </div>

                <div className="mt-4">
                  <Form.Label>Email Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan email Perusahaan"
                  />
                </div>

                <div className="mt-4">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan nomor telepon"
                  />
                </div>

                <div className="mt-4">
                  <Form.Label>Linkedin</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan nama Linkedin"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Index;
