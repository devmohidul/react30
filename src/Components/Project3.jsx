import { useState } from "react";

export default function Project3() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'

  if (status == "success") {
    return <h1>Thats right!</h1>;
  }

  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  };

  return (
    <div style={{ marginLeft: "200px" }}>
      <form onSubmit={handleSubmit}>
        <h2>City quiz</h2>
        <p>What city is located on two continents?</p>
        <textarea
          rows="6"
          cols="35"
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button
          style={{ borderColor: "#646cff" }}
          disabled={answer.length === 0 || status === "submitting"}
        >
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error !== null && <p className="error">{error.message}</p>}
      </form>
    </div>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}
