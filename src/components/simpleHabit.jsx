import React, {useState,useRef,useCallback,useEffect} from 'react';

const SimpleHabit = () => {

    const [count,setCount]=useState(0);
    const spanRef = useRef();
    const idReference = useRef();

    //useCallback React에서 제공하는 함수로 로드 될때마다 계속 생성되지 않고 캐시하고 있다가 콜백으로 처리된다.
    //useCallback 로 지정되지 않으면 계속 호출되어 업데이트(render)가 되는 사이드 임팩트가 있다.
    // 이는 memo (class 단위 구현의 PureComponent와 동일)를 사용하여도 사이드임팩트가 발생한다.
    const handleIncrement = useCallback(() => {
        setCount(count+1);
    });

    //useEffect는 컴포넌트가 마운트 되었을때 또는 업데이트가 되었을때 호출되는 함수이다.(React 제공)
    // 인자값이 없으면 마운트, 업데이트 시 호출 (화면기준)
    // 두번째 인자 값에 []로 지정하면 처음 마운트 될때만 호출
    // 두번째 [count] 인자 키에 따라 저징된 값이 변경될때 호출
    useEffect(()=>{
        console.log("mounnted & update:" +count);
    },[count]);
    return (
        <li className="habit">
            <span ref ={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <input  ref={idReference}  type='text' />
            <button className="habit-button habit-increase"  onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}



export default SimpleHabit;
