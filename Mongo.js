
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB Schema and Model
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  name: String,
  age: Number,
});

const Data = mongoose.model('Data', dataSchema);

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to your website!');
});

app.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```



This code creates a simple Express.js web server that connects to MongoDB and provides two routes: `/` for the homepage and `/data` to retrieve data from MongoDB. You can expand upon this code to build your website and implement CRUD operations on your MongoDB database as needed.

Remember to keep sensitive information like database credentials in a secure configuration file or environment variables and not hardcode them in your code for production use.
  
