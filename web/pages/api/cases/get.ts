import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../../database/database';

export default async function get(request: NextApiRequest, response: NextApiResponse) {
  const { name } = request.query;
  const connection = await database();
  const cases = await connection.all(`SELECT * FROM cases WHERE lower(name)=?`, [ name.toString().toLowerCase() ]);
  response.status(200).json(cases);
}