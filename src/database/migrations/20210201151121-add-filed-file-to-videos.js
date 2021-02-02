module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("videos", "file_id", {
      type: Sequelize.INTEGER,
      references: { model: "files", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
    }),

  down: (queryInterface) => queryInterface.removeColumn("videos", "file_id"),
};
