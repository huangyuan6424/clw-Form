import { React, useRef } from 'react';
import { connect } from 'umi';

function Counter(props) {
  const inpRef = useRef();
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.asyncIncrease}>异步+</button>
      <button style={{ marginRight: '20px' }} onClick={props.onIncrease}>
        +
      </button>
      <button onClick={props.onDecrease}>-</button>
      <button onClick={props.asyncDecrease}>异步-</button>
      <div>
        <input ref={inpRef} />
        <button
          onClick={() => {
            const n = parseInt(inpRef.current.value);
            props.add(n);
          }}
        >
          加上
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  number: state.counter,
});
const mapDispatchTopProps = (dispatch) => ({
  onIncrease: () => {
    dispatch({
      type: 'counter/increase',
    });
  },
  onDecrease: () => {
    dispatch({
      type: 'counter/decrease',
    });
  },
  add: (n) => {
    dispatch({
      type: 'counter/add',
      payload: n,
    });
  },
  asyncDecrease: () => {
    dispatch({
      type: 'counter/asyncDecrease',
    });
  },
  asyncIncrease: () => {
    dispatch({
      type: 'counter/asyncIncrease',
    });
  },
});

export default connect(mapStateToProps, mapDispatchTopProps)(Counter);
