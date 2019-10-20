import React from 'react'
import Form from 'components/form/Form'
import FormRow from 'components/form/FormRow'
import Label from 'components/form/Label'
import Input from 'components/form/Input'
import FormRowControls from 'components/form/FormRowControls'

const SignupForm: React.FC = () => {
  return (
    <Form autoComplete='off'>
      <FormRow>
        <Label
          isRequired={true}
          htmlFor='email'
        >
          E-mail
        </Label>
        <Input
          type='text'
          name='email'
          id='email'
          value=''
          placeholder='Введите e-mail'
          errorMessage='E-mail введён некорректно'
        />
      </FormRow>

      <FormRow>
        <Label
          isRequired={true}
          htmlFor='password'
        >
          Пароль
        </Label>
        <Input
          type='password'
          name='password'
          id='password'
          value=''
          placeholder='Введите пароль'
        />
      </FormRow>

      <FormRow>
        <Label
          isRequired={true}
          htmlFor='name'
        >
          Имя
        </Label>
        <Input
          type='text'
          name='name'
          id='name'
          value=''
          placeholder='Введите имя'
        />
      </FormRow>

      <FormRowControls errorMessage='Пожалуйста, исправьте ошибки в форме' />
    </Form>
  )
}

export default SignupForm
