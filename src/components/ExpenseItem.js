export const ExpenseItem = () => {
  const expenseDate= new Date(),
        expenseTitle = 'Car Insurance',
        expensePrice = '294.67';


  return(
    <>
      <div className='expense-item'>
        <div>{expenseDate.toDateString()}</div>
        <div className='expense-item__description'>
          <h3 className='expense-item__title'>{expenseTitle}</h3>
          <div className='expense-item__price'>${expensePrice}</div>
        </div>
      </div>
    </>
  )
}