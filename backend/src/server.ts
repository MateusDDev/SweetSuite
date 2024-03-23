import { App } from './app';

const PORT = process.env.APP_PORT || 5000;

new App().start(PORT);
