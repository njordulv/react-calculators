import { useState } from "react"
import styles from "./BMI.module.css"
import BMIformula from "../data/BMIformula"

const BMI = () => {
  const [data, setData] = useState({ height: "", weight: "" })
  const BMIresult = BMIformula(data.height, data.weight)
  const [result, setResult] = useState("")

  const handleInputChange = (text, name) => {
    return setData({ ...data, [name]: text.target.value })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (data.height === "" && data.weight === "") {
      return console.log("asddds")
    }
    return setResult(`Your BMI = ${BMIresult}`)
  }

  return (
    <>
      <h1>BMI</h1>
      <div className={styles.bmiWrapper}>
        <form onSubmit={handleSubmitForm}>
          <div className={styles.bmiField}>
            <label>Enter your height</label>
            <input
              type="text"
              placeholder="180"
              value={data.height}
              onChange={(e) => handleInputChange(e, "height")}
            />
          </div>
          <div className={styles.bmiField}>
            <label>Enter your weight</label>
            <input
              type="text"
              placeholder="77"
              value={data.weight}
              onChange={(e) => handleInputChange(e, "weight")}
            />
          </div>
          <div className={styles.bmiButtons}>
            <button type="submit">Calculate</button>
            <button type="button">Clear</button>
          </div>
        </form>
        <div className={styles.result}>{result}</div>
      </div>
    </>
  )
}

export default BMI
