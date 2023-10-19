import { useState } from "react"
import styles from "./BMI.module.css"
import BMIformula from "../data/BMIformula"

const BMI = () => {
  const [data, setData] = useState({ height: "", weight: "" })
  const BMIresult = BMIformula(data.height, data.weight)
  const [result, setResult] = useState("")
  const [errorHeight, setErrorHeight] = useState("")
  const [errorWeight, setErrorWeight] = useState("")

  const handleInputChange = (text, name) => {
    const value = text.target.value
    setData({ ...data, [name]: value })

    if (name === "height") {
      if (!value) {
        setErrorHeight("")
      } else if (isNaN(parseFloat(value))) {
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
      } else if (isNaN(parseFloat(value))) {
        setErrorWeight("Please state only numbers")
      } else if (value < 40) {
        setErrorWeight("Please state at least 40 kg")
      } else if (value > 250) {
        setErrorWeight("Sorry, state a smaller number")
      } else {
        setErrorWeight("")
      }
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    let hasError = false

    if (data.height === "") {
      setErrorHeight("This is a required field")
      hasError = true
    } else if (isNaN(parseFloat(data.height))) {
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
    } else if (isNaN(parseFloat(data.weight))) {
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

    if (!hasError) {
      setResult(BMIresult)
    }
  }

  const clearHandler = () => {
    setData({ height: "", weight: "" })
    setErrorHeight("")
    setErrorWeight("")
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
          <div className={styles.bmiButtons}>
            <button type="submit">Calculate</button>
            <button type="button" onClick={clearHandler}>
              Clear
            </button>
          </div>
        </form>
        {result && <div className={styles.result}>Your BMI = {result}</div>}
      </div>
    </>
  )
}

export default BMI
