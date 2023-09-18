import { Request, Response, Router } from 'express';
const router = Router();

export async function GetProduct(app:any ) {
  router.get('/', (req, res) => {
    res.json({ message: 'muitas coisa' })
  });
}