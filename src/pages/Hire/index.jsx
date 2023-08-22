import React, { useState } from "react"
import './style.css'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hire } from "../../redux/actions/hireActions";

const Hire = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const params = useParams("id");

  console.log(params.id)


  const [message,setMessage] = useState({
    id:params.id,
    position:'',
    message_detail:''
});

  // console.log(message)

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

  dispatch(hire(message))
}

  return (
    <div id='hire'>
      <div className="bio">
          <img src="./images/img-profile.svg" alt="" className="photo-profile"/>
          <h1 className='name' >Louis Tomlinson</h1>
          <h3 className='job'>Web Developer</h3>
          <div className="address">
            <img src="./images/icon-location.svg" alt="" className="icon-location" />
            <h3 className="text-address">Purwokero, Jawa Tengah</h3>
          </div>

          <h3 className="type-job">Freelancer</h3>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem voluptatum debitis repellat nemo? Natus doloremque
          </p>

          <div className="skill">
            <h2 className="head-skill">Skill</h2>

            <div className="list-skill">
              <p className="name-skill">Phyton</p>  
              <p className="name-skill">Javascript</p>  
              <p className="name-skill">Laravel</p>  
              <p className="name-skill">Html</p>  
              <p className="name-skill">Bootstrap</p>  
              <p className="name-skill">Phyton</p>  
              <p className="name-skill">Phyton</p>  
            </div>  
          </div>

      </div>

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