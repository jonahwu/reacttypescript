import * as React from "react";
import type { AProps } from "./typesinfo";

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

/*
interface Props {
   ld: string[];
   bb: string[];
}
 */

				/*
const DataList: React.FC<Props> = (props) => {
function DataList(props:Props) {
const DataList: React.FC<{obj: Props}> = (props) => {
				 */
const DataList: React.FC<AProps> = (props) => {
  const { ld, bb, children } = props;

  const listItems = ld.map((lds) =>
  			<li>{lds}</li>
 );
  const listItems2 = bb.map((bds) =>
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

function GetStringList():string[]{
	const devices: string[] = ['what', 'is', 'that']
	return devices
}

function initAProps():AProps{
	const devices: AProps = {ld:['what', 'is', 'that'], bb:['3','2','1']}
	return devices
}

function sendAProps(dd:AProps):number{
	console.log('show sended data ld',dd.ld)
	console.log('show sended data bb',dd.bb)
	return 1
}

function playingMap(){
	const devices: string[] = ['1', 'pixel', 'ipad', 'note 10'];
	devices.map((bds) => {
					if(bds=="1"){
							console.log('show special case:',bds) 
					}else{
							console.log('show default case:',bds) 
					}
		}
  );
}

const Orders: React.FC<LinkProps> = (props) => {
  const { x, y, children } = props;
	let retx:number = sum(Number(x))
	const retxf:number = sumf(2)
 const devices: string[] = ['iphone', 'pixel', 'ipad', 'note 10'];
 const Dev:AProps={ld:['iphone', 'pixel', 'ipad', 'note 10'], bb:['1','2','3']}
 const getlist = GetStringList()
 const initlist = initAProps()
 const retd = sendAProps(initlist)
 playingMap()
/*
 const getlist:string[] = GetStringList()
*/
 console.log('show list:',{getlist})
 console.log('show init list:',{initlist})
 console.log('show return data:',{retd})

 const listItems = devices.map((listData) =>
			<li>{listData}</li>
 );

  console.log('yes i am here ',{retx},{retxf});	

  return (
    <div className="link">
      {/* ... */}
      <h2>test {y} {retx} {retxf} </h2>
			<main>

							<DataList ld={Dev.ld} bb={Dev.bb}/> 
			</main>

    </div>
  );
};

export default Orders;


