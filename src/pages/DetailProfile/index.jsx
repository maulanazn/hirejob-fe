import { useEffect } from "react"
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { getSkill } from "../../redux/actions/userAction";

const DetailProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(getSkill(user))
  }, [])

  return (
    <div id='detail-profile'>
      <div className="bio">
          <img src="./images/img-profile.svg" alt="" className="photo-profile"/>
          <h1 className='name' >{localStorage.getItem("name")}</h1>
          <h3 className='job'>lkjasdf</h3>
          <div className="address">
            <img src="./images/icon-location.svg" alt="" className="icon-location" />
            <h3 className="text-address">Purwokerto,Jawa Tengah</h3>
          </div>

          <h3 className="type-job">Freelancer</h3>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem voluptatum debitis repellat nemo? Natus doloremque
          </p>

          <div className="skill">
            <h2 className="head-skill">Skill</h2>

            <div className="list-skill">
              <p className="name-skill">{user.skill_name}</p>   
            </div>  
          </div>

          <div className="media-social">
            <div className="email">
              <img src="./images/icon-email.svg" alt="" className="icon" />
              <p className="email-name">Louistommo@gmail.com</p>
            </div>
            <div className="instagram">
              <img src="./images/icon-instagram.svg" alt="" className="icon" />
              <p className="instagram-name">@Louist91</p>
            </div>
            <div className="git-hub">
              <img src="./images/icon-github.svg" alt="" className="icon" />
              <p className="git-hub-name">@Louistommo</p>
            </div>
            <div className="git-lab">
              <img src="./images/icon-gitlab.svg" alt="" className="icon" />
              <p className="git-lab-name">@Louistommo91</p>
            </div>
          </div>

          <button className="hire-button">Hire</button>

      </div>

      <div className="etalase">
        <div className="portfolio">

            <h2 className="head-portfolio">Portfolio</h2>

            <div className="list-portfolio">
              <div className="card-portfolio">
                <img src="./images/portfolio1.png" alt="" className="image-portfolio"/>
                <h5 className="title">Remainder app</h5>
              </div>

              <div className="card-portfolio">
                <img src="./images/portfolio1.png" alt="" className="image-portfolio"/>
                <h5 className="title">Remainder app</h5>
              </div>

              <div className="card-portfolio">
                <img src="./images/portfolio1.png" alt="" className="image-portfolio"/>
                <h5 className="title">Remainder app</h5>
              </div>

              <div className="card-portfolio">
                <img src="./images/portfolio1.png" alt="" className="image-portfolio"/>
                <h5 className="title">Remainder app</h5>
              </div>

              <div className="card-portfolio">
                <img src="./images/portfolio1.png" alt="" className="image-portfolio"/>
                <h5 className="title">Remainder app</h5>
              </div>

              <div className="card-portfolio">
                <img src="./images/portfolio1.png" alt="" className="image-portfolio"/>
                <h5 className="title">Remainder app</h5>
              </div>

            </div>
            
        </div>

        <div className="pengalaman">
          <h2 className="head-pengalaman">Pengalaman Kerja</h2>

          <div className="list-pengalaman">

            <div className="card-pengalaman">
              <img src="./images/logo-tokopedia.png" alt="" className="image-pengalaman" />
              <div className="info-pengalaman">
                <h3 className="job">Engineer</h3>
                <h4 className="company">Tokopedia</h4>
                <h5 className="date">July 2019 - January 2020 ( 6 Month )</h5>
                <p className="job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque! Adipisci velit commodi rem autem corrupti obcaecati, aperiam ipsa at?
                </p>
              </div>
            </div>

            <div className="card-pengalaman">
              <img src="./images/logo-tokopedia.png" alt="" className="image-pengalaman" />
              <div className="info-pengalaman">
                <h3 className="job">Engineer</h3>
                <h4 className="company">Tokopedia</h4>
                <h5 className="date">July 2019 - January 2020 ( 6 Month )</h5>
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