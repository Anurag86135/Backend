import express from 'express';

const app = express();

// app.get('/', (req,res)=>{
//     res.send('Server is ready');
// });

// Get a list of 5 jokes 
 
 app.get('/api/jokes',(req,res)=>{
    const jokes =[
  {
    "id": 1,
    "title": "Database Relationship",
    "content": "MySQL and I broke up... because I couldn't handle the joins anymore."
  },
  {
    "id": 2,
    "title": "Bug in Production",
    "content": "I told my boss there is a bug in production. He said, 'That’s not a bug, that’s a feature.' Now I’m scared of my own code."
  },
  {
    "id": 3,
    "title": "Infinite Loop Life",
    "content": "I tried to explain recursion to my friend. He didn’t understand... so I explained recursion to him again."
  },
  {
    "id": 4,
    "title": "Frontend vs Backend",
    "content": "Frontend: 'It works on my machine.' Backend: 'It doesn’t work anywhere.' DevOps: 'Let’s blame the server.'"
  },
  {
    "id": 5,
    "title": "Deployment Night",
    "content": "I deployed code on Friday. Now I pray like it’s a national festival."
  }
]
res.send(jokes);
 })

const port =process.env.port || 5000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);    
});

