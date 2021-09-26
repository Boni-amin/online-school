import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    // console.log(props.teacher)
    const {name, img, salary, age, subject , phone} = props.teacher;
    return (
        <div className="col-md-4 mb-4">
            <div className="card" >
                <div className="card-body button-color-1">
                    <h4 className="card-subtitle mb-2 text-center mb-3 techer-color">{name}</h4>
                    <div className="w-50 rounded-circle mx-auto mb-4">
                        <img className="w-100 rounded-circle" src={img} alt="" />
                    </div>
                    <h6>Salary: ${salary}</h6>
                    <h6>Subject: {subject}</h6>
                    <h6>Age: {age}</h6>
                    <h6>Phone: <small>{phone}</small></h6>
                    <span onClick={()=>props.handleAddTeacher(props.teacher)} className="btn rounded-pill button-color text-white"> <span><i className="fas fa-shopping-cart"></i></span> Add  Card</span>
                    <span className="span-icon">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-youtube"></i>
                    </span>

             </div>
        </div>
        </div>
    );
};

export default Teacher;