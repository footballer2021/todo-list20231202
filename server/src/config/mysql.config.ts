import dotenv from 'dotenv';

dotenv.config();

const sqlConfig = {
    host: '127.0.0.1',
    user: 'admin',
    password: process.env.SECRETKEY,
    database: 'todo_list20231201'
};

export default sqlConfig;