import React from "react";

type props = {
  columns: {
    title: string;
    name: string;
    key: string;
  }[],
  dataSource: {}[]
};

const Table = (props: props) => {
  const titles = props.columns.map((value) => value.title);
  const valueKeys = props.columns.map((value) => value.name);
  return (
    <table>
      <Thead titles={titles} />
      <Tbody dataSource={props.dataSource} names={valueKeys} />
    </table>
  );
};

type theadProps = {
  titles: string[];
};
const Thead = (props: theadProps) => {
  return (
    <thead>
      <tr>
        {props.titles.map((title, key) => (
          <th key={key}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};
type tbodyProps = {
  names: string[];
  dataSource: {}[]
};
const Tbody = (props: tbodyProps) => {

  const displayRows = (data:any, key:string) => {
    const names:any[] = Array(props.names.length).fill(<td></td>)
    const keys = Object.keys(data)
    for(let i=0; i < names.length; i++){
      for(let j=0; j < keys.length; j++){
        if(props.names[i] === keys[j]){
          names[i] = (<td key={`${key}-${i}`}>{data[keys[j]]}</td>)
        }
      }
    }
    console.log(names)
    return names
  }
  return (
    <tbody>
      {props.dataSource.map( (value, index) => (<tr>{displayRows(value, index.toString())}</tr>))}
    </tbody>
  );
};

export default Table;
