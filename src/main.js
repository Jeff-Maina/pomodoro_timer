import { useState } from "react";
import "./App.css";
function Main() {
    // toggle the nav indicator position

    let [is1Toggled, setIs1Toggled] = useState(true);
    let [is2Toggled, setIs2Toggled] = useState(false);
    let [is3Toggled, setIs3Toggled] = useState(false);

    let option1Color = is1Toggled ? "#161a32" : "#63677f";
    let option2Color = is2Toggled ? "#161a32" : "#63677f";
    let option3Color = is3Toggled ? "#161a32" : "#63677f";

    function toggleNavIndicator(value, event) {
        document.getElementById("indicator").style.left = `${value}em`;
        if (value === 0.5) {
            setIs1Toggled(true);
            setIs2Toggled(false);
            setIs3Toggled(false);
        } else if (value === 8.2) {
            setIs1Toggled(false);
            setIs2Toggled(true);
            setIs3Toggled(false);
        } else if (value === 16) {
            setIs1Toggled(false);
            setIs2Toggled(false);
            setIs3Toggled(true);
        }
    }

    // toggle settings menu visibility

    function toggleSettingsMenu() {
        document.getElementById("settings-popup").classList.toggle("active");
    }

    // toggle settings label visibility

    function toggleLabelVisibility() {
        document.getElementById("label-popup").classList.toggle("label-on");
        document.querySelector("input[type=text]").style.border =
            "2px solid var(--nav-text-color)";
        document.querySelector(".input").style.visibility = "hidden";
        document.querySelector("#description").style.border =
            "2px solid var(--nav-text-color)";
        document.querySelector(".textarea").style.visibility = "hidden";
    }

    //   pick colors for labels

    function pickColor(index) {
        console.log(index);
        if (index === 1) {
            document.querySelector(`[data-index="1"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="1"`).style.visibility = "hidden";
        }
        if (index === 2) {
            document.querySelector(`[data-index="2"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="2"`).style.visibility = "hidden";
        }
        if (index === 3) {
            document.querySelector(`[data-index="3"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="3"`).style.visibility = "hidden";
        }
        if (index === 4) {
            document.querySelector(`[data-index="4"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="4"`).style.visibility = "hidden";
        }
        if (index === 5) {
            document.querySelector(`[data-index="5"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="5"`).style.visibility = "hidden";
        }
        if (index === 6) {
            document.querySelector(`[data-index="6"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="6"`).style.visibility = "hidden";
        }
        if (index === 7) {
            document.querySelector(`[data-index="7"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="7"`).style.visibility = "hidden";
        }
        if (index === 8) {
            document.querySelector(`[data-index="8"`).style.visibility = "visible";
        } else {
            document.querySelector(`[data-index="8"`).style.visibility = "hidden";
        }
    }

    //   verify input

    function verifyInput() {
        let input_value = document.querySelector("input[type=text]").value.length;
        let textarea_value = document.querySelector("#description").value.length;

        if (input_value === 0) {
            document.querySelector("input[type=text]").style.border = "2px solid red";
            document.querySelector(".input").style.visibility = "visible";
        }
        if (textarea_value === 0) {
            document.querySelector("#description").style.border = "2px solid red";
            document.querySelector(".textarea").style.visibility = "visible";
        }
        if (input_value !== 0 && textarea_value !== 0) {
            document.querySelector("form").reset();
            toggleLabelVisibility();
        }
        console.log(textarea_value);
    }

    // remove error msg when user starts typing again
    function removeError(area) {
        if (area === "input") {
            document.querySelector("input[type=text]").style.border =
                "2px solid var(--nav-text-color)";
            document.querySelector(".input").style.visibility = "hidden";
        } else if (area === "textarea") {
            document.querySelector("#description").style.border =
                "2px solid var(--nav-text-color)";
            document.querySelector(".textarea").style.visibility = "hidden";
        }
    }

    // toggle between play and pause
    let [isPaused, setIsPaused] = useState(false);

    let playState = isPaused ? "pause" : "play_arrow";

    function togglePlay() {
        if (isPaused) {
            setIsPaused(false);
        } else if (!isPaused) {
            setIsPaused(true);
        }
    }

    return (
        <main>
            <div id="timer-page">
                <h1>pomodoro</h1>
                <div id="nav">
                    <span id="indicator"></span>
                    <h4
                        style={{ color: option1Color }}
                        onClick={() => {
                            toggleNavIndicator(0.5);
                        }}
                    >
                        pomodoro
                    </h4>
                    <h4
                        style={{ color: option2Color }}
                        onClick={() => {
                            toggleNavIndicator(8.2);
                        }}
                    >
                        short break
                    </h4>
                    <h4
                        style={{ color: option3Color }}
                        onClick={() => {
                            toggleNavIndicator(16);
                        }}
                    >
                        long break
                    </h4>
                </div>
                <div className="circle parent" id="timer">
                    <div className="circle outer">
                        <div className="circle inner">
                            <div className="bars">
                                <div className="bar start">
                                    <span className="pointer top"></span>
                                </div>
                                <div className="bar finish">
                                    <span className="pointer btm"></span>
                                </div>
                            </div>
                            <div className="innermost">
                                <i
                                    onClick={toggleLabelVisibility}
                                    id="label-icon"
                                    className="material-symbols-outlined"
                                >
                                    sell
                                </i>
                                <h1 id="time">17:24</h1>
                                <i
                                    onClick={togglePlay}
                                    id="playIcon"
                                    className="material-icons"
                                >
                                    {playState}
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                <i
                    onClick={toggleSettingsMenu}
                    id="settings-icon"
                    className="material-icons"
                >
                    settings
                </i>
            </div>
            <div className="inactive" id="settings-popup"></div>
            <div className="label-off" id="label-popup">
                <i
                    onClick={toggleLabelVisibility}
                    id="cancel-icon"
                    className="material-icons"
                >
                    cancel
                </i>
                <form>
                    <h3>Tag value</h3>
                    <h4 className="input error">*</h4>
                    <input
                        onFocus={() => {
                            removeError("input");
                        }}
                        type="text"
                    ></input>
                    <h3>Color</h3>
                    <div id="colors-container">
                        <span
                            onClick={(e) => {
                                pickColor(1);
                            }}
                        >
                            <i data-index="1" className="material-icons">
                                check
                            </i>
                        </span>
                        <span
                            onClick={(e) => {
                                pickColor(2);
                            }}
                        >
                            <i data-index="2" className="material-icons">
                                done
                            </i>
                        </span>
                        <span
                            onClick={(e) => {
                                pickColor(3);
                            }}
                        >
                            <i data-index="3" className="material-icons">
                                done
                            </i>
                        </span>
                        <span
                            onClick={(e) => {
                                pickColor(4);
                            }}
                        >
                            <i data-index="4" className="material-icons">
                                done
                            </i>
                        </span>
                        <span
                            onClick={(e) => {
                                pickColor(5);
                            }}
                        >
                            <i data-index="5" className="material-icons">
                                done
                            </i>
                        </span>
                        <span
                            onClick={(e) => {
                                pickColor(6);
                            }}
                        >
                            <i data-index="6" className="material-icons">
                                done
                            </i>
                        </span>
                    </div>
                    <h3>Description</h3>
                    <h4 className="textarea error">*</h4>
                    <textarea
                        onFocus={() => {
                            removeError("textarea");
                        }}
                        id="description"
                    ></textarea>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            verifyInput();
                        }}
                    >
                        Save<i className="material-icons">arrow_forward</i>
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Main;
