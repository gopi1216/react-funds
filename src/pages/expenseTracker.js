import {ComponentTitle, ExpenseItem} from '../components';
export default function ExpenseTracker() {
  return(
    <>
      <ComponentTitle title="Expense Tracker" />
      <section className='container'>
        <ExpenseItem />
      </section>
    </>
  );
}