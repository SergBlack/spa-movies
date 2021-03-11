import React from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

// TODO: replace with real data
import movies from './movies.json';

// TODO: replace with real data
const filtersList = ['ALL', 'ACTION', 'ADVENTURE', 'DRAMA', 'MYSTERY', 'THRILLER'];
const sortList = ['RELEASE DATE', 'TITLE'];

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState({ data: movies });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Header />
        <Main data={data} filtersList={filtersList} sortList={sortList} />
        <Footer />
      </>
    );
  }
}
