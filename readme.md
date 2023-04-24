# PII Filter

This function used regex to filter input and strip out any PII

This list includes:
- Email
- SSN, Rijkregisternumber, Social Insurance Number, Tax ID,..
- Phone
- Date of Birth (if born before 2000)
- Passport Number
- Tax number

## Disclaimer
Note that this regular expression is still not exhaustive and may not match all possible PII formats. 

It's important to note that the types of PI may vary depending on the context of the data and the applicable laws and regulations. In addition, some types of PI may be necessary for legitimate business purposes and should not be removed without careful consideration.

When removing PI from a text string, it's important to use appropriate methods to ensure that the data is securely deleted or anonymized. Simply replacing the PI with a placeholder like "XXXXX" may not be sufficient to protect the data, as it may still be possible to reconstruct the original data using other information or techniques.

## Usage
`var filtered_text = filter(unfiltered_input,date)`

Where:
- `unfiltered_input` is a string of text
- `date` is a boolean `true/false` to also filter dates. (defaults to false)
