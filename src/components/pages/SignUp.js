import React, { useState } from "react";
import axios from "axios";
import '../../App.css';

export default function SignUp() {

    const [data, setData] = useState({
        email: "",
        phoneNo: "",
        fullName: "",
        password: "",
        confirmPassword: ""

      });
      function handleChange(event) {
        const { name, value } = event.target;
    
        setData(prevData => {
          return {
            ...prevData,
            [name]: value
          };
        });
      }
      function submitDetails(event) {
        axios.post('https://asia-east2-dcstudies-8306c.cloudfunctions.net/api/signup', data)
          .then(function (response) {
            console.log(response);
          });
        event.preventDefault();
      }

    return <div className='sign-up'>
        <h1>Sign Up</h1>
        <div>
      <form>
        <input
          name="fullName"
          onChange={handleChange}
          value={data.fullName}
          placeholder="Full Name"
        />
        <input
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="Email"
        />
        <input
          name="phoneNo"
          onChange={handleChange}
          value={data.phoneNo}
          placeholder="Phone Number"
        />
        <input
          name="password"
          onChange={handleChange}
          value={data.password}
          placeholder="*******"
          type="password"
        />
        <input
          name="confirmPassword"
          onChange={handleChange}
          value={data.confirmPassword}
          placeholder="*******"
          type="password"
        />
        <button onClick={submitDetails}>Submit</button>
      </form>
    </div>
        
    </div>;
}

// const newUser = {
//     email: req.body.email,
//     phoneNo: req.body.phoneNo,
//     fullName: req.body.fullName,
//     password: req.body.password,
//     confirmPassword: req.body.confirmPassword,
//   };