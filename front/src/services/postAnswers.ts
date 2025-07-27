import mainApi from './apis/mainApi';

function postAnswers(surveyId: number, data: string[]) {
  return mainApi.post(`/api/answers`, { surveyId, data });
}

export default postAnswers;
