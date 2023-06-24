import ShowForm from "./ShowForm";
import "./App.css";
import { useState } from "react";
function App() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "M",
  };

  // const validatedData={}

  const [formData, setFormData] = useState(initialState);
  const [validatedData, setValidatedData] = useState(initialState);
  const [showTheForm, setShowTheForm] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // console.log("Form submitted:", formData);
    setShowTheForm(true);
    setValidatedData({ ...formData });
    // Reset form fields
    setFormData(initialState);
  };

  const { name, email, password, age, gender } = formData;

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input
          type="number"
          id="age"
          className="form-control"
          value={age}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender:
        </label>
        <select
          id="gender"
          className="form-select"
          value={gender}
          onChange={handleChange}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {showTheForm? (
        <ShowForm formData={formData} />
      ) : null}
    </form>
  );
}

export default App;
