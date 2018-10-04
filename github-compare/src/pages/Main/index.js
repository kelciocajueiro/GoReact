import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/images/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    error: false,
    input: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.input}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        error: false,
        input: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form error={this.state.error} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />

          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
