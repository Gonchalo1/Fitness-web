import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';


function LoginRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const userId = data.user.id;
        localStorage.setItem('userId', userId);
        alert("Inicio de sesión exitoso");
        navigate('/');
      } else {
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert("Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión a Internet.");
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        alert("Registro exitoso");
        navigate('/login'); // Redirigir a la página de inicio de sesión después del registro
      } else {
        alert("Error al registrarse. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert("Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión a Internet.");
    }
  };

  return (
    <div className="principal-div">
      <h1 className="account-title">MI CUENTA</h1>
      <span className="account-sub-title">
        <Link to='/' className='link'>Home </Link>
         &gt; Mi cuenta  
      </span>
    <div className="login-register-container">
      
      <div className="form-wrapper">
        
        <div className="login-container">
          <h2 className="form-title"><i class="bi bi-person"></i> Ingresar</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="loginEmail">Nombre De Usuario O Correo electrónico</label>
              <input 
                type="email" 
                id="loginEmail" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Contraseña</label>
              <input 
                type="password" 
                id="loginPassword" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Recuérdame</label>
              <p className="form-link"><a href="#">¿Olvidaste tu contraseña?</a></p>
            </div>
            <button type="submit" className="form-button">Iniciar sesión</button>
            
          </form>
        </div>
        <div className="register-container">
          <h2 className="form-title"><i class="bi bi-box-arrow-in-right"/> Registrarse</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="registerUsername">Nombre De Usuario O Correo electrónico</label>
              <input 
                type="text" 
                id="registerUsername" 
                className="form-control" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerEmail">Correo electrónico</label>
              <input 
                type="email" 
                id="registerEmail" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div>
              <p>Tus datos personales se utilizarán para procesar tu pedido,
                 mejorar tu experiencia en esta web, gestionar el acceso a tu
                  cuenta y otros propósitos descritos en nuestra <Link className='link'>política de privacidad</Link>.</p>
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword">Contraseña</label>
              <input 
                type="password" 
                id="registerPassword" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="form-button">Registrarse</button>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginRegister;
