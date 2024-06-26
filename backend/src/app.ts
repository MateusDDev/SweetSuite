import express from 'express';
import cors from 'cors';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.use(router);

    this.app.get('/', (_req, res) => res.json({ message: 'Server running' }));
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`Running on port ${PORT}`); });
  }
}

export { App };
export const { app } = new App();
