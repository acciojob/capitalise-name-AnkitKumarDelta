function change(s){
	return s.toUpperCase();
}
let inp = document.getElementById('fname');
inp.addEventListener("blur", function() {
  inp.value = change(inp.value);
});
