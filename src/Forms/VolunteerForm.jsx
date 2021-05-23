import { useForm } from "react-hook-form";
import Hand from "../Assets/hand.png";

const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              City
            </label>
            <input
              {...register("city")}
              className="form-control col"
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
              id="occupation"
              required
            />
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="timing">
              timing
            </label>
            <input
              {...register("timing")}
              className="form-control col"
              id="timing"
              required
            />
          </div>
          <div className="form-group row">
            <label className="col-4" htmlFor="about">
              {" "}
              About{" "}
            </label>
            <textarea
              {...register("about")}
              className="form-control col"
              required
              id="about"
              rows="3"
            ></textarea>
          </div>

          <div className="text-left pt-2">
            <button
              type="submit"
              className="btn btn-primary"
            style={{ backgroundColor: "#0A8972",
            borderRadius: "10px"}}
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
