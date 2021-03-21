import axios from 'axios';

const getTrivia = () => new Promise((resolve, reject) => {
  axios.get('https://opentdb.com/api.php?amount=1&category=12&difficulty=medium')
    .then((response) => {
      resolve(response.data.results);
    })
    .catch((err) => reject(err, 'error'));
});

export default { getTrivia };
