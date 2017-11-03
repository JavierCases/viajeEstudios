/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



module.exports = {
  mysqlDs: {
    connector: 'mysql',
    hostname: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'viajeEstudios',
  }
  ,
  myEmailDataSource: {
    name: "myEmailDataSource",
    connector: "mail",
    transports: [{
    type: "SMTP",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  }]
}
};