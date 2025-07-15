import mainApi from './apis/mainApi';

function postAnswers(surveyId: number, data: string[]) {
  mainApi.post(`/api/answers`, { surveyId, data });
}

export default postAnswers;
