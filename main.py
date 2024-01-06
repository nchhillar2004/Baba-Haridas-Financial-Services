import secrets
import string

def generate_password(length=12):
    alphabet = string.ascii_letters + string.digits
    password = ''.join(secrets.choice(alphabet) for _ in range(length))
    return password

# Generating a password of length 12
password = generate_password()
print("Generated Password:", password)
