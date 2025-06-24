export const BASE_URL: string | undefined = "https://backend.zauvijek.com/";

export const LOGIN_URL = `${BASE_URL}admin/login`;

export const Z_ADMIN_DETAILS_URL = `${BASE_URL}admin/details`;

export const ALL_USERS_DETAILS_URL = (page: number, limit: number) =>
  `${BASE_URL}user/getall?page=${page}&limit=${limit}`;
