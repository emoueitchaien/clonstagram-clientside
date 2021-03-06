import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const PostData = () => {
    //USNIG FETCH
    // fetch("http://localhost:5000/signup", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     pass,
    //     email,
    //     username,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.error) {
    //       alert(data.error);
    //     } else {
    //       // alert(data.message)
    //       console.log(data);
    //       history.push("/");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // using axios instead of fetch

    const data = {
      email,
      name,
      username,
      pass,
    };

    axios
      .post("https://clonstagram.herokuapp.com/signup", data)
      .then((resp) => {
        alert(resp.data.message);
        history.push("/");
      })
      .catch((err) => alert(err.response.data.error));
  };

  return (
    <div className="mainbody signupbody">
      <div className="card mycard input-field">
        <h2>Instagram</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          className="btn mt-15 waves-effect waves-light #64b5f6 blue lighten-2"
          onClick={PostData}
        >
          SignUp
        </button>
        <div className="link2login">
          <p>
            Already have an account?{" "}
            <Link to="/" style={{ fontWeight: "bold" }}>
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
