import mainApi from './apis/mainApi';

function getSurvey(surveyId: string) {
  return mainApi.get(`/api/surveys/${surveyId}`);
}

export default getSurvey;
