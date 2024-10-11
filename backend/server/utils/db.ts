import pg, { QueryResult } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export class db {
  private pool: pg.Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    });
  }
  
  async getClient() {
    return this.pool.connect();
  }

  async initDb(): Promise<void> {
    const client = await this.getClient();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Database initialized successfully');
    } catch (err) {
      console.error('Error initializing database:', err);
    } finally {
      client.release();
    }
  }

  async query(text: string, params?: any[]): Promise<QueryResult> {
    return this.pool.query(text, params);
  }

  async addUser(username: string, email: string): Promise<any> {
    const client = await this.getClient();
    try {
      const result = await client.query(
        'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
        [username, email]
      );
      console.log('User added successfully');
      return result.rows[0];
    } catch (err) {
      console.error('Error adding user:', err);
      throw err;
    } finally {
      client.release();
    }
  }

}