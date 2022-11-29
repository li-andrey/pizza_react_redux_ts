import React from "react";
import styles from "./searchBlock.module.scss";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

function SearchBlock() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const inputRef = React.useRef();

  // function debounce(fn, ms) {
  //   let timeout;
  //   return () => {
  //     const fnCall = () => fn.apply(this, arguments);
  //     console.log("333", arguments);

  //     clearTimeout(timeout);
  //     timeout = setTimeout(fnCall, ms);
  //   };
  // }

  function onClearInput() {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  }

  const updateInput = React.useCallback(
    debounce((val) => {
      dispatch(setSearchValue(val));
    }, 300),
    []
  );

  function onChangeInput(e) {
    setValue(e.target.value);
    updateInput(e.target.value);
  }

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="найти пиццу..."
      />
      {value && (
        <svg
          onClick={onClearInput}
          className={styles.clear}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
}

export default SearchBlock;
