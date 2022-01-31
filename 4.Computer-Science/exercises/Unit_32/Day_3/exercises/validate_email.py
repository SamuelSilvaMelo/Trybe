def validate_email(email):
    if '@' not in email or '.' not in email:
        raise ValueError('Invalid email.')

    user_name = email.split('@')[0]
    website_name = email.split('@')[1].split('.')[0]
    extension_name = email.split('.')[-1]

    if f'{user_name}@{website_name}.{extension_name}' != email:
        raise ValueError('Wrong email format.')

    if not user_name[0].isalpha():
        raise ValueError(
          'The first character of the username must be a letter.'
        )

    if not (
      user_name.isalnum() or
      '-' in user_name or
      '_' in user_name
    ):
        raise ValueError(
          'Invalid username'
        )

    if not (
      website_name.isalnum()
    ):
        raise ValueError(
          'Invalid website name'
        )

    if len(extension_name) > 3:
        raise ValueError(
          'The maximum extension size is three'
        )
