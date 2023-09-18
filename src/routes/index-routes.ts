import { Request, Response, Router } from 'express';
const router = Router();

export async function GetIndex(app: any) {
  router.get('/', (req, res) => {
    res.json({ message: 'Olá mundo API typescript rodand!' })
  });
}


