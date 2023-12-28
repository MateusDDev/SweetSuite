type LoginFormProps = {
  submitName: string,
};

function LoginForm({ submitName }: LoginFormProps) {
  return (
    <form>
      <input type="text" placeholder="Nome de Usuário" />
      <input type="text" placeholder="Senha" />
      <button>{submitName}</button>
    </form>
  );
}

export default LoginForm;
