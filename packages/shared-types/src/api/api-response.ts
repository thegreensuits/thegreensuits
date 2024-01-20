type APIResponse<TData = unknown> = (
  | {
      success: true;
      data: TData;
    }
  | APIError
) & {
  statusCode: number;
};

type APIError = {
  success: false;
  message: string;
  errors?: {
    [key: string]: string;
  };
};

export type { APIError, APIResponse };
