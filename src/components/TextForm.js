import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    
    // const handleReset = ()=>{
    //     // console.log("I am Reset");
    //     // var text = document.getElementById("myBox");
    //     let reset = new deleteText();
    //     reset.text = text;
    //     window.deleteText();

    //     // msg.text = text;
    //     // navigator.clipboard.writeText(text.value);
    // }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }


    const [text, setText] = useState('Enter text here');
    // text="new text"; //wrong way to change the state
    // setText = ("new text"); //correct way

    return (
        <>
        <div className="container" style ={{color: props.mode==='dark'?'white':'#090b4a'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#090b4a'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-2" style ={{color: props.mode==='dark'?'white':'#090b4a'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
