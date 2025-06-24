import { getAdminDetails } from "@/lib/data";
import { useEffect, useState } from "react";

export function useUserdetails(token: string) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      if (!token) {
        setLoading(false);
        setError("No authentication token found.");
        return;
      }

      const result = await getAdminDetails(token);
      if (result.success) {
        setUser(result.data);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
