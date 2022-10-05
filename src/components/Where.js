export default function Where() {
    const where = prompt("어디로 갈까요? left / right");

    return (
        <>
            {where === "left" ? (<h1>여기는 왼쪽 입니다</h1>) : (<h1>여기는 오른쪽 입니다</h1>)}
        </>
    )

    // if (where === "left") {
    //     return (
    //         <>
    //             <h1>여기는 왼쪽 입니다.</h1>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h1>여기는 오른쪽 입니다.</h1>
    //         </>
    //     )
    // }
}
