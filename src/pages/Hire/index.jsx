import React from "react"
import './style.css'

const Hire = () => {
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
            <input type="text" id="input-position" placeholder="Masukan posisi" spellCheck="false"/>
          </div>
          <div className="description">
            <label htmlFor="input-description">Deskripsi</label>
            <textarea id="input-description" placeholder="Deskripsi" spellCheck="false"/>
          </div>
          <button className="hire-button" type="submit">Hire</button>
        </form>
      </div>

    </div>
  )
};

export default Hire;