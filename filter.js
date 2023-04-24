function filter(input,date){
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
		},
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
		},
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
		},
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
		},
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
		if (
			date == true
			|| (date != true && filter.type != date)
		){
			input = input.replace(filter.regex, filter.replace);
		}
	});

	return input;
}