function  AccesoAutorizado(props){
  return <h1>Bienvenido, {props.nombre} </h1>
}

function  AccesoNoAutorizado(props){
  return <h1>{props.nombre} no estas autorizado!! </h1>
}

export default function Acceder(props) {

    const tieneAcceso = props.tieneAcceso;

    if(tieneAcceso){
      return <AccesoAutorizado nombre={props.nombre} />;
    }

      return <AccesoNoAutorizado nombre={props.nombre} />;
    
}


