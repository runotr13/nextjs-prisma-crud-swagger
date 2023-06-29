const API_URL: string = process.env.REACT_APP_API_URL as string;

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

export function createRequest(endpoint: string, options: RequestOptions = {}): Promise<any> {
  const url: string = `${API_URL}${endpoint}`;
  options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders;
  options.credentials = 'include'; // 'withCredentials' equivalent in fetch API

  return fetch(url, options)
    .then((response: Response) =>
      response.ok ? response.json() : Promise.reject(response.statusText)
    )
    .catch((error: Error) => {
      console.error(`Fetch request failed: ${error}`);
      return Promise.reject(error);
    });
}