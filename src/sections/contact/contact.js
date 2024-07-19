import { Link } from 'react-router-dom';
import '../../App.css';
import { useRef } from 'react';

function Contact() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Texto copiado")
  };

  const handleCopyEmail = () => {
    copyToClipboard('gonzalocal127@gmail.com');
  };

  const handleCopyPhone = () => {
    copyToClipboard('+54 9 11 3217-9481');
  };

  return (
    <div className="principal-div-contact">
      <h1 className="account-title-contact">CONTACTO</h1>
      <span className="account-sub-title-contact">
        <Link to='/' className='link'>Home </Link>
         &gt; contacto  
      </span>
      <div className="contact-container">
        <h2 className="form-title-contact"> Tiempo de entrega</h2>
        <div className='elementor-divider'></div>
        <article className='article-contact'>
          Intentaremos responder dentro de las 24 horas; sin embargo, durante las horas de mayor actividad y los días festivos, 
          este tiempo puede demorar un poco más. Si su consulta es urgente, por favor no dude en llamarnos por teléfono.
        </article>
      </div>

      <div className="contact-section2">
        <div className='element1'>
          <h2>Detalles de contacto</h2>
          <div className='icon-text-container'>
            <div className='container-icon1'><i className="bi bi-envelope"></i></div>
            <span ref={emailRef} onClick={handleCopyEmail} className='copyable-text'>gonzalocal127@gmail.com</span>
          </div>
          <div className='icon-text-container'>
            <div className='container-icon2'><i className="bi bi-telephone"></i></div>
            <span ref={phoneRef} onClick={handleCopyPhone} className='copyable-text'>+54 9 11 3217-9481</span>
          </div>
        </div>
        <div className='element2'>
  <h2>Envianos tu consulta</h2>
  <form>
    <label>Nombre</label>
    <br/>
    <input className='name-contact' placeholder='Nombre'></input>
    <br/>
    <label>Email</label>
    <br/>
    <input type='email' className='email-contact' placeholder='Email'></input>
    <br/>
    <label>Tema</label>
    <br/>
    <input className='subject-contact' placeholder='Mensaje'></input>
    <br/>
    <label>Mensaje</label>
    <br/>
    <textarea className='message-contact' placeholder='...' style={{ width: '70%', height: '150px' }}></textarea>


    <br/>
    <button type="submit" className='submit-contact'>Enviar</button>
  </form>
</div>      </div>
    </div>
  );
}

export default Contact;
