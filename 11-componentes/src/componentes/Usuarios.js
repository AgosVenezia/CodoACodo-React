import bootstrap from 'bootstrap';

/* props = parámetros */

export default function Usuarios(props) {
    return (
      /*<div>
        <h3>Nombre: Gisela</h3>
        <p>Edad: 40</p>
      </div>*/

      <div>
        <h3 style={{backgroundColor : "#6ab150"}}>Nombre: {props.nombre}</h3>
        <p>Edad: {props.edad}</p>
        <p>{props.localidad}</p>
      </div>

      /*<div className="card" style={{width : "18rem"}}>
        <div className="card-body">
          <h3 className="card-title">{props.nombre}</h3>
          <h6 className="card-subtitle mb-2 text-muted">Encargado</h6>
          <p className="card-text">{props.edad}</p>
        </div>
      </div>*/
      
    )
  }