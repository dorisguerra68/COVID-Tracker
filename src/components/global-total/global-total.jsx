import React from 'react'
import './global-total.css'
import covidBlueIcon from '../../assets/images/icons/covid-blue.svg'
import covidGreenIcon from '../../assets/images/icons/covid-green.svg'
import covidorangeIcon from '../../assets/images/icons/covid-orange.svg'
import covidredIcon from '../../assets/images/icons/covid-red.svg'
import telephoneIcon from '../../assets/images/icons/telephone.svg'
function GlobalTotal() {
    return (
        <section className="total-global">

            <article className="total-global__item">

                <div className="total-global__icon">
                  <img src={covidBlueIcon} alt="Covid icon" />
                </div>

                <div className="total-global__content">
                    <p className="total-global__label">
                        Total Confirmed
                    </p>

                    <h3 className="total-global__cases">
                        374111576
                    </h3>
                </div>

            </article>
            <article className="total-global__item">

                <div className="total-global__icon">
                  <img src={covidGreenIcon} alt="Covid icon" />
                </div>

                <div className="total-global__content">
                    <p className="total-global__label">
                       Total Recovered
                    </p>

                    <h3 className="total-global__cases">
                       0
                    </h3>
                </div>

            </article>
            <article className="total-global__item">

                <div className="total-global__icon">
                  <img src={covidorangeIcon} alt="Covid icon" />
                </div>

                <div className="total-global__content">
                    <p className="total-global__label">
                        Total Deaths 

                    </p>

                    <h3 className="total-global__cases">
                       5660039
                    </h3>
                </div>

            </article>
            <article className="total-global__item">

                <div className="total-global__icon">
                  <img src={covidredIcon} alt="Covid icon" />
                </div>

                <div className="total-global__content">
                    <p className="total-global__label">
                        New Deaths
                    </p>

                    <h3 className="total-global__cases">
                        3631
                    </h3>
                </div>

            </article>
            <article className="total-global__item">

                <div className="total-global__icon">
                  <img src={telephoneIcon} alt="Covid icon" />
                </div>

                <div className="total-global__content">
                    <p className="total-global__label">
                        Help Line No.
                    </p>

                    <h3 className="total-global__cases">
                       198
                    </h3>
                </div>

            </article>


        </section>
    )
}

export default GlobalTotal