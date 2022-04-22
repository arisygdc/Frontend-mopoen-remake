import Header from 'components/Headers/Header';
import LokPicker from 'components/sensor/angin-lok-picker';
import { useLocation } from "react-router-dom";
import AnginMon from 'components/sensor/angin-mon';

const SensorAngin = () => {
    let location = useLocation()
    let queryParam = new URLSearchParams(location.search)
    const uuid = queryParam.get("uuid")
    if (uuid > '') {
        return (
            <>
                <Header />
                {AnginMon(uuid)}
            </>
        )
    }
    
    return (
        <>
            <Header />
            <LokPicker />
        </>
    )
}

export default SensorAngin;