import { RequestHandler } from "express";
import db from "../db";

const getData: RequestHandler = (req, res) => {
    db.query('SELECT * FROM project_list',(error, result) => {
        console.log(result)
        return res.status(200).json(result);
    });
};

export { getData };