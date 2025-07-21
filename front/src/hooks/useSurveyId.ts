import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params = useParams();

  return parseInt(params.surveyId as string);
}

export default useSurveyId;
