import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import NavigationBar from "../../component/navbar";
import Search from "../../component/search";
import CardBody from "../../component/cardBody";
import "../../assets/exCss/main.css";
import "./index.css"
import Footer from "../../component/footer";
import { getAllWorkers } from "../../redux/actions/workerActions";
import { useDispatch, useSelector } from "react-redux";


export default function HomePage() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState([])
  const dispatch = useDispatch()
  const {listWorkers} = useSelector((state)=>state.worker)

  const manipulateTotalPage = (totalPage) => {
    let rows = []
    for (let i = 1; i <= totalPage; i++) {
      rows.push(i)
    }
    return setTotalPage(rows)
  }

  useEffect(() => {
    dispatch(getAllWorkers(currentPage))
    const totalPage = Math.ceil(listWorkers?.length / 10)
    manipulateTotalPage(totalPage)
  }, [])
  // console.log({listWorkers})

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
      {listWorkers?.map((el, index) => {
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