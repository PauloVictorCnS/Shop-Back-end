import express from "express"
import route from "./router.js"
import "./database/index.js"





class App {

    constructor() {
        this.app = express()
        

        this.router()

    }

    router() {
  
        this.app.use(route)

    }
}




export default new App().app