import { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./editCandidate.css";
import { CiLocationOn } from "react-icons/ci";
import { BsPencilFill } from "react-icons/bs";
import NavBar from "../../component/navbar";
import Footer from "../../component/footer";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {updateCandidateBioAction} from "../../redux/actions/bioActions";
import { getUserById } from "../../redux/actions/userAction";
import WorkExpView from "./WorkExpView";
import PortfolioView from "./PortfolioView";

const Index = () => {
  const { id } = useParams();
  const data = useSelector(state => state.user.data)
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState([]);
  const [userData, setUserData] = useState({
    photo: "",
    name: "",
    domicile: "",
    last_work: "",
    position: "",
    description: "",
    skill_name: "",
  });
  
  useEffect(() => {
    dispatch(getUserById())
  }, [])

  useEffect(() => {
    data && setUserData({
      ...userData,
      photo: data?.data?.photo,
      name: data?.data?.name,
      domicile: data?.data?.domicile,
      last_work: data?.data?.last_work,
      position: data?.data?.position,
      description: data?.data?.description,
      skill_name: data?.data?.skill_name,
    })
  }, [data])

  const putCandidate = async () => {
    let bodyIndex = new FormData();

    bodyIndex.append("photo", photo);
    bodyIndex.append("name", userData.name);
    bodyIndex.append("domicile", userData.domicile);
    bodyIndex.append("last_work", userData.last_work);
    bodyIndex.append("position", userData.position);
    bodyIndex.append("description", userData.description);
    bodyIndex.append("skill_name", userData.skill_name);

    dispatch(updateCandidateBioAction(bodyIndex));
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  function setOnPhoto(e) {
    setPhoto(e.target.files[0])
    e.target.files[0] && setUserData({...userData, photo: URL.createObjectURL(e.target.files[0])})
  }

  return (
    <Fragment>
      <NavBar />
      <div
        style={{ height: "280px", backgroundColor: " #5E50A1" }}
        className="W-100 position-relative"> </div>
        <div className="position-absolute w-100" style={{ top: "200px" }}>

        {/*  FORM USER EDIT */}
        <Container className="">
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
                      src={userData?.photo || ''}
                      alt={userData?.name}
                      width={150}
                      height={150}
                    />

                    <div className="d-flex text-center justify-content-center gap-2 mt-2">
                      <BsPencilFill size={18} />
                      <p className="m-0 fw-bold">Edit</p>
                    </div>
                  </label>
                  <span>
                    <input className="input-edit" name="photo" onChange={setOnPhoto} defaultValue={userData?.photo} type="file" id="addImage" />
                  </span>
                </div>
                <div>
                  <h4> {userData?.name || 'Microsoft'} </h4>
                  <h6>{userData?.position || 'Financial'}</h6>
                  <div className="d-flex mt-">
                    <CiLocationOn size={20} />
                    <p>{userData?.domicile || 'World'}</p>
                  </div>
                  <div className="my-3">
                <button
                  onClick={putCandidate}
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
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div style={{ backgroundColor: "white" }} className="p-5 rounded">
                <h2 className="fw-bold"> Data diri</h2>
                <hr />
                <form encType="multipart/form-data">
                  <div className="mt-4">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={userData?.name}
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan nama lengkap"
                      name="name"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Job desk</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan job desk"
                      defaultValue={userData?.position}
                      name="position"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4 my-3">
                    <Form.Label>Domisili</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan domisili"
                      defaultValue={userData?.domicile}
                      name="domicile"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4 my-3">
                    <Form.Label>Tempat kerja</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan tempat kerja"
                      defaultValue={userData?.last_work}
                      name="last_work"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-3 my-3">
                    <Form.Label>Deskripsi Singkat</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Masukan Deskripsi Pekerjaan"
                      style={{ height: "200px" }}
                      className="form-focus"
                      defaultValue={userData?.description}
                      name="description"
                      onChange={handleInput}
                    />
                  </div>
                </form>
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
                    defaultValue={userData?.skill_name}
                    name="skill_name"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan Skill anda"
                    onChange={handleInput}
                  />
                  <button onClick={putCandidate} className="bg-warning rounded border border-0 text-white fw-bold ">
                    Simpan
                  </button>
                </div>
              </div>
              <WorkExpView/>
              <PortfolioView/>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Index;
