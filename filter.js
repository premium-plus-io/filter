function filter(input,date){
	var filters = [
		{
			"type":"email",
			"regex":"/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/",
			"replace":"{{email}}"
		},
		{
			"type":"creditcard",
			"regex":"/\b(?:\d[ -]*?){13,16}\b/g",
			"replace":"{{credit_card}}"
		},	
		{
			"type":"rijksregister",
			"regex":"/\b\d{2}(?:\d{2}[.\/-]?\d{2}[.\/-]?\d{2}[.-]?\d{3}[.-]?\d{2})\b/g",
			"replace":"{{rijkregister}}"
		},
		{
			"type":"phone",
			"regex":"^\d{10}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{11}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{9}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"/^\d{3}-\d{2}-\d{4}$/",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"/^\d{3}-\d{2}-\d{4}$/",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{2} \d{2} \d{2} \d{2} \d{2}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{4} \d{7}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{3} \d{3} \d{4}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{3} \d{3} \d{3}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{5} \d{6}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{4}\.\d{7}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{3}\.\d{3}\.\d{4}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{3}\.\d{3}\.\d{3}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{5}\.\d{6}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\(\d{2}\) \d{2} \d{2} \d{2} \d{2}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\(\d{2}\) \d{4} \d{7}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\(\d{2}\) \d{3} \d{3} \d{4}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\(\d{2}\) \d{3} \d{3} \d{3}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\(\d{4}\) \d{5} \d{6}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{10}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{3} \d{3} \d{4}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\d{3}\.\d{3}\.\d{4}$",
			"replace":"{{phone}}"
		},
		{
			"type":"phone",
			"regex":"^\(\d{3}\) \d{3}-\d{4}$",
			"replace":"{{phone}}"
		},
		{
			"type":"passport",
			"regex":"`^\d{6,9}$",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"^[A-Z]{2}[0-9]{7}$",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"^[A-Z]{2}[0-9]{6}$",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"^[A-Z]{1,2}[0-9]{6,9}$",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"^[A-Z]{2}[0-9]{8}$",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"^[A-Z]{2}[0-9]{7}$",
			"replace":"{{passport}}"
		},
		{
			"type":"passport",
			"regex":"^[A-Z]{2}[0-9]{7}$",
			"replace":"{{passport}}"
		},
		{
			"type":"date",
			"regex":"^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|18)\d{2}$",
			"replace":"{{date}}"
		},
		{
			"type":"date",
			"regex":"^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|18)\d{2}$",
			"replace":"{{date}}"
		},
		{
			"type":"date",
			"regex":"^(19|18)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$",
			"replace":"{{date}}"
		},
		{
			"type":"ssn",
			"regex":"^\d{3}-\d{2}-\d{4}$",
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":"^[A-Z]{2}\d{6}[A-Z]?$",
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":"`^\d{3}-\d{3}-\d{3}$",
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":"^\d{3}-\d{3}-\d{3}$",
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":"^\d{10}$",
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":"^\d{13}$",
			"replace":"{{ssn}}"
		},
		{
			"type":"ssn",
			"regex":"[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$",
			"replace":"{{ssn}}"
		},
		{
			"type":"tax",
			"regex":"/^(AT|BE|BG|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[ .-]?([0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}|[0-9]{8}|[0-9]{9})$/i",
			"replace":"{{tax}}"
		}
	]

	filters.forEach(function(filter) {
		if (
			date == true
			|| (date != true && regex.type != date)
		){
			input = input.replace(filter.regex, filter.replace);
		}
	});

	return input;
}