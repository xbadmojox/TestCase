import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {
  Modal, Form, Row, Col, Button
} from 'react-bootstrap';
import {Table, BasicSelect} from '../Helpers'
import {CreateCient} from '../API/CreateCient'

type FormType = {
  onClose: () => void,
}

export function CreateClientPoint({ onClose } : FormType) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: {errors}
} = useForm({
    mode: 'onSubmit',
    defaultValues: {
        name: ''
    }
});

  const handleSave = async({name}: any) => {
    console.log(name)
    CreateCient(name);
  };

  const handleChange = async({name}: any) => {
    console.log(name)
  };

    return (<>
        <Modal show={true} backdrop='static' onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Создание </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                      <label>
                        Name:
                        <input type="text" name="name" onChange={handleChange}/>
                      </label>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={handleSubmit(handleSave)}
                >
                    Вернуть средства
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default CreateClientPoint;