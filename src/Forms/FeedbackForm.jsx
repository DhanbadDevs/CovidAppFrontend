import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Hand from "../Assets/hand.png";

const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/master/city"
      )
      .then((response) => {
        setCities(response?.data?.payload);
      });
  }, []);

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
            Feedback Form
          </p>

          <div className="form-group row">
            <label className="col-4" htmlFor="name">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              {...register("name")}
              className="form-control col"
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
              {...register("phone", { pattern: "/[0-9]{10}/" })}
              className="form-control col"
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
              required
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
              required
              id="comment"
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
            width: "300px",
            alignSelf: "center",
            marginBottom: "10px",
            marginTop: "-100px",
          }}
        />
      </div>
    </div>
  );
};
export default FeedbackForm;
