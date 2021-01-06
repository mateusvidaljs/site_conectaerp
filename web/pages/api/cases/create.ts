import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../../database/database';

export default async function create(request: NextApiRequest, response: NextApiResponse) {
  const { image_path, name, resume } = request.body;
  const connection = await database();
  const serviceResponse = await connection.run(`INSERT INTO cases VALUES(NULL, ?, ?, ?)`, [ image_path, name, resume ]);
  response.status(200).json(serviceResponse);
}