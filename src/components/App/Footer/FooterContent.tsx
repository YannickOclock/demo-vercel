import useAppStore, { globalUpdateEmail } from '../../../store/Store';

export default function FooterContent() {
  const { email } = useAppStore();
  // uniquement un import de fonction
  const updateEmail = globalUpdateEmail;

  return (
    <>
      <h2>Section Footer</h2>
      <label htmlFor="email">Votre email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => updateEmail(e.currentTarget.value)}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorem
        modi quibusdam, molestiae qui reprehenderit. Aliquid a eos facere
        perferendis fugit incidunt blanditiis facilis aliquam, delectus,
        deserunt adipisci labore laborum.
      </p>
    </>
  );
}
