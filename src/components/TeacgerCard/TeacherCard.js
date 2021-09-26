import React from 'react';
import TeacherName from '../TeacherName/TeacherName';

const TeacherCard = (props) => {
  const {teachersCard} = props || {};

  let total = 0;
  for(const teacher of teachersCard){
     total = parseFloat(total) + parseFloat(teacher.salary);
  }

  // console.log(teachersCard)
    return (
        <div>
        <div className="card p-3 bg-warning">
          <h5 className="card-title"><i className="fas fa-user-friends text-center"></i>Add Member: {teachersCard.length}</h5>
          <h6>Total Salary amount: ${total}</h6>
          <ul>
            {
              teachersCard.map(teacher => <TeacherName teacher={teacher}></TeacherName>)
            }
          </ul>
          <button className="btn bg-info text-white"><h6>Hire</h6></button>
          
        </div>
      </div>
    );
};

export default TeacherCard;