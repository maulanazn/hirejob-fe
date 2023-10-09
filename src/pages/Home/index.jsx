import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import NavigationBar from "../../component/navbar";
import Search from "../../component/search";
import CardBody from "../../component/cardBody";
import "../../assets/exCss/main.css";
import "./index.css"
import axios from "axios";
import Footer from "../../component/footer";
import { URL } from "../../redux/config/URL";


export default function HomePage() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState([])

  const manipulateTotalPage = (totalPage) => {
    let rows = []
    for (let i = 1; i <= totalPage; i++) {
      rows.push(i)
    }
    return setTotalPage(rows)
  }

  const token = localStorage.getItem('token')
  const getData = () => {
    axios.get(`${URL}/candidates?offset=${currentPage}&limit=5`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        const totalPage = Math.ceil(res.data.data.length / 10)
        manipulateTotalPage(totalPage)
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [currentPage])

  return (
    <div className="body">
      <NavigationBar />

      <Navbar className="custom-bg-nav">
        <Container>
          <NavbarBrand>
            <h5 className="mb-3 text-white">Top Jobs</h5>
          </NavbarBrand>
        </Container>
      </Navbar>

      {/* search */}
      <Search />

      {/* Card */}
      {data?.map((el, index) => {
        return (<CardBody dataSource={el} key={index} />)
      })}

      <Container>
        <div className="d-flex justify-content-center mt-4">
          <div>
            <nav aria-label="Page navigation example">
              <ul className="pagination gap-2">
                <li className="page-item">
                  <button className="pagination-btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage == 1}>
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                {totalPage.map((data, index) => {
                  return <li className="page-item" key={index}>
                    <button className={"pagination-btn " + (data == currentPage && 'active-btn')} onClick={() => setCurrentPage(data)}>
                      {data}
                    </button>
                  </li>
                })}

                <li className="page-item">
                  <button className="pagination-btn" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == totalPage.length}>
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </Container>

      <Footer />
    </div>
  )
}