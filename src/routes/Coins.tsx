import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;

        display: flex;
        align-items: center;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;
const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.div`
    text-align: center;
    display: block;
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins, setCoins] = useState<ICoin[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://api.coinpaprika.com/v1/coins"
            );
            console.log(response);

            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);
    return (
        <Container>
            <Header>
                <Title>Coin</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: {name: coin.name},
                                }}
                                /*
                                react-router-dom 6.0.0버전 이상 
                                <Link to={} state={} >

                                react-router-dom 6.0.0버전 이상 제네릭 지원 안함.
                                interface RouterState {
                                    name: string;
                                }

                                const location = useLocation();
                                const name = location.state as RouterState;
                                */
                            >
                                <Img
                                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}

export default Coins;
