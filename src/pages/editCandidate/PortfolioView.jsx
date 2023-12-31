import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { countPortfolioUser, deletePortofolioId, getPortfolioUserById } from '../../redux/actions/bioActions';
import { Button, Form } from 'react-bootstrap';
import {IoRemoveCircleOutline, IoPencilSharp} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

function PortofolioViewData() {
  const navigate = useNavigate();
  const {portfolio_get} = useSelector(state => state);
  const {data} = portfolio_get;

  return (
    <div>
      {data?.map((portofolio, index) => (
        <div
          className="d-flex justify-content-between mb-3"
          key={index}
        >
          <div className="d-flex gap-3">
            {portofolio.photo ? (
              <img
                style={{ height: "100px", width: "150px" }}
                src={portofolio.photo}
                alt="porto"
              />
            ) : (
              <img
                style={{ height: "100px", width: "150px" }}
                src={porto}
                alt="porto"
              />
            )}
            <div>
              <h6 className="text-dark">{portofolio.portfolio_name}</h6>
              <p className="mb-0">{portofolio.repository_link}</p>
            </div>
          </div>
          <div className="d-flex flex-sm-column flex-lg-row gap-2">
            <div>
              <Button
                onClick={() => navigate(`/edit-portofolio/${portofolio.id}`)}
                variant="warning"
                className="d-flex justify-content-center align-items-center"
              >
                <IoPencilSharp size={20} />
              </Button>
            </div>
            <div>
              <Button
                onClick={() => deletePortofolioId(portofolio.id)}
                variant="danger"
                className="d-flex justify-content-center align-items-center"
              >
                <IoRemoveCircleOutline size={20}/>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PortfolioView() {
  const dispatch = useDispatch();
  const portofoliodata = useSelector(state => state.portofolio_count.data)
  const [portfolioPhoto, setPortfolioPhoto] = useState([]);
  const [Portofolio, setPortofolio] = useState({
    portfolio_name: "",
    repository_link: "",
    app_type: "",
    photo: "",
  });

  const handlePortofolio = (e) => {
    e.preventDefault();
    let bodyIndex = new FormData();

    bodyIndex.append("portfolio_name", Portofolio.portfolio_name);
    bodyIndex.append("repository_link", Portofolio.repository_link);
    bodyIndex.append("app_type", Portofolio.app_type);
    bodyIndex.append("photo", portfolioPhoto);

    dispatch(updatePortfolioAction(bodyIndex));
  };

  const handlePortfolioChange = (e) => {
    setPortofolio({ ...Portofolio, [event.target.name]: event.target.value });
  };

  const handlePortfolioPhoto = (e) => {
    setPortfolioPhoto(e.target.files[0])
    e.target.files[0] && setPortofolio({...Portofolio, photo: URL.createObjectURL(e.target.files[0])})
  }

  useEffect(() => {
    dispatch(getPortfolioUserById())
  }, [])

  useEffect(() => {
    dispatch(countPortfolioUser())
  }, [])

  return (
    <div
      style={{ backgroundColor: "white" }}
      className="p-5 mt-5 rounded"
      onSubmit={handlePortofolio}
    >
      <h2>Portofolio</h2>
      <form encType="multipart/form-data">
        {
          portofoliodata?.data?.count > 0 ?
            <PortofolioViewData/>  
          :
            undefined
        }
      
        <div className="mt-4">
          <Form.Label>Nama aplikasi</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="passwordHelpBlock"
            placeholder="Masukan nama aplikasi"
            onChange={handlePortfolioChange}
            name="portfolio_name"
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
          placeholder="Masukan Foto"
          name="portfolioPhoto"
          onChange={handlePortfolioPhoto}                  
        />
        <button
          type="submit"
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
