import App from './App';

export default () => {
  const element = document.getElementById('root');
  const app = new App(element);
  app.render();
};
