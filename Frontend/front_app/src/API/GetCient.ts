import axios from 'axios';

export type GetListSelectResponse = {
    name: string;
    id: number;
};

export async function GetClient() {
    const { data, status } = await axios.post<GetListSelectResponse[]>(
      'https://localhost:7152/Client/GetClient',
      {},
      {
        headers: {
          "Content-type": "application/json"
        },
      },
    );
    return data;
}

