
function displayValue(value, rangeValueId) {
            document.getElementById(rangeValueId).innerText = value;
        }

        function checkEvenOdd() {

            let range1Value = parseInt(document.getElementById('range1').value);
            let range2Value = parseInt(document.getElementById('range2').value);
            
            if (range1Value > range2Value) {
                alert("Please ensure the first range value is less than or equal to the second range value.");
                location.assign('index.html');
                return;
            }

            let resultString = '';

            for (let i = range1Value; i <= range2Value; i++) {
                let output = '';

                if (i % 5 === 0) {
                    output += ' fizz buzz';
                }
                else if (i % 2 !== 0) {
                    output += ' fizz';
                } 
                else if (i % 2 === 0) {
                    output += ' buzz';
                }
                resultString += i + output + '<br>';
            }
            document.getElementById('result').innerHTML = resultString;
        }