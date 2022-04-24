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
import SensorAngin from "views/sensor-angin";
import DaftarMonitoring from 'views/daftar-monitoring';

var routes = [
  {
    path: "/sensor/angin",
    name: "Sensor-Angin",
    icon: "ni ni-tv-2 text-primary",
    component: SensorAngin,
    layout: "/admin",
  },
  {
    path: "/monitoring-request",
    name: "Ajukan Monitoring",
    icon: "ni ni-single-02 text-yellow",
    component: DaftarMonitoring,
    layout: "/admin",
  },
];
export default routes;
