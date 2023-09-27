import { useEffect } from "react"
import { getWorkerById} from "../../redux/actions/workerActions";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailProfile = () => {
  const dispatch = useDispatch();

  const {id} = useParams()

  const worker = useSelector((state)=>state.worker.worker)

  console.log(worker)
  useEffect(()=> {
    dispatch(getWorkerById(id))
  },[])

  function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const tanggal = new Date(inputDate).toLocaleDateString('id-ID', options);
    return tanggal;
  }
  const skills = 'html,css,php,js,react,express,postgre'
  const workStart = formatDate(worker.working_start_at)
  const workEnd = formatDate(worker.working_end_at)
  // const skillsArr = worker.user_skill.split(',');
  const skillsArr = skills.split(',');
  return (
    <div id='detail-profile'>
      <div className="bio">
          <img src={worker.user_photo} className="photo-profile"/>
        
          <h1 className='name' >{worker.user_name}</h1>
          <h3 className='job'>{worker.user_lastwork}</h3>
          <div className="address">
            <img src='/image/icon-location.svg' alt="" className="icon-location" />
            <h3 className="text-address">{worker.user_domicile}</h3>
          </div>

          <h3 className="type-job">{worker.user_position}Leader</h3>

          <p className="description">{worker.user_description}</p>

          <div className="skill">
            <h2 className="head-skill">Skills</h2>

            <div className="list-skill">
              {skillsArr.map((skill)=>(
                <p className="name-skill">{skill}</p>   
              ))}
            </div>  
          </div>

          <div className="media-social">
            <div className="email">
              <img src='/image/icon-email.svg' alt="" className="icon-sos" />
              <p className="email-name">aryajulianda</p>
            </div>

            <div className="instagram">
              <img src='/image/icon-instagram.svg' alt="" className="icon-sos" />
              <p className="instagram-name">dfjkjjkffajf</p>
            </div>

            <div className="git-hub">
              <img src='/image/icon-github.svg' alt="" className="icon-sos" />
              <p className="git-hub-name">aksljfajfdl</p>

            </div>
            <div className="git-lab">
              <img src='/image/icon-gitlab.svg' alt="" className="icon-sos" />
              <p className="git-lab-name">asfdkljasdfljasdfj</p>
            </div>
          </div>

          <button className="hire-button">Hire</button>

      </div>

      <div className="etalase">
        <div className="portfolio">

            <h2 className="head-portfolio">Portfolio</h2>

            <div className="list-portfolio">
              <div className="card-portfolio">
                <div className="image-portfolio" style={{backgroundImage:`url("${worker.portfolio_photo}")`}}/>
                <h5 className="title">{worker.portfolio_name}</h5>
              </div>

            </div>
            
        </div>

        <div className="pengalaman">
          <h2 className="head-pengalaman">Pengalaman Kerja</h2>

          <div className="list-pengalaman">

            <div className="card-pengalaman">
              <img src="/image/company.svg" alt="" className="image-pengalaman" />
              <div className="info-pengalaman">
                <h3 className="job">{worker.work_position}</h3>
                <h4 className="company">{worker.company_name}</h4>
                <h5 className="date">{workStart +`  -  `+ workEnd}</h5>
                <p className="job-description">
                  {worker.work_description}
                </p>
              </div>
            </div>

          </div>


        </div>

      </div>


      <div className="box-purple"></div>
    </div>

    // <div id='detail-profile'>
    //   <div className="bio">
    //       <img src={user.photo_profile ? user.photo_profile : defaultPhotoProfile} alt={user.photo_profile} className="photo-profile"/>
        
    //       <h1 className='name' >{user.user_name}</h1>
    //       <h3 className='job'>Web Developer</h3>
    //       <div className="address">
    //         <img src={iconLocation} alt="" className="icon-location" />
    //         <h3 className="text-address">{user.user_city},{user.user_province}</h3>
    //       </div>

    //       <h3 className="type-job">{user.work_position}</h3>

    //       <p className="description">{user.user_description}</p>

    //       <div className="skill">
    //         <h2 className="head-skill">Skill</h2>

    //         <div className="list-skill">
    //           <p className="name-skill">{user.skill_name}</p>   
    //         </div>  
    //       </div>

    //       <div className="media-social">
    //         <div className="email">
    //           <img src={iconEmail} alt="" className="icon-sos" />
    //           <p className="email-name">{user.user_email}</p>
    //         </div>

    //         <div className="instagram">
    //           <img src={iconInstagram} alt="" className="icon-sos" />
    //           {user.user_instagram &&
    //           <p className="instagram-name">{user.user_instagram}</p>}
    //           <p className="instagram-name">--</p>
    //         </div>

    //         <div className="git-hub">
    //           <img src={iconGithub} alt="" className="icon-sos" />
    //           {user.user_github && 
    //           <p className="git-hub-name">{user.user_github}</p>}
    //           <p className="git-hub-name">--</p>

    //         </div>
    //         <div className="git-lab">
    //           <img src={iconGitlab} alt="" className="icon-sos" />
    //           {user.user_gitlab && 
    //           <p className="git-lab-name">{user.user_gitlab}</p>}
    //           <p className="git-lab-name">--</p>
    //         </div>
    //       </div>

    //       <button className="hire-button">Hire</button>

    //   </div>

    //   <div className="etalase">
    //     <div className="portfolio">

    //         <h2 className="head-portfolio">Portfolio</h2>

    //         <div className="list-portfolio">
    //           <div className="card-portfolio">
    //             <img src={user.portfolio_photo} alt={user.portfolio_photo} className="image-portfolio"/>
    //             <h5 className="title">{user.portfolio_name}</h5>
    //           </div>

    //         </div>
            
    //     </div>

    //     <div className="pengalaman">
    //       <h2 className="head-pengalaman">Pengalaman Kerja</h2>

    //       <div className="list-pengalaman">

    //         <div className="card-pengalaman">
    //           <img src="" alt="" className="image-pengalaman" />
    //           <div className="info-pengalaman">
    //             <h3 className="job">Engineer</h3>
    //             <h4 className="company">{user.work_company_name}</h4>
    //             <h5 className="date">{user.working_start} - {user.working_end} ( 6 Month )</h5>
    //             <p className="job-description">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque! Adipisci velit commodi rem autem corrupti obcaecati, aperiam ipsa at?
    //             </p>
    //           </div>
    //         </div>

    //       </div>


    //     </div>

    //   </div>


    //   <div className="box-purple"></div>
    // </div>
  )
};

export default DetailProfile;

