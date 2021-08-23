import express, {Application, Response, Request} from 'express';

const app: Application = express();
let port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response)=>{
    let {headers} = req.params;
    console.log(headers)
    res.status(200).send("<h1>Hello, world</h1>")
})

app.listen(port, ()=>{
    console.log("App is running on " + port)
})