import { Hono } from 'hono'

const app = new Hono()


app.get ('/a',(c)=>{
  return c.json({
    message:"the post request send succes"
  })
})
//creating a middleware 

app.use(async (c,next)=>{
   if(c.req.header("Authorization")){
    await next
   }
   else{
    return c.text("you dont have acces")
   }
})


app.post('/',async (c)=>{
  const body=await c.req.json()
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))

  return c.text('hello hono')
})
export default app

