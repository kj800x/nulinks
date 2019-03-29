import React from "react";
import { useFetch } from "react-hooks-async";
import "./FoodTruckExtra.css";

const DATA_URL =
  "https://s3.amazonaws.com/nulinks-lamda-out.kj800x.com/food-truck-schedule.json";
const DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
const MEALS = ["lunch", "dinner"];

const titleCase = str => str.charAt(0).toUpperCase() + str.slice(1);
const currentMeal = () => {
  const nowHour = new Date().getHours();
  if (nowHour < 15) {
    return "lunch";
  } else {
    return "dinner";
  }
};
const currentDateOfWeek = () => DAYS_OF_WEEK[new Date().getDay()];

const shortStringifyTrucks = trucks =>
  trucks.map(truck => truck.name).join(", ");

const stringifyTrucks = trucks =>
  trucks.map(truck => truck.name + " Food Truck").join(", ");

function FoodTrucksCurrent({ truckData }) {
  const current = stringifyTrucks(
    truckData[currentMeal()][currentDateOfWeek()]
  );

  if (current) {
    return <p className="food-truck-current">Currently: {current}</p>;
  } else {
    return <p className="food-truck-current">Currently no trucks</p>;
  }
}

function FoodTrucksTable({ truckData }) {
  return (
    <table className="food-truck-table">
      <thead>
        <tr>
          <td />
          {DAYS_OF_WEEK.map(dow => (
            <th key={dow}>{titleCase(dow)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {MEALS.map(meal => (
          <tr key={meal}>
            <th>{titleCase(meal)}</th>
            {DAYS_OF_WEEK.map(dow => (
              <td key={dow}>{shortStringifyTrucks(truckData[meal][dow])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FoodTrucksExtra() {
  const { pending, error, result } = useFetch(DATA_URL);

  if (pending || error) {
    return null;
  }

  return (
    <>
      <FoodTrucksCurrent truckData={result} />
      <FoodTrucksTable truckData={result} />
    </>
  );
}

export default FoodTrucksExtra;
