import React, {useState} from "react";
import Circle from "./Circle";

function App() {
    // userState() 초기값으로 지정한 타입으로 value, setValue를 사용할때 타입을 추론할 수 있따.
    // 초기값이 문자열인데 어떠한 이유로 value를 number 로 저장해야한다면
    // useState("")<string|number>  제네릭 타입을 지정한다.
    const [value, setValue] = useState("");
    // any 타입인 event 의 타입 설정.
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello", value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="username"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default App;
