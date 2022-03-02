import React, { useState } from 'react';
import { encodeTeammates } from './teammateEncoding';

function TeammateListForm(props) {
  // Defaulting to 2 objects to make it easier for most teams to use off-the-bat.
  const [teammates, setTeammates] = useState([
    { name: '' },
    { name: '' },
  ]);

  const addTeammate = (e) => {
    e.preventDefault();

    setTeammates([
      ...teammates,
      { name: '' },
    ]);
  }

  const onTeammateNameChange = (e, idx) => {
    setTeammates(
      teammates.map((teammate, i) => (
        i === idx ? { name: e.target.value } : teammate
      )),
    );
  }

  const onRandomize = (e) => {
    e.preventDefault();

    const shuffledTeammates = teammates
      .filter(teammate => !!teammate.name)
      .map(teammate => ({ name: teammate.name, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ name }) => ({ name }));

    props.onSubmit(encodeTeammates(shuffledTeammates));
  }

  return (
    <form className="pt-2" onSubmit={onRandomize}>
      {teammates.map((teammate, idx) => (
        <label className="block pt-4" key={idx}>
          <span className="text-sm text-gray-600">Teammate name</span>
          <input
            value={teammate.name}
            onChange={(e) => onTeammateNameChange(e, idx)}
            type="text"
            name="name"
            className="block w-9/12"
          />
        </label>
      ))}

      <button onClick={addTeammate} className="mt-6 py-1 px-4 border border-gray-400 group hover:bg-gray-600">
        <div className="flex items-center text-sm text-gray-600 group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="pl-1">Add another teammate</span>
        </div>
      </button>

      <input value="Randomize!" type="submit" className="mt-8 p-2 block w-full bg-indigo-600 text-indigo-50 cursor-pointer hover:bg-indigo-800" />
    </form>
  );
}

export default TeammateListForm;
