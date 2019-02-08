import React from 'react'
import { Button } from '@magicsoup.io/stock'
import { Input, Label } from '../../styled'

import { navigate } from '@reach/router'

export default ({ handleSubmit, handleUpdate }) => {

  return (
    <form
      method='post'
      onSubmit={() => {
        handleSubmit(event)
        navigate(`/app/profile`)
      }}
    >
      <p >
        For this demo, please log in with the username <strong>gatsby</strong> and the
        password <strong>demo</strong>.
      </p>
      <Label>
        Username
        <Input
          type='text'
          name='username'
          onChange={handleUpdate}
        />
      </Label>
      <Label>
        Password
        <Input
          type='password'
          name='password'
          onChange={handleUpdate}
        />
      </Label>
      <Button 
        as='input' 
        variant='primary' 
        type='submit' 
        value='Log In' 
        my={3} />
    </form>
  )
}