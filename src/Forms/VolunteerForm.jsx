import { useForm } from "react-hook-form";
import Hand from "../Assets/hand.png";
import axios from "axios";
import useTiming from "../Common/UseTimingHook";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const FeedbackForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const [message, setMessage] = useState({
    hidden: true,
    success: true,
    text: "Thank you for your volunteering",
  });

  const { inputTiming, getTiming } = useTiming();
  let history = useHistory();

  const onSubmit = async (data) => {
    data = getTiming(data);

    console.log(JSON.stringify(data));
    axios.post(
      process.env.REACT_APP_BASE_URL + "/api/master/volunteers",
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
      text: "Thank you for volunteering with us",
    });

    await new Promise((r) => setTimeout(r, 1000));
    history.push("/");
  };

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
      backgroundColor: "#0A3441",
      borderRadius: "10px",
    },
    handIcon: {
      position: "relative",
      width: "200px",
      zIndex: -1,
    },
  };

  return (
      <>
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
          <p style={style.formHeading}>Volunteer Form</p>

          <div className="form-group row">
            <label className="col-4" htmlFor="name">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              {...register("volunteerName")}
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
              City
            </label>
            <input
              {...register("city")}
              className="form-control col"
              style={style.formControl}
              id="city"
              required
            />
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="occupation">
              Occupation
            </label>
            <input
              {...register("occupation")}
              className="form-control col"
              style={style.formControl}
              id="occupation"
              required
            />
          </div>
          {inputTiming(style, register)}
          <div className="form-group row">
            <label className="col-4" htmlFor="skills">
              {" "}
              Skills{" "}
            </label>
            <textarea
              {...register("skills")}
              className="form-control col"
              style={style.formControl}
              required
              id="skills"
              rows="2"
            ></textarea>
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="about">
              {" "}
              About{" "}
            </label>
            <textarea
              {...register("about")}
              className="form-control col"
              style={style.formControl}
              id="about"
              rows="3"
            ></textarea>
          </div>

          <div className="text-left pt-2">
            <button
              type="submit"
              className="btn btn-primary"
              style={style.submitButton}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
      <div className="hand text-right mb-2">
        <img src={Hand} alt="hand icon" style={style.handIcon} />
      </div>
      </>
  );
};

export default FeedbackForm;
