// src/components/ContactForm.tsx

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verificar campos vacíos
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear el contenido del correo
    const emailContent = `Nombre: ${formData.name}\nCorreo electrónico: ${formData.email}\nMensaje: ${formData.message}`;

    // Crear el link del correo
    const mailtoLink = `mailto:ase.ca.lab@gmail.com?subject=Contacto&body=${encodeURIComponent(emailContent)}`;

    // Abrir el cliente de correo predeterminado
    window.location.href = mailtoLink;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center text-center bg-transparent">
      <div className="p-4 bg-transparent">
        <h2 className="text-3xl font-bold mb-4 bg-transparent">Ponte en contacto</h2>
        <p className="bg-transparent">
          Si estás interesado en realizar tus pruebas mecánicas o capacitarte, ponte en contacto con nosotros.
        </p>
      </div>
      <form className="w-full md:w-1/2 p-4 bg-transparent" onSubmit={handleSubmit}>
        <div className="mb-4 bg-transparent">
          <label htmlFor="name" className="block text-sm font-bold mb-2 bg-transparent text-left">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b-4 border-blue-500 p-2 focus:outline-none bg-transparent"
          />
        </div>
        <div className="mb-4 bg-transparent">
          <label htmlFor="email" className="block text-sm font-bold mb-2 bg-transparent text-left">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-4 border-blue-500 p-2 focus:outline-none bg-transparent"
          />
        </div>
        <div className="mb-4 bg-transparent">
          <label htmlFor="message" className="block text-sm font-bold mb-2 bg-transparent text-left">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b-4 border-blue-500 p-2 focus:outline-none bg-transparent"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mb-3 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
