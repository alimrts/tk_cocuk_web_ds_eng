const Ground = (props) => {
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeBufferGeometry args={[5, 5]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </>
  );
};

export default Ground;
