export const required = value => (value ? undefined : 'Required')

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15)
export const maxLength30 = maxLength(30)
export const maxLength10 = maxLength(10)

export const phoneNumber = value => {
  var number = new RegExp(/^[0-9\b]*$/);

  if (!number.test(value)) {
    return "Please enter only numbers"
  }
}