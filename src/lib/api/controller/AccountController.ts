import { FacebookRequest, InstagramRequest, SnsType, UnlinkResponse } from "../model";
import { apiClient } from "../axios/instance";
import useUserStore from "@/stores/userStore";

const FACEBOOK_CLIENT_ID = process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!;
const FACEBOOK_REDIRECT_URI = process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI!;

const THREADS_CLIENT_ID = process.env.NEXT_PUBLIC_THREADS_CLIENT_ID!;
const THREADS_REDIRECT_URI = process.env.NEXT_PUBLIC_THREADS_REDIRECT_URI!;

const INSTAGRAM_REDIRECT_URI = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI!;

const accountController = {
  threads: async (): Promise<void> => {
    if (typeof window === "undefined") return;

    const memberId = useUserStore.getState().userInfo?.memberId;
    if (!memberId) {
      throw new Error("로그인 후 시도해주세요 (memberId 없음)");
    }

    const params = new URLSearchParams({
      client_id: THREADS_CLIENT_ID,
      redirect_uri: THREADS_REDIRECT_URI,
      scope: [
        "threads_basic",
        "threads_content_publish",
        "threads_manage_replies",
        "threads_manage_insights",
        "threads_read_replies",
        "threads_manage_mentions",
        "threads_keyword_search",
        "threads_delete",
      ].join(","),
      response_type: "code",
      state: memberId.toString(),
    });

    const threadsUrl = `https://threads.net/oauth/authorize?${params.toString()}`;
    window.open(threadsUrl, "_blank", "width=600,height=800");
  },

  facebook: async (): Promise<void> => {
    const memberId = useUserStore.getState().userInfo?.memberId;
    if (!memberId) {
      throw new Error("로그인 후 시도해주세요 (memberId 없음)");
    }

    const facebookUrl = `${FACEBOOK_REDIRECT_URI}&state=${memberId}`;
    window.location.href = facebookUrl;
  },

  facebookLink: async (data: FacebookRequest): Promise<void> => {
    const response = await apiClient.get("/account/facebook/link", { params: data });
    return response.data;
  },

  instagram: async (): Promise<void> => {
    const instagramUrl = INSTAGRAM_REDIRECT_URI;
    window.location.href = instagramUrl;
  },

  instagramLink: async (data: InstagramRequest): Promise<void> => {
    const response = await apiClient.get("/account/instagram/link", { params: data });
    return response.data;
  },

  unlink: async (snsType: SnsType): Promise<UnlinkResponse> => {
    const response = await apiClient.get<UnlinkResponse>(`/account/${snsType}/unlink`);
    return response.data;
  },
};

export default accountController;
