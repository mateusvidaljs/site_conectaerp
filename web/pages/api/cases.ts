import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../database/database';

export default async function getCases(request: NextApiRequest, response: NextApiResponse) {
  const connection = await database();
  const cases = await connection.all(`SELECT * FROM cases`);
  response.json(cases);
}