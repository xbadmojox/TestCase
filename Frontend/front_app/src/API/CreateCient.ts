import axios from 'axios';

type GetClientResponse = {
    name: string;
};

export async function CreateCient({name} : GetClientResponse ) {
  try {
    const { data, status } = await axios.post<GetClientResponse>(
      'https://localhost:7152/Client/Save',
      {
        name
      },
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

