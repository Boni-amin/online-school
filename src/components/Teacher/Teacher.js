import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    // console.log(props.teacher)
    const {name, img, salary, age, subject , phone} = props.teacher;
    return (
        <div className="col-md-4 mb-4">
            <div className="card" >
                <div className="card-body">
                    <h4 className="card-subtitle mb-2 text-center mb-3">{name}</h4>
                    <div className="w-50 rounded-circle mx-auto mb-4">
                        <img className="w-100 rounded-circle" src={img} alt="" />
                    </div>
                    <h6>Salary: ${salary}</h6>
                    <h6>Subject: {subject}</h6>
                    <h6>Age: {age}</h6>
                    <h6>Phone: <small>{phone}</small></h6>
                    <div onClick={()=>props.handleAddTeacher(props.teacher)} className="btn rounded-pill button-color text-white"> <span><i className="fas fa-shopping-cart"></i></span> Add  Card</div>
             </div>
        </div>
        </div>
    );
};

export default Teacher;