import React, { useState } from 'react'
import googleLogo from '../images/googleLogo.svg';
import { Box, Container } from '@mui/material/';
import { FaSistrix, FaMicrophone } from "react-icons/fa";

const Home = (props) => {
    const [state, setstate] = useState('');
    const searchGoogle = (e) => {
        props.history.push({ pathname: '/search', state });
    }
    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ height: '100vh' }} >
                    <div className="home">
                        <div className="home__container">
                            <div className="home__logo">
                                <img src={googleLogo} alt="Logo" />
                            </div>
                            <form className="home__form" onSubmit={searchGoogle}>
                                <input type="text" className="home__input" onChange={(e) => setstate(e.target.value)} value={state} />
                                <div className="home__group">
                                    <input type="submit" className="home__btn" value="Google Search" />
                                </div>
                                <FaSistrix className="search__icon" />
                                <FaMicrophone className="microphone" />
                            </form>
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default Home;
