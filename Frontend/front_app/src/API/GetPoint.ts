import axios from 'axios';

export type GetListSelectResponse = {
    name: string;
    id: number;
};

export async function GetPoint() {
    const { data, status } = await axios.post<GetListSelectResponse[]>(
      'https://localhost:7152/Point/GetPoint',
      {},
      {
        headers: {
          "Content-type": "application/json"
        },
      },
    );
    return data;
}

