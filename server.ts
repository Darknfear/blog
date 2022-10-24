import 'reflect-metadata';
import 'dotenv/config';
import app from './src/app';

app.listen(process.env.PORT, () => {
  console.log(`Server is running...${process.env.PORT}`);
});
