const TotalCard = ({ icon, label, value }) => {
  return (
    <article className="total-global__item">

      <div className="total-global__icon">
        <img src={icon} alt={label} />
      </div>

      <div className="total-global__content">
        <p className="total-global__label">
          {label}
        </p>

        <h3 className="total-global__cases">
          {value}
        </h3>
      </div>

    </article>
  )
}

export default TotalCard