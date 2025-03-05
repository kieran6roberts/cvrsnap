import ConfettiShower from 'react-confetti';

export default function Confetti({
  recycle = true,
  numberOfPieces = 100,
  height = window.innerHeight,
  width = window.innerWidth,
  initialVelocityX = 4
}: {
  recycle?: boolean;
  numberOfPieces?: number;
  height?: number;
  width?: number;
  initialVelocityX?: number;
}) {
  return (
    <ConfettiShower
      initialVelocityX={initialVelocityX}
      recycle={recycle}
      numberOfPieces={numberOfPieces}
      width={width}
      height={height}
    />
  );
}
