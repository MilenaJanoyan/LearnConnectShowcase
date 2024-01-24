import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import router from './router/index.js';
import errorMiddleware from './middlewares/error-middleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
            fs.mkdirSync('uploads');
        }
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        const fileType = file.originalname.split('.')[1]
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + `.${fileType}`;
        cb(null, file.originalname + '-' + uniqueSuffix);
    },
});

const upload = multer({ storage });


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use('/api/uploads', express.static('uploads'));

app.post('/api/upload',
    // authMiddleware,
    upload.single('image'), (req, res) => {
        res.status(200).json({
            url: `/uploads/${req.file.filename}`,
        });
    });
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
