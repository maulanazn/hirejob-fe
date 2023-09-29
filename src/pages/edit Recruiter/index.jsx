import React, { Fragment, useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "./editReqruiter.css";
import { CiLocationOn } from "react-icons/ci";
import recruiter from "../../assets/images/imgrecruiter.png";
import { BsPencilFill } from "react-icons/bs";
import NavBar from "../../component/navbar";
import Footer from "../../component/footer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRecBioAction } from "../../redux/actions/bioRecActions";

const Index = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState([]);
  const [userData, setUserData] = useState({
    company_name: "",
    company_field: "",
    province: "",
    city: "",
    company_info: "",
    email: "",
    company_email: "",
    company_phone: "",
    linkedin_url: "",
    photo: ""
  });

  useEffect(() => {
    setUserData({
      ...inputData,
      company_name: userData.company_name,
      company_field: userData.company_field,
      province: userData.province,
      city: userData.city,
      company_info: userData.company_info,
      email: userData.email,
      company_email: userData.company_email,
      company_phone: userData.company_phone,
      linkedin_url: userData.linkedin_url,
      photo: userData.photo
    });
  }, [data]);

  const putRecruiter = async (event) => {
    event.preventDefault();
    let bodyIndex = new FormData();
    bodyIndex.append("company_name", userData.company_name);
    bodyIndex.append("company_field", userData.company_field);
    bodyIndex.append("province", userData.province);
    bodyIndex.append("city", userData.city);
    bodyIndex.append("company_info", userData.company_info);
    bodyIndex.append("email", userData.email);
    bodyIndex.append("company_email", userData.company_email);
    bodyIndex.append("phone", userData.phone);
    bodyIndex.append("linkedin_url", userData.linkedin_url);
    bodyIndex.append("photo", userData.photo);

    dispatch(updateRecBioAction(bodyIndex));
  };
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <NavBar />
      <div
        style={{ height: "280px", backgroundColor: " #5E50A1" }}
        className="W-100 position-relative"
      ></div>

      <div className="position-absolute w-100" style={{ top: "100px" }}>
        <Container className="my-5">
          <Row>
            <Col md={4}>
              {/* Di gabung sama form */}
              <div className="rounded p-3" style={{ backgroundColor: "white" }}>
                <div className="d-flex justify-content-center">
                  <label
                    htmlFor="addImage"
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column"
                  >
                    <img
                      className="picture"
                      src={data?.data?.photo || recruiter}
                      value={userData?.photo}
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
                  <h4> {data?.user_name} </h4>
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
                  onClick={putRecruiter}
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
                <form onSubmit={putRecruiter} encType="multipart/form-data">
                  <div className="mt-4">
                    <Form.Label>Nama Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Nama Perusahaan"
                      defaultValue={inputData.company_name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Bidang</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Provinsi"
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Kota"
                      onChange={handleInput}
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
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan email"
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Email Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan email Perusahaan"
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan nomor telepon"
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan nama Linkedin"
                      onChange={handleInput}
                    />
                  </div>
                  <button
                    style={{ backgroundColor: " #5E50A1" }}
                    className=" text-white border border-0 w-100 p-2 fw-bold rounded my-4 "
                    type="submit"
                  >
                    {" "}
                    Simpan
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Index;
