import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

export default class SimpleMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event){
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose(){
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.props.heading}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.items && 
            this.props.items.map((element, i) => {
            return (
              <MenuItem component={Link} to={element.route} key={i} onClick={this.handleClose}>
                {element.displayText}
              </MenuItem>)
          })}

          
        </Menu>
      </div>
    );
  }
}