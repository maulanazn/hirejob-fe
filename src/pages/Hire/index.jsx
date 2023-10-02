import React, { useState } from "react"
import './style.css'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import BioWorker from "../../component/BioWorker";
import {hire} from "../../redux/actions/chatAction"

const Hire = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const params = useParams("id");

  const sosmed = useSelector((state)=> state.worker.worker.sosmed)
  const userArr = useSelector((state)=> state.worker.worker.user)
  const user = userArr ? userArr[0] : undefined
  const skillsArr = user?.skill_name.split(',');
  const sosmedObj = {}
  sosmed?.forEach(item => {
    sosmedObj[item.social_media_name.toLowerCase()] = item.link;
  });


  const [message,setMessage] = useState({
    id:params.id,
    position:'',
    message_detail:''
});

const handleChange = (event) => {
  const {name,value} = event.target;
  setMessage((prev) => ({
      ...prev,
      [name]: value
  }));
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(message)
  dispatch(hire(message,navigate))
}

  return (
    <div id='hire'>
       <BioWorker user={user} skillsArr={skillsArr} sosmedObj={sosmedObj} />

      <div className="hire-section">
        <h1 className="head">Hubungi Lous Tomlinson</h1>
        <p className="instruction">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quod quis. Odio consectetur harum dolores hic velit ipsum sequi magnam!
        </p>
        <form action="" className="hire-form">
          <div className="position">
            <label htmlFor="input-position">Posisi</label>
            <input name='position' value={message.position} type="text" id="input-position" placeholder="Masukan posisi" spellCheck="false" onChange={handleChange}/>
          </div>
          <div className="description">
            <label htmlFor="input-description">Deskripsi</label>
            <textarea name='message_detail' value={message.message_detail} id="input-description" placeholder="Deskripsi" spellCheck="false" onChange={handleChange}/>
          </div>
          <button className="hire-button" type="submit" onClick={handleSubmit}>Hire</button>
        </form>
      </div>

    </div>
  )
};

export default Hire;