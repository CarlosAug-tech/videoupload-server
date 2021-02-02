module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("videos", "thumb_id", {
      type: Sequelize.INTEGER,
      references: { model: "files", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    }),

  down: (queryInterface) => queryInterface.removeColumn("videos", "thumb_id"),
};
