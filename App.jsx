import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">


      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
