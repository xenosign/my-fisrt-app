import Dialog from './Dialog';

export default function WelcomeDialog(props) {
    {/* 리액트의 이벤트 핸들러에 함수를 작성하게 되면 기본적으로 이벤트 객체가 매개 변수로 전달이 됩니다. 
    따라서, 다른 매개 변수 전달을 원하시면 아래와 같이 매개변수를 추가하여 전달해야 합니다.
    하나만 작성하면 해당 매개 변수를 이벤트 객체로 인식해서 문제가 발생합니다! */}
    const alertFunc = (msg, e) => {
        alert(msg);
    }

    return (
        <Dialog color="orange" title="Welcome to summoner's lift" message="소환사의 협곡에 오신 것을 환영합니다." >

            <button onClick={() => alertFunc(props.alertMessage)}>{props.content}</button>
        </Dialog>
    )
}
