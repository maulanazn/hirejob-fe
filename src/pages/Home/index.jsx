import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, Card } from "react-bootstrap";
import NavigationBar from "../../component/navbar";
import Search from "../../component/search";
import CardBody from "../../component/cardBody";
import "../../assets/exCss/main.css";
import "./index.css"
import axios from "axios";
import Footer from "../../component/footer";


export default function HomePage() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPage, setTotalPage] = useState([1])


    const manipulateTotalPage = (totalPage) => {
        let rows = []
        for (let i = 1; i <= totalPage; i++) {
            rows.push(i)
        }
        return setTotalPage(rows)
    }

    const getData = (page) => {
        const url = new URL('https://lazy-teal-piranha-vest.cyclic.cloud/recruiter/all-candidate');
        url.searchParams.append('page', page);
        url.searchParams.append('limit', 10);

        axios.get(url)
            .then((res) => {
                console.log(res)
                manipulateTotalPage(5)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData(1)
    }, [])

    useEffect(() => {
        getData(currentPage)
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
            
            <Footer/>
        </div>
    )





}