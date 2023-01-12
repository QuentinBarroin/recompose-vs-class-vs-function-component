import React, { useEffect, useState } from 'react';

const HookForm = () => {
  const [firstName, setFirstName] = useState<string>('Yves');
  const [lastName, setLastName] = useState<string>('Era');
  const [age, setAge] = useState<number>(22);

  useEffect(() => {
    console.log('function component did mount');
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // submit some data here :)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Formulaire Hook/Function component</h1>
        <div className="form-line">
          <label htmlFor="name">Prénom</label>
          <input name="name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className="form-line">
          <label htmlFor="lastName">Nom</label>
          <input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <div className="form-line">
          <label htmlFor="age">Age</label>
          <input name="age" type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value, 10))}></input>
        </div>
        <button type="submit" className="form-submit">
          VALIDER
        </button>
        <p>{JSON.stringify({ firstName, lastName, age })}</p>
      </form>
    </div>
  );
};
export default HookForm;
