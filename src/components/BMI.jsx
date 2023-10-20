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
        setErrorHeight("Please state only numbers")
      } else if (value < 120) {
        setErrorHeight("Please state at least 120 cm")
      } else if (value > 250) {
        setErrorHeight("Sorry, the maximum height is 250 cm")
      } else {
        setErrorHeight("")
      }
    }

    if (name === "weight") {
      if (!value) {
        setErrorWeight("")
      } else if (isNaN(value)) {
        setErrorWeight("Please state only numbers")
      } else if (value < 40) {
        setErrorWeight("Please state at least 40 kg")
      } else if (value > 250) {
        setErrorWeight("Sorry, state a smaller number")
      } else {
        setErrorWeight("")
      }
    }

    if (name === "age") {
      if (!value) {
        setErrorAge("")
      } else if (isNaN(value)) {
        setErrorAge("Please state only numbers")
      } else if (value < 18) {
        setErrorAge("Sorry, you must be over 18 y.o.")
      } else if (value > 100) {
        setErrorAge(
          `Are you sure you are ${value} years old? :) Please, state your real age.`
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
      setErrorHeight("Please state only numbers")
      hasError = true
    } else if (data.height < 120) {
      setErrorHeight("Please state at least 120 cm")
      hasError = true
    } else if (data.height > 250) {
      setErrorHeight("Sorry, the maximum height is 250 cm")
      hasError = true
    } else {
      setErrorHeight("")
    }

    if (data.weight === "") {
      setErrorWeight("This is a required field")
      hasError = true
    } else if (isNaN(data.weight)) {
      setErrorWeight("Please state only numbers")
      hasError = true
    } else if (data.weight < 40) {
      setErrorWeight("Please state at least 40 kg")
      hasError = true
    } else if (data.weight > 250) {
      setErrorWeight("Sorry, state a smaller number")
      hasError = true
    } else {
      setErrorWeight("")
    }

    if (data.age === "") {
      setErrorAge("This is a required field")
      hasError = true
    } else if (isNaN(data.age)) {
      setErrorAge("Please state only numbers")
      hasError = true
    } else if (data.age < 18) {
      setErrorAge("Sorry, you must be over 18 y.o.")
      hasError = true
    } else if (data.age > 100) {
      setErrorAge(
        `Are you sure you are ${data.age} years old? Please, state your real age.`
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
            <label>Enter your height</label>
            <span className={styles.bmiError}>{errorHeight}</span>
            <input
              type="text"
              placeholder="180"
              value={data.height}
              onChange={(e) => handleInputChange(e, "height")}
            />
          </div>
          <div className={styles.bmiField}>
            <label>Enter your weight</label>
            <span className={styles.bmiError}>{errorWeight}</span>
            <input
              type="text"
              placeholder="77"
              value={data.weight}
              onChange={(e) => handleInputChange(e, "weight")}
            />
          </div>
          <div className={styles.bmiField}>
            <label>Enter your age</label>
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
