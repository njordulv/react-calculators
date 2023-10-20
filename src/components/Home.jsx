import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Body Mass Index (BMI) is a widely used tool to assess an individual's
        body weight in relation to their height. It provides a numerical value
        that categorizes a person's weight status into various categories, each
        of which has different implications for health
      </p>
      <div>
        <Link to="/bmi/" className="button">
          BMI calculator
        </Link>
      </div>
    </>
  )
}

export default Home
