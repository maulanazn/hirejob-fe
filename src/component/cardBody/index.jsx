import React from "react";

import { Card, Container, Button } from "react-bootstrap";

import image from "../../assets/images/imgrecruiter.png";
import "./index.css";

const CardBody = (props) => {
    const data = props.dataSource || {}

    return (
        <Container>
            <Card className="border-0 rounded-0">
                <div className="p-3 d-md-flex justify-content-between">
                    <div className="d-flex">
                        <img
                            src={data?.photo_profile || image}
                            alt="photo profile"
                            className="rounded-circle"
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="ms-3">
                            <h5 className="text-black">{data.name}</h5>
                            <p className="mb-1">{data.jobtitle}</p>
                            <div className="d-flex">
                                <box-icon name="map" color="gray" animation="tada"></box-icon>
                                <p className="ps-1">{data.location}</p>
                            </div>
                            <div className="d-flex gap-2 flew-wrap flex-grow-1">
                                {data?.skills?.map((element, index) => {
                                    return (<Button variant="warning" className="btn-sm px-3 text-white" key={index}>
                                        {element}
                                    </Button>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-flex align-items-md-center mt-3 mt-md-0">
                        <Button className="btn-sm px-3 border-0 py-2 rounded-0 custom-button d-block mx-auto" href="/detail-profile/:id">
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