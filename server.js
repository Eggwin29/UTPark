const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/utcj', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

const alumnoSchema = new mongoose.Schema({
  Matricula: String,
  Nombre: String,
  Grado: String,
  Carrera: String,
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

app.get('/alumno/:matricula', async (req, res) => {
  const { matricula } = req.params;
  try {
    const alumno = await Alumno.findOne({ Matricula: matricula });
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).send('Alumno not found');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
