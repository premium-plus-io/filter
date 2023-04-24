function filter(input,[date_filter]){
	var filters = [
		{
			"type":"email",
			"regex":/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
			"replace":"{{email}}"
		},
		{
			"type":"creditcard",
			"regex":/\b(?:\d[ -]*?){13,16}\b/g,
			"replace":"{{credit_card}}"
		},	
		{
			"type":"rijksregister",
			"regex":"/\b\d{2}(?:\d{2}[.\/-]?\d{2}[.\/-]?\d{2}[.-]?\d{3}[.-]?\d{2})\b/g",
			"replace":"{{rijkregister}}"
		}
	]

	var ibans = [
		{
		"type": "IBAN",
		"regex":/BE\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{2}/g,
		"replace": "{{IBAN_BE}}"
		},
		{
		"type": "IBAN",
		"regex": /DE\\d{20}/g,
		"replace": "{{IBAN_DE}}"
		},
		{
		"type": "IBAN",
		"regex": /DK\\d{16}/g,
		"replace": "{{IBAN_DK}}"
		},
		{
		"type": "IBAN",
		"regex": /ES\\d{22}/g,
		"replace": "{{IBAN_ES}}"
		},
		{
		"type": "IBAN",
		"regex": /FR\\d{12}[A-Z0-9]{11}\\d{2}/g,
		"replace": "{{IBAN_FR}}"
		},
		{
		"type": "IBAN",
		"regex": /GB\\d{2}[A-Z]{4}\\d{14}/g,
		"replace": "{{IBAN_GB}}"
		},
		{
		"type": "IBAN",
		"regex": /IT\\d{2}[A-Z]{1}\\d{10}[A-Z0-9]{12}/g,
		"replace": "{{IBAN_IT}}"
		},
		{
		"type": "IBAN",
		"regex": /LU\\d{5}[A-Z0-9]{13}/g,
		"replace": "{{IBAN_LU}}"
		},
		{
		"type": "IBAN",
		"regex": /NL\\d{2}[A-Z]{4}\\d{10}/g,
		"replace": "{{IBAN_NL}}"
		},
		{
		"type": "IBAN",
		"regex": /PT\\d{23}/g,
		"replace": "{{IBAN_PT}}"
		}
	]

	var phones = [
		{
			"type":"phone",
			"regex":/(\+|00)[ .]?(\d{1,3}[ .-]?)?(\d{3}[ .-]?\d{3}[ .-]?\d{4})/g,
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":/(\+|00)[ .]?(\d{1,3}[ .-]?)?\(\d{3}\)[ .-]?\d{3}[ .-]?\d{4}/g,
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":/(\+|00)[ .]?(\d{1,3}[ .-]?)?\(\d{3}\)[ .-]?\d{3}[ .-]?\d{4}( ?(x|ext)\.? ?\d+)?/g,
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":/(\d{3}[ .-]?\d{3}[ .-]?\d{4}|\(\d{3}\)[ .-]?\d{3}[ .-]?\d{4})/g,
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex": /(\+|00)\d{1,3}[ .\/()-]*\d{1,14}/g,
			"replace":"{{phone}}"
		}
	]

	var passports = [
		{
			"type":"passport",
			"regex":"`/\d{6,9}/g",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"/[A-Z]{2}[0-9]{7}/g",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"/[A-Z]{2}[0-9]{6}/g",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"/[A-Z]{1,2}[0-9]{6,9}/g",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"/[A-Z]{2}[0-9]{8}/g",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"/[A-Z]{2}[0-9]{7}/g",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"/[A-Z]{2}[0-9]{7}/g",
			"replace":"{{passport}}"
		}
	]

	var dates = [
		{
			"type":"date",
			"regex":/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|18)\d{2}/g,
			"replace":"{{date}}"
		},
		{
			"type":"date",
			"regex":/(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|18)\d{2}/g,
			"replace":"{{date}}"
		},
		{
			"type":"date",
			"regex":/(19|18)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])/g,
			"replace":"{{date}}"
		},
		{
			"type":"ssn",
			"regex":/\d{3}-\d{2}-\d{4}/g,
			"replace":"{{ssn}}"
		}
	]

	var ssn = [
		{
			"type":"ssn",
			"regex":/[A-Z]{2}\d{6}[A-Z]?/g,
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":/\d{3}-\d{3}-\d{3}/g,
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":/\d{3}-\d{3}-\d{3}/g,
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":/\d{10}/g,
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":/\d{13}/g,
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":/[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]/g,
			"replace":"{{ssn}}"
		},
		{
			"type":"tax",
			"regex":/(AT|BE|BG|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[ .-]?([0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}|[0-9]{8}|[0-9]{9})/g,
			"replace":"{{tax}}"
		}
	]

	filters.forEach(function(filter) {
		input = input.replace(filter.regex, filter.replace);
	});

	ibans.forEach(function(iban) {
		input = input.replace(iban.regex, iban.replace);
	});
	phones.forEach(function(phone) {
		input = input.replace(phone.regex, phone.replace);
	});
	passports.forEach(function(passport) {
		input = input.replace(passport.regex, passport.replace);
	});

	dates.forEach(function(date) {
		if (date_filter == true){
			input = input.replace(date.regex, date.replace);
		}
	});

	return input;
}