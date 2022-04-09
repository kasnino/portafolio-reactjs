const BASE_URL = './proyectos.json'

export const getProyectos= async() => {
    await fetch(`${BASE_URL}`)
         .then((res)=>res.json())
         .then((data)=>{
          console.log(data.projects)
          return data.projects
            })
}
getProyectos();