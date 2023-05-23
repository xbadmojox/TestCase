import axios from 'axios';

type GetClientResponse = {
    name: string;
};

export async function CreatePoint({name} : GetClientResponse ) {
  try {
    const { data, status } = await axios.post<GetClientResponse>(
      'https://localhost:7152/NexusClientPoint/GetClient',
      {
        // name
      },
      {
        headers: {
          "Content-type": "application/json"
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

