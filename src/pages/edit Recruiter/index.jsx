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
import { useDispatch, useSelector } from "react-redux";
import { updateRecBioAction } from "../../redux/actions/bioRecActions";
import { getUserRecById } from "../../redux/actions/userAction";

const Index = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.user_rec);
  const [photo, setPhoto] = useState([]);
  const [userData, setUserData] = useState({
    photo: "",
    company_name: "",
    company_field: "",
    province: "",
    city: "",
    company_info: "",
    company_email: "",
    company_phone: "",
    linkedin_url: "",
  });

  useEffect(() => {
    dispatch(getUserRecById());
  }, [])

  useEffect(() => {
    data && setUserData({
      ...userData,
      company_name: data?.data?.company_name,
      company_field: data?.data?.company_field,
      province: data?.data?.province,
      city: data?.data?.city,
      company_info: data?.data?.company_info,
      company_email: data?.data?.company_email,
      company_phone: data?.data?.company_phone,
      linkedin_url: data?.data?.linkedin_url,
      photo: data?.data?.photo,
    });
  }, [data]);

  // put the data into action
  const putRecruiter = async (event) => {
    event.preventDefault();
    let bodyIndex = new FormData();
    bodyIndex.append("photo", photo);
    bodyIndex.append("company_name", userData.company_name);
    bodyIndex.append("company_field", userData.company_field);
    bodyIndex.append("province", userData.province);
    bodyIndex.append("city", userData.city);
    bodyIndex.append("company_info", userData.company_info);
    bodyIndex.append("company_email", userData.company_email);
    bodyIndex.append("company_phone", userData.company_phone);
    bodyIndex.append("linkedin_url", userData.linkedin_url);
    
    dispatch(updateRecBioAction(bodyIndex));
  };

  // change the value after each typing
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]:e.target.value });
  };

  const onPhotoChange = (e) => {
    setPhoto(e.target.files[0])
    e.target.files[0] && setUserData({...userData, photo: URL.createObjectURL(e.target.files[0])})
  }

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
              <div className="rounded p-3" style={{ backgroundColor: "white" }}>
                <div className="d-flex justify-content-center">
                  <label
                    htmlFor="addImage"
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column"
                  >
                    <img
                      className="picture"
                      src={userData?.photo || recruiter}
                      alt={userData?.company_name}
                      width={150}
                      height={150}
                    />
                    <div className="d-flex text-center justify-content-center gap-2 mt-2">
                      <BsPencilFill size={18} />
                      <p className="m-0">Edit</p>
                    </div>
                  </label>
                  <span>
                    <input onChange={onPhotoChange} name="photo" className="input-edit" defaultValue={userData?.photo} type="file" id="addImage" />
                  </span>
                </div>
                <div>
                  <h4> {userData?.company_name || 'Fill your company name'}  </h4>
                  <h6>{userData?.company_field || 'Fill your field'}</h6>
                  <div className="d-flex mt-">
                    <CiLocationOn size={20} />
                    <p>{userData?.province || 'Your province'}, {userData?.city || 'Your city'}</p>
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
                <form encType="multipart/form-data">
                  <div className="mt-4">
                    <Form.Label>Nama Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      name="company_name"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Nama Perusahaan"
                      defaultValue={userData?.company_name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Bidang</Form.Label>
                    <Form.Control
                      type="text"
                      name="company_field"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      defaultValue={userData?.company_field}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control
                      type="text"
                      name="province"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Provinsi"
                      defaultValue={userData?.province}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Kota"
                      defaultValue={userData?.city}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mb-3 mt-4">
                    <Form.Label>Deskripsi Singkat</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="company_info"
                      rows={5}
                      placeholder="Masukan Deskripsi Pekerjaan"
                      style={{ height: "200px" }}
                      className="form-focus"
                      defaultValue={userData?.company_info}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Email Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      name="company_email"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan email Perusahaan"
                      defaultValue={userData?.company_email}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      name="company_phone"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan nomor telepon"
                      defaultValue={userData?.company_phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mt-4">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      type="text"
                      name="linkedin_url"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan nama Linkedin"
                      defaultValue={userData?.linkedin_url}
                      onChange={handleInput}
                    />
                  </div>
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
