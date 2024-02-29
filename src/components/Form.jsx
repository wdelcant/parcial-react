import { useState } from 'react';
import './Form.scss';
import Card from './Card';

const Form = () => {
  const [formcar, setFormcar] = useState({
    name: '',
    car: '',
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = e => {
    e.preventDefault();

    if (formcar.name.trim().length >= 3 && formcar.car.length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1 className="title">Tu Auto favorito</h1>
      {show ? (
        <div className="">
          <Card name={formcar.name} car={formcar.car} />
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleSumbit} className="form">
            <h2 className="form__title">Ingresa tu auto favorito</h2>

            <label className="form__label" htmlFor="name">
              Nombre
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Ingresa tu nombre"
              id="name"
              value={formcar.name}
              onChange={e => setFormcar({ ...formcar, name: e.target.value })}
            />

            <label className="form__label" htmlFor="car">
              Auto Favorito
            </label>
            <input
              placeholder="Ingresa tu auto favorito"
              className="form__input"
              type="text"
              id="car"
              value={formcar.car}
              onChange={e => setFormcar({ ...formcar, car: e.target.value })}
            />

            {error && (
              <p className="form__error">
                Por favor chequea que la información sea correcta
              </p>
            )}
            <button className="form__button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
