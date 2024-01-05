### TypeScript Boilerplate
_This is like a demo project for backend in TypeScript. Anyone can further work on the project to expand it. I am just building APIs for demo purpose only. For database, I have used MongoDB Atlas._


##### Steps to run the Project:
1. First clone the project by using command:
```
git clone https://github.com/suksham98/boilerplate-ts.git
```
2. Run the following command to install the all dependencies:
```
npm install
```
3. Create .env file and add the keys.
4. To create the build for the project, run the following command:
```
npm run build
```
5. To run the code, follow the command:
```
npm run dev
```

_If you want to run and the errors using eslint, use the following command:_
```
npx eslint . --ext .ts
```

_And to use prettier, use the following command:_
```
npx prettier '**/*.ts' --write
```
(to use prettier for specific extensions)


### Database:
I have used MongoDB Atlas for database. You can also create use the same, by folloeing steps:
1. If you do not have account on MongoDB Atlas, you can [click here](https://www.mongodb.com/cloud/atlas/register) and register.
2. After creating your account, go to option ```New Project```
3. Enter project name, click on ```Next``` and then ```Create Project```.
4. Then click on ```Create Deployment``` and choose ```MO``` option for free usage (it provides 512 MB) and click on ```Create Project```.
5. In Security Quickstart: Select ```Username and Password``` (copy password and save somewhere to use it later) and click on ```Create User```.
6. After clicking on ```Finish and Close```, go to ```Preview``` and click on ```Connect```.
7. Click on ```MongoDB for VS Code```.
8. Copy the connection string.
9. Now use the password saved earlier in this connection string.

_This string will be your MONGOURI, to connect to the database._
_Add this string in .env file._