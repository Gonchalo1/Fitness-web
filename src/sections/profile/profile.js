
import '../../App.css';



import { Link } from 'react-router-dom';


function Perfil() {

  
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          
          <h2 className="mt-3">PERFIL</h2>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputName1" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleInputName1"  readOnly />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1"  readOnly />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputSex1" className="form-label">Sexo</label>
          <input type="text" className="form-control" id="exampleInputSex1"  readOnly />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputAge1" className="form-label">Edad</label>
          <input type="text" className="form-control" id="exampleInputAge1"  readOnly />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <Link to="/login">
            <button className="btn btn-danger m-1">Cerrar sesión</button>
          </Link>
          <Link to="/CambiarDatos">
            <button className="btn btn-info m-1">Cambiar Datos</button>
          </Link>
          <button type="button" className="btn btn-danger m-1">Borrar Cuenta</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
