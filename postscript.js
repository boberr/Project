document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	document.getElementById('textSubmit').addEventListener('click', function(event) {
		var req = new XMLHttpRequest();
		var payload = {feedback: null};
		payload.feedback = document.getElementById('feedback').value;
		req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function() {
			if(req.status >= 200 && req.status < 400) {
				var response = JSON.parse(JSON.parse(req.responseText).data);
				document.getElementById('feedbackReturn').textContent = response.feedback;
			}
			else {
				console.log("Error in network request: " + req.statusText);
			}
		});
		req.send(JSON.stringify(payload));
		event.preventDefault();
	});
}