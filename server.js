import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000; // เปลี่ยนพอร์ตให้ตรงกับพอร์ตที่ Vue.js 

app.use(cors());
app.use(express.json());

app.get('/api/product', (req, res) => {
  try {
    const data = req.body;
    console.log( data);
    res.status(200).json({ message:data.symptoms  });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
