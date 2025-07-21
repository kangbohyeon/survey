import axios from 'axios';

function CompletionPage() {
  axios.get('http://localhost:5173').then((res) => {
    console.log(`res : ${JSON.stringify(res.data)}`);
  });
  return <div>completionPage</div>;
}

export default CompletionPage;
