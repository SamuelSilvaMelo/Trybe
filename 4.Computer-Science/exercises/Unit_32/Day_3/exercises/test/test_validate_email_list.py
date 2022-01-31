from validate_email_list import validate_email_list


def test_only_valid_emails():
    assert validate_email_list(
      ['trybe@betrybe.com', 'admin@betrybe.com']
    ) == ['trybe@betrybe.com', 'admin@betrybe.com']


def test_only_invalid_emails():
    assert validate_email_list(
      ['1trybe@betrybe.com', 'admin@betrybe.comm']
    ) == []


def test_correct_validate():
    assert validate_email_list(
      [
        'trybe@betrybe.com',
        '1trybe@betrybe.com',
        'admin@betrybe.com',
        'admin@betrybe.comm'
      ]
    ) == ['trybe@betrybe.com', 'admin@betrybe.com']
