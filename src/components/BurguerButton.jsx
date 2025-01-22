import React from 'react'
import styled from 'styled-components'
function BurguerButton() {
  return (
    <Burguer>
      <div className='box-1'>
        <div className='box-1-b'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Burguer>
  )
}

export default BurguerButton

const Burguer = styled.div`
*,*::before,*::after {
  box-sizing:border-box;
  font-family: arial;
}
html,body {
/*   position:relative; */
  margin:0;
  padding;0;
  outline:none;
  background:rgba(232, 126, 4, 1);
}
.container{
  position:absolute;
  padding:15px;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
/*   border: 1px solid #fff; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
	align-items: center;
	align-content: center;
  color:#fff;
  text-shadow: 0px 0px 3px #000;
}
.topic h1{
  text-align: center;
}
.box-icons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
	align-items: center;
	align-content: center;
}
.box-1{
  padding: 20px;
}
.box-1 div{
  position:relative;
  width: 50px;
  height:32px;
/*   border: 1px solid #fff; */
  box-sizing: border-box;
}
.box-1-b span{
  position:absolute;
  top:0;
  left:0;
  height:6px;
  width:100%;
  background: #fff;
  border-radius:10px;
  transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
}
.box-1-b span:nth-child(1) {
  top:0;
  left:0;
}
.box-1-b span:nth-child(2){
  top:12px;
  left:0;
}
.box-1-b span:nth-child(3){
  top:24px;
  left:0;
}
.box-1:hover .box-1-b span:nth-child(2){
  transform: rotate(90deg);
  width:35px;
  left:7px;
  cursor:pointer;
}
.box-1:hover .box-1-b span:nth-child(1){
  transform: rotate(135deg);
  width:30px;
  top:24px;
  left:20px;
  float:right;
  cursor:pointer;
}
.box-1:hover .box-1-b span:nth-child(3){
  transform: rotate(45deg);
  width:30px;
  cursor:pointer;
}
.box-1:hover .box-1-b span{
  background: #000;
}
`
