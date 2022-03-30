# Food delivery

You are developing a food delivery service (something like Wolt, Bolt Food etc.).

The system you are writing can calculate delivery routes and interact with the delivery platform.

- Deliver platform is sending you the orders submitted by customers - restaurant address & pickup time, delivery address and time in which the order must be delivered (it may get cold)
- You can interact with a navigation system:
  - request your location
  - request map of the nearest area
- You must notify delivery platform when the order is submitted
- You can ask delivery platform how much have you earned today

### About map & coordinates

The company you are working for does not have much money, meaning you cannot access Google Maps API or any other paid services.

All the coordinates are in the in the [cartesian coordinate system](https://en.wikipedia.org/wiki/Cartesian_coordinate_system) (x, y).

You receive your location as x & y coordinates.

And it becomes more interesting with the map (unfortunately), see some responses in the [map-examples folder](./map-examples/) where:

- `_` is a road
- `W` is an address where order can be picked up or delivered (if road is nearby)

### Other relevant information

- You ride on bike & your average speed is 25 km/h
- Distance between two nearby points (0, 0 and 0, 1) on the map is 100 meters
- You are paid:
  - 1 EUR for deliveries that made you travel for less then 1 km
  - 3 EUR for deliveries that made you travel for less then 5 km
  - 5 EUR for any other deliveries
- You can take two orders simultaneously
- You lose half of your current earnings if the order delivery time was missed

## But where to start? 🤔

<details>
  <summary>Click here for instructions</summary>
  
  TDD
</details>

## Bonus points

- Database (Postgres, Mongo or whatever) is running in Docker and stores all the orders and their states, repository is covered by tests
- There are multiple navigation system options available:
  - Google Maps API (or any similar service)
  - [maps generated here @riskylab.com/tilemap](http://riskylab.com/tilemap/) (or anything similar)
- Map becomes more advanced - there are roads of asphalt (`_`) and roads without pavement where your average speed is reduced
