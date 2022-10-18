import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { actions as amountActions } from '../features/amount';


export const Amount = () => {
  const dispatch = useDispatch();
  const amount = useAppSelector(state => state.amount)

  const add = (value: number) => dispatch(amountActions.add(value));
  const take = (value: number) => dispatch(amountActions.take(value));
  const clear = () => dispatch(amountActions.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
