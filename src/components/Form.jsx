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
    <div className="sm:p-24 flex justify-center">
      <div className="sm:w-1/2 bg-gray-400 sm:p-0 rounded-3xl">
        <h3 className="text-center text-2xl pt-6 font-medium">Add Student</h3>
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

export default Form;
