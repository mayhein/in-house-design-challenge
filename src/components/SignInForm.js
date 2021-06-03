import React, { useState } from 'react'
import { Form, Label, Fieldset, TextInput, Button, GridContainer } from '@trussworks/react-uswds'

export default function SignUpForm() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <GridContainer>
      <Form large>
        <Fieldset legend="Sign In" legendStyle="large">
          <span>
            or <a href="/signup">create an account</a>
          </span>
          <Label htmlFor="username">Username or email address</Label>
          <TextInput
            id="username"
            name="username"
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
          />
          <Label htmlFor="password-sign-in">Password</Label>
          <TextInput
            id="password-sign-in"
            name="password-sign-in"
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

          <Button className='accent-cool-dark' type="submit">Sign in</Button>
          <p>
            <a href="/reset" title="Forgot password">
              Forgot password?
            </a>
          </p>
        </Fieldset>
      </Form>
    </GridContainer>
  )
}

