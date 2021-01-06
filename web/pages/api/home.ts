import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../database/database';

export default async function getHome(request: NextApiRequest, response: NextApiResponse) {
  const connection = await database();
  const home = await connection.all(`SELECT * FROM page_home`);
  response.json(home);
}