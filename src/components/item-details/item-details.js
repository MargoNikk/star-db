import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      loading: false,
      error: false,
      image: null
    };

    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    } else if (this.props.getData !== prevProps.getData) {
      this.setState({ item: null });
    }
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({ loading: true });

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImgUrl(item)
        });
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    if (!this.state.item) {
      return (
        <div className="person-details card">
          <span>Please, select an item from a list</span>
        </div>
      );
    }

    const { name } = this.state.item;
    const { loading, error, image, item } = this.state;

    return (
      <div className="person-details card">
        {loading && <Spinner />}
        {error && !loading && <ErrorIndicator />}
        {!error && !loading && <React.Fragment>
          <img className="person-image" src={image} alt="avatar" />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, { item });
                })
              }
            </ul>
          </div>
        </React.Fragment>}
      </div>
    )
  }
}