import React, { Component, useEffect } from "react"
import { getSkill, getUserById } from "../../redux/actions/userAction";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import iconEmail from './assets/icon-email.svg'
import iconGithub from './assets/icon-github.svg'
import iconGitlab from './assets/icon-gitlab.svg'
import iconInstagram from './assets/icon-instagram.svg'
import iconLocation from './assets/icon-location.svg'
import defaultPhotoProfile from './assets/pp.jpg'

const DetailProfile = () => {
  const dispatch = useDispatch();

  const {id} = useParams('id')

  const {user} = useSelector((state)=>state.user)



  useEffect(()=> {
    dispatch(getUserById(id))
    console.log(user,'ini user')
  },[])

  return (
    <div id='detail-profile'>
      <div className="bio">
          <img src={user.photo_profile ? user.photo_profile : defaultPhotoProfile} alt={user.photo_profile} className="photo-profile"/>
        

          <h1 className='name' >{user.user_name}</h1>
          <h3 className='job'>Web Developer</h3>
          <div className="address">
            <img src={iconLocation} alt="" className="icon-location" />
            <h3 className="text-address">{user.user_city},{user.user_province}</h3>
          </div>

          <h3 className="type-job">{user.work_position}</h3>

          <p className="description">{user.user_description}</p>

          <div className="skill">
            <h2 className="head-skill">Skill</h2>

            <div className="list-skill">
              <p className="name-skill">{user.skill_name}</p>   
            </div>  
          </div>

          <div className="media-social">
            <div className="email">
              <img src={iconEmail} alt="" className="icon" />
              <p className="email-name">{user.user_email}</p>
            </div>

            <div className="instagram">
              <img src={iconInstagram} alt="" className="icon" />
              {user.user_instagram &&
              <p className="instagram-name">{user.user_instagram}</p>}
              <p className="instagram-name">--</p>
            </div>

            <div className="git-hub">
              <img src={iconGithub} alt="" className="icon" />
              {user.user_github && 
              <p className="git-hub-name">{user.user_github}</p>}
              <p className="git-hub-name">--</p>

            </div>
            <div className="git-lab">
              <img src={iconGitlab} alt="" className="icon" />
              {user.user_gitlab && 
              <p className="git-lab-name">{user.user_gitlab}</p>}
              <p className="git-lab-name">--</p>
            </div>
          </div>

          <button className="hire-button">Hire</button>

      </div>

      <div className="etalase">
        <div className="portfolio">

            <h2 className="head-portfolio">Portfolio</h2>

            <div className="list-portfolio">
              <div className="card-portfolio">
                <img src={user.portfolio_photo} alt={user.portfolio_photo} className="image-portfolio"/>
                <h5 className="title">{user.portfolio_name}</h5>
              </div>

            </div>
            
        </div>

        <div className="pengalaman">
          <h2 className="head-pengalaman">Pengalaman Kerja</h2>

          <div className="list-pengalaman">

            <div className="card-pengalaman">
              <img src="" alt="" className="image-pengalaman" />
              <div className="info-pengalaman">
                <h3 className="job">Engineer</h3>
                <h4 className="company">{user.work_company_name}</h4>
                <h5 className="date">{user.working_start} - {user.working_end} ( 6 Month )</h5>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque! Adipisci velit commodi rem autem corrupti obcaecati, aperiam ipsa at?
                </p>
              </div>
            </div>

          </div>


        </div>

      </div>


      <div className="box-purple"></div>
    </div>
  )
};

export default DetailProfile;

