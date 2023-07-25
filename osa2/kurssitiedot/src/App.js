const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [ 
      {name: 'Fundamentals of React', ex: 10},
      {name: "Using props to pass data", ex: 7},
      {name: "State of a component", ex: 14},
    ]
  }

  const Content = p => {
    return (
      <div>
        <p>{course.parts[0].name} {course.parts[0].ex}</p>
        <p>{course.parts[1].name} {course.parts[1].ex}</p>
        <p>{course.parts[2].name} {course.parts[2].ex}</p>
        
      </div>
    )
  }
  
  const Total = 31
  return (
    <div>
      <h1>{course.name}</h1>
      <Content />
      <p>Number of exercises {Total}</p>
    </div>
  )
}

export default App