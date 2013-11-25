registerTest ('The form cannot be submitted if any of the required fields are empty',
	{
		setup:function (container) {
			this.setupCase = function doSomething(root, exceptElem, enquiryType) {
				var elems = root.workspace.document.getElementsByTagName("input");
				for (var i = 0; i < elems.length; i++) {
					elem = elems[i];
					if(elem.type == "text"){
						elem.value = "lipsum";
					}
					if(elem.type == "email"){
						elem.value = "lorem@ipsum.com";
					}
					
					if(elem.id == exceptElem){
						elem.value = "";
					}
				}
				
				if(enquiryType != null && enquiryType != ""){
					root.workspace.document.getElementById("enquiry-type").value = enquiryType; // complaint
				}
			};
			
			this.waitTimeout = 1000;
			this.locationHref = "";
		}
		,load : function () {
			var self = this;
		
			// Firstname field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'fname', null);
				// After this, we'll have to wait for the action page of the
				// form to load
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				//ok( true, self.locationHref);
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				// This will be called repeatedly until it returns true, killing the wait
				// (hopefully long before the 1 seconds is up)
				self.locationHref = this.workspace.window.location.href;
				//console.log(self.locationHref);
			}, this.waitTimeout) // wait max 1 seconds ( Pause execution of tests per duration )
			this
			.test("'required' attribute of 'First name' field working correctly?", function($){
				//ok( true, self.locationHref);
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// Surname field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'sname', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'required' attribute of 'Surname' field working correctly?", function($){
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// Email field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'email', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'required' attribute of 'Email' field working correctly?", function($){
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// Daytime contact number field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'contact-number', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'required' attribute of 'Daytime contact number' field working correctly?", function($){
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// Address field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'address', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'required' attribute of 'Address' field working correctly?", function($){
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// Suburb field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'suburb', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'required' attribute of 'Suburb' field working correctly?", function($){
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// Postcode field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'postcode', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'required' attribute of 'Postcode' field working correctly?", function($){
				equal(self.locationHref.indexOf('&'),-1,"'required' attribute is working correctly");
			})
			
			// If "Enquiry type" = "Product complaint", then "Product name" field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'product-name', 3);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'Product name' is required, if 'Enquiry type' = 'Product complaint'?", function($){
				equal(self.locationHref.indexOf('&'),-1,"it's working correctly");
			})
			
			// If "Enquiry type" = "Product complaint", then "Product size" field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'product-size', 3);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'Product size' is required, if 'Enquiry type' = 'Product complaint'?", function($){
				equal(self.locationHref.indexOf('&'),-1,"it's working correctly");
			})
			
			// If "Enquiry type" = "Product complaint", then "Use-by date" field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'useby-date', 3);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'Use-by date' is required, if 'Enquiry type' = 'Product complaint'?", function($){
				equal(self.locationHref.indexOf('&'),-1,"it's working correctly");
			})
			
			// If "Enquiry type" = "Product complaint", then "Batch code" field is required
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, 'batchcode', 3);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test("'Batch code' is required, if 'Enquiry type' = 'Product complaint'?", function($){
				equal(self.locationHref.indexOf('&'),-1,"it's working correctly");
			})
			
			// If "Enquiry type" != "Product complaint", then form can be submitted if all required fields != ""
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, '', null);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test('If "Enquiry type" != "Product complaint", then form can be submitted if all required fields != ""?', function($){
				notEqual(self.locationHref.indexOf('&'),-1,"it's working correctly");
			})
			
			// If "Enquiry type" = "Product complaint", then form can be submitted if all required fields, and Product name, size, use-by date, batchcode != ""
			this
			.test("<<<<<< DONT CARE ABOUT THIS: setting up testcase >>>>>>",function($) {
				self.locationHref = "";
				self.setupCase(this, '', 3);
				this.workspace.document.getElementById("form1").sbutton.click();
				self.locationHref = this.workspace.window.location.href;
				ok( true, 'Test case has been initialized, and Submit button has been triggered!');
			})
			.wait(function() {
				self.locationHref = this.workspace.window.location.href;
			}, this.waitTimeout)
			this
			.test('If "Enquiry type" = "Product complaint", then form can be submitted if all required fields, and Product name, size, use-by date, batchcode != ""?', function($){
				notEqual(self.locationHref.indexOf('&'),-1,"it's working correctly");
			})
		}
	}
);