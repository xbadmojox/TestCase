import axios from 'axios';

type GetCateringPointResponse = {
    date: string;
    Client: string;
    event: string;
}[];

export async function GetCateringPoint() {
  try {
    const { data, status } = await axios.post<GetCateringPointResponse>(
      'https://localhost:7152/NexusClientPoint/GetPoint',
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

