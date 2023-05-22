exports.getAllEmployee=async ()=>{
    fetch('http://localhost:7007/api/v1/employee').then(data=> data.json()).then(data=> {return data})
}