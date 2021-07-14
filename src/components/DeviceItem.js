import React from 'react';
import {Card, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/consts';
const DeviceItem = ({device}) => {
    const history = useHistory()
    return(
        <Col md={4} lg={3} sm={6} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{width: 150, cursor: 'pointer', margin: '0 auto'}}
                border={'light'}
            >
                <Image width={150} height={150} src={device.img} />
                <div className="d-flex justify-content-between align-items-center mt-1">
                    <div>Samsung...</div>
                    <div className="d-flex">
                        <div>{device.rating}</div>
                        <Image src={star} width={24} height={24} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
