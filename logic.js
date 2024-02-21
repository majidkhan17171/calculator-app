const light = "style/light.css"
const dark = "style/dark.css"

function changeTheme(){
    const theme = document.getElementById('theme')
    if(theme.getAttribute('href') === light){
        theme.setAttribute('href',dark)
    }else{
        theme.setAttribute('href',light)
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }