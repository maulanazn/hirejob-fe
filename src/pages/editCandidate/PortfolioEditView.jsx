import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPortofolioId, updatePortofolioIdAction } from '../../redux/actions/bioActions';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function PortfolioEditView() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const portofolio_get_id = useSelector(state => state.portofolio_get_id.data);
  const [portfolioPhoto, setPortfolioPhoto] = useState([]);
  const [Portofolio, setPortofolio] = useState({
    portfolio_name: "",
    repository_link: "",
    app_type: "",
    photo: "",
  });

  const updatePortofolio = (e) => {
    e.preventDefault();
    let bodyIndex = new FormData();

    bodyIndex.append("portfolio_name", Portofolio.portfolio_name);
    bodyIndex.append("repository_link", Portofolio.repository_link);
    bodyIndex.append("app_type", Portofolio.app_type);
    bodyIndex.append("photo", portfolioPhoto);

    dispatch(updatePortofolioIdAction(bodyIndex, id));
  };

  const handlePortfolioChange = (e) => {
    setPortofolio({ ...Portofolio, [event.target.name]: event.target.value });
  };

  const handlePortfolioPhoto = (e) => {
    setPortfolioPhoto(e.target.files[0])
    e.target.files[0] && setPortofolio({...Portofolio, photo: URL.createObjectURL(e.target.files[0])})
  }

  useEffect(() => {
    dispatch(getPortofolioId(id))
  }, [])

  return (
    <div
      style={{ backgroundColor: "white" }}
      className="p-5 mt-5 rounded container mb-5"
    >
      <h2>Portofolio</h2>
      <form encType="multipart/form-data">
        <div className="mt-4">
          <Form.Label>Nama aplikasi</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="passwordHelpBlock"
            placeholder="Masukan nama aplikasi"
            onChange={handlePortfolioChange}
            name="portfolio_name"
            defaultValue={portofolio_get_id?.data[0].portfolio_name}
          />
        </div>
        <div className="mt-4">
          <Form.Label>Link Repository</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="passwordHelpBlock"
            placeholder="Masukan Link repository"
            onChange={handlePortfolioChange}
            name="repository_link"
            defaultValue={portofolio_get_id?.data[0].repository_link}
          />
        </div>
        <div className="d-flex gap-5 mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="flexRadioDefault1"
              value="Mobile App"
              name="app_type"
              onChange={handlePortfolioChange}
              checked={portofolio_get_id?.data[0].app_type ? portofolio_get_id?.data[0].app_type : ''}
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
              id="flexRadioDefault1"
              value="Web App"
              name="app_type"
              onChange={handlePortfolioChange}
              checked={portofolio_get_id?.data[0].app_type ? portofolio_get_id?.data[0].app_type : ''}
            />
            <label
              className="form-check-label"
              htmlFor="flexRadioDefault1"
            >
              Aplikasi web
            </label>
          </div>
        </div>
        <img
          style={{ height: "120px", width: "150px", marginLeft: '30rem' }}
          src={portofolio_get_id?.data[0].photo}
          alt={portofolio_get_id?.data[0].portfolio_name}
        />
        <Form.Control
          className="my-5"
          type="file"
          aria-describedby="passwordHelpBlock"
          placeholder="Masukan Foto"
          name="portfolioPhoto"
          onChange={handlePortfolioPhoto}   
          defaultValue={portofolio_get_id?.data[0].photo}               
        />
        <button
          onClick={updatePortofolio}
          style={{
            backgroundColor: "white",
            borderColor: "#FBB017",
            color: "#FBB017",
          }}
          className=" w-100 p-2 fw-bold rounded mt-3 "
        >
          Tambah Portofolio
        </button>
      </form>
    </div>
  )
}
