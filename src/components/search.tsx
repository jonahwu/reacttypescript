import * as React from "react";


function sumf(x:number): number {
	return x+10

}
const sum = (x:number): number =>{
	return x+1
}


type LinkProps = {
  x: string;
  y: string;
};


const Link: React.FC<LinkProps> = (props) => {
  const { x, y, children } = props;
	let retx:number = sum(2)
	let retxf:number = sumf(2)
  console.log('yes i am here ',{retx},{retxf});	
  return (
    <div className="link">
      {/* ... */}
      <h2>test {y} {retx} {retxf}</h2>
    </div>
  );
};

export default Link;


