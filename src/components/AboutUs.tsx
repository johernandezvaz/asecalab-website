import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-400 mb-4">
      <div className="flex items-center justify-between cursor-pointer bg-red-500" onClick={toggleAccordion}>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <span className={`text-black ${isOpen ? 'transform rotate-90 text-red-500' : ''}`}>▶</span>
      </div>
      {isOpen && (
        <div className="text-black mt-2 " style={{ whiteSpace: 'pre-line' }}>
          {content}
        </div>
      )}
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-200 p-8 mr-20">
      <Accordion
        title="¿Quiénes somos?"
        content="El Laboratorio de Pruebas Mecánicas, Asesoría y Capacitación fue fundado el 1 de Octubre de 2020 en la Cd. De Chihuahua, Chihuahua, la abertura de esta fuente de trabajo es debido a la necesidad de ofrecer Ensayos Mecánicos, Asesoría y Capacitación a la Industria Aeroespacial, Automotriz, Metal mecánica y en general a cualquier tipo de Industria local, nacional o internacional."
      />
      <Accordion
        title="Misión"
        content="Contribuir a la Industria ofreciendo nuestros servicios como proveedor de Laboratorio de Pruebas Mecánicas, Metalografía y Microscopia Óptica, verificando el cumplimiento de los Estándares Nacionales e Internacionales en sus Productos y Materia Prima. Así como Asesorar y Capacitar en la implementación de Ensayos Mecánicas, Metalográficos u Ópticos."
      />
      <Accordion
        title="Visión"
        content="Ser líder a Nivel Local, Estatal, Nacional e Internacional, entendiendo al cliente y proporcionándole servicios de Pruebas Mecánicas, Metalografía y Microscopia Óptica, eficaces y confiables con Informes de Resultados Oportunos y con Tiempo de Entrega acorde a sus necesidades. Así como Asesorar y Capacitar, transmitiendo conocimientos para la Formación de Recurso Humano de nuevas generaciones."
      />
      <Accordion
        title="Valores"
        content="Transparencia. - Lo que se ofrece se cumple, no hay letras chiquitas.
        Honestidad. - Ética y Confidencialidad en sus productos y resultados.
        Coherencia como Valor Empresarial. - Los compromisos internos y externos se respetan y están en constante retroalimentación con nuestros clientes.
        Puntualidad en las Entregas. - Entendemos y nos ponemos en los zapatos del cliente, por lo que la fecha que se establece, se cumple, llueva, truene o relampaguee.
        Excelencia. - Los que formamos parte de esta empresa, estamos en constante búsqueda de la excelencia, buscando mejora el día a día.
        Adaptabilidad .- Nos adaptamos a las necesidades del cliente, ya que entendemos llos imprevistos y urgencias en una línea de producción.
        Constancia .- Somos constantes y perseverantes en los objetivos que nos trazamos.
        Cercanía.-  Somos cercanos a nuestros clientes , haciéndonos participes en su filosofía corporativa, ya que ellos son parte del crecimiento de nuestra empresa."
      />
    </div>
  );
};

export default AboutUs;
