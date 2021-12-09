import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('dev', 'postgres', 'root',
    {host: 'localhost', dialect:'postgres'});