import { eventHandler } from 'h3';
import { initDb, query } from '../utils/db';

export default eventHandler(async (event) => {
  // Initialize the database
  await initDb();

  // Example query
  const result = await query('SELECT COUNT(*) FROM users');
  const userCount = result.rows[0].count;

  return `Database initialized. There are currently ${userCount} users.`;
});