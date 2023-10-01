import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { deleteWorkExpId, getWorkExpUserId } from '../../redux/actions/bioActions';
import { Button } from 'react-bootstrap';

function formatDate(inputDate) {
  const options = { month: 'long', year: 'numeric' };
  const tanggal = new Date(inputDate).toLocaleDateString('id-ID', options);
  return tanggal;
}

// function countDate(inputStartDate, inputEndDate) {
//   const options = { month: 'long'};
//   const tanggal1 = new Date(inputStartDate);
//   const tanggal2 = new Date(inputEndDate);
//   return tanggal1.getMonth() - tanggal2.getMonth();
// }

export default function WorkExpView() {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const {workexp_get} = useSelector(state => state);
  const {data} = workexp_get;

  useEffect(() => {
    dispatch(getWorkExpUserId())
  }, [])

  function deleteWorkExp(id) {
    dispatch(deleteWorkExpId(id))
  }

  return (
    <div>
      {data?.map((experience, index) => (
        <div
          className="d-flex justify-content-between mb-3"
          key={index}
        >
          <div className="d-flex gap-3">
            <img
              style={{ height: "70px", width: "70px" }}
              src={experience.work_experience_photo}
              alt="tokopedia"
            />
            <div>
              <h4 className="text-dark">{experience.position}</h4>
              <p className="mb-0">{experience.company_name}</p>
              <p className="mb-0">
                {formatDate(experience.working_start_at)} - {formatDate(experience.working_end_at)}
              </p>
              <p className="pb-0 text-dark">
                {experience.description}
              </p>
            </div>
          </div>
          <div className="d-flex flex-sm-column flex-lg-row gap-2">
            <div>
              <Button
                onClick={() => getExperienceId(experience.id)}
                variant="warning"
                className="d-flex justify-content-center align-items-center"
              >
                Edit
              </Button>
            </div>
            <div>
              <Button
                onClick={() => deleteWorkExp(experience.id)}
                variant="danger"
                className="d-flex justify-content-center align-items-center"
              >
               X
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}