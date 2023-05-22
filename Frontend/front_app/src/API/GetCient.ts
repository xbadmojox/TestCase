import axios from 'axios';

type GetClientResponse = {
    date: string;
    Organizations: string;
    event: string;
}[];

export async function GetClient() {
  try {
    const { data, status } = await axios.post<GetClientResponse>(
      'https://localhost:7152/NexusClientPoint/GetClient',
      {},
      {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        },
      },
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
  }
}

