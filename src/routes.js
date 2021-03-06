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
import Monitoring from "views/monitoring";
import DaftarMonitoring from 'views/daftar-monitoring';

var routes = [
  {
    path: "/monitoring-request",
    name: "Ajukan Monitoring",
    icon: "ni ni-single-02 text-yellow",
    component: DaftarMonitoring,
    layout: "/admin",
  },
  {
    path: "/sensor/tekanan-angin",
    name: "Sensor Tekanan Angin",
    icon: "ni ni-tv-2 text-primary",
    component: Monitoring,
    layout: "/admin",
  },
  {
    path: "/sensor/debit-air",
    name: "Sensor Debit Air",
    icon: "ni ni-tv-2 text-primary",
    component: Monitoring,
    layout: "/admin",
  },
];
export default routes;
