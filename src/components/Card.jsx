import './Card.scss';

const Card = ({ name, car }) => {
  // agregar funcion al boton para volver al index
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Gracias por enviar tu auto favorito</h2>
        <h4 className="card__title">Nombre: {name}</h4>
        <p className="card__title">Auto Favorito: {car}</p>

        <button className="card__btn" onClick={handleClick}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default Card;
