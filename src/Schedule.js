import { useParams } from "react-router-dom";
import Confetti from "react-confetti";
import Lineup from "./Lineup";
import Rotations from "./Rotations";
import Help from "./Help";
import { decodeTeammates } from "./teammateEncoding";
import { createLineup } from "./lineups";

function Schedule() {
  const params = useParams();
  const teammates = decodeTeammates(params.token);
  const lineup = createLineup(teammates);

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
          <Lineup lineup={lineup} />
        </div>

        <div className="pt-8">
          <Rotations lineup={lineup} />
        </div>

        <div className="mt-8">
          <Help />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
