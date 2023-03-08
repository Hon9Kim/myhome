import { Accordion, InputGroup, Form, Button } from 'react-bootstrap';
import { useState, useRef } from 'react';

function GuGudan() {

    const questionBox = {
        padding: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        fontSize: "25px"
    }
    
    const randomNumber = () => Math.ceil(Math.random() * 9);
    const numInput = useRef();

    let [firstNum, setFirstNum] = useState(randomNumber);
    let [lastNum, setLastNum] = useState(randomNumber);
    let [resultNum, setResultNum] = useState(0);
    let [result, setResult] = useState('');

    const newQuiz = () => {
        setFirstNum(randomNumber);
        setLastNum(randomNumber);
    }

    const onSubmit = (e) => {
        if (firstNum * lastNum == resultNum) {
            setResult('정답입니다.');

            newQuiz();
        } else {
            setResult('틀렸어요');
        }
        numInput.current.focus();
    }

    const onKeyUp = () => {
        if (window.event.keyCode == 13) {
            onSubmit();
        }
    }

    const onChange = (e) => {
        setResultNum(e.target.value);
    }

    return (
        <>
            <Accordion.Body>
                <div style={questionBox}>
                    {firstNum} X {lastNum} = ?
                </div>
                <InputGroup className="mb-3">
                    <Form.Control placeholder="값을 입력하세요" type="number" ref={numInput} onKeyUp={onKeyUp} onChange={onChange} />
                    <Button variant="outline-secondary" id="button-addon2" onClick={onSubmit}>
                        제출
                    </Button>
                </InputGroup>
                {result}
            </Accordion.Body>
        </>

    )
}

export default GuGudan;