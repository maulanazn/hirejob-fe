import React, { Fragment } from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "./editCandidate.css";
import { CiLocationOn } from "react-icons/ci";
import Candidate from "../../images/imgrecruiter.png";
import { BsPencilFill } from "react-icons/bs";
import NavBar from "../../../component/navbar";
import Footer from "../../../component/footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    nama_lengkap: "",
    jobdesk: "",
    Domisili: "",
    Tempat_kerja: "",
    deskripsi_singkat: "",
    email: "",
   skill: "",
    nomor_telpon: "",
    linkedin: "",
  });

  return (
    <Fragment>
      <NavBar/>
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
                    src={Candidate}
                    alt=""
                    width={150}
                    height={150}
                  />

                  <div className="d-flex text-center justify-content-center gap-2 mt-2">
                    <BsPencilFill size={18} />
                    <p className="m-0 fw-bold">Edit</p>
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
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan nama lengkap"
                  />
                </div>
                <div className="mt-4">
                  <Form.Label>Job desk</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan job desk"
                  />
                </div>
                <div className="mt-4">
                  <Form.Label>Domisili</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan domisili"
                  />
                </div>
                <div className="mt-4">
                  <Form.Label>Tempat kerja</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan tempat kerja"
                  />
                </div>
                <div className="mb-3">
                  <Form.Label>Deskripsi Singkat</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Masukan Deskripsi Pekerjaan"
                    style={{ height: "200px" }}
                    className="form-focus"
                  />
                </div>
              </form>
              <button
                  style={{
                    backgroundColor: "white",
                    borderColor: "#FBB017",
                    color: "#FBB017",
                  }}
                  className=" w-100 p-2 fw-bold rounded mt-3 "
                >
                  Simpan
                </button>{" "}
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="mt-5 p-5 rounded"
            >
               
              <h2 className="fw-bold">Skill</h2>
              <hr />
              <div className="mt-4 d-flex gap-4">
                <Form.Control
                  className="w-75"
                  type="text"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Masukan Skill anda"
                />
                <button className="bg-warning rounded border border-0 text-white fw-bold ">
                  Simpan
                </button>
              </div>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="p-5 mt-5 rounded"
            >
              <h2>Pengalaman Kerja</h2>
              <hr />
              <div className="mt-4">
                <Form.Label style={{ color: "#858D96" }}>Posisi</Form.Label>
                <Form.Control
                  type="text"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Web Developer"
                />
                <div>
                  <Row>
                    <Col md={4}>
                      <div className="mt-4">
                        <Form.Label style={{ color: "#858D96" }}>
                          Masukan Nama Perusahaan
                        </Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          placeholder=" Nama Perusahaan"
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mt-4">
                        <Form.Label style={{ color: "#858D96" }}>
                          Dari bulan/tahun
                        </Form.Label>
                        <Form.Control
                          type="date"
                          aria-describedby="passwordHelpBlock"
                          placeholder="Januari 2019"
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="mt-4">
                        <Form.Label style={{ color: "#858D96" }}>
                          Sampai bulan/tahun
                        </Form.Label>
                        <Form.Control
                          type="date"
                          aria-describedby="passwordHelpBlock"
                          placeholder="Masukan tempat kerja"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="my-3">
                  <Form.Label>Deskripsi Singkat</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Masukan Deskripsi Pekerjaan"
                    style={{ height: "200px" }}
                    className="form-focus"
                  />
                </div>
                <button
                  style={{
                    backgroundColor: "white",
                    borderColor: "#FBB017",
                    color: "#FBB017",
                  }}
                  className=" w-100 p-2 fw-bold rounded mt-3 "
                >
                  Tambah Pengalaman Kerja
                </button>{" "}
              </div>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="p-5 mt-5 rounded"
            >
              <h2>Portofolio</h2>
              <div className="mt-4">
                <Form.Label>Nama aplikasi</Form.Label>
                <Form.Control
                  type="text"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Masukan nama aplikasi"
                />
              </div>
              <div className="mt-4">
                <Form.Label>Link Repository</Form.Label>
                <Form.Control
                  type="text"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Masukan Link repository"
                />
              </div>
              <div className="d-flex gap-5 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Aplikasi mobile
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Aplikasi web
                  </label>
                </div>
              </div>
                <Form.Control
                className="my-5"
                  type="file"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Masukan tempat kerja"
                />

              <button
                  style={{
                    backgroundColor: "white",
                    borderColor: "#FBB017",
                    color: "#FBB017",
                  }}
                  className=" w-100 p-2 fw-bold rounded mt-3 "
                >
                  Tambah Portofolio
                </button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Fragment>
  );
};
export default Index;
