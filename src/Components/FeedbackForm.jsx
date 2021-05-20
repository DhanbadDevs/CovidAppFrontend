

const FeedbackFrom = (props) => {
    return (
    <div className="col-12 my-3">
      <div
        className="row shadow px-2 py-3"
        style={{
          position: "relative",
          backgroundColor: "#E4F7FF",
          width: "100%",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
      <div
      className="px-5 py-3 "
      style={{
        backgroundColor: "#BFE9FB",
        width: "100%",
        borderRadius: "10px",
      }}
    >
        <h2 className="text-center"> Feedback From </h2>
        <form>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-3" > Name </label>
            <input type="text" className="form-control col-sm" id="name"  required />
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-3" > Email </label>
            <input type="email" className="form-control col-sm" placeholder="name@exaple.com" id="email" required />
            </div>
            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-3"> Phone </label>
            <input type="phone" className="form-control col-sm" placeholder="987654321" id="phone" />
            </div>
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-3"> Description </label>
                <textarea className="form-control col-sm" id="description" ></textarea>
            </div>
            <button type="submit" className="btn btn-primary row text-right mt-3" style={{float:"right", clear:"both"}} > Submit</button>
        </form>
    </div>
</div>
</div>
    )
}


export default FeedbackFrom;
