# CRUD-Pessoas
CRUD project that uses the Nodejs, Express, Sequelize tools on Server-side, and Bootstrap, Vue and Axios on client-side

## Run
On client and server directories run:
```bash
npm install
```
- Install MySQL, execute the script on .server/db_pessoas.sql to create database and table necessary.
- On .server/config/config.json configure the username and password according your MySQL account.

To start server:
```bash
npm start
```
To start client:
```bash
npm run dev
```
If you are new to MySQL, you may need to run:
```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY 'YOURPASSWORD';
```

## Home
![home](https://user-images.githubusercontent.com/25726264/56155114-86064d00-5f90-11e9-93ba-8924ecadb99b.png)

## Cadastro
![cadastro](https://user-images.githubusercontent.com/25726264/56155148-97e7f000-5f90-11e9-99ea-82c4000e39eb.png)

## Lista
![listagem](https://user-images.githubusercontent.com/25726264/56155162-a504df00-5f90-11e9-9238-ef9912491342.png)
