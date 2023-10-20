const BMIformula = (height, weight) => {
  return ((weight / (height * height)) * 10000).toFixed(1)
}

export default BMIformula
