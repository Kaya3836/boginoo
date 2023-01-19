import { useState } from "react"
import styles from "../../styles/Input.module.css"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className={styles.inputContainer}>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  )
}
export default InputShortener;
