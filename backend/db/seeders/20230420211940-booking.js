'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
    {
      startDate:'2010-01-15',
      endDate:'2010-01-30',
      userId:1,
      spotId:1

    },
    {
      startDate: '2010-01-15',
      endDate:'2010-01-30',
      userId:2,
      spotId:3


    },
    {
      startDate:'2010-01-15',
      endDate:'2010-01-30',
      userId:3,
      spotId:2

    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options);
    }
};
