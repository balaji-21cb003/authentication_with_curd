import express from "express";
import { getUserBySessionToken } from "../db/users";
import { get, merge } from "lodash";

export const isOwner =async (req: express.Request, res: express.Response , next: express.NextFunction) => {
    try{
        const {id} = req.params;
        const currentUserId = get(req, 'identity._id') as string;

        if(!currentUserId){
            return res.sendStatus(403);

        }

        if(currentUserId.toString() !== id){
            return res.sendStatus(403);
        }

        return next();

    }catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response , next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies["balaji-auth"];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity:existingUser});

    // Proceed to the next middleware or route handler
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
