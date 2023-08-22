import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PeopleForm = ({ kisiler, submitFn }) => {
  //const [isim, setIsim] = useState("");
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  /* useEffect(() => {
    if (kisiler.includes(isim)) {
      setError("Bu isim daha önce eklenmiş");
    } else {
      setError(null);
    }
  }, [isim, kisiler]);
 */
  /*   function handleIsimChange(e) {
    setIsim(e.target.value);
  } */

  function handleSubmitCustom(data) {
    //e.preventDefault();
    submitFn(data.title);
    //setIsim("");
    reset();
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(handleSubmitCustom)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
          {...register("title", {
            required: "isim yaz",
            validate: {
              filterName: (n) => {
                return !kisiler.includes(n) || "bu isim zaten eklenmiş";
              },
            },
          })}
          type="text"
          //onChange={handleIsimChange}
          //value={isim}
        />
        <p className="input-error">{error}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          //disabled={isim.length === 0 || error}
          disabled={!isValid}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
