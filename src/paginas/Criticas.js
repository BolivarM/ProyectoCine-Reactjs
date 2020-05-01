import React, { Component } from 'react';
import BigBox from '../componentesCriticas/Box';
import './styles/Criticas.css';
import Peticiones from '../utils/consultasPersonalizadas';
import ClienteGql from '../utils/GqlClient';
import Lista1 from '../componentesCriticas/Lista1';

const GQLClient = ClienteGql;

class Criticas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      nextPage: 1,
      peliculas: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const variables = {
        page: this.state.nextPage,
      };
      const respuesta = await GQLClient.request(
        Peticiones.getPeliculasEstreno,
        variables
      );
      this.setState({
        loading: false,
        peliculas: this.state.peliculas.concat(respuesta.getCriticasValor),
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    return (
      <section className='contenedorCriticas'>
        <div className='elemento'>
          <Lista1 peliculas={this.state.peliculas} />
        </div>
        <div className='elemento'>item #2</div>
        <div className='elemento'>item #3</div>
        <div className='elemento'>item #4</div>
      </section>
    );
  }
}

export default Criticas;
/*<Lista1 peliculas={this.state.peliculas} />*/
