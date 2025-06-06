import { apiClient } from "../axios/instance";
import {
  ApiResponse,
  LoginData,
  LoginRequest,
  SignUpData,
  SignUpRequest,
  LoginResponse,
} from "../model";

const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!;

const authController = {
  login: async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    const response = await apiClient.post<ApiResponse<LoginResponse>>("/auth/sign-in", data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    const response = await apiClient.post("/auth/sign-out");
    return response.data;
  },

  signUp: async (data: SignUpRequest): Promise<ApiResponse<SignUpData>> => {
    const response = await apiClient.post<ApiResponse<SignUpData>>("/auth/sign-up", data);
    return response.data;
  },

  googleLink: async (): Promise<void> => {
    const googleUrl = GOOGLE_REDIRECT_URI;
    window.location.href = googleUrl;
  },

  googleLogin: async (code: string): Promise<ApiResponse<LoginResponse>> => {
    const response = await apiClient.get<ApiResponse<LoginResponse>>("/auth/google/exchange", {
      params: { code },
    });
    return response.data;
  },

  checkEmailDuplicate: async (email: string): Promise<ApiResponse<boolean>> => {
    const response = await apiClient.get<ApiResponse<boolean>>("/auth/email/duplicate", {
      params: { email },
    });
    return response.data;
  },

  refreshToken: async (): Promise<ApiResponse<LoginData>> => {
    const response = await apiClient.post<ApiResponse<LoginData>>("/auth/recreate");
    return response.data;
  },
};

export default authController;
