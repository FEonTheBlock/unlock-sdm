<div class="printer">
  <div class="receipt">
		<slot />
  </div>
</div>

<style>
.printer{
  padding-top: 10px;
}

.printer::before{
  display: block;
  content: "";
  position: relative;  
  width: 95%;
  height: 14px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.receipt {
  width: 85%;
  position: relative;
  top: -12px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  filter:drop-shadow(0px 0px 1px gray);
}

.receipt:after{
  display: block;
  content: "";
	width: 100%;
	height: 32px;
  position: absolute;
  bottom: -15px;
  left: 0px;
  background: 
    linear-gradient(-45deg, transparent 16px, white 0), 
		linear-gradient(45deg, transparent 16px, white  0);
  background-repeat: repeat-x;
	background-position: left bottom;
  background-size: 22px 32px;  
}
</style>
