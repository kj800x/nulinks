import React, { Component } from "react";

import FoodTrucksExtra from "./FoodTruckExtra/FoodTruckExtra";

export default class ResultExtra extends Component {
  render() {
    if (this.props.result.value.title === "Boston Food Trucks") {
      return <FoodTrucksExtra />;
    }
    return null;
  }
}
