import { useState } from "react";
import Button from "./Button";

const Form = () => {
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
    <div className="sm:p-24">
      <div className="bg-cyan-100 sm:p-0 rounded-3xl">
        <h3 className="text-center text-2xl pt-6 font-medium">Add Student</h3>
        <form onSubmit={handleSubmit} className="p-4 sm:p-12 bg-red-900">
          <div className="row">
            <div className="flex flex-col sm:flex-row sm:space-x-16 sm:pb-4">
              <div className="form-group">
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
              <div className="form-group">
                <label htmlFor="tel">Password </label>
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

          <div className="pt-4 pb-8">
            <Button
              style="w-56 sm:w-96 bg-red-400 p-4 font-medium rounded-lg"
              type="submit"
              text="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
