import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetails from './components/Posts/PostDetails';
import CreatePost from './components/Posts/CreatePost';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        {/* <PostDetails/> */}
        {/* <CreatePost/> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
