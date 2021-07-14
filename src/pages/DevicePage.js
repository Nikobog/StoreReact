import React from 'react';
import {Col, Container, Image, Row, Button, Card} from 'react-bootstrap';
import bigStar from '../assets/star.png';

const DevicePage = () => {
    const device = {id: 1, name: 'S8', price: 5000, img: "", rating: 5}
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 Гб'},
        {id: 2, title: 'Камера', description: '12 Мп'},
        {id: 3, title: 'Процессор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '4000W'}
    ]

    return (
        <Container className="mt-3">
            <Row className="mb-3">
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover'}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m3">
                <h1>Характеристики:</h1>
                {description.map((info, index) =>
                    <Col key={info.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding: 10, margin: '0 15px', width: 'calc( 100% - 30px)'}}>
                        {info.title}: {info.description}
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
