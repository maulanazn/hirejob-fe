import React from "react"
import './style.css'

const BioWorker = ({user,skillsArr,sosmedObj,handleHire}) => {
  
  return (
    <div className="bio">
    <img src={user?.user_photo} className="photo-profile"/>
  
    <h1 className='name' >{user?.name}</h1>
    <h3 className='job'>{user?.last_work}</h3>
    <div className="address">
      <img src='/image/icon-location.svg' alt="" className="icon-location" />
      <h3 className="text-address">{user?.domicile}</h3>
    </div>

    <h3 className="type-job">{user?.position}</h3>

    <p className="description">{user?.description}</p>

    <div className="skill">
      <h2 className="head-skill">Skills</h2>

      <div className="list-skill">
        {skillsArr?.map((skill,index)=>(
          <p className="name-skill" key={index}>{skill}</p>   
        ))}
      </div>  
    </div>

    {sosmedObj &&( 
      <div className="media-social">
      <div className="email">
        <img src='/image/icon-email.svg' alt="" className="icon-sos" />
        <p className="email-name">{sosmedObj?.email ? sosmedObj?.email : "-"}</p>
      </div>

      <div className="instagram">
        <img src='/image/icon-instagram.svg' alt="" className="icon-sos" />
        <p className="instagram-name">{sosmedObj?.instagram ? sosmedObj?.instagram : "-"}</p>
      </div>

      <div className="git-hub">
        <img src='/image/icon-github.svg' alt="" className="icon-sos" />
        <p className="git-hub-name">{sosmedObj?.github ? sosmedObj?.github : "-"}</p>

      </div>
      <div className="git-lab">
        <img src='/image/icon-gitlab.svg' alt="" className="icon-sos" />
        <p className="git-lab-name">{sosmedObj?.gitlab ? sosmedObj?.gitlab : "-"}</p>
      </div>
    </div>)}

    {handleHire && <button className="hire-button" onClick={handleHire}>Hire</button>}

</div>
  )
};

export default BioWorker;
