import { useState } from "react";
import "./App.css"
function Main() {

    // toggle the nav indicator position 

    let [is1Toggled,setIs1Toggled] = useState(true)
    let [is2Toggled,setIs2Toggled] = useState(false)
    let [is3Toggled,setIs3Toggled] = useState(false)


    let option1Color = is1Toggled ? "#161a32" : "#63677f" ;
    let option2Color = is2Toggled ? "#161a32" : "#63677f" ;
    let option3Color = is3Toggled ? "#161a32" : "#63677f" ;


    function toggleNavIndicator(value,event){
    document.getElementById("indicator").style.left = `${value}em`;
    if(value === 0.5){
     setIs1Toggled(true)
     setIs2Toggled(false)
     setIs3Toggled(false)
    }
    else if(value === 8.2){
        setIs1Toggled(false)
        setIs2Toggled(true)
        setIs3Toggled(false)
    }
    else if(value === 16){
        setIs1Toggled(false)
        setIs2Toggled(false)
        setIs3Toggled(true)
    }
    }

    // toggle settings menu visibility

    function toggleSettingsMenu(){
        document.getElementById("settings-popup").classList.toggle("active");
    }

    return ( 
        <main>
          <div id="timer-page">
            <h1>pomodoro</h1>
            <div id="nav">
                <span id="indicator"></span>
                <h4 style={{color: option1Color}} onClick={()=>{toggleNavIndicator(0.5)}}>pomodoro</h4>
                <h4 style={{color: option2Color}} onClick={()=>{toggleNavIndicator(8.2)}}>short break</h4>
                <h4 style={{color: option3Color}} onClick={()=>{toggleNavIndicator(16)}}>long break</h4>
            </div>
            <div id="timer"></div>
            <i onClick={toggleSettingsMenu} className="material-icons">settings</i>
          </div>
          <div className="inactive" id="settings-popup"></div>
        </main>
     );
}

export default Main;