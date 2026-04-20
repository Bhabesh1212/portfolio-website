import { Suspense, lazy } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'

// Code splitting with lazy loading
const Banner = lazy(() => import('./components/Banner'))
const About = lazy(() => import('./components/About'))
const WorkExperience = lazy(() => import('./components/WorkExperience'))
const KeyProjectsAndProduct = lazy(() => import('./components/KeyProjectsAndProduct'))
const Services = lazy(() => import('./components/Services'))
const Expertise = lazy(() => import('./components/Expertise'))
const DomainExpertise = lazy(() => import('./components/DomainExpertise'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <p className="mt-2 text-gray-600">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <Header/>
      <Suspense fallback={<SectionLoader />}>
        <Banner/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WorkExperience/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <KeyProjectsAndProduct/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Expertise/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <DomainExpertise/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactForm/>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer/>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App
