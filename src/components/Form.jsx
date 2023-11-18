import { useState } from "react";
import Button from "./Button";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...state,
    };

    console.log(data);
  };

  return (
    <div className="sm:p-24 flex justify-center">
      <div className="sm:w-1/2 bg-gray-400 sm:p-0 rounded-3xl">
        <h3 className="text-center text-2xl pt-6 font-medium">Login</h3>
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

const SignupForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...state,
    };

    console.log(data);
  };

  return (
    <div className="sm:p-24 flex justify-center">
      <div className="sm:w-1/2 bg-gray-400 sm:p-0 rounded-3xl">
        <h3 className="text-center text-2xl pt-6 font-medium">Sign up</h3>
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
                  type="password"
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
                  type="password"
                  name="confirmPassword"
                  value={state.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
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

export { LoginForm, SignupForm };
