import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import pictone from "../../assets/image/gambar1.svg"
import picttwo from "../../assets/image/gambar2.svg"
import pictthree from "../../assets/image/gambar3.svg"
import listone from "../../assets/image/hary.svg"
import listtwo from "../../assets/image/nial.svg"
import listthree from "../../assets/image/louis.svg"
import Peworld from "../../assets/images/peworld.svg"
import Footer from "../../component/footer";

export default function LandingPage() {
    const navigate = useNavigate();

    function logoutUser() {
      localStorage.getItem("company_name") ? navigate('/login/recruiter') : navigate('/login/candidate');
      if (localStorage.getItem("company_name")) {
        localStorage.clear();
        navigate('/login/recruiter')
      } else {
        localStorage.clear();
        navigate('/')
      }
    }

    useEffect(()=>{
      localStorage.getItem('company_name') && navigate('/home')
    },[])

    return(
        <div className="bg-white">
        <nav className="container navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand" href={
            localStorage.getItem("token") && localStorage.getItem("company_name") ? '/home' : localStorage.getItem("token") ? '/edit-candidate' : '/'
          }><img src={Peworld} width={90} height={50} /></a>
          {
            localStorage.getItem("token") ?
              <button style={{color: '#5E50A1', fontFamily: 'OpenSans', padding: '0.8rem', outlineColor: '#5E50A1', outlineStyle: 'solid', textDecoration: 'none'}} onClick={logoutUser}>Log Out</button>
            :
              <form className="d-flex gap-5">
                <a className="workerLogin" href="/login/candidate" style={{color: '#5E50A1', fontFamily: 'OpenSans', padding: '0.8rem', outlineColor: '#5E50A1', outlineStyle: 'solid', textDecoration: 'none'}}>Login as Worker</a>
                <a style={{color: '#FFFFFF', backgroundColor: '#5E50A1',  fontFamily: 'OpenSans', padding: '0.8rem', outlineColor: '#5E50A1', outlineStyle: 'solid', textDecoration: 'none'}} href="/login/recruiter">Login as Recruiter</a>
              </form>
          }
        </nav>
        <main className="mb-5  bg-white">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-4 text-center text-md-start">
              <h1 className="fw-bold text-dark">
                Talenta terbaik negeri untuk perubahan revolusi 4.0
              </h1>
              <p className="my-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
              </p>
              <Link href="/home" className="btn btn-primary btn-lg">
                Mulai Dari Sekarang
              </Link>
            </div>
            <div className="col col-md-6">
              <img
                src={pictone}
                className="img-fluid"
                alt="gambar1"
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row-reverse justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-5 text-center text-md-start">
              <h2 className="mb-4 text-black fw-bold">
                Kenapa harus mencari tallent di Peworld
              </h2>
              <div className="mt-4">
                  <ListGroup>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-bold">
                        <box-icon type="solid" color="#5e50a1" name="check-circle"></box-icon>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-bold">
                        <box-icon type="solid" color="#5e50a1" name="check-circle"></box-icon>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-bold">
                        <box-icon type="solid" color="#5e50a1" name="check-circle"></box-icon>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-bold">
                        <box-icon type="solid" color="#5e50a1" name="check-circle"></box-icon>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
            </div>
            <div className="col col-md-6">
              <img
                src={picttwo}
                className="img-fluid"
                alt="gambar2"
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-5 text-center text-md-start">
              <h2 className="mb-4 text-black fw-bold">Skill Tallent</h2>
              <p className="my-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <div className="row flex-column flex-md-row">
                <div className="col d-none d-md-block">
                <div className="mt-4">
                  <div className="d-flex gap-4">
                    <ListGroup>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          Java
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          Kotlin
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          PHP
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          Javascript
                        </div>
                      </ListGroup.Item>
                    </ListGroup>

                    <ListGroup>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          Golang
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          C++
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          Ruby
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-bold">
                          <box-icon type="solid" color="#FBB017" name="check-circle"></box-icon>
                          10+ Bahasa lainnya
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col col-md-6">
              <img
                src={pictthree}
                className="img-fluid"
                alt="gambar3"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="container mb-5 pb-5">
        <div className="d-none d-md-flex row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4 text-center">
          <div className="col">
            <h2 className="mb-4 text-black fw-bold">Their opinion about peworld</h2>
            <div className="row justify-content-center gap-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img
                    src={listone}
                    alt="pp-harry-styles"
                    style={{
                      border: "10px solid rgba(251, 176, 23, 0.37)",
                      borderRadius: "50%",
                    }}
                  />
                  <h5 className="card-title fw-semibold">Harry Styles</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img
                    src={listtwo}
                    alt="pp-niall-horan"
                    style={{
                      border: "10px solid rgba(251, 176, 23, 0.37)",
                      borderRadius: "50%",
                    }}
                  />
                  <h5 className="card-title fw-semibold">Niall Horan</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img
                    src={listthree}
                    alt="pp-louis-tomlinson"
                    style={{
                      border: "10px solid rgba(251, 176, 23, 0.37)",
                      borderRadius: "50%",
                    }}
                  />
                  <h5 className="card-title fw-semibold">Louis Tomlinson</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row flex-column flex-md-row justify-content-between align-items-center px-5 py-4 mb-4 bg-primary"
          style={{
            height: "294px",
            backgroundImage: "url('bg-mulai-dari-sekarang.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "5vw 1vw",
          }}
        >
          <div className="col">
            <h2 className="m-0 text-white text-center text-md-start">
              Sudah yakin bergabung dengan kami?
            </h2>
          </div>
          <div className="col text-center text-md-end">
            <Link
              href="/home"
              className="btn btn-primary btn-lg bg-light text-primary fw-bold p-3"
            >
              Mulai Dari Sekarang
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
        </div>
    )
}