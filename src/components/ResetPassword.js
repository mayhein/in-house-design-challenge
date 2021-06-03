import React, { useState } from 'react'
import { Form, Label, Fieldset, TextInput, Button, GridContainer } from '@trussworks/react-uswds'

export default function ResetPassword() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <GridContainer>
      <Form large>
        <Fieldset legend="Reset password" legendStyle="large">
          <span>Please enter your new password</span>
          <Label htmlFor="newPassword">New password</Label>
          <TextInput
            id="newPassword"
            name="newPassword"
            type={showPassword ? 'text' : 'password'}
          />

          <Label htmlFor="confirmPassword">Confirm password</Label>
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
          />
          <p className="usa-form__note">
            <a
              href="/"
              className="usa-show-multipassword"
              aria-controls="newPassword confirmPassword"
              onClick={(): void =>
                setShowPassword((showPassword) => !showPassword)
              }>
              {showPassword ? 'Hide my typing' : 'Show my typing'}
            </a>
          </p>

          <Button type="submit">Reset password</Button>
        </Fieldset>
      </Form>
    </GridContainer>
  )
}
