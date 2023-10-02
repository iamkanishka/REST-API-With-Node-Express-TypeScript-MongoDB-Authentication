import { login, register } from "controllers/authentication";

import express from "express";

export default (router: express.Router) => {
  router.get("/auth/login", login);
  router.get("/auth/register", register);
};
