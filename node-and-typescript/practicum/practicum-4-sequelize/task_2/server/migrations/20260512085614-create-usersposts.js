// "use strict"

// /** @type {import('sequelize-cli').Migration} */
// export async function up(queryInterface, Sequelize) {
//   await queryInterface.createTable("usersposts", {
//     userId: {
//       type: Sequelize.INTEGER,
//       references: {
//         model: "users",
//         key: "id",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     postId: {
//       type: Sequelize.INTEGER,
//       references: {
//         model: "posts",
//         key: "id",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//   })
// }
// export async function down(queryInterface, Sequelize) {
//   await queryInterface.dropTable("usersposts")
// }
