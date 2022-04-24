/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
    Card,
    CardHeader,
    Button,
    Table,
    Container,
    CardBody,
    Row,
    Col,
} from "reactstrap";

import useAxios from 'hooks/useAxios';
import api from 'api/monitoring';

const Survey = (uuid) => {
    const [monitoring, monError, monLoading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/monitoring/value/' + uuid,
    });

    const [identity, idyError, idyLoading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/monitoring/terdaftar/' + uuid,
    });

    const [analisa, anError, anLoading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/monitoring/analisa/' + uuid,
    });

    return (
        <>
            <Container className="mt--7" fluid>
            <Row className="mt-5">
                <Col className="mb-5 mb-xl-0" xl="6">
                    <Card className="shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                        <div className="col">
                            <h3 className="mb-0">Monitoring</h3>
                        </div>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">Sensing</th>
                            <th scope="col">Diambil pada</th>
                        </tr>
                        </thead>
                        <tbody>
                        { !monLoading && !monError && monitoring.data !== null && monitoring.data.map((mon, i) => 
                        <tr key={i}>
                            <td>{mon.value}</td>
                            <td>{mon.dibuat_pada}</td>
                        </tr>
                        )}
                        </tbody>
                    </Table>
                    </Card>
                </Col>

                { !idyLoading && !idyError && identity?.data !== null &&
                <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card shadow">
                <CardHeader className="text-center">
                    <div className="d-flex justify-content-between">
                    <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                    >
                        Connect
                    </Button>
                    <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="text-center">
                    <h3>
                        {identity.data.nama}
                        <span className="font-weight-light">, {identity.data.tipe_sensor.tipe}</span>
                    </h3>
                    <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        {`${identity.data.lokasi.provinsi}, ${identity.data.lokasi.kabupaten}, ${identity.data.lokasi.kecamatan}, ${identity.data.lokasi.desa}`}
                    </div>
                    <div>
                        <i className="ni education_hat mr-2" />
                        {identity.data.keterangan === '' && "Tidak ada keterangan"}
                        {identity.data.keterangan !== '' && identity.data.keterangan}
                    </div>
                    <hr className="my-4" />
                    <h3>Analisa Monitoring</h3>
                    { !anLoading && !anError && analisa.data !== null &&
                    <Table bordered={false} borderless={true}>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Jumlah</th>
                            <th>Rata-Rata</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Pagi</td>
                            <td>{analisa.data.morning.total}</td>
                            <td>{analisa.data.morning.average}</td>
                        </tr>
                        <tr>
                            <td>Siang</td>
                            <td>{analisa.data.noon.total}</td>
                            <td>{analisa.data.noon.average}</td>
                        </tr>
                        <tr>
                            <td>Sore</td>
                            <td>{analisa.data.afternoon.total}</td>
                            <td>{analisa.data.afternoon.average}</td>
                        </tr>
                        <tr>
                            <td>Malam</td>
                            <td>{analisa.data.night.total}</td>
                            <td>{analisa.data.night.average}</td>
                        </tr>
                        <tr>
                            <td>Tengah Malam</td>
                            <td>{analisa.data.midnight.total}</td>
                            <td>{analisa.data.midnight.average}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{analisa.data.overall.total}</td>
                            <td>{analisa.data.overall.average}</td>
                        </tr>
                        </tbody>
                    </Table>
                    }
                    </div>
                </CardBody>
                </Card>
            </Col>
            }

            </Row>
            </Container>
        </>
    )
}

export default Survey;