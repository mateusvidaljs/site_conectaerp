import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../../database/database';

export default async function remove(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.body;
  const connection = await database();
  const serviceResponse = await connection.run(`DELETE FROM cases WHERE case_id=?`, [ id ]);
  response.status(200).json(serviceResponse);
}