import React from "react";
import imfd from "../../asset/img/Receptionist/Loading/Loading.gif";

const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="loadingimg">
        <div className="loading-text">Cooking in progress..</div>
          <img src={imfd} alt="Loading" />
        </div>
      </div>
    </>
  );
};

export default Loading;
