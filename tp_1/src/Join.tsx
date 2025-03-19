import { useState } from "react";
import "./Join.css"; // Importar los estilos

export default function Join() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Mostrar los datos en un alert
    alert(
        `Datos ingresados:\nNombre: ${formData.nombre}\nApellido: ${formData.apellido}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}`
      );
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="container">
  <div className="form-box">
    <h2>Registro de usuario nuevo</h2>
    <h5>Ingrese sus datos para iniciar el proceso de alta</h5>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Nombre" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" placeholder="Apellido" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="confirmarPassword">Confirmar Password:</label>
        <input type="password" id="confirmarPassword" name="confirmarPassword" placeholder="Confirmar Password" onChange={handleChange} required />
      </div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</div>
  );
}