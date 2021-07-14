import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import {Button} from "bootstrap";
import CreateBrand from "../components/models/CreateBrand";
import CreateType from "../components/models/CreateType";
import CreateDevice from "../components/models/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container ClassName="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;
