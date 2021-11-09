import React, { FormEvent, useEffect, useState } from "react";

import style from "./style.module.scss";

export const Footer = () => {

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }


  return (
      <div className={style.bannerfooter}>
          <div className={style.buttonGroup}>
            <button type="button" onClick={(e) => handleSubmit(e)}>Back</button>
            <button type="button" onClick={(e) => handleSubmit(e)}>Next</button>
          </div>
      </div>
  );
};
