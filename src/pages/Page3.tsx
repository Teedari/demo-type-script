import React from 'react'
export enum Status {
  PENDING,
  SUCCESS,
  FAILED
}

const Page3 = (props: {children: React.ReactNode, loading: Status, role: 'user' | 'admin'}) => {
  if(props.loading === Status.SUCCESS){
    return (<div>{props.children}</div>)
  }
  return (
    <div>
      <h3>LOADING.....</h3>
    </div>
  )
}

export default Page3