import { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./editCandidate.css";
import { CiLocationOn } from "react-icons/ci";
import Candidate from "../../assets/images/imgrecruiter.png";
import { BsPencilFill } from "react-icons/bs";
import NavBar from "../../component/navbar";
import Footer from "../../component/footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    user_name: "",
    province: "",
    city: "",
    last_work: "",
    description: "",
  });
  const [skill, setSkill] = useState({
    skill_name: "",
  });
  const [experince, setExperience] = useState({
    position: "",
    company_name: "",
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
    const getDetail = async () => {
      try {
        const getDetailCandidate = await axios.get(
          import.meta.env.VITE_BASE_URL + `/workers/photo/profil`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(getDetailCandidate);
        setData(getDetailCandidate.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, []);
  useEffect(() => {
    data &&
      setInputData({
        ...inputData,
        user_name: inputData.user_name,
        province: inputData.province,
        city: inputData.city,
        last_work: inputData.last_work,
        description: inputData.description,
      });
  }, [data]);
  const putCandidate = async (event) => {
    event.preventDefault();
    let bodyIndex = new FormData();
    bodyIndex.append("user_name", inputData.user_name);
    bodyIndex.append("province", inputData.province);
    bodyIndex.append("city", inputData.city);
    bodyIndex.append("last_work", inputData.last_work);
    bodyIndex.append("description", inputData.description);

    try {
      const editCandidate = await axios.post(
        import.meta.env.VITE_BASE_URL + "/recruiter/bio-recruiter",
        bodyIndex, // tambah bodyindex buat simpen token
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(editCandidate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSkillChange = (event) => {
    setSkill({
      ...skill,
      [event.target.name]: event.target.value,
    });
  };

  const handleSkill = (event) => {
    event.preventDefault();

    // Lakukan POST request menggunakan Axios
    axios
      .post(import.meta.env.VITE_BASE_URL + "/skill", skill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        console.log("Skill berhasil ditambahkan:", response.data);
        // Reset form setelah berhasil ditambahkan
        setSkill(response.data.data);
      })
      .catch((error) => {
        console.error("Gagal menambahkan skill:", error);
      });
  };
  const handleExperienceChange = (event) => {
    setExperience({
      ...experince,
      [event.target.name]: event.target.value,
    });
  };

  const handleExperience = (event) => {
    event.preventDefault();

    // Lakukan POST request menggunakan Axios
    axios
      .post(import.meta.env.VITE_BASE_URL + "/workers/workexp", skill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        console.log("Skill berhasil ditambahkan:", response.data);
        // Reset form setelah berhasil ditambahkan
        setExperience({
          position: "",
          company_name: "",
          working_start_at: "",
          working_end_at: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Gagal menambahkan skill:", error);
      });
  };
  const handlePortfolioChange = (e) => {
    setInputData({ ...Portofolio, [e.target.name]: e.target.value });
  };
  const handlePortofolio = (event) => {
    event.preventDefault();

    // Lakukan POST request menggunakan Axios
    axios
      .post(import.meta.env.VITE_BASE_URL + "/workers/portofolio", Portofolio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        console.log("Skill berhasil ditambahkan:", response.data);
        // Reset form setelah berhasil ditambahkan
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
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
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
              <div className="rounded p-3" style={{ backgroundColor: "white" }}>
                <div className="d-flex justify-content-center">
                  <label
                    htmlFor="addImage"
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column"
                  >
                    <img
                      className="picture"
                      src={data?.data?.photo_profile || Candidate}
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
                  <h4> {data?.data?.user_name} </h4>
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
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4">
                    <Form.Label>Job desk</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan job desk"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4 my-3">
                    <Form.Label>Domisili</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan domisili"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mt-4 my-3">
                    <Form.Label>Tempat kerja</Form.Label>
                    <Form.Control
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan tempat kerja"
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
                      onChange={handleInput}
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
                  onClick={putCandidate}
                >
                  Simpan
                </button>{" "}
                <form />
              </div>
              <div
                style={{ backgroundColor: "white" }}
                className="mt-5 p-5 rounded"
              >
                <h2 className="fw-bold">Skill</h2>
                <hr />
                <form onSubmit={handleSkill}>
                  <div className="mt-4 d-flex gap-4">
                    <Form.Control
                      className="w-75"
                      type="text"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Masukan Skill anda"
                      onChange={handleSkillChange}
                    />
                    <button className="bg-warning rounded border border-0 text-white fw-bold ">
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
