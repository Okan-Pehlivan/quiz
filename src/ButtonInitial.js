
import React from "react";

function ButtonInitial({ id, choice, isCorrect, itemID, isActive, onClick }) {
    const styles = {
      backgroundColor: isActive ? "#cccccc" : "aliceblue"
    }
  
    return(
      <button className="Choice" style={styles} onClick={() => onClick(id, choice, isCorrect, itemID, isActive)}>{choice}</button>
    )
}

export default ButtonInitial;
