import React from 'react'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name}: {part.exercises} exercises
        </p>
      ))}
    </div>
  )
}

export default Content
