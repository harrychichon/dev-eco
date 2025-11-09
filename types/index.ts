// Shared types and interfaces
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

