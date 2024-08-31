
import React from "react";

function ButtonFinal({ choice, isCorrect, isActive }) {
    const styles = {
      backgroundColor: isCorrect ? "#AFE1AF" : isActive ? "#F08080" : "aliceblue"
    }
  
    return(
      <button className="Choice" style={styles}>{choice}</button>
    )
}

export default ButtonFinal;
