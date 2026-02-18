document.getElementById('login-btn')
.addEventListener('click', function(){
  const inputNumber = document.getElementById('input-number')
  const contactNumber = inputNumber.value
  
  const inputPin = document.getElementById('input-pin')
  const pin = inputPin.value
  if(contactNumber === '11111111111' && pin === '1111'){
    alert('Log in Successfully')
    window.location.assign('/home.html')
  }
  else{
    alert('Log in Failed')
    return;
  }
  
})