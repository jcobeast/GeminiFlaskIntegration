import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [question, setQuestion] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await axios.post("http://localhost:9000/generate", {
				question,
			});
			setResponse(result.data.response);
		} catch (error) {
			console.error("Error fetching response:", error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Generative AI Response</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						placeholder="Ask a question"
						required
					/>
					<button type="submit">Submit</button>
				</form>
				<div
					className="response"
					dangerouslySetInnerHTML={{ __html: response }}
				></div>
			</header>
		</div>
	);
}

export default App;
