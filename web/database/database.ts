import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function database() {
  const connection = await open({
    filename: 'database/website.sqlite',
    driver: sqlite3.Database
  });

  return connection;
}

export async function setup() {
  const db = await database();
  db.migrate({ force: true });
}