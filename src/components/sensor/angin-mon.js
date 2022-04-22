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

const AnginMon = (uuid) => {
    const [monitoring, monError, monLoading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/monitoring/value?uuid=' + uuid,
    });

    const [identity, idyError, idyLoading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/monitoring/terdaftar?uuid=' + uuid,
    });

    console.log(identity)
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
                        <div className="col text-right">
                            <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            >
                            See all
                            </Button>
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
                            <td>{mon}</td>
                            <td>-</td>
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
                        Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                        <i className="ni education_hat mr-2" />
                        University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                        {identity.data.keterangan === '' && "Tidak ada keterangan"}
                        {identity.data.keterangan !== '' && identity.data.keterangan}
                    </p>
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

export default AnginMon;