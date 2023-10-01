import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getWorkExpUserId } from '../../redux/actions/bioActions';

export default function WorkExpView() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const {workexp_get} = useSelector(state => state);
  const {data} = workexp_get;

  useEffect(() => {
    dispatch(getWorkExpUserId())
  }, [])

  function Edit() {
    setOpenEdit(openEdit => !openEdit)
  }

  return (
    <div>
      {
        data?.map((item, index) => {
          return (
            <div key={index}>
              <button onClick={Edit}>cek</button>
              {
                openEdit ? 
                <div>
                  <img src={item.work_experience_photo} alt={item.user_name}/>
                  <h1>{item.position}</h1>
                </div> :
                <form encType='multipart/form-data'>
                  <input type="text" placeholder='Position' defaultValue={item.position}/>
                  <button type="submit">Update</button>
                </form>
              }
            </div>
          )
        })
      }
    </div>
  )
}