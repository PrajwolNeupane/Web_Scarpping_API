import express from 'express';
import stickerNepal from './routes/stickerNepalRoute.js';

const app = express();
app.use(express.json());

app.use("/api/stickernepal",stickerNepal);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server Started");
})