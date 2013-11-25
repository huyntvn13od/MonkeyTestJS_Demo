// (function() {
   
// })();

function validateForm(e) {
	var enquiryType = document.getElementById("enquiry-type").value;
	if(enquiryType == 3){
		var elem_productName = document.getElementById("product-name");
		var elem_productSize = document.getElementById("product-size");
		var elem_usebyDate = document.getElementById("useby-date");
		var elem_batchcode = document.getElementById("batchcode");
		
		if(elem_productName.value.trim() == ""){
			elem_productName.value = "";
			elem_productName.focus();
			return false;
		}
		if(elem_productSize.value.trim() == ""){
			elem_productSize.value = "";
			elem_productSize.focus();
			return false;
		}
		if(elem_usebyDate.value.trim() == ""){
			elem_usebyDate.value = "";
			elem_usebyDate.focus();
			return false;
		}
		if(elem_batchcode.value.trim() == ""){
			elem_batchcode.value = "";
			elem_batchcode.focus();
			return false;
		}
	}
	
	document.form1.submit();
	return true;
}