import { useForm } from "react-hook-form";
import Hand from "../Assets/hand.png";
import axios from "axios";
import useTiming from "../Common/UseTimingHook";

const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();

  const { inputTiming, getTiming } = useTiming();

  const onSubmit = (data) => {
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
  };

  const style = {
    formControl: {
      borderRadius: "10px",
      marginBottom: "5px",
    },
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pr-2 mt-3">
          <p
            style={{
              backgroundColor: "#060941",
              color: "#fff",
              borderRadius: "10px",
              padding: "2px 0px 2px 10px",
              marginLeft: "-3px",
              marginRight: "60%",
            }}
          >
            Volunteer Form
          </p>

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
              style={{ backgroundColor: "#0A8972", borderRadius: "10px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="hand text-right mr-0">
        <img
          src={Hand}
          alt="hand icon"
          style={{
            position: "relative",
            width: "250px",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
