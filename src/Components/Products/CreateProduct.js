import React, { useState } from 'react';
import "./CreateProduct.css";

const CreateProduct = () => {
  const [name, setname] = useState(null);
  const [username, setusername] = useState(null);
  const [email, setemail] = useState(null);
  const [phone, setphone] = useState(null);
  const [password, setpassword] = useState(null);
  const [conpass, setconpass] = useState(null);
  const [gender, setgender] = useState(null);


  const onChangeHandler = (e) => {
    //console.log({ [e.target.name]: e.target.value });
    const { id, value } = e.target;
    if (id == name) {

    } else {

    }
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("submitted Successfully");
    console.log(name, username, email, phone, password, conpass, gender);
  }

  return (
    <>
      <div className="container1">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={onSubmitHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => onChangeHandler(e)} required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" value={username} onChange={(e) => onChangeHandler(e)} required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => onChangeHandler(e)} required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" value={phone} onChange={(e) => onChangeHandler(e)} required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" value={password} onChange={(e) => onChangeHandler(e)} required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" value={conpass} onChange={(e) => onChangeHandler(e)} required />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" onChange={(e) => onChangeHandler(e)} value={gender} id="dot-1" />
              <input type="radio" name="gender" onChange={(e) => onChangeHandler(e)} value={gender} id="dot-2" />
              <input type="radio" name="gender" onChange={(e) => onChangeHandler(e)} value={gender} id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateProduct;