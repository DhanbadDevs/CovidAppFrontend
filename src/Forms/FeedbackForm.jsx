import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Hand from "../Assets/hand.png";

const FeedbackForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState({
    hidden: true,
    success: true,
    text: "",
  });

  const onSubmit = (data) => {
    data = { ...data, cityId: Number.parseInt(data.cityId) };
    console.log(JSON.stringify(data));
    axios.post(
      process.env.REACT_APP_BASE_URL + "/api/master/feedbacks",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    reset({});
    setMessage({
      hidden: false,
      success: true,
      text: "Thank you for you valuable feedback",
    });
  };

  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/master/city")
      .then((response) => {
        setCities(response?.data?.payload);
      });
  }, []);

  const style = {
    formAlert: {
      borderRadius: "10px",
      marginTop: "5px",
    },
    formControl: {
      borderRadius: "10px",
      marginBottom: "5px",
    },
    formHeading: {
      backgroundColor: "#060941",
      color: "#fff",
      borderRadius: "10px",
      padding: "2px 0px 2px 10px",
      marginLeft: "-3px",
      marginRight: "60%",
    },
    submitButton: {
      backgroundColor: "#0A8972",
      borderRadius: "10px",
    },
    handIcon: {
      position: "relative",
      width: "200px",
      zIndex: -1,
    },
  };

  return (
    <div className="container">
      <div
        className={
          message.success ? "alert alert-success" : "alert alert-danger"
        }
        role="alert"
        style={style.formAlert}
        hidden={message.hidden}
      >
        {message.text}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pr-2 mt-3">
          <p style={style.formHeading}>Feedback Form</p>

          <div className="form-group row">
            <label className="col-4" htmlFor="name">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              {...register("name")}
              className="form-control col"
              style={style.formControl}
              required
              id="name"
            />
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="name">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              {...register("email")}
              className="form-control col"
              style={style.formControl}
              required
              id="email"
            />
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="phone">
              {" "}
              Phone{" "}
            </label>
            <input
              type="number"
              {...register("phone")}
              className="form-control col"
              style={style.formControl}
              id="phone"
            />
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="city">
              {" "}
              City{" "}
            </label>
            <select
              {...register("cityId", {
                pattern: "/.+/",
              })}
              className="form-control col"
              style={style.formControl}
              id="city"
              required
            >
              <option value=""> select ... </option>
              {cities?.map((city) => (
                <option key={city.id} value={city.id}>
                  {" "}
                  {city.cityName}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="comment">
              {" "}
              Feedback{" "}
            </label>
            <textarea
              {...register("comment")}
              className="form-control col"
              style={style.formControl}
              required
              id="comment"
              rows="3"
            ></textarea>
          </div>

          <div className="text-left pt-2">
            <button
              type="submit"
              className="btn btn-primary"
              style={style.submitIcon}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="hand text-right mr-0">
        <img src={Hand} alt="hand icon" style={style.handIcon} />
      </div>
    </div>
  );
};
export default FeedbackForm;
