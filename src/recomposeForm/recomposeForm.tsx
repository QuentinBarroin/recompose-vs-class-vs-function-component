import React from 'react';

const RecomposeForm = ({firstName, lastName, age, message, color, bgColor, handleAgeChange, handleChangeColor, handleSubmit, setAge, setLastName, setFirstName}: any) => {
  
  return (
    <div className={`container ${color === 'black' ? 'dark' : 'light'}`}>
      <div style={{ background: bgColor }}>Un conteneur de couleur</div>
      <h1>Recompose Form</h1>
      <p>Prop message : {message}</p>
      <p>La couleur est : {color}</p>
      <button onClick={handleChangeColor}>Changer le thème</button>
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <label htmlFor="name">Prénom</label>
          <input name="name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className="form-line">
          <label htmlFor="name">Prénom</label>
          <input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <div className="form-line">
          <label htmlFor="name">Age</label>
          <input name="age" type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
        </div>
        <button type="submit" className="form-submit">
          VALIDER
        </button>
        <p>{JSON.stringify({ firstName, lastName, age })}</p>
      </form>
    </div>
  );
};

export default RecomposeForm;
