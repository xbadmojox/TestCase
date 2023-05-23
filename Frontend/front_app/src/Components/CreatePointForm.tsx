import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { CreatePoint } from '../API/CreatePoint'
type FormType = {
  onClose: () => void,
}

export function CreatePointForm({ onClose } : FormType) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
    const handleSubmit = async (event: any) => {
      event.preventDefault()
      setNameError(false)

      if (name == '') {
        setNameError(true);
      }
      if (name) {
        await CreatePoint({name});
      }

    }

    return (<>
      <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel>Имя для Point</FormLabel>
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

export default CreatePointForm;