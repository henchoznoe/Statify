import { useState, useCallback, useRef, useEffect } from 'react';

type ErrorResponse = {
  status: number;
  message: string;
}

class SpotifyErrors extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'SpotifyError';
    this.status = status;
  }
}

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState<{ [key: number]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: number]: ErrorResponse | null }>({});

  const activeHttpRequests = useRef<Record<number, AbortController>>({});

  const sendRequest = useCallback(
    async (
      key: number,
      url: string,
      method: string = 'GET',
      body: string | null,
      headers = {}
    ) => {
      setIsLoading((prevIsLoading) => ({ ...prevIsLoading, [key]: true }));
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current[key] = httpAbortCtrl;

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        delete activeHttpRequests.current[key];

        if (!response.ok) {
          setErrors((prevErrors) => ({ ...prevErrors, [key]: { status: responseData.error.status, message: responseData.error.message} }));
          throw new SpotifyErrors(responseData.error.message, responseData.error.status);
        }

        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, [key]: false }));
        return responseData;
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setErrors((prevErrors) => ({ ...prevErrors, [key]: err }));
          throw err;
        }
      } finally {
        delete activeHttpRequests.current[key];
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, [key]: false }));
      }
    },
    []
  );

  const clearError = (key: number) => {
    setErrors((prevErrors) => ({ ...prevErrors, [key]: null }));
  };

  useEffect(() => {
    return () => {
      Object.values(activeHttpRequests.current).forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, errors, sendRequest, clearError };
};
