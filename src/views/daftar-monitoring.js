import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";

import Header from "components/Headers/Header";
import { useState } from "react";
import api from "api/monitoring";
import useAxios from "hooks/useAxios";

const DaftarMonitoring = () => {
    const CosumeApi = (api, url) => {
        const [Data, Error, Loading] = useAxios({
            axiosInstance: api,
            method: 'GET',
            url: url,
        });
        return [Data, Error, Loading]
    }

    const [mData, mError, mLoading] = CosumeApi(api, '/api/v1/sensors')
    const [pData, pError, pLoading] = CosumeApi(api, '/api/v1/lokasi/provinsi')

    const [FormContext, setData] = useState({
        tipe_sensor: 0,
        lokasi_id: 0,
        nama: "",
        keterangan: "",
    })

    const [lokContext, setLok] = useState([])

    const PostForm = (e) => {
        e.preventDefault();
        api.post('/api/v1/monitoring/daftar', {
            tipe_sensor: parseInt(FormContext.tipe_sensor),
            lokasi_id: parseInt(FormContext.lokasi_id),
            nama: FormContext.nama,
            keterangan: FormContext.keterangan,
        })
    }

    const ChangeForm = (e) => {
        const newData={...FormContext}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    const FetchLocation = async (e) => {
        const newData={...lokContext}
        const resp = await api.get('/api/v1/lokasi/kabupaten?depends=' + e.target.value)
        newData['kabupaten'] = resp.data
        setLok(newData)
    }

    
    return (
        <>
        <Header />
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
                        href="#pablo"
                        onClick={(e) => PostForm(e)}
                        size="sm"
                        >
                        Settings
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
                                    onChange={(e) => FetchLocation(e)}
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
                            <select
                                className="form-control"
                                id="kabupaten">
                                {lokContext?.length && 
                                    lokContext.map((kab, i) => <option value={kab.id} key={i}>{`${kab.nama}`}</option>)
                                }
                            </select>
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
                            <Input
                                className="form-control-alternative"
                                defaultValue="Lucky"
                                id="input-first-name"
                                placeholder="First name"
                                type="text"
                            />
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
                            <Input
                                className="form-control-alternative"
                                id="lokasi_id"
                                placeholder="desa"
                                type="number"
                                onChange={(e) => ChangeForm(e)}
                            />
                            </FormGroup>
                        </Col>
                        </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                        Monitoring
                    </h6>
                    <div className="pl-lg-4">
                        <Row>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country"
                            >
                                Nama Monitoring
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="nama"
                                placeholder="Postal code"
                                type="text"
                                onChange={(e) => ChangeForm(e)}
                            />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-city"
                            >
                                Sensor
                            </label>
                            
                                {mLoading && <p>Loading Sensor Data...</p>}

                                {!mLoading && mError && <p className="errMsg">{mError}</p>}

                                {!mLoading && !mError && mData?.data.length && <select
                                        className="form-control"
                                        id="tipe_sensor"
                                        placeholder="tipe sensor"
                                        onChange={(e) => ChangeForm(e)}>
                                        {mData.data.map((sensor, i) => <option value={sensor.id} key={i}>{`${sensor.tipe}`}</option>)}
                                    </select>
                                }

                                {!mLoading && !mError && !mData && <p>No mData to display</p>}

                            
                            </FormGroup>
                        </Col>
                        <Col lg="12">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country"
                            >
                                Country
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="United States"
                                id="keterangan"
                                placeholder="Country"
                                type="text"
                                onChange={(e) => ChangeForm(e)}
                            />
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

export default DaftarMonitoring;