import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import NavigationBar from "../../component/navbar";
import Search from "../../component/search";
import CardBody from "../../component/cardBody";
import "../../assets/exCss/main.css";
import "./index.css"
import Footer from "../../component/footer";
import { getAllWorkers} from "../../redux/actions/workerActions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../component/Pagination/Pagination";


export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const {listWorkers} = useSelector((state)=>state.worker)
  const limit = 5
  const totalPage = Math.ceil( listWorkers?.length / limit )



  useEffect(() => {
    dispatch(getAllWorkers())
    console.log({listWorkers})
  }, [])

  // const onNext = () => {
  //   currentPage < totalPage && setDataWorkers(listWorkers.slice(6,10))
  // }

  // const onPrev = () => {
  //   currentPage > 1 && setCurrentPage(currentPage - 1)
  // }

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

      <Search />

      {/* Card */}
      {listWorkers?.map((el, index) => {
        return (<CardBody dataSource={el} key={index} />)
      })}

      {/* <Pagination onNext={onNext} onPrev={onPrev} totalPage={totalPage} currentPage={currentPage} /> */}

      <Footer />
    </div>
  )
}