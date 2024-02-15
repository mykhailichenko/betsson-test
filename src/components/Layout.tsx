import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Layout:React.FC = () => {
    return(
        <>
            <header>
                <Link to='/'></Link>
            </header>

            <Outlet />

            <footer></footer>
        </>
    );
}

export default Layout;