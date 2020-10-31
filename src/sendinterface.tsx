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

interface Props {
   ld: string[];
   bb: string[];
}

				/*
const DataList: React.FC<Props> = (props) => {
function DataList(props:Props) {
const DataList: React.FC<{obj: Props}> = (props) => {
				 */
const DataList: React.FC<{obj:Props}> = ({obj}) => {

  const listItems = obj.ld.map((lds) =>
  			<li>{lds}</li>
 );
  const listItems2 = obj.bb.map((bds) =>
  			<li>{bds}</li>
 );
  console.log('inside list ',{listItems});	
	/*
  const {datas, children} = props;
  const listItems = datas.map((dd) =>
    <li key={dd.toString()}>
      {dd}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
	 */
	return(
			<div>
							<h2>show some list </h2>
							<ul>{listItems}</ul>
							<ul>{listItems2}</ul>
			</div>
	)
}

const Link: React.FC<LinkProps> = (props) => {
  const { x, y, children } = props;
	let retx:number = sum(Number(x))
	const retxf:number = sumf(2)
 const devices: string[] = ['iphone', 'pixel', 'ipad', 'note 10'];
 const Dev:Props={ld:['iphone', 'pixel', 'ipad', 'note 10'], bb:['1','2','3']}

 const listItems = devices.map((listData) =>
			<li>{listData}</li>
 );

  console.log('yes i am here ',{retx},{retxf});	

  return (
    <div className="link">
      {/* ... */}
      <h2>test {y} {retx} {retxf} </h2>
			<main>
				<DataList obj={Dev}/> 
			</main>

    </div>
  );
};

export default Link;


