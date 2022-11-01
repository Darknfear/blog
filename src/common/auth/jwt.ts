import * as jwt from 'jsonwebtoken';
import AuthEnv from "../../config/auth.config";

export const genToken = (payload: { userId: string, email: string }) => {
    const token = jwt.sign({ payload }, AuthEnv.JWT_SECRET, {
        expiresIn: "1d",
    });
    return token;
}

export const refreshToken = () => {}

export const verifyToken = (token: string) => {
    try {
        const payload = jwt.verify(token, AuthEnv.JWT_SECRET);
        return payload;
    } catch (e) {
        // return false;
        throw e;
    }


}
