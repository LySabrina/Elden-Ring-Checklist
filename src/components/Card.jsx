import PropTypes from "prop-types";
function Card({
  title = "Example",
  img = "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png",
  negations = [
    { name: "Wind", amount: 1 },
    { name: "Wind", amount: 1 },
  ],
  resistances = [
    { name: "Wind", amount: 1 },
    { name: "Wind", amount: 1 },
  ],
  weight = 1,
}) {
  return (
    <div className="border-orange-300 border-2 ">
      <h1 className="card__title text-3xl font-bold uppercase text-center p-2">
        {title}
      </h1>
      <div className="completed">
        <label htmlFor="complete">Owned</label>
        <input type="checkbox" name="complete" id="complete" />
      </div>
      <div className="card__img flex content-center justify-center">
        <img src={img} alt={title} className="" />
      </div>
      <div className="card__stats flex flex-wrap ">
        <div className="stats__negation grow shrink basis-2/4 border-r-2">
          <h2>Damage Negation</h2>
          <ul className="stats__negation-list ">
            {negations.map((elem, index) => (
              <li key={index} className="stats__negation-list-item">
                <p>
                  {elem.name} <span>{elem.amount}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="stats__resistance grow shrink basis-2/4">
          <h2>Resistance</h2>
          <ul className="stats__resistance__list">
            {resistances.map((elem, index) => (
              <li key={index} className="stats__resistance-list-item">
                <p>
                  {elem.name} <span>{elem.amount}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="stats__weight grow shrink basis-full border-t-2 p-2">
          <p>
            <span>Weight: </span> {weight}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  negations: PropTypes.array,
  resistances: PropTypes.array,
  weight: PropTypes.number,
};

export default Card;
