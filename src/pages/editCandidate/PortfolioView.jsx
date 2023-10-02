import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deletePortofolioId, getPortfolioUserById } from '../../redux/actions/bioActions';
import { Button } from 'react-bootstrap';
import {IoRemoveCircleOutline, IoPencilSharp} from 'react-icons/io5'

export default function PortfolioView() {
  const dispatch = useDispatch();
  const {portfolio_get} = useSelector(state => state);
  const {data} = portfolio_get;

  useEffect(() => {
    dispatch(getPortfolioUserById())
  }, [])

  function deletePortofolio(id) {
    dispatch(deletePortofolioId(id));
  }

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
                onClick={() => getPortofolioId(portofolio.id)}
                variant="warning"
                className="d-flex justify-content-center align-items-center"
              >
                <IoPencilSharp size={20} />
              </Button>
            </div>
            <div>
              <Button
                onClick={() => deletePortofolio(portofolio.id)}
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
