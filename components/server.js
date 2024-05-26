const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const Joi = require('joi');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Replace with your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const { error } = userSchema.validate({ email, password });

  if (error) {
    return res.status(400).send(`Validation error: ${error.details[0].message}`);
  }

  try {
    // Create user with email and password
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    console.log('User registered successfully:', userRecord.uid);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Failed to register user');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
