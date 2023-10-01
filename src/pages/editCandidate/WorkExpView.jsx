import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getWorkExpUserId } from '../../redux/actions/bioActions';

export default function WorkExpView() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const {workexp_get} = useSelector(state => state);
  const {data} = workexp_get;

  useEffect(() => {
    dispatch(getWorkExpUserId())
  }, [])

  function Edit(id) {
    if (openEdit) {
      setOpenEdit(true)
    }

    return
  }

  return (
    <div>
      {
        data?.map((item, index) => {
          return (
            <div key={index}>
              <button onClick={Edit}>cek</button>
              <img src={item.work_experience_photo} alt={item.user_name}/>
              <h1>{item.position}</h1>
            </div>
          )
        })
      }
    </div>
  )
}