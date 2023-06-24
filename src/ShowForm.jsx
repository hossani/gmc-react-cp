import React from "react";

const ShowForm = ({ formData }) => {
  const fields = Object.keys(formData);

  return (
    <>
      <table className="table">
        <thead>
          {fields.map((field) => (
            <tr>
              <th>{field}</th>
              <td>{formData[field]}</td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
};

export default ShowForm;
