import { useState } from "react";
import "./Join.css";
import FormInput from "./FormInput"

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
    alert(`Datos ingresados:\nNombre: ${formData.nombre}\nApellido: ${formData.apellido}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}`);
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Registro de usuario nuevo</h2>
        <h5>Ingrese sus datos para iniciar el proceso de alta</h5>
        <form onSubmit={handleSubmit}>
          <FormInput label="Nombre" type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
          <FormInput label="Apellido" type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
          <FormInput label="Email" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <FormInput label="Teléfono" type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
          <FormInput label="Password" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <FormInput label="Confirmar Password" type="password" name="confirmarPassword" placeholder="Confirmar Password" value={formData.confirmarPassword} onChange={handleChange} />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
