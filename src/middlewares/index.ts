import { getUserBySessionToken } from "db/users";
import express from "express";

import { get, merge } from "lodash";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["HOTSHOT_TOKEN"];

    if (!sessionToken) {
      res.sendStatus(403);
    }

   const existingUser =  await getUserBySessionToken(sessionToken);

   if(!existingUser){
    res.sendStatus(403);
   }

   merge(req,{identity:existingUser});

   return next();


  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
