require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api', routes);

app.use(errorHandler);


const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://mahadghauri:mahad12345@ecommerce.svpmkqo.mongodb.net/?appName=Ecommerce';

mongoose.connect(MONGO_URI)
.then(() => {
  console.log('MongoDB is connected successfully');
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT} successfully`));
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
