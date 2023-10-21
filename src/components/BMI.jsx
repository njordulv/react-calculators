import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./BMI.module.css"
import BMIformula from "../data/formulas"

const BMI = () => {
  const [data, setData] = useState({ height: "", weight: "", age: "" })
  const BMIresult = BMIformula(data.height, data.weight)
  const [result, setResult] = useState("")
  const [errorHeight, setErrorHeight] = useState("")
  const [errorWeight, setErrorWeight] = useState("")
  const [errorAge, setErrorAge] = useState("")
  const navigate = useNavigate()

  const handleInputChange = (text, name) => {
    const value = text.target.value
    setData({ ...data, [name]: value })

    if (name === "height") {
      if (!value) {
        setErrorHeight("")
      } else if (isNaN(value)) {
        setErrorHeight("Ensure you input digits only")
      } else if (value < 120) {
        setErrorHeight("The minimum allowable height is 120 cm")
      } else if (value > 240) {
        setErrorHeight("The maximum allowable height is 240 cm")
      } else {
        setErrorHeight("")
      }
    }

    if (name === "weight") {
      if (!value) {
        setErrorWeight("")
      } else if (isNaN(value)) {
        setErrorWeight("Ensure you input digits only")
      } else if (value < 40) {
        setErrorWeight("Kindly input a minimum of 40 kilograms")
      } else if (value > 240) {
        setErrorWeight("Please specify a lower value")
      } else {
        setErrorWeight("")
      }
    }

    if (name === "age") {
      if (!value) {
        setErrorAge("")
      } else if (isNaN(value)) {
        setErrorAge("Ensure you input digits only")
      } else if (value < 18) {
        setErrorAge("You must be over 18 y.o.")
      } else if (value > 100) {
        setErrorAge(
          `Is it correct that you are ${value} years of age? Kindly provide your accurate age`
        )
      } else {
        setErrorAge("")
      }
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    let hasError = false

    if (data.height === "") {
      setErrorHeight("This is a required field")
      hasError = true
    } else if (isNaN(data.height)) {
      setErrorHeight("Ensure you input digits only")
      hasError = true
    } else if (data.height < 120) {
      setErrorHeight("The minimum allowable height is 120 cm")
      hasError = true
    } else if (data.height > 250) {
      setErrorHeight("The maximum allowable height is 240 cm")
      hasError = true
    } else {
      setErrorHeight("")
    }

    if (data.weight === "") {
      setErrorWeight("This is a required field")
      hasError = true
    } else if (isNaN(data.weight)) {
      setErrorWeight("Ensure you input digits only")
      hasError = true
    } else if (data.weight < 40) {
      setErrorWeight("Kindly input a minimum of 40 kilograms")
      hasError = true
    } else if (data.weight > 250) {
      setErrorWeight("Please specify a lower value")
      hasError = true
    } else {
      setErrorWeight("")
    }

    if (data.age === "") {
      setErrorAge("This is a required field")
      hasError = true
    } else if (isNaN(data.age)) {
      setErrorAge("Ensure you input digits only")
      hasError = true
    } else if (data.age < 18) {
      setErrorAge("You must be over 18 y.o.")
      hasError = true
    } else if (data.age > 100) {
      setErrorAge(
        `Is it correct that you are ${data.age} years of age? Kindly provide your accurate age`
      )
      hasError = true
    } else {
      setErrorAge("")
    }

    if (!hasError) {
      navigate("results", { state: { result, BMIresult } })
    }
  }

  const clearHandler = () => {
    setData({ height: "", weight: "", age: "" })
    setErrorHeight("")
    setErrorWeight("")
    setErrorAge("")
    setResult()
  }

  return (
    <>
      <h1>BMI calculator</h1>
      <div className={styles.bmiWrapper}>
        <form onSubmit={handleSubmitForm}>
          <div className={styles.bmiField}>
            <label>Input your height (in cm)</label>
            <span className={styles.bmiError}>{errorHeight}</span>
            <input
              type="text"
              placeholder="180"
              value={data.height}
              onChange={(e) => handleInputChange(e, "height")}
            />
          </div>
          <div className={styles.bmiField}>
            <label>Input your weight (in kg)</label>
            <span className={styles.bmiError}>{errorWeight}</span>
            <input
              type="text"
              placeholder="77"
              value={data.weight}
              onChange={(e) => handleInputChange(e, "weight")}
            />
          </div>
          <div className={styles.bmiField}>
            <label>Input your age</label>
            <span className={styles.bmiError}>{errorAge}</span>
            <input
              type="text"
              placeholder="21"
              value={data.age}
              onChange={(e) => handleInputChange(e, "age")}
            />
          </div>
          <div className="buttons">
            <button type="submit" className="button">
              Calculate
            </button>
            <button type="button" className="button" onClick={clearHandler}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default BMI
