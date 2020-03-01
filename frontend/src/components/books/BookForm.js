import React from 'react'
import ImageUpload from '../common/ImageUpload'


const BookForm = ({ data, handleChange, handleSubmit }) => (
    <section className="form">
      <h1>Book Form</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="title"
            name="title" 
            value={data.title}
            required/>
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Author"
            name="author" 
            value={data.author}
            required/>
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Genre"
            name="genre" 
            value={data.genre}
            />
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Number of Pages"
            name="no_pages" 
            value={data.no_pages}
            />
        </div>

        {/* <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Rating"
            name="rating" 
            value={data.rating}
            />
        </div> */}
          <div className="form-div">
          <label>* required field</label>
          <ImageUpload
            labelText="Upload Image"
            handleChange={handleChange}
            fieldName="image"
            required/>
        
        </div>
        <div className="button-div">
          <button
            className="button"
            type="submit">
              Submit</button>
        </div>
        </form>
    </section> 

)

export default BookForm