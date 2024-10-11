import { eventHandler } from 'h3';
import { db } from '../utils/db';

export default eventHandler(async (event) => {
  const database = new db();

  // Initialiser la base de données
  await database.initDb();

  // Add a new user
  const newUser = await database.addUser('testuser123', 'testuser123@example.com');

  // Get all users
  const result = await database.query('SELECT * FROM users');
  const users = result.rows;

  // Format the response
  const response = `
    Database initialized. 
    New user added: 
    ID: ${newUser.id}
    Username: ${newUser.username}
    Email: ${newUser.email}
    Created at: ${newUser.created_at}

    Total users: ${users.length}

    All users:
    ${users.map(user => `- ${user.username} (${user.email})`).join('\n')}
  `;

  return response;
});