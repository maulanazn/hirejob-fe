import { Fragment, useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./editCandidate.css";
import { CiLocationOn } from "react-icons/ci";
import Candidate from "../../assets/images/imgrecruiter.png";
import { BsPencilFill } from "react-icons/bs";
import NavBar from "../../component/navbar";
import Footer from "../../component/footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCandidateBioAction } from "../../redux/actions/bioActions";
import { getUserById } from "../../redux/actions/userAction";

const Index = () => {
  const { id } = useParams();
  const {data} = useSelector(state => state.user)
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
  const [experience, setExperience] = useState({
    position: "",
    company_name: "",
    work_experience_photo: "",
    working_start_at: "",
    working_end_at: "",
    description: "",
  });
  const [Portofolio, setPortofolio] = useState({
    portfolio_name: "",
    repository_link: "",
    app_type: "",
    photo: "",
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

  const putCandidate = async (event) => {
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

  const handleExperience = (event) => {
    event.preventDefault();

    axios
      .post(import.meta.env.VITE_BASE_URL + "/worker/workexp", experience, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  };

  const handleExperienceChange = (event) => {
    setExperience({
      ...experience,
      [event.target.name]: event.target.value,
    });
  };

  const handlePortofolio = (event) => {
    event.preventDefault();

    axios
      .post(import.meta.env.VITE_BASE_URL + "/workers/portofolio", Portofolio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        setPortofolio({
          portfolio_name: "",
          repository_link: "",
          app_type: "",
          photo: "",
        });
      })
      .catch((error) => {
        console.error("Gagal menambahkan skill:", error);
      });
  };

  const handlePortfolioChange = (e) => {
    setInputData({ ...Portofolio, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <NavBar />
      <div
        style={{ height: "280px", backgroundColor: " #5E50A1" }}
        className="W-100 position-relative"> </div>
        <div className="position-absolute w-100" style={{ top: "200px" }}>
        <Container className="">
          <Row>
            <Col md={4}>
              {/* Di Gabung sama form */}
              <div className="rounded p-3" style={{ backgroundColor: "white" }}>
                <div className="d-flex justify-content-center">
                  <label
                    htmlFor="addImage"
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column"
                  >
                    <img
                      className="picture"
                      src={userData?.photo || Candidate}
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
                    <input className="input-edit" name="photo" onChange={setOnPhoto} accept="image/*" type="file" id="addImage" />
                  </span>
                </div>
                <div>
                  <h4> {userData?.name || 'Microsoft'} </h4>
                  <h6>{userData?.position || 'Financial'}</h6>
                  <div className="d-flex mt-">
                    <CiLocationOn size={20} />
                    <p>{userData?.domicile || 'World'}</p>
                  </div>
                </div>
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
                <form encType="multipart/form-data">
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
                </form>
              </div>
              <div
                style={{ backgroundColor: "white" }}
                className="p-5 mt-5 rounded"
              >
                <Form onSubmit={handleExperience}>
                  <h2>Pengalaman Kerja</h2>
                  <hr />
                  <div className="mt-4">
                    <Form.Label style={{ color: "#858D96" }}>Posisi</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Web Developer"
                      onChange={handleExperienceChange}
                    />
                    <div>
                      <Row>
                        <Col md={4}>
                          <div className="mt-4 my-4">
                            <Form.Label style={{ color: "#858D96" }}>
                             Input Nama Perusahaan
                            </Form.Label>
                            <Form.Control
                              type="text"
                              aria-describedby="passwordHelpBlock"
                              placeholder=" Nama Perusahaan"
                              onChange={handleExperienceChange}
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
                              onChange={handleExperienceChange}
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
                        onChange={handleExperienceChange}
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
                </Form>
              </div>
              <div
                style={{ backgroundColor: "white" }}
                className="p-5 mt-5 rounded"
              >
                <h2>Portofolio</h2>
                <form onSubmit={handlePortofolio}>
                  <div className="mt-4">
                    <Form.Label>Nama aplikasi</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan nama aplikasi"
                      onChange={handlePortfolioChange}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Link Repository</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Link repository"
                      onChange={handlePortfolioChange}
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
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Aplikasi web
                      </label>
                    </div>
                  </div>
                  <Form.Control
                    className="my-5"
                    type="file"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Masukan tempat kerja"
                    onChange={handlePortfolioChange}
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
