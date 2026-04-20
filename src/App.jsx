import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience'
import KeyProjectsAndProduct from './components/KeyProjectsAndProduct'

function App() {
  return (
    <ErrorBoundary>
      <Header/>
      <Banner/>
      <About/>
      <WorkExperience/>
      <KeyProjectsAndProduct/>
      <Services/>
      <Expertise/>
      <Footer/>
    </ErrorBoundary>
  );
};

export default App
