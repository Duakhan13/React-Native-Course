import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 5hTX2fT1OXe9iel_EvJnoAdfiFzi1Y2VDrstQ4cjRMkXObqVJDhqsWjtNtNDZTztGYjg5JRPTCkpiDivZ0gWgjlI1o1p5Mnt-4DD20mQd8HXQRif-9goCDR9ElZSY3Yx',
  },
});
