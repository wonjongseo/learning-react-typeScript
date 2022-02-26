import {useParams} from "react-router-dom";

interface RouteParam {
    coinId: string;
}

function Coins() {
    const {coinId} = useParams<RouteParam>();
    return <div>Coin {coinId}</div>;
}

export default Coins;
