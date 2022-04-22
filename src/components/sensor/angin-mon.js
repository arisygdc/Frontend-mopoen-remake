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
    Row,
    Col,
} from "reactstrap";

import useAxios from 'hooks/useAxios';
import api from 'api/monitoring';

const AnginMon = (uuid) => {
    const [data, error, loading] = useAxios({
        axiosInstance: api,
        method: 'GET',
        url: 'api/v1/monitoring/value?uuid=' + uuid,
    });

    return (
        <>
            <Container className="mt--7" fluid>
            <Row className="mt-5">
                <Col className="mb-5 mb-xl-0" xl="8">
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
                        { !loading && !error && data.data !== null && data.data.map((mon, i) => 
                        <tr>
                            <td>{mon}</td>
                            <td>-</td>
                        </tr>
                        )}
                        </tbody>
                    </Table>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default AnginMon;