import axios from "axios";
import type { User } from "../types/user";
import { api } from "../common/api";

const API_URL=import.meta.env.VITE_API_URL;
export const getUser = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/Users/data");
  return response.data;
};
export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const response = await api.post<User>("/Users/add",user);
  return response.data;
};
export const updateUser = async (id: number,user: Omit<User, "id">): Promise<User> => {
  const response = await axios.put<User>(`${API_URL}/${id}`,user);
  return response.data;
};
export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};