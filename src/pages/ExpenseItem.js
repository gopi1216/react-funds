import { ExpenseDate} from './ExpenseDate';

const ExpenseItem = (props) => {
  return(
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <h3 className='expense-item__title fg-1'>{props.title}</h3>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  )
}

export {ExpenseItem};