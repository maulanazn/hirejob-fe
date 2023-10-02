import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteWorkExpId, getWorkExpUserId } from '../../redux/actions/bioActions';
import { Button } from 'react-bootstrap';
import { IoPencilSharp, IoRemoveCircleOutline } from 'react-icons/io5';

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

export default function WorkExpView() {
  const dispatch = useDispatch();
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
                onClick={() => getExperienceId(experience.id)}
                variant="warning"
                className="d-flex justify-content-center align-items-center"
              >
                <IoPencilSharp size={20} />
              </Button>
            </div>
            <div>
              <Button
                onClick={() => deleteWorkExp(experience.id)}
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