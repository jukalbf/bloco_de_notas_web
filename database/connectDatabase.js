import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./blocos_db.db"
})

async function tryDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log("Banco de dados conectado.\n");
    
        await sequelize.sync();
        console.log("Dados sincronizados.");
    } catch (err) {
        console.log(`Ocorreu uma erro ao tentar se conectar: ${err.message}`);
    }
}

export default tryDatabaseConnection;