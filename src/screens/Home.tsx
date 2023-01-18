import JSConfetti from "js-confetti";
function Home() {
  const jsConfetti = new JSConfetti();

  const handleClick = () => {
    jsConfetti.addConfetti({
      // emojis: ["🔥"],
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      emojiSize: 100,
      confettiRadius: 5,
      confettiNumber: 500,
    });
  };

  return <button onClick={handleClick}>CLICK</button>;
}

export default Home;
