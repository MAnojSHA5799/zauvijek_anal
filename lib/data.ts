import { ALL_USERS_DETAILS_URL, Z_ADMIN_DETAILS_URL } from "./api-urls";

export const getAdminDetails = async (token: string) => {
  try {
    if (!token) {
      return { success: false, message: "Authorization token is required" };
    }

    const response = await fetch(Z_ADMIN_DETAILS_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { tags: [token, "*"] },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch admin details",
      };
    }

    return { success: true, data };
  } catch (error: unknown) {
    let message = "An error occurred";

    if (error instanceof Error) {
      message = error.message;
    }

    return {
      success: false,
      message,
      error: message,
    };
  }
};

export const getAllUsers = async (token: string) => {
  try {
    if (!token) {
      return { success: false, message: "Authorization token is required" };
    }

    const response = await fetch(ALL_USERS_DETAILS_URL(1, 10), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { tags: ["users", "*"] },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch user details",
      };
    }

    return { success: true, data };
  } catch (error: unknown) {
    let message = "An error occurred";

    if (error instanceof Error) {
      message = error.message;
    }

    return {
      success: false,
      message,
      error: message,
    };
  }
};
