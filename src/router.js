import express from "express"
import { v4 } from "uuid"
import User from "./app/models/user.js"

const app = express()

app.get("/home", async (req, res) => {

    const user = await User.create({
        id: v4(),
        name: "Sequelize.STRING",
        email:" Sequelize.STRING",
        password_hash: "Sequelize.STRING",
       



    })
    return res.status(201).json(user)
})

export default app

