import { useNavigate } from "react-router-dom";
import TeammateListForm from './TeammateListForm';

function TeammateForm() {
  const navigate = useNavigate();

  const onFormSubmit = (token) => {
    navigate("/schedule/" + token);
  };

  return (
    <div className="w-full h-full flex justify-center pt-24">
      <div>
        <header>
          <h1 className="text-3xl font-bold">Feedback Friday!</h1>
          <p className="pt-2 text-gray-600">
            Feedback Friday helps teams randomly decide who should give feedback to whom.
          </p>
        </header>

        <div className="pt-8">
          <h2 className="text-xl">Who's on your team?</h2>

          <TeammateListForm onSubmit={onFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default TeammateForm;
