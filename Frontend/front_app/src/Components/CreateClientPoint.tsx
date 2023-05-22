import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { CreateCient } from '../API/CreateCient'
type FormType = {
  onClose: () => void,
}

export function CreateClientPoint({ onClose } : FormType) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
    const handleSubmit = async (event: any) => {
      event.preventDefault()
      setNameError(false)

      if (name == '') {
        setNameError(true);
      }
      if (name) {
        await CreateCient({name});
      }

    }

    return (<>
      <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel>Имя</FormLabel>
            <TextField
              onChange={e => setName(e.target.value)}
              variant="outlined"
              color="secondary"
              error={nameError}
            ></TextField>
            <Button variant="outlined" color="secondary" type="submit">Отправить</Button>
        </FormControl>
      </form>
    </>
    )
}

export default CreateClientPoint;