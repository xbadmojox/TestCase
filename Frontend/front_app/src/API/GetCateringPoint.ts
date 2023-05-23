import axios from 'axios';

export type GetCateringPointResponse = {
    date: string;
    name: string;
    event: string;
};

type inValueClient = {
  idClient: number;
};

type inValuePoint = {
  idPoint: number;
};

export async function GetClientPoint({idClient} : inValueClient) {
    const { data, status } = await axios.post<GetCateringPointResponse[]>(
      'https://localhost:7152/NexusClientPoint/GetClient',
      {
        idClient
      },
      {
        headers: {
          "Content-type": "application/json"
        },
      },
    );
    return data;
}

export async function GetPointClient({idPoint} : inValuePoint) {
  const { data, status } = await axios.post<GetCateringPointResponse[]>(
    'https://localhost:7152/NexusClientPoint/GetPoint',
    {
      idPoint
    },
    {
      headers: {
        "Content-type": "application/json"
      },
    },
  );
  return data;
}

