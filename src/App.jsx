import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from './Store/Post-List-Store';
import './App.css'
import { useState } from 'react';

function App() {

  const [selected , setSelected]=useState("Home")
  

  return (
    <PostListProvider>
    <div className='sidebar-container'>
      <Sidebar selected={selected} setSelected={setSelected}/>
      <div className='main-container'>
        <Header/>
        {selected==="Home" ? (<PostList/>) : ( <CreatePost/>)}
       
        <Footer/>
      </div>
    </div>
    </PostListProvider>
  
  )
}

export default App
