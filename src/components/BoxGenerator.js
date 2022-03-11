import React, { useState } from 'react';

const BoxGenerator = () => {

    let [color, setColor] = useState("");
    let [hxw, setHxW] = useState("");


    let [boxList, setBoxList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        let newBox = {color, hxw}
        setColor("")
        setHxW("")

        setBoxList([...boxList, newBox])
    }


    return(
        <div>
            <h1>Box Generator</h1>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>Color:</label>
                    <input type="text" onChange={(e)=>{setColor(e.target.value)}} value={color}></input>
                </div>
                <div>
                    <label>Height and Width:</label>
                    <input type="text" onChange={(e)=>{setHxW(e.target.value)}} value = {hxw}></input>
                </div>
                <button type="submit">Create the Box Bruh</button>  
            </form>
            <div className='boxs'>
            {
                boxList.map(box=>{
                    return  <div style = {{backgroundColor: box.color, border: "solid black 2px", height: box.hxw + "em", width: box.hxw + "em"}}>
                    </div>})
            }
            </div>
        </div>
    );

}
export default BoxGenerator