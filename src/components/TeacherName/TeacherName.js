import React from 'react';

const TeacherName = (props) => {
    const{name} = props.teacher;

    return (
        <li>{name}</li>
    );
};

export default TeacherName;