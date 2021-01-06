import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../../database/database';

export default async function update(request: NextApiRequest, response: NextApiResponse) {
  const { id, image_path, name, resume } = request.body;
  const connection = await database();
  const serviceResponse = await connection.run(`UPDATE cases SET image_path = ?, name = ?, resume = ? WHERE case_id = ?`, [ image_path, name, resume, id ]);
  response.status(200).json(serviceResponse);
}