export default {
  namespace: 'counter',
  state: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
    add(state, { payload }) {
      return state + payload;
    },
  },
  effects: {
    *asyncDecrease(actions, { call, put }) {
      //put 重新调用reducers
      yield call(delay, 2000);
      yield put({ type: 'decrease' });
    },
    *asyncIncrease(actions, { call, put }) {
      //put 重新调用reducers
      yield call(delay, 2000);
      yield put({ type: 'increase' });
      console.log('kk');
    },
  },
  subscriptions: {
    resizeIncrease({ dispatch }) {
      //订阅窗口的尺寸变化，每次变化让数字增加
      window.onresize = () => {
        dispatch({ type: 'increase' });
      };
    },
    resizeDecrease({ dispatch, history }) {
      history.listen(() => {
        dispatch({ type: 'decrease' });
      });
    },
  },
};

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
