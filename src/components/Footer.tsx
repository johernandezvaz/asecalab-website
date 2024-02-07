const Footer: React.FC = () => {
    return (
      <footer className="bg-blue-500 p-8 text-white text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Redes Sociales</h2>
          <p className="mb-2">
            Síguenos en Facebook:
            <a href="https://www.facebook.com/profile.php?id=100068220014623" target="_blank" rel="noopener noreferrer" className="ml-2 underline">
            Pruebas Mecánicas: Ase-Ca Lab 
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p>Correo electrónico:
            <a href="mailto:ase.ca.lab@gmail.com" className="ml-1 underline">
              ase.ca.lab@gmail.com
            </a>
          </p>
          <p>Ubicación: Chihuahua, Chihuahua, México</p>
        </div>
        <div>
          <p>© 2024 Laboratorio ASE CA Lab</p>
          <p>Sitio hecho por
            <a href="https://www.facebook.com/noubeaumx/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">
              Noubeau
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  