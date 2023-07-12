import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
// import { useState } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../context/Context";

const Login = () => {
  // const userRef = useRef();
  // const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  // console.log(userRef.current.value,passwordRef.current.value)

  const handleSubmit = async (e) => {
    console.log(email, pass);
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios
        .post("http://localhost:5000/login", {
          email: email,
          password: pass,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.dev
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        {/* <p className={styles.sectionSubText}></p> */}
        <h3 className={styles.sectionHeadText}>Login</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <sapn className="text-white font-medium mb-4">Your Email</sapn>
            <input
              type="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <sapn className="text-white font-medium mb-4">Password</sapn>
            <input
              type="string"
              name="password"
              onChange={(e) => setpass(e.target.value)}
              placeholder="Password"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            disabled={isFetching}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            Login
          </button>
        </form>
      </motion.dev>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Login, "login");
