import { useParams, Link } from "react-router-dom";
import Confetti from "react-confetti";
import { decodeTeammates } from "./teammateEncoding";

function Schedule() {
  const params = useParams();
  const teammates = decodeTeammates(params.token);

  const nextTeammate = (idx) => {
    return (idx + 1) === teammates.length ? teammates[0] : teammates[idx + 1];
  };

  const firstFeedbackGiver = teammates[0];
  const firstFeedbackReceiver = nextTeammate(0);

  return (
    <div className="w-full h-full flex justify-center pt-24">
      <Confetti recycle={false} />

      <div className="w-1/3">
        <header>
          <h1 className="text-3xl font-bold">Feedback Friday!</h1>
          <p className="pt-2 text-gray-600">
            Here's what we came up with, Happy Feedbacking!
          </p>
        </header>

        <div className="pt-8">
          <h2 className="text-2xl font-bold">Today's lineup</h2>
          {
            teammates.length < 2 ? (
              <p className="pt-2">You need to <strong>at least 2 teammates</strong> to use Feedback Friday!. Start over by clicking the button below.</p>
            ) : (
              <>
                <p className="pt-2 text-sm text-gray-600">
                  In case you need help: {firstFeedbackGiver.name} is giving feedback to {firstFeedbackReceiver.name}.
                </p>

                <ul className="mt-4">
                  {
                    teammates.map((feedbackGiver, idx) => (
                      <li className="mt-4 text-xl" key={idx}>
                        <span>{feedbackGiver.name}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="pl-2">{nextTeammate(idx).name}</span>
                      </li>
                    ))
                  }
                </ul>

                <div className="mt-8 text-sm italic text-gray-600">
                  <p>
                    Pro Tip: You can share the URL with your team so they can see the lineup for this week's Feedback Friday.
                  </p>
                  <p className="mt-2">
                    {document.location.href}
                  </p>
                </div>
              </>
            )
          }

          <div className="mt-8">
            <Link to="/" className="py-1 px-6 border border-gray-400 hover:bg-gray-600 hover:text-white">
              Start over
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
