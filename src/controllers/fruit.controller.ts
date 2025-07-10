import { FastifyRequest, FastifyReply } from 'fastify';
import { getAllFruits, getFruitById } from '../services/fruit.service';

export async function getFruitsHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  try {
    const fruits = await getAllFruits();
    res.status(200).send(fruits);
  } catch (error: any) {
    console.error('Error fetching fruits:', error);
    res.status(500).send({ error: 'Failed to fetch fruits' });
  }
}

export async function getFruitByIdHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send({ error: 'Invalid fruit ID' });
    }
    
    const fruit = await getFruitById(id);
    res.status(200).send(fruit);
  } catch (error: any) {
    if (error.message === 'Fruit not found') {
      return res.status(404).send({ error: 'Fruit not found' });
    }
    console.error('Error fetching fruit:', error);
    res.status(500).send({ error: 'Failed to fetch fruit' });
  }
}