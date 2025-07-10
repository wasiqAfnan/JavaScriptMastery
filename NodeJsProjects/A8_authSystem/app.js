import env from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
env.config();

app.use(express.json());
app.use(cookieParser());
