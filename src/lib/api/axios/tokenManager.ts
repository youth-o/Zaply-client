import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { TokenType } from "../model/token";

export const tokenManager = {
  setTokens: (accessToken: string, refreshToken: string) => {
    setCookie(TokenType.ACCESS_TOKEN, accessToken, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });
    setCookie(TokenType.REFRESH_TOKEN, refreshToken, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7일
    });
  },

  getAccessToken: (): string | undefined => {
    return getCookie(TokenType.ACCESS_TOKEN)?.toString();
  },

  getRefreshToken: (): string | undefined => {
    return getCookie(TokenType.REFRESH_TOKEN)?.toString();
  },

  removeTokens: () => {
    deleteCookie(TokenType.ACCESS_TOKEN);
    deleteCookie(TokenType.REFRESH_TOKEN);
  },
};
