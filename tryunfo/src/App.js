import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCards: [],
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState(() => ({
      [name]: value,
    }), this.verifyTests);
  };

  verifyTests = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const noventa = 90;
    const sum = 210;
    const totalSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 >= 0 && cardAttr1 <= noventa
      && cardAttr2 >= 0 && cardAttr2 <= noventa
      && cardAttr3 >= 0 && cardAttr3 <= noventa
      && totalSum <= sum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prevState) => ({
      hasTrunfo: cardTrunfo,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      newCards: [...prevState.newCards, newCard],
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      newCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <section />
        Cartas Salvas
        {(newCards.map((element, index) => (<Card
          key={ index }
          cardName={ element.cardName }
          cardDescription={ element.cardDescription }
          cardAttr1={ element.cardAttr1 }
          cardAttr2={ element.cardAttr2 }
          cardAttr3={ element.cardAttr3 }
          cardImage={ element.cardImage }
          cardRare={ element.cardRare }
          cardTrunfo={ element.cardTrunfo }
        />)))}
      </div>
    );
  }
}

export default App;
