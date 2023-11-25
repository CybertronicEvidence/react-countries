import { useState } from "react";
import Button from "./Button";
import axios from "axios";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { FaRegEyeSlash } from "react-icons/fa";

const LoginForm = ({ activeTab, handleTabClick }) => {
  // const [activeTab, setActiveTab] = useState("login"); // State to track active tab

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab); // Function to toggle active tab
  // };

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...state,
    };

    await axios.post();

    console.log(data);
  };

  return (
    <div className="sm:p-24 flex justify-center">
      <div className="sm:w-1/2 bg-gray-400 sm:p-0 rounded-3xl">
        <h3 className="text-center text-2xl pt-6 font-medium">
          <span
            className={`cursor-pointer ${
              activeTab === "login"
                ? "rounded-lg border-b-4 border-slate-700 p-2 text-white "
                : ""
            }`}
            onClick={() => handleTabClick("login")} // Toggle active tab on click
          >
            Login
          </span>{" "}
          <span className="text-slate-700 text-4xl font-medium ">|</span>{" "}
          <span
            className={`cursor-pointer ${
              activeTab === "signup"
                ? "rounded-lg border-b-4 border-slate-700 p-2 text-white "
                : ""
            }`}
            onClick={() => handleTabClick("signup")} // Toggle active tab on click
          >
            Signup
          </span>
        </h3>

        <form onSubmit={handleSubmit} className="p-4 sm:p-12">
          <div className="row">
            <div className="flex flex-col sm:pb-4 items-center p-8 sm:p-0">
              <div className="form-group pb-4">
                <label htmlFor="email" className="p-2">
                  Email{" "}
                </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tel" className="p-2">
                  Password{" "}
                </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4 pb-8">
            <Button
              style="w-36 text-white bg-slate-700 hover:bg-gray-900 p-4 font-medium rounded-lg"
              type="submit"
              text="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes;

const options = [
  {
    value: "",
    label: "-- Select Gender--",
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const selectOptions = options.map(({ value, label }) => (
  <option value={value} key={value}>
    {label}
  </option>
));

const SignupForm = ({ activeTab, handleTabClick }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...data } = state;

    if (data.password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Passwords match, reset error message and proceed with form submission
    setErrorMessage("");
    console.log(data);
  };

  return (
    <div className="sm:p-24 flex justify-center">
      <div className="sm:w-1/2 bg-gray-400 sm:p-0 rounded-3xl">
        <h3 className="text-center text-2xl pt-6 font-medium">
          <span
            className={`cursor-pointer ${
              activeTab === "login"
                ? "rounded-lg border-b-4 border-slate-700 p-2 text-white "
                : ""
            }`}
            onClick={() => handleTabClick("login")} // Toggle active tab on click
          >
            Login
          </span>{" "}
          <span className="text-slate-700 text-4xl font-medium ">|</span>{" "}
          <span
            className={`cursor-pointer ${
              activeTab === "signup"
                ? "rounded-lg border-b-4 border-slate-700 p-2 text-white "
                : ""
            }`}
            onClick={() => handleTabClick("signup")} // Toggle active tab on click
          >
            Signup
          </span>
        </h3>
        <form onSubmit={handleSubmit} className="p-4 sm:p-12">
          <div className="row">
            <div className="flex flex-col sm:flex-row sm:pb-4 pl-8 pb-4 sm:p-0">
              <div className="form-group pb-4">
                <label htmlFor="firstName">First Name </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:pb-4 pl-8 sm:p-0">
              <div className="form-group pb-4">
                <label htmlFor="email">Email </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="tel">Telephone </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="tel"
                  name="tel"
                  value={state.tel}
                  onChange={handleChange}
                  placeholder="Tel"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:pb-4 pl-8 sm:p-0">
              <div className="form-group flex flex-col pb-4">
                <label htmlFor="dateOfBirth">Date of birth </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type="date"
                  name="dateOfBirth"
                  value={state.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                />
              </div>
              <div className="form-group flex flex-col sm:pl-8 pb-4">
                <label htmlFor="gender">Gender</label>
                <select
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  name="gender"
                  onChange={handleChange}
                  id="gender"
                  value={state.gender}
                >
                  {selectOptions}
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:pb-4 pl-8 pb-4 sm:p-0">
              <div className="form-group pb-4">
                <label htmlFor="password">Password </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input
                  className="placeholder-shown:border-gray-500 ... p-4 rounded-lg font-medium"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={state.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>
          <div className="ml-8 sm:m-0 text-sm font-medium">
            <label htmlFor="showPassword">
              <input
                id="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={handleTogglePassword}
                className="cursor-pointer appearance-none h-4 w-4 rounded-full border-2 border-gray-500 checked:bg-white checked:border-transparent focus:outline-none focus:ring-2 focus:ring-white"
              />{" "}
              Show Password
            </label>
          </div>
          <div>
            {errorMessage && (
              <p className="text-red-500 font-medium">{errorMessage}</p>
            )}
          </div>

          <div className="flex justify-center pt-4 pb-8">
            <Button
              style="w-36 text-white bg-slate-700 hover:bg-gray-900 p-4 font-medium rounded-lg"
              type="submit"
              text="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

SignupForm.propTypes;

const Form = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      {activeTab === "login" ? (
        <LoginForm
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          // ... pass other necessary props here
        />
      ) : (
        <SignupForm
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          // ... pass other necessary props here
        />
      )}
    </div>
  );
};

export default Form;
