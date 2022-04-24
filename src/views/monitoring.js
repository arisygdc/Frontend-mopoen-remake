import Header from 'components/Headers/Header';
import LokPicker from 'components/sensor/lok-picker';
import { useLocation } from "react-router-dom";
import Survey from 'components/sensor/survey';

const Monitoring = () => {
    let sensor_id = 0
    const location = useLocation()
    if (location.pathname === "/admin/sensor/tekanan-angin") {
        sensor_id = 1
    }
    if (location.pathname === "/admin/sensor/debit-air") {
        sensor_id = 2
    }
    const queryParam = new URLSearchParams(location.search)
    const uuid = queryParam.get("uuid")
    if (uuid > '') {
        return (
            <>
                <Header />
                { Survey(uuid) }
            </>
        )
    }
    
    return (
        <>
            <Header />
            { LokPicker(sensor_id) }
        </>
    )
}

export default Monitoring;