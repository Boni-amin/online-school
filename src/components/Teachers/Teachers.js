import React, { useEffect, useState } from 'react';
import TeacherCard from '../TeacgerCard/TeacherCard';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [teachersCard, setTeachersCard] = useState([])

    // console.log(teachers)

    useEffect(() => {
        fetch('/teacherData.json')
            .then(res=> res.json())
            .then(data => setTeachers(data))
    } ,[])

    const handleAddTeacher=(teacher)=>{
        if(teachersCard.includes(teacher)){

        }
        else{
            const newCart=[...teachersCard, teacher ]
            setTeachersCard(newCart)
        }
    }
    console.log(teachersCard)

    return (
        <section>
          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-9 ">
                      <div className="row">
                          {
                              teachers.map(teacher=> <Teacher
                                key= {teacher.id}
                                teacher={teacher}
                                handleAddTeacher={handleAddTeacher}
                              >
                              </Teacher> )
                          }
                      </div>
                  </div>
                  <div className="col-md-3 teacher-card">
                     <TeacherCard
                        teachersCard={teachersCard}
                     ></TeacherCard>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default Teachers;