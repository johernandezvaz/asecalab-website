
import logo from '/ASE-CA LAB-02.png'
import thumbnail from '/CONSULTA.png'
import './App.css'
import Header from './components/Header';
import Quote from './components/Quote';
import Slideshow from './components/Slideshow';
import VideoSection from './components/VideoSection';
import CourseCard from './components/CourseCard';
import { coursesData } from './data/CourseData';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {

  const slideImages = [
    '/slide-1.png',
    '/slide-2.png',
    '/slide-3.png',
    '/slide-4.png',
    '/slide-5.png',
    '/slide-6.png',
  ];

  return (
    <div className="bg-gray-200">

      <Header logoSrc={logo} />
      <Quote />
      <Slideshow images={slideImages}/>
      <VideoSection 
      videoSrc='https://www.facebook.com/reel/327009269945736'
      thumbnailSrc={thumbnail}
      title='¿Qué hay de nuevo en ASE-CA LAB?'
      subtitle='Videoclip'
      description='Ensayo de Ponch Test
      Consiste en verificar el apriete de las terminales (conectores) de cualquier tipo de cable , con la finalidad de asegurar que dicho cable no se safara durante su conexión. Debido a un mal ajuste en longitud, vibración o cualquier otro detalle de instalación del cable.' />
      <div className="bg-red-500 p-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Cursos de Capacitación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {coursesData.map((course: { title: string; description: string }, index: number) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App
