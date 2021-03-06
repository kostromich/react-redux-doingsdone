import React, { FormEvent } from 'react'
import FormRow from './FormRow'
import Input, { IInputProps } from './Input'
import Label, { ILabelProps } from './Label'

export interface IFieldProps extends IInputProps {
  formRowClassName?: string
  isRequired?: boolean
  labelText?: string
  labelProps?: ILabelProps
  touchHandler?: () => void
  changeHandler?: (e: FormEvent<HTMLInputElement>) => void
  blurHandler?: (e: FormEvent<HTMLInputElement>) => void
  focusHandler?: (e: FormEvent<HTMLInputElement>) => void
}

const Field: React.FC<IFieldProps> = ({
  formRowClassName,
  isRequired = false,
  labelText,
  labelProps,
  touchHandler,
  changeHandler,
  blurHandler,
  focusHandler,
  ...inputProps
}) => {
  const { id } = inputProps

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    if (changeHandler) {
      changeHandler(e)
    }
  }

  const onBlur = (e: FormEvent<HTMLInputElement>) => {
    if (touchHandler) {
      touchHandler()
    }

    if (blurHandler) {
      blurHandler(e)
    }
  }

  const onFocus = (e: FormEvent<HTMLInputElement>) => {
    if (focusHandler) {
      focusHandler(e)
    }
  }

  return (
    <FormRow className={formRowClassName}>
      {labelText &&
        <Label
          isRequired={isRequired}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </Label>
      }
      <Input
        required={isRequired}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
    </FormRow>
  )
}

export default Field
