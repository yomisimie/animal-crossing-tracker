class Bug {
  id: number;
  name: string;
  location: string;
  price: number;
  time: {
    from: string;
    to: string;
  };
  months: number[];
  image: string;
  weather: string;

  constructor(
    id: number,
    name: string,
    location: string,
    price: number,
    time: { from: string; to: string },
    months: number[],
    image: string,
    weather: string
  ) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.location = location;
    this.price = price;
    this.time = time;
    this.weather = weather;
    this.months = months;
  }
}

export default Bug;
