import React, { useState } from 'react'
import { Form, Label, Fieldset, TextInput, Button, GridContainer } from '@trussworks/react-uswds'

export default function CreateAccount() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <GridContainer>
      <Form large>
        <Fieldset legend="Create An Account" legendStyle="large">
          <span>
            or <a href="/">sign in</a>
          </span>
          <Label htmlFor="username">Username or email address</Label>
          <TextInput
            id="username"
            name="username"
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
          />
          <Label htmlFor="password-sign-up">Password</Label>
          <TextInput
            id="password-sign-up"
            name="password-sign-up"
            type={showPassword ? 'text' : 'password'}
          />
          <p className="usa-form__note">
            <a
              title="Show password"
              href="/"
              className="usa-show-password"
              aria-controls="password-sign-in"
              onClick={(): void =>
                setShowPassword((showPassword) => !showPassword)
              }>
              {showPassword ? 'Hide password' : 'Show password'}
            </a>
          </p>

          <Button className='accent-cool-dark' type="submit">Sign Up</Button>
        </Fieldset>
      </Form>
    </GridContainer>
  )
}
