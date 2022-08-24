import express from 'express';
import Category from '../models/categoryModel.js';

const categoryRouter = express.Router();

//for fetch or get category from db
categoryRouter.get('/', async (req, res) => {
    const category = await Category.find();
    res.send(category);
});

export default categoryRouter;