
import React, { useEffect, useState } from "react";

const EmployeeList = ()=>{

    const [employeeList,setEmployeeList] = useState([]);

    useEffect(()=>{
        fetchEmpApi();
    },[])

    const fetchEmpApi=()=>{
        fetch('http://localhost:7007/api/v1/employee').then(data=>data.json()).then((data)=>{
            console.log(data);
            setEmployeeList(data);
        })
        }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-3">Employee Page</h2>
            <button type="button" class="btn btn-link">Create</button>

            {
                employeeList.map((item)=>{
                     return (
                        <div class="list-group">
                            <div class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{item.firstName +" " +item.lastName}</h5>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                                <p class="mb-1">{item.designation}</p>
                                <small class="text-body-secondary">{item.empId}</small>
                            </div>
                        </div>
                     )
                })
            }



        </div>
    );
}

export default EmployeeList;