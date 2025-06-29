import { useParams } from 'react-router-dom';

function useStep() {
  const params = useParams();

  return parseInt(params.step as string);
}

export default useStep;
