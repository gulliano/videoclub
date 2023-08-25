import React from 'react'

const Video = ({data}) => {
  return (
    <div><a href={'/detail/'+ data.id} >{data.titre}</a></div>
  )      
}

export default Video