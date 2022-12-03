import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar} from './components/NavBar'
import {Banner} from './components/Banner'
import { Skills } from './components/Skills';
import { Project} from './components/Project'
import {Contact} from './components/Contact'
import { Footer } from './components/Footer';
import {Profile} from './components/Profile'


function App() {
  return (
    <div className=''>
      <NavBar/>
      <Banner path='/home'/>
      <Skills path='/skills'/>
      <Profile/>
      <Project path='/projects'/>
      <Contact path='/contact'/>
      <Footer/>
    </div>
  );
}

export default App;
