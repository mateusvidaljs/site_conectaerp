import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../database/database';

export default async function login(request: NextApiRequest, response: NextApiResponse) {
  const { user, password } = request.body;
  const connection = await database();
  const selectResponse = await connection.get('SELECT * FROM user WHERE username = ? AND password = ?', [ user, password ]);
  
  if (selectResponse) {
    response.json(selectResponse);
  }
  else {
    response.status(401).json({ error: true, msg: '' })
  }
}