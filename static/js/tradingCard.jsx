function TradingCard(props) {

  // let img = new Image();
  // img.src = '/static/img/placeholder.png';

  // if (!props.imgUrl) {
  //   props.imgUrl = img.src;
  // }

  return (
    <div className="card">
      <p> Name: {props.name} </p>
      <img src={props.imgUrl} />
      <p> Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() {
  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => {
    fetch("/cards.json")
      .then((response) => response.json())
      .then((data) => updateCards(data.cards));
  }, []);

  const tradingCards = [];

  // you can uncomment this console.log (line 27) to see the
  // value of the cards object what is it initially?
  // what about after the component re-renders?
  // if you remove the empty array on line 18 (so
  // there is no dependency list, what happens?)
  // console.log({ cards });

  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return <div>{tradingCards}</div>;
}

ReactDOM.render(<TradingCardContainer />, document.getElementById("container"));
