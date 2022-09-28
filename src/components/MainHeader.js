import { Component } from "react";

class MainHeader extends Component {
    render() {
        const { text, name, href } = this.props;
        return (
            <div>
                <h1>{name} 님 반갑습니다!</h1>
                <a href={href}>{text}</a>
            </div>
        )
    }
}

export default MainHeader;

// export default function MainHeader(props) {
//     const { text, name, href } = props;

//     return (
//         <div>
//             <h1>{name} 님 반갑습니다!</h1>
//             <a href={href}>{text}</a>
//         </div>
//     )
// }