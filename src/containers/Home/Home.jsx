import { Button, Divider, Stack, TextField } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { incrementCurrentValue } from "./actions";
import { selectHelloValue, selectLoading } from "./selectors";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTextFieldValue: undefined,
    };
  }

  render() {
    return (
      <>
        
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
