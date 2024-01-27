import React from 'react'
import { useGlobalContext } from './Context'
// import { useGlobalContext } from './Context'

const Search = () => {
  // const name = useGlobalContext();
  const {query, searchPost} = useGlobalContext();
  return (
    <>
    <h1>Tech Newz</h1>
    <form >
      <div>
        <input className='input
        '
        type="text" 
          placeholder='Search Here'
          value={query}
          onChange={(e) => {searchPost(e.target.value)}}
        />
      </div>
    </form>
    </>
  )
}

export default Search
