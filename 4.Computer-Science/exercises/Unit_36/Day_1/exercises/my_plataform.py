from platform import system, release, architecture

my_plataform = system()
my_version = release()
my_architecture = architecture()

print(
  f"Minha plataforma é: {my_plataform};\n"
  f"Minha versão é: {my_version};\n"
  f"Minha arquitetura é: {my_architecture[0]}"
)
