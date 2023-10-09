import React, { useState } from "react";
import "./index.css";
import { Container, FormControl, Button, Dropdown } from "react-bootstrap";

const Search = () => {
    const [category, setCategory] = useState('')

    return (
        <Container className="my-4">
            <div>
                <div className="custom-searchbar w-100 d-flex flex-row justify-align-content-between">
                    <FormControl
                        className="py-3 border-0"
                        placeholder={`Search for any ${category}`}
                    />
                    <Dropdown className="d-flex align-items-center me-2 border-start my-2">
                        <Dropdown.Toggle
                            id="dropdown"
                            className="bg-transparent border-0 text-black-50"
                        >
                            Kategori
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="mt-3">
                            <Dropdown.Item onClick={() => setCategory('nama')}>
                                Sortir berdasarkan nama
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('skill')}>
                                Sortir berdasarkan Skill
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('lokasi')}>
                                Sortif berdasarkan Lokasi
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('freelance')}>
                                Sortir berdasarkan freelance
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setCategory('fulltime')}>
                                Sortir berdasarkan fulltime
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className="my-2 me-2 px-3 custom-button-search">
                        Search
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Search;