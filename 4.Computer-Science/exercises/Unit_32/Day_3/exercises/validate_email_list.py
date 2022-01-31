from validate_email import validate_email


def validate_email_list(email_list):
    valid_emails = []
    for email in email_list:
        try:
            validate_email(email)
            valid_emails.append(email)
        except ValueError as e:
            # How to get ValueError message:
            # https://stackoverflow.com/questions/4097461/printing-out-actual-error-message-for-valueerror
            print(e)

    return valid_emails
