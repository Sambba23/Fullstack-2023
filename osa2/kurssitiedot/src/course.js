import React from 'react';

const Course = ({course}) => {

    const Content = ({ parts }) => {
      return (
        <div>
            {parts.map(x => 
              <p>{x.name} {x.exercises}</p>)}
              <p>Number of exercises {parts.reduce( (x, y) => x + y.exercises, 0 )}</p>
        </div>
      )
    }

    return (
      <div>
      {course.map( course => 
        <div>
        <h1>{course.name}</h1>
        <Content parts = {course.parts}/>
        </div>)}
    </div>
    )
  }
  export default Course;