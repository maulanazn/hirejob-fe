import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { countWorkExpUser, deleteWorkExpId, getWorkExpId, getWorkExpUserId, updateWorkExpAction, updateWorkExpIdAction } from '../../redux/actions/bioActions';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { IoPencilSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

function formatDate(inputDate) {
  const options = { month: 'long', year: 'numeric' };
  const tanggal = new Date(inputDate).toLocaleDateString('id-ID', options);
  return tanggal;
}

function countDate(inputStartDate, inputEndDate) {
  const tanggal1 = new Date(inputStartDate);
  const tanggal2 = new Date(inputEndDate);
  return tanggal1.getMonth() - tanggal2.getMonth() + (12 * (tanggal1.getFullYear() - tanggal2.getFullYear()));
}

function WorkView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {workexp_get} = useSelector(state => state);
  const {data} = workexp_get;

  return (
    <>
      {data?.map((experience, index) => (
        <div
          className="d-flex justify-content-between mb-3"
          key={index}
        >
          <div className="d-flex gap-3">
            <img
              style={{ height: "70px", width: "70px" }}
              src={experience.work_experience_photo}
              alt={experience.company_name}
            />
            <div>
              <h4 className="text-dark">{experience.position}</h4>
              <p className="mb-0">{experience.company_name}</p>
              <p className="mb-0">
                {formatDate(experience.working_start_at)} - {formatDate(experience.working_end_at)} | {countDate(formatDate(experience.working_end_at), formatDate(experience.working_start_at))} months
              </p>
              <p className="pb-0 text-dark">
                {experience.description}
              </p>
            </div>
          </div>
          <div className="d-flex flex-sm-column flex-lg-row gap-2">
            <div>
              <Button
                onClick={() => navigate(`/edit-candidate/${experience.id}`)}
                variant="warning"
                className="d-flex justify-content-center align-items-center"
              >
                <IoPencilSharp size={20} />
              </Button>
            </div>
            <div>
              <Button
                onClick={() => dispatch(deleteWorkExpId(experience.id))}
                variant="danger"
                className="d-flex justify-content-center align-items-center"
              >
               <IoRemoveCircleOutline size={20}/>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default function WorkExpView() {
  const dispatch = useDispatch();
  const workexpdata = useSelector(state => state.workexp_count.data)
  const [work_experience_photo, setWorkExpPhoto] = useState([]);
  const [experience, setExperience] = useState({
    position: "",
    company_name: "",
    work_experience_photo: "",
    working_start_at: "",
    working_end_at: "",
    description: "",
  });

  const handleExperience = (event) => {
    event.preventDefault();
    let bodyIndex = new FormData();

    bodyIndex.append("position", experience.position);
    bodyIndex.append("company_name", experience.company_name);
    bodyIndex.append("work_experience_photo", work_experience_photo);
    bodyIndex.append("working_start_at", experience.working_start_at);
    bodyIndex.append("working_end_at", experience.working_end_at);
    bodyIndex.append("description", experience.description);

    dispatch(updateWorkExpAction(bodyIndex))
  };

  const handleExperienceChange = (event) => {
    setExperience({
      ...experience,
      [event.target.name]: event.target.value,
    });
  };

  function setPhotoWork(e) {
    setWorkExpPhoto(e.target.files[0])
    e.target.files[0] && setExperience({...experience, work_experience_photo: URL.createObjectURL(e.target.files[0])})
  }

  useEffect(() => {
    dispatch(countWorkExpUser())
  }, [])

  useEffect(() => {
    dispatch(getWorkExpUserId())
  }, [])

  return (
    <div>
      <div
        style={{ backgroundColor: "white" }}
        className="p-5 mt-5 rounded"
      >
          <h2>Pengalaman Kerja</h2>
          <hr />
          <Form encType="multipart/form-data">
          {
            workexpdata?.data?.count > 0 ?
              <WorkView/>
            :
              undefined
          }
          <hr />
            <div className="mt-4">
              <Form.Label style={{ color: "#858D96" }}>Posisi</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="passwordHelpBlock"
                placeholder="Web Developer"
                name="position"
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
                        name="company_name"
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
                        name="working_start_at"
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
                        name="working_end_at"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Masukan tempat kerja"
                        onChange={handleExperienceChange}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <Form.Control
                  className="my-5"
                  type="file"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Masukan tempat kerja"
                  name="work_experience_photo"
                  onChange={setPhotoWork}
              />
              <div className="my-3">
                <Form.Label>Deskripsi Singkat</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Masukan Deskripsi Pekerjaan"
                  style={{ height: "200px" }}
                  className="form-focus"
                  name="description"
                  onChange={handleExperienceChange}
                />
              </div>
              <button
                onClick={handleExperience}
                style={{
                  backgroundColor: "white",
                  borderColor: "#FBB017",
                  color: "#FBB017",
                }}
                className=" w-100 p-2 fw-bold rounded mt-3 "
              >
                Tambah Pengalaman Kerja
              </button>
            </div>
        </Form>
      </div>
    </div>
  )
}