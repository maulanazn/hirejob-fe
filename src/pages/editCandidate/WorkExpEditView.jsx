import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWorkExpId, updateWorkExpIdAction } from '../../redux/actions/bioActions';

export default function WorkExpEditView() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const workerexpid = useSelector(state => state.workexp_get_id.data);
  const [work_experience_photo, setWorkExpPhoto] = useState([]);
  const [experience, setExperience] = useState({
    position: "",
    company_name: "",
    work_experience_photo: "",
    working_start_at: "",
    working_end_at: "",
    description: "",
  });

  const updateExperience = (event) => {
    event.preventDefault();
    let bodyIndex = new FormData();

    bodyIndex.append("position", experience.position);
    bodyIndex.append("company_name", experience.company_name);
    bodyIndex.append("work_experience_photo", work_experience_photo);
    bodyIndex.append("working_start_at", experience.working_start_at);
    bodyIndex.append("working_end_at", experience.working_end_at);
    bodyIndex.append("description", experience.description);

    dispatch(updateWorkExpIdAction(bodyIndex, id))
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
    dispatch(getWorkExpId(id));
  }, [])

  return (
    <Form encType="multipart/form-data">
      <div className="container mt-4 mb-4 bg-white">
        <Form.Label style={{ color: "#858D96" }}>Posisi</Form.Label>
        <Form.Control
          type="text"
          aria-describedby="passwordHelpBlock"
          placeholder="Web Developer"
          name="position"
          defaultValue={workerexpid?.data[0].position}
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
                  defaultValue={workerexpid?.data[0].company_name}
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
                  defaultValue={workerexpid?.data[0].working_start_at}
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
                  defaultValue={workerexpid?.data[0].working_end_at}
                  onChange={handleExperienceChange}
                />
              </div>
            </Col>
          </Row>
        </div>
        <img
          style={{ height: "120px", width: "150px", marginLeft: '30rem' }}
          src={workerexpid?.data[0].work_experience_photo}
          alt={workerexpid?.data[0].company_name}
        />
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
            defaultValue={workerexpid?.data[0].description}
            onChange={handleExperienceChange}
          />
        </div>
        <button
          onClick={updateExperience}
          style={{
            backgroundColor: "white",
            borderColor: "#FBB017",
            color: "#FBB017",
          }}
          className=" w-100 p-2 fw-bold rounded mt-3 "
        >
          Update Pengalaman Kerja
        </button>
      </div>
    </Form>
  )
}
