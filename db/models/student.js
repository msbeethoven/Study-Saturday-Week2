'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

Student.beforeCreate((studentInstance) => {
  //console.log("studentI", studentInstance) //the objects with the actual stuff 
  //console.log("STUDENT", Student) //STUDENT class extends Model {}
  //console.log("studentI", studentInstance.firstName) //charles 
  //remember, instane is an object, just do object notation to get what you want and always be specific, like getting that specific attribute in the model (ie firstname, lastname, email)
  studentInstance.firstName = studentInstance.firstName.charAt(0).toUpperCase() + studentInstance.firstName.slice(1);
  studentInstance.lastName = studentInstance.lastName.charAt(0).toUpperCase() + studentInstance.lastName.slice(1);

  // studentInstance.firstName = studentInstance.firstName.charAt(0).toUpperCase() + studentInstance.firstName.slice(1); 

})


module.exports = Student;
