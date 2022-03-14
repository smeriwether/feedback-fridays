function Lineup(props) {
  const lineup = props.lineup;
  const firstFeedbackGroup = lineup[0];

  return (
    <>
      <h2 className="text-2xl font-bold">Today's lineup</h2>
      {
        lineup.length < 1 ? (
          <p className="pt-2">You need to <strong>at least 2 teammates</strong> to use Feedback Friday!. Start over by clicking the button below.</p>
        ) : (
          <>
            <p className="pt-2 text-sm text-gray-600">
              In case you need help: {firstFeedbackGroup.giver} is giving feedback to {firstFeedbackGroup.receiver}.
            </p>

            <ul className="mt-4">
              {
                lineup.map((feedbackGroup, idx) => (
                  <li className="mt-4 text-xl" key={idx}>
                    <span>{feedbackGroup.giver}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="pl-2">{feedbackGroup.receiver}</span>
                  </li>
                ))
              }
            </ul>
          </>
        )
      }
    </>
  );
}

export default Lineup;
