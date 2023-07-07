const axios = require('axios'); 
const retoolAPIEndpoint = 'https://your-retool-api-url.com';

document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    var responses = {};
    var questions = ['topic', 'school_class', 'additional', 'essayType', 'referenceType'];
    for(var i = 0; i < questions.length; i++){
        var question = document.getElementById(questions[i]);
        var input = question.querySelector('input[type="text"], input[type="radio"]:checked');
        var select = question.querySelector('select');
        var label = question.querySelector(`label[for="${input ? input.id : ''}"]`);
        if (question.id === 'referenceType' && input.type === "radio") {
            var textInput = question.querySelector('input[type="text"]');
            var refTypeName = question.querySelector('#dropdownName');
            responses[question.id] = {
                type: label ? label.innerText : '',
                piece_type: refTypeName ? refTypeName.innerText : '',
                name: textInput ? textInput.value : ''
            };
        }else{
            if (input && input.type === "text") {
            responses[question.id] = input.value;
            }
            if (input && input.type === "radio") {
                responses[question.id] = label ? label.innerText : '';
            }
            if (select) {
                responses[question.id] = select.options[select.selectedIndex].text;
            }
        }
    }
    document.getElementById("result").innerText = JSON.stringify(responses, null, 2);
    
    generateThesis(responses);
    
});

function generateThesis(responses_data){
    fetch('https://api.retool.com/v1/workflows/101cbbd7-5263-49e9-80b7-c880befa97dc/startTrigger?workflowApiKey=retool_wk_016aa612d4594d8e9db2f70ed39eb23a', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(responses_data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        const thesisOutput = data.thesis; // Replace 'thesis' with an actual key if 'thesis' output is direct.
  
    // you can now use thesisOutput in your website. For example:
    document.getElementById('thesisText').textContent = thesisOutput;
    })
    
    .catch((error) => {
        console.error('Error:', error);
    });
}






function redirectMe() {
    window.location.replace("generated_content.html");
    return false;
  }