import React from 'react'

const ClubForm = ({ data, handleChange, handleSubmit }) => (
    <section className="form">
      <h1>Club Form</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Name"
            name="name" 
            value={data.name}
            required/>
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Venue"
            name="venue" 
            value={data.venue}
            required/>
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Postcode"
            name="postcode" 
            value={data.postcode}
            required/>
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Date"
            name="date" 
            value={data.date}
            required/>
        </div>

        <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Description"
            name="description" 
            value={data.description}
            />
        </div>
          <div className="form-div">
          <input
            onChange={handleChange}
            placeholder="Maximum available spaces"
            name="maxspace" 
            value={data.maxspace}
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

export default ClubForm