function appendToScreen(value) {
    document.getElementById('screen').value += value;
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('screen').value);
      document.getElementById('screen').value = result;
    } catch (error) {
      alert('Error in calculation!');
      clearScreen();
    }
  }
  
  function clearScreen() {
    document.getElementById('screen').value = '';
  }