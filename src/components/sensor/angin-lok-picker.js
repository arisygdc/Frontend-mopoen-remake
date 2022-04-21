import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Container,
    Row,
    Col,
} from "reactstrap";

import { useState } from "react";
import api from 'api/monitoring'
import useAxios from "hooks/useAxios";

const AnginLokPicker = () => {
    const [pData, pError, pLoading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/lokasi/provinsi',
    });

    const lokSelector = {
        kabupaten: 'kabupaten',
        kecamatan: 'kecamatan',
        desa: 'desa'
    }

    const [FormContext, setData] = useState({
        desa: 0
    })

    
    const [lokContext, setLok] = useState({
        kabupaten: [],
        kecamatan: [],
        desa: []
    })
    
    const ChangeForm = (e) => {
        const newData={...FormContext}
        newData[e.target.id] = parseInt(e.target.value)
        setData(newData)
    }

    const FetchLokasi = async (e, lokType) => {
        const newData={...lokContext}
        const resp = await api.get('/api/v1/lokasi/' + lokType +'?depends=' + e.target.value)
        newData[lokType] = resp.data.data
        setLok(newData)
    }

    return (
        <>
        <Container className="mt--7" fluid>
            <Row>
            <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                    <Col xs="8">
                        <h3 className="mb-0">Daftar Monitoring</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                        <Button
                        color="primary"
                        size="sm"
                        href={`?mon=${FormContext.desa}`}
                        >
                        Kirim
                        </Button>
                    </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Form>
                    <h6 className="heading-small text-muted mb-4">
                        Lokasi
                    </h6>
                    <div className="pl-lg-4">
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-username"
                            >
                                Provinsi
                            </label>
                            {pLoading && <p>Loading Provinsi Data...</p>}

                            {!pLoading && pError && <p className="errMsg">{pError}</p>}

                            {!pLoading && !pError && pData?.data.length && <select
                                    className="form-control"
                                    id="provinsi"
                                    onChange={(e) => FetchLokasi(e, lokSelector.kabupaten)}
                                    >
                                    <option>-</option>
                                    {pData.data.map((provinsi, i) => <option value={provinsi.id} key={i}>{`${provinsi.nama}`}</option>)}
                                </select>
                            }
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-email"
                            >
                                Kabupaten
                            </label>
                            {!lokContext[lokSelector.kabupaten].length && <p>Menunggu memilih provinsi</p>}

                            {lokContext[lokSelector.kabupaten]?.length !== 0 && 
                            <select className="form-control"id="kabupaten" onChange={(e) => FetchLokasi(e, lokSelector.kecamatan)}>
                                <option>-</option>
                                {lokContext[lokSelector.kabupaten].map((kab, i) => <option value={kab.id} key={i}>{`${kab.nama}`}</option>)}
                            </select>
                            }

                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                            >
                                Kecamatan
                            </label>
                            {!lokContext[lokSelector.kecamatan].length && <p>Menunggu memilih kabupaten</p>}

                            {lokContext[lokSelector.kecamatan]?.length !== 0 && 
                            <select className="form-control"id="kecamatan" onChange={(e) => FetchLokasi(e, lokSelector.desa)}>
                                <option>-</option>
                                {lokContext[lokSelector.kecamatan].map((kab, i) => <option value={kab.id} key={i}>{`${kab.nama}`}</option>)}
                            </select>
                            }
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                            >
                                Desa
                            </label>
                            {!lokContext[lokSelector.desa].length && <p>Menunggu memilih kecamatan</p>}

                            {lokContext[lokSelector.desa]?.length !== 0 && 
                            <select className="form-control" id="desa" onChange={(e) => ChangeForm(e)}>
                                <option>-</option>
                                {lokContext[lokSelector.desa].map((kab, i) => <option value={kab.id} key={i}>{`${kab.nama}`}</option>)}
                            </select>
                            }
                            </FormGroup>
                        </Col>
                        </Row>
                    </div>
                    </Form>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default AnginLokPicker;