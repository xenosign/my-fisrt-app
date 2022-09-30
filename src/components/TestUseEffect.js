import { useEffect, useState, useRef } from "react";

export default function TestUseEffect() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("입력해 주세요!");
    const inputValue = useRef();

    const onButtonClick = () => {
        setCount(count + 1);
    }

    const onInputChange = () => {
        setText(inputValue.current.value);
    }

    useEffect(() => {
        console.log("🌇 렌더링 할 때마다 실행되는 useEffect");
    })

    useEffect(() => {
        console.log("🚁 둘 다 보고 있는 useEffect");
    }, [count, text])

    useEffect(() => {
        console.log("🚧 최초 렌더링 시에만 실행되는 useEffect");
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={onButtonClick}>+1 버튼</button>
            <br /><br /><br />
            <input ref={inputValue} onChange={onInputChange}></input>
            <h1>{text}</h1>
        </>
    )

}