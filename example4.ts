 
interface Ball {
    size: string;
}

interface Bat {
    size: string;
    length:number
}
  
  let ball: Ball = { size: "small" };
  let bat: Bat = { size: "small" ,length:4};
  
  bat = ball;//error extra value in bat
  ball = bat;