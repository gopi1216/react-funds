export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', {month: 'long'}),
        year = props.date.toLocaleString('en-US', {year: 'numeric'}),
        day = props.date.toLocaleString('en-US', {day: 'numeric'});

  return(
    <div className='expense-date d-flex fd-column pi-center'>
        <h3>{month}</h3>
        <span>{year}</span>
        <h3>{day}</h3>
      </div>
  )
}