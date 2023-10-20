import { useLocation, Link } from "react-router-dom"
import styles from "./BMI.module.css"

const BMIresults = () => {
  const location = useLocation()
  const { BMIresult } = location.state

  return (
    <>
      <div className={styles.bmiWrapper}>
        <h1>{`Your BMI is ${BMIresult}`}</h1>
        {BMIresult <= 18.4 ? (
          <div className={`${styles.bmiUnderweight} ${styles.bmiRes}`}>
            Individuals with a BMI of 18.4 or less fall into the "Underweight"
            category. Being underweight may be an indicator of insufficient
            nutrition, which can have health consequences, such as weakened
            immune system, nutritional deficiencies, and reduced bone density.
            It is important for individuals in this category to consult a
            healthcare professional for assessment and guidance on achieving a
            healthier weight.
          </div>
        ) : (
          ""
        )}
        {BMIresult < 24.9 && BMIresult > 18.5 ? (
          <div className={`${styles.bmiNormal} ${styles.bmiRes}`}>
            A BMI falling within the range of 18.5 to 24.9 is considered
            "Normal" or "Healthy" weight. Individuals in this range are
            generally at a weight that is appropriate for their height, and they
            typically have a lower risk of weight-related health issues.
            Maintaining a normal BMI is associated with better overall health
            and longevity.
          </div>
        ) : (
          ""
        )}
        {BMIresult < 39.9 && BMIresult > 25.0 ? (
          <div className={`${styles.bmiOverweight} ${styles.bmiRes}`}>
            BMI values between 25.0 and 39.9 are classified as "Overweight."
            Overweight individuals have excess body weight relative to their
            height, and this may increase their risk of various health problems,
            including heart disease, type 2 diabetes, and joint issues. Weight
            management through a balanced diet and regular physical activity is
            recommended for those in this category.
          </div>
        ) : (
          ""
        )}
        {BMIresult >= 40 ? (
          <div className={`${styles.bmiObese} ${styles.bmiRes}`}>
            A BMI of 40.0 or higher is categorized as "Obese." Obesity is
            associated with a significantly increased risk of serious health
            conditions, including cardiovascular diseases, hypertension, sleep
            apnea, and some types of cancer. It is crucial for individuals in
            this category to seek professional medical guidance and consider
            weight management strategies, which may include dietary changes,
            exercise, and, in some cases, medical intervention.
          </div>
        ) : (
          ""
        )}
        <small>
          It's important to note that while BMI is a useful tool for evaluating
          weight status on a population level, it does not take into account
          factors like muscle mass, body composition, or distribution of fat,
          which can influence an individual's overall health. For a more
          comprehensive assessment of health, it is advisable to consult with a
          healthcare provider who can consider other factors in addition to BMI.
        </small>
        <div className={styles.bmiBack}>
          <Link to="/bmi/" className="button">
            Calculate again
          </Link>
        </div>
      </div>
    </>
  )
}

export default BMIresults
