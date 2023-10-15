import axios from 'axios'

const baseURL = "http://localhost:5000/"

const getAllToDo = (setToDo) =>{
    axios
    .get(baseURL)
    .then(({data})=> {
        console.log("dtata--->",data);
        setToDo(data)
    })
}
export{getAllToDo}