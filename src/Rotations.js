import React from 'react';

function Rotations(props) {
  let lineup = props.lineup;

  const sessionsPerRotation = Math.floor(lineup.length / 2);
  const numberOfRotations = Math.ceil(lineup.length / sessionsPerRotation);
  const extraSessionAtTheEnd = lineup.length % 2 !== 0

  let rotations = [];
  for (let i = 0; i < numberOfRotations; i++) {
    let rotationN = [];
    if (extraSessionAtTheEnd && i === (numberOfRotations - 1)) {
      rotationN = [lineup[lineup.length - 1]];
    } else {
      for (let n = 0; n < sessionsPerRotation; n++) {
        rotationN = [...rotationN, lineup[(i + (n * 2))]]
      }
    }
    rotations = [...rotations, rotationN]
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Feedback Rotations</h2>
      <p className="pt-2 text-sm text-gray-600">
        Here's how to breakdown your feedback sessions.
      </p>

      <ul className="mt-4">
        {
          rotations.map((rotation, idxR) => (
            <React.Fragment key={idxR}>
              <h3 className="mt-6 text-xl font-bold">Round {idxR + 1}</h3>

              {
                rotation.map((feedbackGroup, idxF) => (
                  <li className="mt-4 text-xl" key={idxF}>
                    <span>{feedbackGroup.giver}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="pl-2">{feedbackGroup.receiver}</span>
                  </li>
                ))
              }
            </React.Fragment>
          ))
        }
      </ul>
    </>
  );
}

export default Rotations;
