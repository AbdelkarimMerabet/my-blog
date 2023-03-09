import React from 'react'

const CreatePost = () => {
  return (
    <div className='create-post'>
    <h2>
        Add New Post
    </h2>
    <form>
        <label>
            Blog Title :
        </label>
        <input
            type='text'
        />
        <label>
            Blog Image :
        </label>
        <input
            type='url'
        />
        <label>
            Blog Body :
        </label>
        <textarea required rows='10'>
        </textarea>
        <label>
            Blog Author :
        </label>
        <select>
            <option value='karim'>
                karim
            </option>
            <option value='Admin'>
                Admin
            </option>
        </select>
        <input type="submit" value="Add Blog">
            
        </input>
        
        
        
    </form>
    </div>
  )
}

export default CreatePost