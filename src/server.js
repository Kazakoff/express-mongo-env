const app = require('./app');

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}/n ${process.env.DB_URL}`);
});
