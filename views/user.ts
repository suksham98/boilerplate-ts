import { getUsersList, createUser } from '../controllers/user';

module.exports = (app: any) => {
  app.route('/api/get-users').get(getUsersList);
  app.route('/api/signup').post(createUser);
};
