import React from "react";

import { Card, Container, Button } from "react-bootstrap";

import image from "../../assets/images/imgrecruiter.png";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

const CardBody = (props) => {
    const navigate = useNavigate();
    const data = props.dataSource || {}
    const skillsArr = data?.skill_name?.split(',');

    function toDetail(id) {
        navigate(`/detail-candidate/${id}`)
    }

    return (
        <Container>
            <Card className="border-0 rounded-0">
                <div className="p-3 d-md-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <img
                            src={data?.user_photo || image}
                            alt="photo profile"
                            className="rounded-circle"
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="ms-3">
                            <h5 className="text-black">{data?.name}</h5>
                            <p className="mb-1 text-capitalize">{data?.last_work}</p>
                            <div className="d-flex gap-1">
                                <img src='/image/icon-location.svg' alt="" style={{width:'15px',height:'23px'}} />
                                <p className="text-capitalize">{data?.domicile}</p>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                {skillsArr?.map((item,index) => {
                                    return(
                                        <p key={index} className="bg-warning text-white rounded-1 p-1 mb-0" style={{fontSize:'13px'}}>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-flex align-items-md-center mt-3 mt-md-0">
                        <Button className="btn-sm px-3 border-0 py-2 rounded-0 custom-button d-block mx-auto" onClick={() => toDetail(data?.user_id)}>
                            Lihat Profile
                        </Button>
                    </div>
                </div>
                <hr className="mx-3" />
            </Card>
        </Container>
    )
}

export default CardBody;