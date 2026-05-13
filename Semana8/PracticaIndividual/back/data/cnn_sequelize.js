import { Sequelize } from "sequelize";

export const cnn = new Sequelize({
  dialect: "sqlite",
  storage: "./data/db.sqlite"
});

