import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/articles">Articles</Link>
            </nav>
            <h1>App components</h1>

            <Outlet></Outlet>

            <footer>Footer</footer>

        </div>
    )
}

export default Layout