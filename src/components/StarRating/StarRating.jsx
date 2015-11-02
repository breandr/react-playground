import React from 'react';

const Star = (props) => {
  const style = {
    color: 'gold',
    cursor: 'pointer'
  };

  const star = props.highlighted ? '★' : '☆';

  return <span style={style} {...props}>{star}</span>;
};

export default class StarRating extends React.Component {
  static Star = Star;
  state = {
    highlighted: 0,
    selected: 0
  };

  constructor(props) {
    super(props);
  }

  highlightStar(star) {
    this.setState({
      highlighted: star
    });
  }

  selectStar(star) {
    this.setState({
      selected: star === this.state.selected ? 0 : star
    });
  }

  renderStars() {
    const stars = [];

    for (let i = 1; i <= this.props.numStars; ++i) {
      stars.push(<StarRating.Star key={`star-${i}`} highlighted={this.state.highlighted >= i || this.state.selected >= i} onClick={() => this.selectStar(i)} onMouseOut={() => this.highlightStar(0)} onMouseOver={() => this.highlightStar(i)} rating={i}/>);
    }

    return stars;
  }

  render() {
    return <div>{this.renderStars.call(this)}</div>;
  }
}
