"use client";

import { useGetMe, useLogoutMutation } from "@/apis/auths";
import { ECookie } from "@/apis/http-instance";
import { queryClient } from "@/components/providers/QueryClientProvider";
import { handleToastError } from "@/utils/common";
import { deleteCookieData, getCookieData } from "@/utils/cookie";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const { data, isLoading, refetch } = useGetMe({
    enabled: !!getCookieData(ECookie.ACCESS_TOKEN),
  });

  const useLogoutMutate = useLogoutMutation();

  const onLogout = async () => {
    const refreshToken = getCookieData(ECookie.REFRESH_TOKEN);
    if (!refreshToken || useLogoutMutate.isPending) return;
    try {
      await useLogoutMutate.mutateAsync({
        refreshToken,
      });
      deleteCookieData(ECookie.ACCESS_TOKEN);
      deleteCookieData(ECookie.REFRESH_TOKEN);
      refetch();
      queryClient.cancelQueries({});
      router.push(ROUTES.SIGN_IN);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    isLoggedIn: !!data && !isLoading,
    isAuthenticating: isLoading,
    isLogoutLoading: useLogoutMutate.isPending,
    userData: data,
    onLogout,
  };
};
