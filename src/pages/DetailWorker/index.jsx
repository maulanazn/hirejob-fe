import { useEffect } from "react"
import { getWorkerById,createFormChat} from "../../redux/actions/workerActions";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BioWorker from "../../component/BioWorker";

const DetailWorker = () => {
  const dispatch = useDispatch();

  const {id} = useParams()
  const navigate = useNavigate()
  const {portfolio,sosmed,workexp} = useSelector((state)=>state.worker.worker)
  const userArr = useSelector((state)=> state.worker.worker.user)
  const user = userArr ? userArr[0] : undefined
  console.log({user,portfolio,sosmed,workexp})
  
  useEffect(()=> {
    dispatch(getWorkerById(id))
  },[])

  function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const tanggal = new Date(inputDate).toLocaleDateString('id-ID', options);
    return tanggal;
  }
  
  const sosmedObj = {}
  sosmed?.forEach(item => {
    sosmedObj[item.social_media_name.toLowerCase()] = item.link;
  });

  const skillsArr = user?.skill_name.split(',');

  const handleHire = () => {
    dispatch(createFormChat(id,navigate))

  }

  return (
    <div id='detail-profile'>

      <BioWorker user={user} skillsArr={skillsArr} sosmedObj={sosmedObj} handleHire={handleHire} />

      <div className="etalase">
        <div className="portfolio">

            <h2 className="head-portfolio">Portfolio</h2>

            <div className="list-portfolio">{ !portfolio?.length==0 || !portfolio ? 
              (portfolio?.map((item,index)=>{return(
                <div className="card-portfolio" key={index}>
                  <div className="image-portfolio" style={{backgroundImage:`url("${item.portfolio_photo}")`}}/>
                  <h5 className="title">{item.portfolio_name}</h5>
                </div>
              )})) :
                <p>Tidak ada portfolio</p>
              }
            </div>
            
        </div>

        <div className="pengalaman">
          <h2 className="head-pengalaman">Pengalaman Kerja</h2>

          <div className="list-pengalaman">
            { !workexp?.length==0 || !workexp ?
            workexp?.map((item,index)=>{return(
            <div className="card-pengalaman" key={index}>
              <img src={item.work_experience_photo ? item.work_experience_photo : "/image/company.svg"} alt="" className="image-pengalaman" />
              <div className="info-pengalaman">
                <h3 className="job">{item.work_experience_position}</h3>
                <h4 className="company">{item.company_name}</h4>
                <h5 className="date">{formatDate(item.working_start_at) +`  -  `+ formatDate(item.working_end_at)}</h5>
                <p className="job-description">
                  {item.work_experience_description}
                </p>
              </div>
            </div>
            )}) : 
            <p>Tidak ada Pengalaman Kerja</p>
            }

          </div>


        </div>

      </div>


      <div className="box-purple"></div>
    </div>


  )
};

export default DetailWorker;

