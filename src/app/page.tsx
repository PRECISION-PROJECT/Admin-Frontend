import { ECookie } from "@/apis/http-instance";
import { ROUTES } from "@/utils/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ECookie.ACCESS_TOKEN)?.value;
  const refreshToken = cookieStore.get(ECookie.REFRESH_TOKEN)?.value;

  if (!accessToken || !refreshToken) {
    return redirect(ROUTES.SIGN_IN);
  }

  return redirect(ROUTES.PRODUCT_LIST);
}
