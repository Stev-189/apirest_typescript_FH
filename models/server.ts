import express,{ Application} from "express";
import userRoutes from '../routes/usuario'
import cors from 'cors'
import db from "../db/connection";


class Server {
  // private app: express.Application; //F1
  private app: Application; //F2
  private port : string;
  //rutas
  private apiPaths={
    usuarios: '/api/usuarios'
  }

  constructor(){
    this.app=express();
    this.port= process.env.PORT || '8000';
    
    this.dbConnection();
    //middlewares
    this.middlewares();
    //definir rutas
    this.routes();
  }

  async dbConnection(){
    try {
      await db.authenticate();
      console.log('database connection established');
      
    } catch (error) {
      throw new Error(error)
    }
  }

  middlewares(){
    //cors
    this.app.use(cors())
    //Lectura Body
    this.app.use( express.json())

    //carpeta publica
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.use(this.apiPaths.usuarios, userRoutes)
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log('Servidor corriendo en puerto!! '+ this.port);
    })
  }
}

export default Server;