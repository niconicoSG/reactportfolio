import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      Oops! Looks like this page doesn't exist!
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ErrorPage;
