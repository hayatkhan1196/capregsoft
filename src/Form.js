import { render } from "@testing-library/react";
import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  //    const word=['hayat','asad','saifali','alimuhammad','niazali']

  //    const words=word.filter((user)=>user.length>5)
  //    console.log('wordssssss',words)

  //   const numbers=[1,2,43,4,5]
  //
  // Math.max.apply(null,numbers);
  //   console.log('=====================',Math.min.apply(null,numbers))

  const submit = () => {
    alert("has beeen submitted");
    console.log(password, "==================", user);
  };

  render();
  {
    return (
      <div>
        <label> Login form</label>
        <br />
        <input
          type="text"
          name="user"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={() => submit()}>submitt</button>
      </div>
    );
  }
}
export default Form;
