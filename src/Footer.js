export default function Footer({ onHandleRestartGame }) {
  return (
    <div className="footer-sec">
      <button onClick={onHandleRestartGame}>Restart game</button>
    </div>
  );
}
